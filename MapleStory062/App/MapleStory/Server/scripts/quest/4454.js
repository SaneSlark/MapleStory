/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 4454 邪灵灌１
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 0 && status == 0) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendYesNo("aa");
    else if (status == 1) qm.sendNext("ss");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("水晶球的画面使得琦仙灵的脸色发青~ 很明显的,枫险世界将会有大灾难! 快来看看琦仙灵有什么话说~!");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

