@echo off
title anzar.dev - Alien & CR7 SIUUUUU! Portfolio Server
cd /d "%~dp0"
echo ============================================================
echo   🛸 Starting anzar.dev Portfolio Server on port 3000...
echo   👉 Opening http://localhost:3000/ in your browser...
echo ============================================================
start "" "http://localhost:3000/"
node scripts/serve.mjs
pause
