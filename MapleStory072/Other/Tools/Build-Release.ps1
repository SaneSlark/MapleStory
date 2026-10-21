$ErrorActionPreference = 'Stop'
$root = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..'))
$info = [IO.File]::ReadAllText((Join-Path $root 'App\AppInfo\appinfo.ini'))
$version = [regex]::Match($info, '(?m)^PackageVersion=([0-9.]+)\s*$').Groups[1].Value
$display = [regex]::Match($info, '(?m)^DisplayVersion=([^\r\n]+)').Groups[1].Value.Trim()
if (!$version) { throw 'Missing PackageVersion' }
$release = Join-Path $root ('Other\Releases\' + $version)
New-Item -ItemType Directory -Force -Path $release | Out-Null
$installer = Join-Path $PSScriptRoot 'PortableApps.comInstaller\PortableApps.comInstaller.exe'
$output = Join-Path (Split-Path $root -Parent) ('MapleStoryPortable_' + $display + '_SimpChinese.paf.exe')
if (Test-Path -LiteralPath $output) { throw "Existing output must be archived first: $output" }
$target = Join-Path $release ([IO.Path]::GetFileName($output))
if (Test-Path -LiteralPath $target) { throw "Release already exists: $target" }
$buildDirectory = [IO.Path]::GetFullPath((Join-Path $root 'Other\Source\build'))
$work = Join-Path $buildDirectory ('release-' + [guid]::NewGuid().ToString('N'))
$packageRoot = Join-Path $work 'MapleStory072'
$excludedFiles = @('help.html', '使用说明.txt')
try {
    # Build from a filtered copy; never remove documentation from the working package.
    New-Item -ItemType Directory -Path (Join-Path $packageRoot 'App') -Force | Out-Null
    $appDirectory = Join-Path $root 'App'
    foreach ($entry in Get-ChildItem -LiteralPath $appDirectory -Recurse -Force) {
        if ($entry.Attributes -band [IO.FileAttributes]::ReparsePoint) { throw "Unsupported package link: $($entry.FullName)" }
        $relative = $entry.FullName.Substring($appDirectory.Length + 1)
        $destination = Join-Path (Join-Path $packageRoot 'App') $relative
        if ($entry.PSIsContainer) {
            New-Item -ItemType Directory -Path $destination -Force | Out-Null
        } elseif ($entry.Name -notin $excludedFiles) {
            Copy-Item -LiteralPath $entry.FullName -Destination $destination
        }
    }
    Get-ChildItem -LiteralPath $root -Filter '*.exe' -File | ForEach-Object {
        Copy-Item -LiteralPath $_.FullName -Destination $packageRoot
    }
    $output = Join-Path $work ([IO.Path]::GetFileName($output))
    $process = Start-Process -FilePath $installer -ArgumentList ('"' + $packageRoot + '"') -WorkingDirectory $packageRoot -WindowStyle Hidden -PassThru
    $process.WaitForExit()
    $log = Join-Path $PSScriptRoot 'PortableApps.comInstaller\Data\PortableApps.comInstallerLog.txt'
    if (Test-Path -LiteralPath $log) {
        $logBytes = [IO.File]::ReadAllBytes($log)
        # Preserve compiler bytes and save an IDE-readable UTF-8 copy.
        [IO.File]::WriteAllBytes((Join-Path $release 'build.raw.log'), $logBytes)
        if ($logBytes.Length -ge 2 -and $logBytes[0] -eq 255 -and $logBytes[1] -eq 254) {
            $logText = [Text.Encoding]::Unicode.GetString($logBytes, 2, $logBytes.Length - 2)
        } elseif ($logBytes.Length -ge 2 -and $logBytes[0] -eq 254 -and $logBytes[1] -eq 255) {
            $logText = [Text.Encoding]::BigEndianUnicode.GetString($logBytes, 2, $logBytes.Length - 2)
        } else {
            try {
                $logText = [Text.UTF8Encoding]::new($false, $true).GetString($logBytes).TrimStart([char]0xFEFF)
            } catch [Text.DecoderFallbackException] {
                $logText = [Text.Encoding]::Default.GetString($logBytes)
            }
        }
        [IO.File]::WriteAllText((Join-Path $release 'build.log'), $logText, [Text.UTF8Encoding]::new($true))
    }
    if ($process.ExitCode -ne 0 -or !(Test-Path -LiteralPath $output)) { throw 'Installer build failed; inspect build.log' }
    Move-Item -LiteralPath $output -Destination $target
    $hash = Get-FileHash -LiteralPath $target -Algorithm SHA256
    [IO.File]::WriteAllText((Join-Path $release 'SHA256SUMS.txt'), ($hash.Hash + '  ' + [IO.Path]::GetFileName($target) + "`r`n"), [Text.UTF8Encoding]::new($false))
    Write-Output $target
} finally {
    $resolvedWork = [IO.Path]::GetFullPath($work)
    if ($resolvedWork.StartsWith($buildDirectory + '\', [StringComparison]::OrdinalIgnoreCase) -and
        [IO.Path]::GetFileName($resolvedWork) -match '^release-[0-9a-f]{32}$' -and
        (Test-Path -LiteralPath $resolvedWork)) {
        Remove-Item -LiteralPath $resolvedWork -Recurse -Force
    }
}
