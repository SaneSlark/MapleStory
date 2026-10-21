/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2127 前往沙漠……
   开始NPC: 1022002  结束NPC: 1022002
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我已经准备好前往#p1022002#要带我去的地方了。我现在就去找#p1022002#。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

