# 冒险岛 v079 本地便携服务端

双击 `MapleStoryPortable.exe`：自动启动数据库和游戏服务端，等待加载完成后启动客户端。未放入客户端时会提示放置位置。启动、保存及停服均由 C# 完成，不依赖 PowerShell 或 CMD。目标系统为 Windows 7 SP1 / Windows 10 64 位，需要 .NET Framework 4.x（建议 4.8）；尚未在两种系统上实测。运行不需要安装 Java、数据库或配置 JAVA_HOME，不注册 Windows 服务。当前运行组件为 Windows x64。

## 客户端放置

将完整的**国服 079 客户端**放到 `App\MapleStory\Client`，保留原版 `MapleStory.exe`、全部 WZ 和 DLL。启动组件位于 `App\MapleStory\Launcher`，当前启动器优先使用本地构建的 `CMSLauncher.exe` 与 `Hook.dll`，处理旧 HackShield 和登录地址；`d3d8.dll` 提供 Direct3D 8 到 9 的兼容转换，并将本包 079 图形初始化改为 32 位色。Launcher 目录同时带有 x86 VC++ 运行库。服务端 XML WZ 不能代替客户端二进制 WZ。

登录目标固定为 `127.0.0.1:9595`。上游说明的客户端需要对应的私服兼容组件；未经适配的官方原版客户端可能连接失败。下载来源和客户端版本需自行核实。同一目录只允许一个启动器运行，已有数据不会重复初始化。配置启用了自动注册，可用新的账号和密码登录。

## 新建角色与客户端资源

国服 079 的原版男女选择框位于登录界面，建角界面沿用本次登录选择。现在每次登录会显示男女选择；选择后继续进入区服和建角，既有角色的性别不改变。`Data/Config/server.properties` 中 `RoyMS.ChooseGenderOnLogin = true` 控制此行为，设为 false 可恢复仅未选择过性别的新账号提示。

建角职业、脸型、发型和初始装备按本客户端 `Etc.wz/MakeCharInfo.img` 校验，支持原有冒险家、骑士团、战神的男女选项，不再把各职业的初始装备混在同一份硬编码白名单中。

已按本地客户端校准 319 份服务端 XML 数据：117 份角色/装备属性、70 份物品属性与效果、66 份怪物属性、56 份技能数据、3 份任务数据、6 份文本数据，并补齐 String/Item.img。地图落脚点、梯子数据已核对，无需修改；自定义 NPC、NPC 名称、脚本和既有倍率保留。

服务端仍保留客户端之外的扩展资源：Character.wz 多出 19035 份图片记录，Item.wz 多出 296 份。这些资源没有自动删除或替换成其他物品，使用它们的自定义玩法仍需逐项适配；本次校准不等同于完整原版还原。

校准记录见 `Other/Validation/Client-Metadata-Sync.json` 和 `Client-Resource-Audit.json`；修改前的 XML 副本在 `Other/Validation/ClientMetadata-Original`，供人工核对或回退。维护工具为 `Other/Maintenance/Sync-ClientMetadata.py`，它读取客户端数据并更新服务端 XML，不修改客户端 WZ；完整重新校准需要一定时间。

## 退出与保存

只需运行 MapleStoryPortable.exe。正常退出游戏后，启动器会通知服务端保存角色数据，等待停服，正常关闭数据库，然后自动退出。关闭启动器窗口也会请求游戏退出并等待上述流程完成。数据保存在 Data\Database；数据库名为 `maplestory`。退出后保存并停服，不自动导出 SQL，也不创建 Data\Backups。

## 文件结构与运行逻辑

更新日期：2026-10-05

### 使用入口与兼容目标

