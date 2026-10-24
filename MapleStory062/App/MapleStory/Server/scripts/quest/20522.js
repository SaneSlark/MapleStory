/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20522 抚养蒂蒂安娜
   开始NPC: 1102002  结束NPC: 1102002
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#p1102002#说骑士的骑术是通过#t1902005#这种TT来完成的，应该自己养#t1902005#，然后交出一个小鸡蛋……#t1902005#据说#b可以通过分享来养#k 经验。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("筹集完#t1902005#后，我把它给了#p1102002#。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

