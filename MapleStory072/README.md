# 冒险岛 CMS v072 本地便携包

本目录是独立的国服 072 版本便携包，使用大陆 CMS072 客户端，配套本地服务端、数据库和启动器。从彩虹岛的新手任务开始，可体验地图探索、打怪升级、转职及商城，并包含拍卖综合服务等自定义功能。

**仅使用本目录的 072 组件，不与 062 或 079 混用。** 部分遗留任务、脚本和玩法仍有兼容差异，具体状态以本包使用说明及维护记录为准。

## 启动与退出

1. 检查 `App/MapleStory/Client` 中是否有完整的 CMS072 客户端、WZ 和所需 DLL。
2. 双击本目录的 `MapleStoryPortable.exe`，按 Windows 提权提示允许运行，等待服务就绪后进入游戏。
3. 游戏退出后，等待启动器完成服务和数据库关停，再移动目录或拔出移动设备。

日常使用便携启动器进入游戏，以加载本包的会话兼容处理及客户端设置。启动器使用 .NET Framework 4.x，包内运行组件为 x86 Java 7 和 MySQL 5.7.44，不依赖系统安装的 Java 或数据库。

初始 SQL 提供账号 `admin`、密码 `admin`；已有存档的账号密码以实际存档为准。游戏获得焦点后可使用 Alt+Enter 切换全屏和窗口，具体显示效果受旧客户端及系统图形兼容性影响。

## 游戏功能提示

- 商城通过客户端商城入口访问；拍卖入口打开综合服务 NPC，提供传送、仓库、技能等菜单，费用及条件以实际对话为准。
- 删除角色使用选角界面的删除按钮和确认框，无需输入 062 的固定生日。家族族长需先处理家族身份，重要角色删除前应备份。
- 任务、旅游、美容、百宝箱等功能的当前规则及未恢复内容见[详细使用说明](Other/使用说明.txt)，不要将自定义实现当作官方规则。

## 目录与存档

| 路径 | 用途 |
| --- | --- |
| `MapleStoryPortable.exe` | 日常启动入口 |
| `App/MapleStory/Client` | CMS072 客户端、二进制 WZ 和 DLL |
| `App/MapleStory/Server/dist` | 主程序 `mapleserver072.jar` 及依赖 |
| `App/MapleStory/Server/settings.ini` | 服务端及数据库连接配置 |
| `App/MapleStory/Server/scripts`、`wz` | 脚本及服务端 XML 资源，均位于 Server 下 |
| `App/MapleStory/Runtime` | 本包 Java 和 MySQL |
| `App/DefaultData/mysql` | 现有存档缺失时使用的初始模板 |
| `Data/mysql` | 当前游戏存档 |
| `Data/settings`、`Data/logs` | 客户端与启动器设置、运行日志 |
| `Other/Source` | 源码及构建工具 |
| `Other/Tools`、`Other/Backups` | 核验工具及历史备份 |

客户端设置（包括保存账号）由启动器保存到 `Data/settings/client-settings.xml`。不要删除 `Data` 或 `Data/mysql` 来排错，以免重建存档或重置设置。备份先正常停服并关闭数据库，再保存 `Data` 的独立副本。

## 维护与资料

2026-10-12 已精简活动运行库：`App/MapleStory/Runtime` 从约 1283MiB 降至 497MiB。Java 源码、示例、开发头文件以及原生静态库和调试符号移至本版本 `Other/Backups/RuntimeCleanup/20261012/original-files`，同时保留逐文件哈希校验的 ZIP 备份。Java 编译与打包工具、完整 JRE、数据库程序、DLL、插件、字符集和许可证保留。备份仍占用工作区空间，精简的是运行目录及其分发体积。

清单和验证记录见 `Other/Backups/RuntimeCleanup/20261012`。恢复时先正常停服，再按 `inventory-before.csv` 的 `RelativePath` 将 `original-files` 内容放回本版本的 Runtime；不得从 079 复制运行库。

维护前阅读[本版本规则](AGENTS.md)和[仓库规则](../AGENTS.md)。使用本包的工具构建和部署，核对源码与实际运行的 `mapleserver072.jar` 一致；保持旧脚本的原编码与换行。

服务端 XML 与客户端二进制 WZ 分别维护。跨版本资料仅可用于对照，移植必须核对 CMS072 的资源、协议和脚本 API。数据库测试使用隔离存档，不覆盖现有账号和进度。

- [详细使用说明](Other/使用说明.txt)
- [游戏介绍与操作帮助](Other/help.html)
- [返回仓库介绍](../README.md)

反馈问题时注明 CMS072、复现步骤和 `Data/logs` 中的相关日志。
