param(
    [Parameter(Mandatory = $true)]
    [string]$InstancePath,

    [string]$OutputPath = ".\\report"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $InstancePath -PathType Container)) {
    throw "Instance path not found: $InstancePath"
}

$resolvedInstancePath = (Resolve-Path -LiteralPath $InstancePath).Path
$resolvedOutputPath = [System.IO.Path]::GetFullPath($OutputPath)

New-Item -ItemType Directory -Path $resolvedOutputPath -Force | Out-Null

Add-Type -AssemblyName System.IO.Compression.FileSystem

$targets = @(Get-ChildItem -LiteralPath $resolvedInstancePath -Recurse -File |
    Where-Object {
        $ext = $_.Extension.ToLowerInvariant()
        $ext -eq ".jar" -or $ext -eq ".zip"
    })
$results = @()

foreach ($file in $targets) {
    $status = "OK"
    $reason = ""

    if ($file.Length -eq 0) {
        $status = "BROKEN"
        $reason = "File size is 0 bytes"
    }
    else {
        try {
            $zip = [System.IO.Compression.ZipFile]::OpenRead($file.FullName)
            $zip.Dispose()
        }
        catch {
            $status = "BROKEN"
            $reason = $_.Exception.Message
        }
    }

    $results += [PSCustomObject]@{
        Status     = $status
        SizeBytes  = $file.Length
        LastWrite  = $file.LastWriteTime
        FullPath   = $file.FullName
        Reason     = $reason
    }
}

$csvPath = Join-Path $resolvedOutputPath "scan-results.csv"
$txtPath = Join-Path $resolvedOutputPath "scan-summary.txt"

$results |
    Sort-Object Status, SizeBytes, FullPath |
    Export-Csv -LiteralPath $csvPath -NoTypeInformation -Encoding UTF8

$broken = @($results | Where-Object { $_.Status -eq "BROKEN" })

$summary = @()
$summary += "Instance: $resolvedInstancePath"
$summary += "Scan date: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")"
$summary += "Checked files: $($results.Count)"
$summary += "Broken files: $($broken.Count)"
$summary += ""

if ($broken.Count -gt 0) {
    $summary += "Broken files list:"
    foreach ($item in $broken) {
        $summary += "- $($item.FullPath)"
        $summary += "  Reason: $($item.Reason)"
    }
}
else {
    $summary += "No broken .jar/.zip files found by ZIP integrity check."
}

$summary | Set-Content -LiteralPath $txtPath -Encoding UTF8

Write-Host ""
Write-Host "Scan complete."
Write-Host "Summary: $txtPath"
Write-Host "CSV: $csvPath"
