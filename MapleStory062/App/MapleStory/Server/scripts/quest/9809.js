/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9809 星缘的占卜
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#p9310060##k为了纪念枫之岛诞生4周年，为冒险家们算命看运势……");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

