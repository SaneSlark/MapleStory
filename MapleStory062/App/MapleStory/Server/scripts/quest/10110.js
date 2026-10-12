/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10110 金大亨的邀请
   开始NPC: 2084001  结束NPC: 9010000
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("收到了枫险世界的大商家, #b金大亨#k寄出的信息. 说些什么?");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

