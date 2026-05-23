$files = Get-ChildItem -Path 'c:\Users\Windows\OneDrive\Desktop\alcon\src' -Recurse -Include *.ts,*.tsx
$changed = @()
foreach ($f in $files) {
  $orig = Get-Content -LiteralPath $f.FullName -Raw -Encoding UTF8
  $txt = $orig
  $txt = $txt.Replace('Alcon Advertising', 'Ronnie Balonon Jr.')
  $txt = $txt.Replace('Alcon Team', 'Ronnie')
  $txt = [Regex]::Replace($txt, 'Alcon(?!Logo)\b', 'Ronnie Balonon Jr.')
  if ($txt -ne $orig) {
    Set-Content -LiteralPath $f.FullName -Value $txt -NoNewline -Encoding UTF8
    $changed += $f.FullName.Replace('c:\Users\Windows\OneDrive\Desktop\alcon\','')
  }
}
"changed: $($changed.Count)"
$changed | ForEach-Object { " - $_" }
