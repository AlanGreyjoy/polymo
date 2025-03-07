# Get all JavaScript files
$jsFiles = Get-ChildItem -Path src -Recurse -Filter "*.js"

foreach ($file in $jsFiles) {
    $newName = $file.FullName -replace '\.js$', '.ts'
    Write-Host "Converting $($file.FullName) to $newName"
    
    # Rename the file
    Rename-Item -Path $file.FullName -NewName $newName
}

Write-Host "Conversion complete!" 