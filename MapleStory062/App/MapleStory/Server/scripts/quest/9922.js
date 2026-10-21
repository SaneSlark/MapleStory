/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9922 猫的忠告
   开始NPC: 2121000  结束NPC: 2121000
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("来到了#p2120000#举办清明踏青舞会的#r闹鬼宅邸#k。但是巨大的守门人说如果没有穿着和舞会相配的服装的话，就不能让我进去……怎么办呢？去向坐在宅邸前标志牌上的#b#p2121000##k请求帮助吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("来到了#p2120000#举办清明踏青舞会的#r闹鬼宅邸#k。但是巨大的守门人说如果没有穿着和舞会相配的服装的话，就不能让我进去……怎么办呢？去向坐在宅邸前标志牌上的#b#p2121000##k请求帮助吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

