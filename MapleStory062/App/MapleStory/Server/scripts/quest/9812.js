/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9812 每天每天大活动 2月28日
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("快乐的寒假生活结束了，为了迎接崭新的新学期，星缘大人为大家准备了特别的活动。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