- 日常仅运行根目录 MapleStoryPortable.exe。
- 目标系统：Windows 7 SP1 / Windows 10，64 位。
- 启动器采用 C#、.NET Framework 4.0 API；建议安装 .NET Framework 4.8。
- 运行不依赖 PowerShell、CMD、系统 Java 或已安装的数据库服务。
- 内置 Java：Azul Zulu OpenJDK 7u352 x64。
- 内置数据库：MariaDB 10.4.12 x64，官方列出的最后 Win7 兼容版本。
- 已进行当前主机功能验证和静态兼容筛查；尚未在实际 Win7/Win10 系统上验收。
- 当前国服 079 客户端已通过图形初始化、游戏窗口创建及退出停服测试；登录、角色进度和游戏内容尚待验收。操作游戏时请保持 Windows 桌面解锁。

### 目录结构

```
MapleStoryPortable/
├─ MapleStoryPortable.exe          日常启动入口
├─ README.md                       使用说明和更新日志
├─ App/
│  ├─ AppInfo/                     应用信息和图标
│  ├─ DefaultData/                 首次运行配置模板（*.properties）
│  └─ MapleStory/
│     ├─ Client/                   原版 MapleStory.exe、WZ、游戏 DLL
│     ├─ Launcher/                 CMSLauncher.exe、Hook.dll、d3d8.dll、x86 运行库
│     ├─ Runtime/
│     │  ├─ Java/                  内置 Java 7 x64
│     │  └─ MariaDB/               内置 MariaDB 10.4.12 x64
│     └─ Server/                   maple.jar、portable-patches.jar、schema.sql
│        ├─ lib/                   服务端依赖
│        ├─ scripts/               游戏脚本
│        └─ wz/                    服务端 XML WZ
├─ Data/                           配置、存档、备份、日志和临时文件
└─ Other/                          源码、构建工具和历史记录
```

### 完整运行逻辑

1. C# 窗口取得基于目录路径的实例互斥锁，启动后台工作线程。
2. 检查系统、完整客户端和必要运行文件；缺少客户端时显示错误，不启动服务。
3. 获得 Data/Run/server.lock，检查本地端口，保留已有配置。
4. 首次创建数据库和随机密码；runtime-version.txt 必须匹配 10.4.12。已有数据库版本无法确认时停止，禁止直接降级打开旧数据文件。
5. 启动数据库并等待查询成功；仅目标数据库不存在时导入 schema.sql。已有数据库缺少 schema-imported.txt 时停止自动操作以保护数据。
6. 生成实际数据库连接配置，直接运行内置 Java 的 portable.Bootstrap。
7. 等待 ready 文件和登录端口，再运行 App/MapleStory/Launcher/CMSLauncher.exe，以 App/MapleStory/Client 为游戏工作目录，参数为 127.0.0.1 9595。
8. 客户端退出后通知服务端保存并退出，再正常关闭数据库。
9. 关闭启动器窗口会设置内存关闭请求；请求游戏窗口关闭并等待退出，随后执行同样的保存和停服步骤。成功后启动器自动退出。

数据库监听 127.0.0.1:13379；登录 9595；频道 2525–2530；商城 8600；实例 6350。日志位于 Data/Logs，临时数据库配置位于 Data/Run。为适配 MariaDB 10.4 的 Windows 路径解析，数据库配置使用系统代码页；其他文本日志与 C# 配置默认 UTF-8。中文系统下的中文及空格路径已通过测试。跨系统语言的非 ASCII 路径未实测；建议使用英文目录提高迁移兼容性。

### 端口与配置

修改倍率、频道和活动配置请编辑 `Data\Config\server.properties`，停服后再启动生效。数据库连接配置由启动器生成；数据库固定监听 127.0.0.1:13379，避免与系统 MySQL 的 3306 冲突。首次初始化仅在数据库不存在时执行，已经存在但未完成初始化的数据库会停止自动操作，防止覆盖。数据库密码随机生成，保存在 `Data\Config\db-passwd.ini`，请随 Data 一同保留。

`App\DefaultData` 只保留 `server.properties` 和 `fish.properties` 模板；实际运行配置位于 `Data\Config`。没有读取方的 `shop.properties` 和服务端目录中的重复配置已归档。频道配置使用实际生效的 `RoyMS.Port1` 至 `RoyMS.Port6`，对应 2525 至 2530；登录和商城端口分别为 9595、8600。

