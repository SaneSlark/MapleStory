/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9433 ???? (12? 7?)
   开始NPC: 9001002  结束NPC: 9001002
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#p9010000##k? ????? ????? ??. ? ?? ?? ?? ?? ??? ??? ????");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

