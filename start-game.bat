@echo off
title Skt. Agnes
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-game.ps1"
echo.
echo Serveren er stoppet.
pause
