$directoryLength = (Get-Location).Path.Length + 1
(Get-Content list.txt) | ForEach-Object { $_.Substring($directoryLength) } | Out-File -FilePath new_list.txt
Get-Content new_list.txt | ForEach-Object { $_.Replace('\', '/') } | Out-File -FilePath list.txt
