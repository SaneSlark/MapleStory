/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2214 沼泽地带的棚屋
   开始NPC: 1052002  结束NPC: 1052108
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("按吉姆所说，首先要做的事情好像是搜集情报。吉姆说情报会放在沼泽地带的#b棚屋#k里，必须在#b下午5点到8点之间#k去拿回来……在限定的时间内去一趟#b#m107000300##k吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