普通数据库运行使用 `NO_ENGINE_SUBSTITUTION`；保留零编号的模式仅用于 SQL 导入。启动时核对并修正新记录的默认值，不重写已有角色数据。JDBC 连接建立超时为 10 秒，配置的连接空闲期限为 5 分钟。服务端修复已经合入 `maple.jar`，`portable-patches.jar` 仅保存启动辅助类。正常停服后清理临时连接和控制文件，日志按实际输出生成，不记录账号明文密码。

### 账号性别与创建角色

v079 使用账号级性别，建角色界面本身没有性别切换按钮。本包默认 `RoyMS.ChooseGenderOnLogin = true`，每次登录弹出男女选择框；本次新建角色沿用所选性别，已有角色的性别不改变。设为 false 时，仅尚未选择性别的新账号弹出选择框。

已建角色不受账号性别修改影响（角色外观独立存储）。如需更改已有账号的性别，可停服后直接改数据库，例如把账号 admin 改为女性：

```
UPDATE maplestory.accounts SET gender=1 WHERE name='admin';
```

gender 取值 0 为男、1 为女。修改后新创建的角色即为对应性别。

### 数据保存与关闭边界

- 保留完整 Data，尤其 Database 和 Config/db-passwd.ini。
- MariaDB 首次初始化后，启动器会删除默认的 `test` 库；游戏数据导入 `maplestory`，不创建赌博数据库。
- Data/Database/runtime-version.txt 是数据库运行版本标记，不要随意修改。
- 迁移前数据库保留在 Data/Database-10.11-Backup，旧 10.11 程序位于 Other/Archive/MariaDB-10.11；迁移通过 SQL 导出/恢复，未直接降级打开原数据。
- 116 张表的完整 CHECKSUM TABLE 校验和一致；此处校验记录对应当时迁移的数据快照。
- 迁移前 SQL 导出为 Data/Backups/compat-migration-10.11-to-10.4.sql。
- 游戏没有可关闭的主窗口或弹出确认窗口时，启动器会等待用户在游戏内退出。
- 服务端保存超过两分钟时报告错误并保留数据库运行，不强制结束服务。
- 服务端异常退出或数据库未正常关闭均报告错误。
- 强制结束进程、断电和直接拔盘不属于正常退出流程。
- 旧 stop/server.lock/processes.json 文件存在，不表示进程仍在运行；启动时会检查端口和锁。
- 客户端二进制 WZ 与服务端 XML wz/ 用途不同。解压完整客户端时保留原有 Java、MariaDB、lib、scripts、wz、JAR 和 SQL，检查同名文件后再合并。

### 兼容性验证范围

已完成：C# 编译，原数据库到 10.4.12 的校验恢复，原数据服务启动及保存停服，中文空格路径、首次初始化、模拟客户端自动退出、关闭请求、重复实例锁测试。活动服务端 JAR 与依赖符合 Java 7 字节码版本（最高 major 51）。MariaDB 可选 CONNECT/JDBC 插件的 JavaWrappers/JdbcInterface JAR 为 Java 8，当前配置和启动链不加载这些可选插件，不能用内置 Java 7 调用它们。MariaDB 自带 UCRT 与 APISet 转发 DLL，转发 DLL 的 PE 10.0 标记不等于仅支持 Win10；微软支持 UCRT 应用本地部署。PE 和导入 API 筛查不能代替 OS 实测，也未覆盖运行时动态加载的所有系统依赖。

尚缺：实际 Win7 SP1/Win10 测试、登录和角色进度保存及游戏内功能验收。新客户端修复组件尚未在 Win7/Win10 上实测。

参考依据：

