# Serves the built game at http://localhost:5173/ with no Node and no admin rights.
# Written for Windows PowerShell 5.1 and PowerShell 7.
# ASCII only so Windows PowerShell 5.1 reads the file without a BOM.
# Stop the server with Ctrl+C.
#Requires -Version 5.1
$ErrorActionPreference = 'Stop'

# $PSScriptRoot is set when the script is launched with -File (as start-game.bat does).
if (-not $PSScriptRoot) {
  $PSScriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
}
$dist = Join-Path $PSScriptRoot 'dist'
$index = Join-Path $dist 'index.html'
if (-not (Test-Path -LiteralPath $index)) {
  Write-Host 'dist/index.html was not found next to this script.'
  Write-Host 'The production build must be present in the dist folder.'
  exit 1
}

$port = 5173
$prefix = "http://localhost:$port/"

# Explicit map. .js must be application/javascript or the browser may refuse the module.
$mime = @{
  '.html'  = 'text/html; charset=utf-8'
  '.js'    = 'application/javascript'
  '.mjs'   = 'application/javascript'
  '.css'   = 'text/css; charset=utf-8'
  '.json'  = 'application/json'
  '.map'   = 'application/json'
  '.png'   = 'image/png'
  '.jpg'   = 'image/jpeg'
  '.jpeg'  = 'image/jpeg'
  '.gif'   = 'image/gif'
  '.svg'   = 'image/svg+xml'
  '.ico'   = 'image/x-icon'
  '.webp'  = 'image/webp'
  '.wasm'  = 'application/wasm'
  '.ogg'   = 'audio/ogg'
  '.mp3'   = 'audio/mpeg'
  '.wav'   = 'audio/wav'
  '.txt'   = 'text/plain; charset=utf-8'
  '.woff'  = 'font/woff'
  '.woff2' = 'font/woff2'
  '.glb'   = 'model/gltf-binary'
  '.gltf'  = 'model/gltf+json'
}

function Send-FileResponse {
  param(
    [System.Net.HttpListenerResponse]$Response,
    [byte[]]$Body,
    [string]$ContentType,
    [int]$StatusCode,
    [bool]$WriteBody,
    [int]$Offset = 0,
    [int]$Count = -1,
    [string]$Cache = 'no-cache',
    [string]$ContentRange = ''
  )
  # Content-Length is set for every response, including HEAD, 206 and errors.
  if ($null -eq $Body) {
    $Body = New-Object byte[] 0
  }
  if ($Count -lt 0) {
    $Count = $Body.Length - $Offset
  }
  if ($Count -lt 0) {
    $Count = 0
  }
  $Response.StatusCode = $StatusCode
  $Response.ContentType = $ContentType
  $Response.ContentLength64 = $Count
  try {
    $Response.Headers.Add('Cache-Control', $Cache)
  } catch {
    # Some hosts reject an extra header. The body and length still go out.
  }
  try {
    $Response.Headers.Add('Accept-Ranges', 'bytes')
  } catch {}
  if (-not [string]::IsNullOrEmpty($ContentRange)) {
    try {
      $Response.Headers.Add('Content-Range', $ContentRange)
    } catch {}
  }
  if ($WriteBody -and ($Count -gt 0)) {
    $Response.OutputStream.Write($Body, $Offset, $Count)
  }
  $Response.Close()
}

# One range only. bytes=start-end, bytes=start- and bytes=-suffix.
function Get-ByteRange {
  param([string]$Header, [long]$Total)
  $spec = $Header.Substring(6)
  $comma = $spec.IndexOf(',')
  if ($comma -ge 0) {
    $spec = $spec.Substring(0, $comma)
  }
  $dash = $spec.IndexOf('-')
  if ($dash -lt 0) {
    return @{ Valid = $false }
  }
  $left = $spec.Substring(0, $dash).Trim()
  $right = $spec.Substring($dash + 1).Trim()
  $start = [long]0
  $end = $Total - 1
  if ($left.Length -eq 0) {
    if ($right.Length -eq 0) {
      return @{ Valid = $false }
    }
    $tail = [long]$right
    if ($tail -le 0) {
      return @{ Valid = $false }
    }
    if ($tail -gt $Total) {
      $tail = $Total
    }
    $start = $Total - $tail
    $end = $Total - 1
  } else {
    $start = [long]$left
    if ($right.Length -gt 0) {
      $end = [long]$right
    }
  }
  if ($start -lt 0 -or $start -ge $Total -or $end -lt $start) {
    return @{ Valid = $false }
  }
  if ($end -ge $Total) {
    $end = $Total - 1
  }
  return @{ Valid = $true; Start = $start; End = $end }
}

