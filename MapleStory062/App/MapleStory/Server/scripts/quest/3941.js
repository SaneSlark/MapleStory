/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3941 抢夺王妃的丝绸
   开始NPC: 2101013  结束NPC: 2101013
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("作为沙子图团员，正在执行第一个任务…… 任务是抢夺王妃订的丝绸！以#p2101004#的模样去#b#m260010600##k，与王妃做丝绸生意的 #b#p2101013##k那儿拿到丝绸。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("来，这里。请小心。这个丝绸是很难弄到的。如果有一些刮伤的话，王妃肯定会把#p2101004#先生关进监狱的。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

