/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9847 守卫地球防御本部
   开始NPC: 9010010  结束NPC: 2050012
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#p9310060##k说有急事相告……　点击头上的灯泡吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

