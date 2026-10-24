/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9842 伊卡洛斯的蘑菇球
   开始NPC: 9010010  结束NPC: 1052106
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#p1052106##k 帮我做了美味的蘑菇肉丸。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

