/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10002 特殊工作人员徽章的次数
   开始NPC: 9000034  结束NPC: 9000034
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("特殊工作人员O让我进入村庄，把30分钟后出现的工作人员箱子里的#b#t4031988##k回收回来。\r\n#i4031988# #t4031988# #b#c4031988# / 1\n\n#k回收回来的特殊工作人员徽章每次达到10个时，可以获得#b工作人员O的尼龙手套#k，徽章的个数每次超过100个时，可以获得#b工作人员O的皮手套#k。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

