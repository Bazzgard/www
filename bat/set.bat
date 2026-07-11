@echo off

REM ---------------------------------------------------------------------------
REM 相対パス形式のHTMLファイル一覧を作成する。
REM ---------------------------------------------------------------------------

dir /b /s ..\*.html > list.txt
powershell.exe -ExecutionPolicy Bypass -File "set.ps1"
del new_list.txt