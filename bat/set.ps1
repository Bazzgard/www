# パス区切りを '/' に統一して list.txt を更新する。
$parent = Split-Path -Path (Get-Location).Path -Parent
$directoryLength = $parent.Length + 1
(Get-Content list.txt) | ForEach-Object { $_.Substring($directoryLength) } | Out-File -FilePath new_list.txt
Get-Content new_list.txt | ForEach-Object { $_.Replace('\', '/') } | Out-File -FilePath list.txt
