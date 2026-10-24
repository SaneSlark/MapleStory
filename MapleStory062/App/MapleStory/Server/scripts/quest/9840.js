/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9840 温斯顿博士的研究
   开始NPC: 9010010  结束NPC: 1022006
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#p1022006##k 协助博士的研究");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