function Test-InsideDist {
  param([string]$DistRoot, [string]$Candidate)
  $rootFull = [System.IO.Path]::GetFullPath($DistRoot)
  # String, not [char]: .NET Framework (Windows PowerShell 5.1) has no EndsWith(char).
  $sep = [string][System.IO.Path]::DirectorySeparatorChar
  if (-not $rootFull.EndsWith($sep)) {
    $rootFull = $rootFull + $sep
  }
  $full = [System.IO.Path]::GetFullPath($Candidate)
  # Require the trailing separator so "dist-evil" is not treated as "dist".
  if ($full.StartsWith($rootFull, [System.StringComparison]::OrdinalIgnoreCase)) {
    return $true
  }
  return $false
}

function New-GameListener {
  param([string[]]$ExtraPrefixes)
  $created = New-Object System.Net.HttpListener
  # localhost is the non-admin prefix. 127.0.0.1 is added so both names work.
  $created.Prefixes.Add($prefix)
  foreach ($extra in $ExtraPrefixes) {
    if ($extra -and ($extra -ne $prefix)) {
      $created.Prefixes.Add($extra)
    }
  }
  $created.Start()
  return $created
}

$listener = $null
try {
  $listener = New-GameListener -ExtraPrefixes @('http://127.0.0.1:5173/')
} catch {
  try { if ($null -ne $listener) { $listener.Close() } } catch {}
  $listener = $null
  try {
    $listener = New-GameListener -ExtraPrefixes @()
  } catch {
    Write-Host "Could not listen on $prefix"
    Write-Host "Port $port is already in use, or another program reserved that address."
    Write-Host 'Close the other Skt. Agnes window, or whatever is using the port, then try again.'
    Write-Host ("Details: " + $_.Exception.Message)
    try { if ($null -ne $listener) { $listener.Close() } } catch {}
    exit 1
  }
}

Write-Host 'Skt. Agnes'
Write-Host "Serving $dist"
Write-Host "Open $prefix"
Write-Host 'Stop with Ctrl+C.'

if ($env:SKT_NO_BROWSER -eq '1') {
  Write-Host 'Browser launch skipped.'
} else {
  try {
    Start-Process -FilePath $prefix | Out-Null
  } catch {
    Write-Host 'Could not open the browser automatically.'
    Write-Host "Open $prefix yourself."
  }
}

