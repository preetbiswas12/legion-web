$ErrorActionPreference = "SilentlyContinue"
$destDir = "C:\Users\preet\Downloads\project-yogurt\cloudnary"
if (!(Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir | Out-Null }

$urls = @()
Get-ChildItem -Path "C:\Users\preet\Downloads\project-yogurt\src" -Recurse -Include *.ts,*.tsx,*.js,*.jsx,*.css | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $matches = [regex]::Matches($content, "https://res\.cloudinary\.com/[^\s\"'`),]+")
    foreach ($m in $matches) {
        $urls += $m.Value
    }
}

$uniqueUrls = $urls | Sort-Object -Unique
Write-Host "Found $($uniqueUrls.Count) unique Cloudinary URLs"

$i = 0
foreach ($url in $uniqueUrls) {
    $i++
    $ext = [System.IO.Path]::GetExtension($url).Split("?")[0]
    if ([string]::IsNullOrEmpty($ext)) { $ext = ".png" }
    $filename = "image_$i$ext"
    $filepath = Join-Path $destDir $filename
    Write-Host "[$i/$($uniqueUrls.Count)] Downloading $filename..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $filepath -TimeoutSec 30
    } catch {
        Write-Host "  FAILED: $_"
    }
}

# Save URL mapping
$urlMap = @{}
$i = 0
foreach ($url in $uniqueUrls) {
    $i++
    $ext = [System.IO.Path]::GetExtension($url).Split("?")[0]
    if ([string]::IsNullOrEmpty($ext)) { $ext = ".png" }
    $filename = "image_$i$ext"
    $urlMap[$filename] = $url
}
$urlMap | ConvertTo-Json | Set-Content (Join-Path $destDir "url_map.json")

Write-Host "Done! Downloaded $($uniqueUrls.Count) images to cloudnary/"
