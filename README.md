# 冒险岛便携包导航

本仓库按版本分支独立维护。`main` 仅保留导航与仓库配置，版本文件及使用说明见对应分支。

| 版本 | 版本分支 | 使用说明 | 安装包下载 |
| --- | --- | --- | --- |
| GMS062 | [v062](https://github.com/SaneSlark/MapleStory/tree/v062) | [使用说明](https://github.com/SaneSlark/MapleStory/blob/v062/MapleStory062/Other/使用说明.txt) | [0.6.2.0 Release](https://github.com/SaneSlark/MapleStory/releases/tag/v0.6.2.0) |
| CMS072 | [v072](https://github.com/SaneSlark/MapleStory/tree/v072) | [使用说明](https://github.com/SaneSlark/MapleStory/blob/v072/MapleStory072/Other/使用说明.txt) | [0.7.2.1 Release](https://github.com/SaneSlark/MapleStory/releases/tag/v0.7.2.1) |
| CMS079 | [v079](https://github.com/SaneSlark/MapleStory/tree/v079) | [使用说明](https://github.com/SaneSlark/MapleStory/blob/v079/MapleStory079/Other/使用说明.txt) | [0.7.9.0 Release](https://github.com/SaneSlark/MapleStory/releases/tag/v0.7.9.0) |

以上为截至 2026-10-21 各版本的最新正式发布。下载对应 Release 的 `.paf.exe` 安装包，使用同一 Release 的 `SHA256SUMS.txt` 核对文件。各 Release 的目标分支分别为 `v062`、`v072`、`v079`，附件包含安装包和校验文件。

各版本分支保留 `MapleStory062/`、`MapleStory072/` 或 `MapleStory079/` 目录结构。客户端、服务端、运行库、配置和存档必须与该版本配套，不得混用。安装包不包含现有玩家存档。建议安装到新目录；已有用户更新前应退出游戏并等待正常停服，再按对应版本说明备份存档和配置。CMS072 需备份自己的 `Data` 及 `Server/settings.ini`。

维护时使用对应版本分支，不将版本程序同步回 `main`。分支仅包含当前 Git 跟踪内容；客户端、用户存档和本地维护资料遵循各分支的忽略规则。分支可能在发布后继续更新，需要与安装包对应的源码时应查看相应 Release 标签。

