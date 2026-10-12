/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3833 找缺少的药材
   开始NPC: 2092000  结束NPC: 2092000
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("据说#b#m251000000##k的#b#p2092000##k需要一些物品……");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

