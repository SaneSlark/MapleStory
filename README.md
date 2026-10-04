# 冒险岛 v079 本地便携服务端

双击 `MapleStoryPortable.exe`：自动启动数据库和游戏服务端，等待加载完成后启动客户端。未放入客户端时会提示放置位置。启动、保存及停服均由 C# 完成，不依赖 PowerShell 或 CMD。目标系统为 Windows 7 SP1 / Windows 10 64 位，需要 .NET Framework 4.x（建议 4.8）；尚未在两种系统上实测。运行不需要安装 Java、数据库或配置 JAVA_HOME，不注册 Windows 服务。当前运行组件为 Windows x64。

## 客户端放置

将完整的**兼容该私服协议的国服 CMS v079.1 客户端**解压到 `App\MapleStory`，确保存在 `App\MapleStory\MapleStory.exe`；保留全部 WZ、DLL 和客户端所需组件，不要只放一个 EXE。服务端 XML WZ 不能代替客户端二进制 WZ。此包没有附带客户端。

登录目标固定为 `127.0.0.1:9595`。上游说明的客户端需要对应的私服兼容组件；未经适配的官方原版客户端可能连接失败。下载来源和客户端版本需自行核实。同一目录只允许一个启动器运行，已有数据不会重复初始化。配置启用了自动注册，可用新的账号和密码登录。

## 退出与保存

只需运行 MapleStoryPortable.exe。正常退出游戏后，启动器会通知服务端保存角色数据，等待停服，导出数据库备份并关闭数据库，然后自动退出。关闭启动器窗口也会请求游戏退出并等待上述流程完成。数据保存在 Data\Database，备份保存在 Data\Backups；保留完整 Data 即可保留进度与配置。

## 文件结构与运行逻辑

更新日期：2026-10-04

### 使用入口与兼容目标

- 日常仅运行根目录 MapleStoryPortable.exe。
- 目标系统：Windows 7 SP1 / Windows 10，64 位。
- 启动器采用 C#、.NET Framework 4.0 API；建议安装 .NET Framework 4.8。
- 运行不依赖 PowerShell、CMD、系统 Java 或已安装的数据库服务。
- 内置 Java：Azul Zulu OpenJDK 7u352 x64。
- 内置数据库：MariaDB 10.4.12 x64，官方列出的最后 Win7 兼容版本。
- 已进行当前主机功能验证和静态兼容筛查；尚未在实际 Win7/Win10 系统上验收。
- 真实游戏客户端尚未放入，客户端兼容性及游戏内容须另行实测。

### 目录结构

```
MapleStoryPortable/
├─ MapleStoryPortable.exe          唯一日常启动入口
├─ README.md                       使用说明（本文件）
├─ App/
│  ├─ AppInfo/                     应用信息与图标；不存放启动器源码
│  ├─ DefaultData/Config/          首次运行配置模板
│  └─ MapleStory/
│     ├─ MapleStory.exe            待放入的完整客户端入口
│     ├─ Java/                     内置 Java 7 x64
│     ├─ MariaDB/                  内置 MariaDB 10.4.12 x64
│     ├─ lib/                      服务端依赖及 Rhino 引擎
│     ├─ scripts/                  游戏脚本
│     ├─ wz/                       服务端 XML WZ
│     ├─ maple.jar                 原始服务端
│     ├─ portable-patches.jar      Java 生命周期和脚本补丁
│     ├─ schema.sql                首次初始化数据库
│     └─ *.properties              原始配置参考，实际配置使用 Data/Config
```

### 完整运行逻辑

