# 冒险岛 GMS v062 本地便携包

本目录是独立的 062 版本便携包，使用 GMS v062 客户端，包含本地服务端、Java、MySQL、启动器及维护工具。游戏账号、角色和道具进度保存在本目录中，适合本地体验和对应版本的维护。

**仅使用本目录的 062 组件，不与 072 或 079 混用。** 当前包包含中文化及自定义修改，不代表完整的官方原版还原。

## 启动与退出

1. 检查 `App/MapleStory/Client` 中是否有配套的 GMS062 客户端、完整 WZ 和所需 DLL。
2. 双击本目录的 `MapleStoryPortable.exe`，等待数据库和世界、登录、频道服务就绪后进入游戏。
3. 游戏退出后，等待启动器正常关停服务和数据库，再移动目录或拔出移动设备。

启动器需要 Windows 和 .NET Framework 4.x，使用包内 Java 与 MySQL。旧客户端的图形和输入法兼容条件请参阅[使用说明](Other/使用说明.txt)。游戏获得焦点后可使用 Alt+Enter 请求切换全屏和窗口模式。

初始账号为 `admin`，密码为 `admin`；已有存档以实际账号信息为准。删除角色时使用的固定生日为 `20090513`，此规则只适用于本包 062。

## 目录与存档

| 路径 | 用途 |
| --- | --- |
| `MapleStoryPortable.exe` | 日常启动入口 |
| `App/MapleStory/Client` | GMS062 客户端、二进制 WZ 和 DLL |
| `App/MapleStory/Server` | 服务端、脚本、XML 资源及配置 |
| `App/MapleStory/Runtime` | 本包 Java 和 MySQL |
| `App/DefaultData/mysql` | 现有存档缺失时使用的初始模板 |
| `Data/mysql` | 当前账号、角色和游戏进度 |
| `Data/settings`、`Data/logs` | 启动器设置与运行日志 |
| `Other/Source` | 源码和构建工具 |
| `Other/Tools`、`Other/Backups` | 维护工具和历史备份 |

不要删除或覆盖 `Data/mysql` 来排错：存档缺失会触发初始模板恢复，原有进度不会因此恢复。备份前先正常停服并关闭数据库，再保存 `Data` 的独立副本；不要将运行中的数据库目录直接复制作为可靠备份。

## 维护与资料

维护前阅读[本版本规则](AGENTS.md)和[仓库规则](../AGENTS.md)。构建、部署和验证均限定在本目录，修改源码后核对实际加载的 JAR；本包运行 JAR 可能位于服务端 `dist` 和 Java 扩展目录。

客户端二进制 WZ 不能由服务端 XML 替代。旧脚本修改须保留原编码及换行，不能直接覆盖为其他版本的同名脚本。测试使用隔离存档，记录已验证和未验证的功能。

- [详细使用说明](Other/使用说明.txt)
- [游戏帮助](Other/help.html)
- [返回仓库介绍](../README.md)

反馈问题时注明 GMS062、复现步骤和 `Data/logs` 中的相关日志。
