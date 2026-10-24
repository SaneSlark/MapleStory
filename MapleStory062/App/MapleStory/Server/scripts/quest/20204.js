/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20204 骑士沃克的骑士等级测试
   开始NPC: 1101006  结束NPC: 1101006
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("完成工程师等级测试。现在我的骑士修行已经结束，被任命为全职骑士。作为天鹅座骑士团的正式骑士，让我们成为未被邪恶玷污的黑暗吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