- [MariaDB Win7 最终版本](https://mariadb.com/docs/release-notes/community-server/about/platform-deprecation-policy)
- [.NET Framework 系统要求](https://learn.microsoft.com/en-us/dotnet/framework/get-started/system-requirements)
- [UCRT 本地部署依据](https://learn.microsoft.com/en-us/cpp/windows/universal-crt-deployment)

## 目录整理后的保留范围

保留 `Client` 中的原版客户端、WZ 与游戏 DLL；保留 `Launcher` 中的启动组件、图形修复 DLL 与 x86 运行库；保留 `Runtime` 和 `Server`。`Data/Config` 与 `Data/Database` 保存配置及游戏进度；`Data/Backups` 仅保留已有历史备份。

旧清理清单针对整理前目录，已由本节替代。`Other/Downloads` 是下载缓存；`Other/Build/classes` 与 C++ 的 `*.obj` 是可重建的编译产物。删除构建工具或源码会影响重新编译，日常运行仅依赖根目录启动器、App 和 Data。

## 更新日志

### 2026-10-05 · 修复男女选择与校准原版客户端内容

- 自动注册账号明确写入未选择性别状态 10；登录成功后通过原版 CHOOSE_GENDER 封包显示男女选择，现有账号也可选择，已建立角色不受影响。
- SET_GENDER 接受已认证、正在选择性别的会话，校验性别 0/1 和账号名；选择成功后直接继续登录，不再要求重新登录而形成重复提示。
- 新建角色要求完成性别选择，拒绝不支持的职业，并从 MakeCharInfo.img 读取对应职业及性别的外观、初始装备选项。
- 更新 LoginWorker、CharLoginHandler、AutoRegister 与 portable 登录/建角辅助类，编译并部署到 portable-patches.jar；同步更新补丁构建脚本及配置模板。
- 解读本地 CMS079 WZ，校准 318 份已有 XML 并补齐 1 份文本资源；保留倍率、自定义 NPC 名称和脚本。额外的后续版本装备资源保留并记录差异，不宣称全部玩法已还原。
- 验证：原版性别封包、未认证/非法输入拒绝、男/女建角选项、职业装备限制、现有男账号选择女后继续登录的集成测试通过；3314 个脚本编译无失败；319 份修改后的 XML 解析通过；服务端加载技能、启动、保存和正常停服通过。
- 尚需实际客户端点选男/女并完成新角色创建、进入地图验收；本轮自动测试未实际创建或删除玩家角色。


### 2026-10-04 · 首次初始化、服务器命名与性别说明

- 完成数据库首次初始化：`maplestory` 库 116 张表导入并校验通过，配置与随机数据库密码已生成到 Data，初始化后数据库已正常关闭。
- 服务端名称与欢迎公告由"LOC冒险岛"改为"冒险岛"（`App/DefaultData` 与 `App/MapleStory/Server` 两处 server.properties）。
- 新增"账号性别与创建角色"说明：v079 性别为账号级，在新账号首次登录的性别对话框中选择；附修改已有账号性别的 SQL 示例。

### 2026-10-04 · 图标、标题、数据库名称与退出流程调整

- 客户端启动组件改名为 `App/MapleStory/Launcher/CMSLauncher.exe`，嵌入 Launcher/icon.ico；同步启动路径、退出处理进程名和构建输出。
- 根目录启动器显式使用自身 EXE 的图标作为窗口图标，文字改为微软雅黑 12 号；提示文案同步移除自动备份描述。
- 游戏窗口标题统一为 `MapleStory`，客户端协议版本及版本校验保留。
- 实际数据库由 maplestory_079 迁移为 `maplestory`，114 张实体表的 CHECKSUM 全部一致，2 个视图重建并验证；现有 1 个账号和 2 个角色保留，旧数据库名已移除。配置模板、服务端配置及 Data/Config 的连接地址同步更新。
- 移除退出后的 mysqldump 导出与备份错误分支，以及日常启动对 mysqldump.exe 的依赖；仍等待服务端保存并正常关闭数据库，不删除已有历史备份。
- 已重新编译两个启动器、Hook.dll、构建入口和生命周期验证工具。验证 EXE 含图标资源、窗口图标已设置、字体大小为 12，服务启动和保存停服退出码为 0，备份文件数量未增加。
- 数据库迁移校验记录：Other/Validation/Database-Name-Migration.json；客户端窗口与标题测试日志：Data/Logs/client-title-check.log。


### 2026-10-04 · 适配整理后的目录

- 运行库迁移到 `App/MapleStory/Runtime`，服务端文件迁移到 `App/MapleStory/Server`，客户端修复组件迁移到 `App/MapleStory/Launcher`，默认配置模板位于 `App/DefaultData`。
- 更新根目录启动器的 Java/MariaDB 路径、数据库 basedir、服务端类路径、脚本与 WZ 路径、默认配置复制路径及客户端启动路径；保留 Data 中已有配置与数据库。
- MapleLauncher.exe 改为启动旁边 Client 目录中的原版客户端，并为游戏进程配置 Launcher 的 DLL 搜索路径，加载 Hook.dll、d3d8.dll 与 x86 运行库。
- 更新客户端构建脚本，构建后自动部署到 Launcher；同步更新 Java 补丁构建和脚本维护路径，并重新编译 Validate-Lifecycle.exe。
- 已重新编译 MapleStoryPortable.exe、MapleLauncher.exe 与 Hook.dll。新目录的服务启动、保存、SQL 备份及数据库正常关闭验证通过；客户端窗口创建成功，图形初始化返回 00000000，关闭信号测试退出码为 0。
- 更新 README 与 Other/File-Structure.txt；较早日志中的路径保留为历史记录。


> 以后更新日志统一写入本 README，不再单独维护 CHANGELOG 文件。

### 2026-10-04 · 客户端启动组件改名与清理记录

- 客户端启动组件由 CMS079Launcher.exe 经 Launcher.exe 改名为 `MapleLauncher.exe`；根目录日常入口仍为 `MapleStoryPortable.exe`。
- 同步更新 PortableLifecycle.cs 的启动路径、组件检查和退出处理进程名，以及 Build-CMSLauncher.py 的输出文件名；重新编译根目录启动器。
- 验证 Client 中新文件存在，编译后的根目录启动器包含新入口名称；本次改名未重新执行游戏登录或角色操作测试。
- 新增手动清理清单，区分不使用的旧客户端、重复下载包、临时调试文件和可选历史验证产物。
- 删除操作被执行环境的自动审批审查拒绝，未实际删除上述文件。用户后续手动清理完成前，本记录不标记为已清理。
- Other/Build/CMSLauncher/build-info.json 中原 CMS079Launcher.exe 的 SHA256 保留为历史构建记录；当前部署名称和校验值另行记录。

### 2026-10-04 · 国服 079 启动修复

- 核实原版 `MapleStory.exe` 文件版本为 079；此前把该入口判定为 GMS v83/v87 的记录不准确。`GMv83.exe` 的版本与地区字节修改方案停止使用。
- 使用 [CMSLauncher](https://github.com/zhyonc/CMSLauncher) 源码（提交 `5bd7d5be9683841359cb3058826eb670deccf97f`）构建 x86 启动组件，登录目标为 `127.0.0.1:9595`，关闭协议 XOR，保留原版 WZ 资源。
- 定位 `0x80004005` 至图形引擎初始化；加入针对本包 CMS079 指令签名的 32 位色修复，并部署 [d3d8to9 v1.16.0](https://github.com/crosire/d3d8to9/releases/tag/v1.16.0)。实测图形初始化返回成功，游戏窗口已创建。
- 启动器等待真实游戏进程退出；关闭请求通过本地事件转发到游戏窗口，再执行原有保存、SQL 备份和停服流程。该流程已实测成功。
- 构建脚本为 `Other/Maintenance/Build-CMSLauncher.py`，便携编译工具在 `Other/Build/msvc`。构建来源和 SHA256 保存在 `Other/Build/CMSLauncher/build-info.json`。未修改系统防护设置。
- 当前 Windows 会话处于锁屏时，无法验收登录界面和角色操作；启动阶段修复已验证，完整登录及游戏内功能尚待实测。

### 2026-10-04 · GMv83 客户端二进制补丁尝试（未完全成功）

- 目标：让 GMS v83 GM 客户端（`Client\GMv83.exe`，版本字节 83、地区码 8）连接 v079 服务端（版本 79、地区码 4），免去寻找国服 079 客户端。
- 已定位并修补两处校验（文件偏移）：`0x95191` 地区码比较 8→4；`0x963c1` 加密初始化版本参数 83→79。补丁后客户端不再 16 秒自退，能完成 TCP 连接并驻留。
- 已处理：Defender 反复隔离补丁文件——需为 `App\MapleStory\Client` 加排除项（管理员执行 `Add-MpPreference -ExclusionPath`）；按社区经验隐藏 `download.info`/`downloadinfo.dat`；设置 Win7+16 位色兼容模式。
- 未解决：客户端握手通过后卡死在 350x96 空白对话框（GUI 线程阻塞，进程无法终止，需重启系统清除）。即使解决卡死，v83 GMS 与 v079 CMS 的封包 opcode 表、包结构仍有系统性差异，完整兼容需要大量逆向，不具实用性。
- 原始未补丁文件备份在 `Data\Temp\GMv83.exe.orig`（Data 不入库，注意留存）。结论：**仍推荐配套国服 079 客户端**，启动器已就绪（GMv83 优先、MapleStory.exe 回退、nmcogame 桩、ehsvc.ini 自动修正均保留）。

### 2026-10-04 · 改用 GMv83 客户端绕过 HShield

- 原 `Client\MapleStory.exe`（GMS v83 官方入口）带 HackShield 壳，在现代 Windows 上启动即报 hs 路径错误且无法修复；改用私服 GM 客户端 `GMv83.exe`（无 HShield 导入，直接连 127.0.0.1:9595），已移入 `App\MapleStory\Client`。
- GMv83.exe 依赖 Nexon 的 `nmcogame.dll`，本包不带且该 DLL 在私服流程中不会被真正调用；已生成 8 个导出函数全部返回成功的桩 `nmcogame.dll`（32 位，手搓 PE），经 LoadLibrary/GetProcAddress 逐项验证通过。
- 启动器客户端 exe 自动识别：`Client\GMv83.exe` 优先，不存在则回退 `Client\MapleStory.exe`；HShield 的 ehsvc.ini 路径修正保留，对官方客户端仍生效。
- 实测 GMv83.exe 可正常启动并驻留（无 HShield/缺 DLL 报错）。重新编译 MapleStoryPortable.exe。

### 2026-10-04 · HShield 路径自动适配

- 客户端 HShield 的 `ehsvc.ini` 原包写死了旧机器路径（`D:\game\…\MapleStory.exe`），导致启动报 hs 路径错误；启动器现于每次启动客户端前自动把 `GamePath` 重写为当前实际的 `App\MapleStory\Client\MapleStory.exe`（按系统代码页写入，兼容中文路径），目录移动后无需手动修改。
- 重新编译 MapleStoryPortable.exe。

### 2026-10-04 · 客户端启动目录修正

- 实际客户端位于 `App\MapleStory\Client`（含 MapleStory.exe 与全部 WZ/DLL），启动器原先查找 `App\MapleStory\MapleStory.exe`，已修正为 `App\MapleStory\Client\MapleStory.exe`，并以 `App\MapleStory\Client` 为客户端工作目录。
- 同步修正 LifecycleTests 假客户端路径及 README 放置说明，重新编译 MapleStoryPortable.exe。

### 2026-10-04 · 启动器分阶段启动提示

- 启动器窗口按阶段显示：启动数据库…… → 启动世界服…… → 启动频道服…… → 启动商城服…… → 启动服务端…… → 服务已就绪。
- 阶段提示通过解析服务端输出触发（检测到频道/商城加载关键字），仅显示文本，不改变运行逻辑。
- 客户端版本核实：当前放置的客户端为 GMS v87，与本服务端（CMS v079.1）不兼容，连接登录服后握手无响应，需更换配套客户端。
- .gitignore 排除 App\MapleStory 下的客户端文件（EXE/WZ/DLL），客户端不入库。

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
