Get-ChildItem -Recurse -Include *.js,*.map -Exclude node_modules,lib -File | Where-Object { $_.FullName -notmatch
 '\\node_modules\\' -and $_.FullName -notmatch '\\lib\\' } | Remove-Item -Force