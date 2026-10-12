/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 6700 弓箭手之路
   开始NPC: 1012100  结束NPC: 1012100
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 0 && status == 0) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendYesNo("我已经为你准备好了必需的礼物，请挑选合适的礼品。");
    else if (status == 1) qm.sendNext("希望你将来能成为一名优雅的弓箭手。 那么请保重身体。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

