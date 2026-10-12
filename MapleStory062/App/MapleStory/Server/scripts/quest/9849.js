/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9849 诺功的考验
   开始NPC: 2091000  结束NPC: 2091000
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("快乐山谷的体力锻炼教官。好像是#b#p2091000##k的声音。点击头上的灯泡吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

