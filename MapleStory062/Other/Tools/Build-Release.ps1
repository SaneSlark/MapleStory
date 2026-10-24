param([switch]$Headless)
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
if ($Headless) {
    $source = Join-Path $root 'Other\Source'
    $templates = Join-Path $source 'build\installer'
    Get-ChildItem -LiteralPath $templates -File | Copy-Item -Destination $source -Force
    $config = Join-Path $source 'PortableApps.comInstallerConfig.nsh'
    $configText = [IO.File]::ReadAllText($config)
    $configText = [regex]::Replace($configText, '(?m)^!define VERSION "[^"]+"', ('!define VERSION "' + $version + '"'))
    $configText = [regex]::Replace($configText, '(?m)^!define FILENAME "[^"]+"', ('!define FILENAME "MapleStoryPortable_' + $display + '_SimpChinese"'))
    [IO.File]::WriteAllText($config, $configText, [Text.Encoding]::Unicode)
    $compiler = Join-Path $PSScriptRoot 'PortableApps.comInstaller\App\nsis\makensis.exe'
    $script = Join-Path $source 'PortableApps.comInstaller.nsi'
    $log = Join-Path $release 'compiler.log'
    $process = Start-Process -FilePath $compiler -ArgumentList ('/V2 /O"' + $log + '" "' + $script + '"') -WorkingDirectory $source -WindowStyle Hidden -PassThru
} else {
    $process = Start-Process -FilePath $installer -ArgumentList ('"' + $root + '"') -WorkingDirectory $root -WindowStyle Hidden -PassThru
    $log = Join-Path $PSScriptRoot 'PortableApps.comInstaller\Data\PortableApps.comInstallerLog.txt'
}
$process.WaitForExit()
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