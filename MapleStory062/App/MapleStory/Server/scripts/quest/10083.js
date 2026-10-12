/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10083 ????? ??
   开始NPC: 1012003  结束NPC: 1012003
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("????? ?????? ????? ???? ??.");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

