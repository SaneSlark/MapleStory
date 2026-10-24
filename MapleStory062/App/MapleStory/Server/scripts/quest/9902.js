/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9902 战斗玛瑙
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b 卡珊德拉 #k表示无法摆脱愤怒，并要求她每天删除#r 开口 #k，直到10 2月 21。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

