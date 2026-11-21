# Upload the two user-supplied sound effects without touching Cursor's local game.
# Usage from the V3 design clone: powershell -ExecutionPolicy Bypass -File .\scripts\upload-v3-audio.ps1
$ErrorActionPreference = 'Stop'
$expectedBranch = 'design/v3-cinematic-rooms-stairs-monster'
$root = (git rev-parse --show-toplevel 2>$null)
if ($LASTEXITCODE -ne 0 -or -not $root) { throw 'Kør scriptet inde i SktAgnes V3-designklonen.' }
$actualBranch = (git branch --show-current).Trim()
if ($actualBranch -ne $expectedBranch) { throw "Forkert branch ($actualBranch). Forventet: $expectedBranch" }

$destination = Join-Path $root 'public\audio'
New-Item -ItemType Directory -Path $destination -Force | Out-Null
$filenames = @('kilde baby grin.mp3', 'rytme griselyd.mp3')
$downloads = Join-Path $env:USERPROFILE 'Downloads'
$archive = Join-Path $downloads 'SktAgnes_V3_lydpakke.zip'

if (Test-Path -LiteralPath $archive) {
    # Archive is the exact sound pack supplied in the ChatGPT conversation.
    Expand-Archive -LiteralPath $archive -DestinationPath $root -Force
} else {
    foreach ($filename in $filenames) {
        $sources = @(
            (Join-Path $downloads $filename),
            (Join-Path (Join-Path $env:USERPROFILE 'Desktop') $filename),
            (Join-Path (Join-Path $env:USERPROFILE 'Documents') $filename)
        )
        $source = $sources | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
        if (-not $source) {
            throw "Mangler $filename. Gem de to originale lydfiler eller lydpakken i Downloads først."
        }
        Copy-Item -LiteralPath $source -Destination (Join-Path $destination $filename) -Force
    }
}

foreach ($filename in $filenames) {
    $path = Join-Path $destination $filename
    if (-not (Test-Path -LiteralPath $path) -or (Get-Item -LiteralPath $path).Length -lt 1024) {
        throw "Ugyldig eller manglende lydfil: $filename"
    }
}
git add -- 'public/audio/kilde baby grin.mp3' 'public/audio/rytme griselyd.mp3'
if ($LASTEXITCODE -ne 0) { throw 'Kunne ikke stage lydfilerne.' }
$staged = @(git diff --cached --name-only)
if (@($staged | Where-Object { $_ -notin @('public/audio/kilde baby grin.mp3', 'public/audio/rytme griselyd.mp3') }).Count -gt 0) {
    throw 'Der er allerede andre staged filer; afbryder før commit.'
}
if ($staged.Count -eq 0) {
    Write-Host 'Begge lydfiler er allerede versioneret uden nye ændringer.'
    exit 0
}
git commit -m 'assets(audio): add supplied baby laughter and pig rhythm recordings'
if ($LASTEXITCODE -ne 0) { throw 'Git commit fejlede.' }
git push origin $expectedBranch
if ($LASTEXITCODE -ne 0) { throw 'Push fejlede. Kontroller GitHub login og adgang.' }
Write-Host 'Færdig: to MP3-filer uploadet på designgrenen, ikke main.'