1. C# 窗口取得基于目录路径的实例互斥锁，启动后台工作线程。
2. 检查系统、完整客户端和必要运行文件；缺少客户端时显示错误，不启动服务。
3. 获得 Data/Run/server.lock，检查本地端口，保留已有配置。
4. 首次创建数据库和随机密码；runtime-version.txt 必须匹配 10.4.12。已有数据库版本无法确认时停止，禁止直接降级打开旧数据文件。
5. 启动数据库并等待查询成功；仅目标数据库不存在时导入 schema.sql。已有数据库缺少 schema-imported.txt 时停止自动操作以保护数据。
6. 生成实际数据库连接配置，直接运行内置 Java 的 portable.Bootstrap。
7. 等待 ready 文件和登录端口，再以 App/MapleStory 为工作目录运行客户端，参数为 127.0.0.1 9595。
8. 客户端退出后通知服务端保存并退出，再导出 SQL 备份和正常关闭数据库。
9. 关闭启动器窗口会设置内存关闭请求；请求游戏窗口关闭并等待退出，随后执行同样的保存、备份和停服步骤。成功后启动器自动退出。

数据库监听 127.0.0.1:13379；登录 9595；频道 2525–2530；商城 8600；实例 6350。日志位于 Data/Logs，临时数据库配置位于 Data/Run。为适配 MariaDB 10.4 的 Windows 路径解析，数据库配置使用系统代码页；其他文本日志与 C# 配置默认 UTF-8。中文系统下的中文及空格路径已通过测试。跨系统语言的非 ASCII 路径未实测；建议使用英文目录提高迁移兼容性。

### 端口与配置

修改倍率、频道和活动配置请编辑 `Data\Config\server.properties`，停服后再启动生效。数据库连接配置由启动器生成；数据库固定监听 127.0.0.1:13379，避免与系统 MySQL 的 3306 冲突。首次初始化仅在数据库不存在时执行，已经存在但未完成初始化的数据库会停止自动操作，防止覆盖。数据库密码随机生成，保存在 `Data\Config\database-password.txt`，请随 Data 一同保留。

### 数据保存与关闭边界

- 保留完整 Data，尤其 Database 和 Config/database-password.txt。
- Data/Database/runtime-version.txt 是数据库运行版本标记，不要随意修改。
- 迁移前数据库保留在 Data/Database-10.11-Backup，旧 10.11 程序位于 Other/Archive/MariaDB-10.11；迁移通过 SQL 导出/恢复，未直接降级打开原数据。
- 116 张表的完整 CHECKSUM TABLE 校验和一致；账号、角色数量均为 1。
- 迁移前 SQL 导出为 Data/Backups/compat-migration-10.11-to-10.4.sql。
- 游戏没有可关闭的主窗口或弹出确认窗口时，启动器会等待用户在游戏内退出。
- 服务端保存超过两分钟时报告错误并保留数据库运行，不强制结束服务。
- 备份失败、服务端异常退出或数据库未正常关闭均报告错误。
- 强制结束进程、断电和直接拔盘不属于正常退出流程。
- 旧 stop/server.lock/processes.json 文件存在，不表示进程仍在运行；启动时会检查端口和锁。
- 客户端二进制 WZ 与服务端 XML wz/ 用途不同。解压完整客户端时保留原有 Java、MariaDB、lib、scripts、wz、JAR 和 SQL，检查同名文件后再合并。

### 兼容性验证范围

已完成：C# 编译，原数据库到 10.4.12 的校验恢复，原数据服务启动及保存停服，中文空格路径、首次初始化、模拟客户端自动退出、关闭请求、重复实例锁测试。活动服务端 JAR 与依赖符合 Java 7 字节码版本（最高 major 51）。MariaDB 可选 CONNECT/JDBC 插件的 JavaWrappers/JdbcInterface JAR 为 Java 8，当前配置和启动链不加载这些可选插件，不能用内置 Java 7 调用它们。MariaDB 自带 UCRT 与 APISet 转发 DLL，转发 DLL 的 PE 10.0 标记不等于仅支持 Win10；微软支持 UCRT 应用本地部署。PE 和导入 API 筛查不能代替 OS 实测，也未覆盖运行时动态加载的所有系统依赖。

尚缺：实际 Win7 SP1/Win10 测试、真实客户端启动和角色进度保存及游戏内功能验收。

参考依据：

