dir /b /s *.html > list.txt
powershell.exe -ExecutionPolicy Bypass -File "set.ps1"
del new_list.txt