try {
  while ($listener.IsListening) {
    # GetContext() blocks forever and swallows Ctrl+C on Windows PowerShell 5.1.
    # Sleep between polls so Ctrl+C is delivered, then stop the listener in finally.
    $async = $listener.GetContextAsync()
    while (-not $async.IsCompleted) {
      Start-Sleep -Milliseconds 50
    }
    if (-not $listener.IsListening) { break }

    $context = $null
    try {
      $context = $async.GetAwaiter().GetResult()
    } catch {
      break
    }
    if ($null -eq $context) { continue }

    try {
      $request = $context.Request
      $response = $context.Response
      # RawUrl is the path the browser sent, before the listener collapses ".." segments.
      $rawUrl = $request.RawUrl
      if ([string]::IsNullOrEmpty($rawUrl)) { $rawUrl = '/' }
      $qmark = $rawUrl.IndexOf('?')
      if ($qmark -ge 0) { $rawUrl = $rawUrl.Substring(0, $qmark) }
      $raw = [System.Uri]::UnescapeDataString($rawUrl)

      # Reject traversal before touching the disk. UnescapeDataString turns %2e%2e into "..".
      if ($raw.Contains('..') -or $raw.Contains(':') -or $raw.Contains('\')) {
        $bad = [System.Text.Encoding]::UTF8.GetBytes('Bad path')
        Send-FileResponse -Response $response -Body $bad -ContentType 'text/plain; charset=utf-8' -StatusCode 400 -WriteBody $true
        continue
      }
      if (($raw -eq '/') -or ($raw -eq '')) { $raw = '/index.html' }

      $relative = $raw.TrimStart('/')
      $sep = [string][System.IO.Path]::DirectorySeparatorChar
      $relative = $relative.Replace('/', $sep)
      if ([System.IO.Path]::IsPathRooted($relative)) {
        $bad = [System.Text.Encoding]::UTF8.GetBytes('Bad path')
        Send-FileResponse -Response $response -Body $bad -ContentType 'text/plain; charset=utf-8' -StatusCode 400 -WriteBody $true
        continue
      }

      $full = Join-Path $dist $relative
      $full = [System.IO.Path]::GetFullPath($full)
      if (-not (Test-InsideDist -DistRoot $dist -Candidate $full)) {
        $bad = [System.Text.Encoding]::UTF8.GetBytes('Bad path')
        Send-FileResponse -Response $response -Body $bad -ContentType 'text/plain; charset=utf-8' -StatusCode 400 -WriteBody $true
        continue
      }

      if (-not (Test-Path -LiteralPath $full -PathType Leaf)) {
        $extTry = [System.IO.Path]::GetExtension($full)
        if ([string]::IsNullOrEmpty($extTry)) {
          $full = Join-Path $dist 'index.html'
          $full = [System.IO.Path]::GetFullPath($full)
        }
      }
      if (-not (Test-Path -LiteralPath $full -PathType Leaf)) {
        $missing = [System.Text.Encoding]::UTF8.GetBytes('Not found')
        Send-FileResponse -Response $response -Body $missing -ContentType 'text/plain; charset=utf-8' -StatusCode 404 -WriteBody $true
        continue
      }

      $ext = [System.IO.Path]::GetExtension($full).ToLowerInvariant()
      $type = $mime[$ext]
      if (-not $type) { $type = 'application/octet-stream' }
      $bytes = [System.IO.File]::ReadAllBytes($full)
      $total = [long]$bytes.LongLength
      $writeBody = $true
      if ($request.HttpMethod -eq 'HEAD') { $writeBody = $false }
      $cache = 'public, max-age=86400'
      if ($ext -eq '.html') { $cache = 'no-cache' }
      $rangeHeader = ''
      try {
        $rangeHeader = [string]$request.Headers['Range']
      } catch {
        $rangeHeader = ''
      }
      $status = 200
      $offset = 0
      $count = [int]$total
      $contentRange = ''
      if (-not [string]::IsNullOrEmpty($rangeHeader) -and $rangeHeader.StartsWith('bytes=')) {
        $parsed = $null
        try {
          $parsed = Get-ByteRange -Header $rangeHeader -Total $total
        } catch {
          $parsed = @{ Valid = $false }
        }
        if ($null -eq $parsed -or -not $parsed.Valid) {
          $empty = New-Object byte[] 0
          $star = 'bytes */' + $total
          Send-FileResponse -Response $response -Body $empty -ContentType $type -StatusCode 416 -WriteBody $false -Offset 0 -Count 0 -Cache $cache -ContentRange $star
          continue
        }
        $status = 206
        $offset = [int]$parsed.Start
        $count = [int]($parsed.End - $parsed.Start + 1)
        $contentRange = 'bytes ' + $parsed.Start + '-' + $parsed.End + '/' + $total
      }
      Send-FileResponse -Response $response -Body $bytes -ContentType $type -StatusCode $status -WriteBody $writeBody -Offset $offset -Count $count -Cache $cache -ContentRange $contentRange
    } catch {
      try { $context.Response.Abort() } catch {}
    }
  }
} catch [System.Management.Automation.PipelineStoppedException] {
  Write-Host ''
  Write-Host 'Server stopped.'
} catch {
  Write-Host $_.Exception.Message
} finally {
  if ($null -ne $listener) {
    try {
      if ($listener.IsListening) { $listener.Stop() }
    } catch {}
    try { $listener.Close() } catch {}
  }
  Write-Host 'Farvel.'
}