- [MariaDB Win7 最终版本](https://mariadb.com/docs/release-notes/community-server/about/platform-deprecation-policy)
- [.NET Framework 系统要求](https://learn.microsoft.com/en-us/dotnet/framework/get-started/system-requirements)
- [UCRT 本地部署依据](https://learn.microsoft.com/en-us/cpp/windows/universal-crt-deployment)

## 更新日志

> 以后更新日志统一写入本 README，不再单独维护 CHANGELOG 文件。

### 2026-10-04 · C# 全生命周期与 Win7 兼容调整

- Launcher.cs 改用后台 C# 工作线程；新增 PortableLifecycle.cs，移除运行时 PowerShell 依赖及 launcher.ps1 释放。
- 构建入口改为 C# 的 Other/Maintenance/Build-Launcher.exe；旧 PS1 方案归档到 Other/Archive/Launcher-PowerShell。
- 采用 .NET Framework 4.0 API，加入 Win7/Win10 manifest、64 位及 Win7 SP1 检查。
- 数据库从 10.11.18 改为 Win7 兼容的 10.4.12，通过 SQL 导出/恢复迁移，116 张表的校验和全部一致，账号/角色数一致。
- 保留 Data/Database-10.11-Backup 及 Other/Archive/MariaDB-10.11，增加 runtime-version.txt 防止跨版本直接打开数据。
- 修正旧数据库配置对中文路径的系统编码要求，中文和空格路径测试通过。
- 模拟客户端自动退出、关闭请求、数据库初始化、实例锁等测试通过，服务端保存和 SQL 备份通过。
- 新增 C# 文件兼容审计工具及全目录 CSV 清单。实际 Win7/Win10 和真实客户端尚未实测。

### 2026-10-04 · 源码归位与说明补全

- 将 App/AppInfo/Launcher.cs 与 Portable.ps1 移至 Other/Source；App/AppInfo 保留应用信息和图标。
- 修正 Build-Launcher.ps1 的源码、内嵌资源路径；重新构建 MapleStoryPortable.exe。
- 修正 Fix-Scripts.ps1 的旧 App/Server/scripts 路径为 App/MapleStory/scripts。
- 删除未实现的 Client 脚本模式，显式初始化备份错误状态，将监督日志和状态写入纳入资源清理范围。
- 补充目录用途、完整生命周期、源码编译方法、数据保存、运行依赖及关闭边界。
- 同步使用说明，并标明审计报告、Package 和 Validation 中的历史记录与副本。

### 2026-10-04 · 单 EXE 生命周期

- 日常操作合并到 MapleStoryPortable.exe，移除根目录 CMD 和独立启动、停服、状态、备份 EXE。
- 客户端入口统一为 App/MapleStory/MapleStory.exe，参数 127.0.0.1 9595。
- 窗口显示启动输出；关闭请求等待游戏退出后执行服务端保存、SQL 备份和数据库停服。
- 生命周期脚本嵌入 EXE，启动时释放到 Data/Run，无须用户单独运行脚本。
- 保留 Data 数据库和配置，首次初始化不覆盖已有存档；同一目录防止重复启动。
- 模拟客户端自动退出和启动阶段关闭测试成功，SQL 备份生成，测试后无本包 Java/MariaDB 残留进程。

本次验证：迁移后的 PowerShell 语法检查与 EXE 编译通过，内嵌 Lifecycle 脚本与 Other/Source/Portable.ps1 内容一致。缺少客户端时正确报错且不启动服务；迁移后的服务端启动、保存停服与 SQL 备份测试退出码为 0。

当前限制：尚未放入真实客户端，因此未验证真实角色进度、进图和游戏内容。Other/Package 中旧 .paf.exe 未随本次修改重新生成；最新入口为根目录 MapleStoryPortable.exe。正常退出流程不涵盖进程强制终止、断电或直接拔盘。

### 2026-10-04 · 文档整理为单一 README

- 使用说明、文件结构说明和更新日志整合为根目录 README.md。
- Data/ 和 Other/ 不纳入版本控制，其内容以本 README 为文档入口。

## 相关链接

- [PortableApps 规范](https://portableapps.com/development/portableapps.com_format)
- [选用服务端上游](https://github.com/Afauria/MapleStory-Server-079)
- [另一套源码上游](https://github.com/mrzhqiang/ms079)
- [Zulu ZIP 使用说明](https://docs.azul.com/core/install/windows)
