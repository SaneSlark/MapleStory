/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9961 查看新年运势
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("啊！  #b#h0#！ #k 你已经听到传闻了吗？是的，没错。迎接新的一年，让我来告诉你今年的运势吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b 卡珊德拉 #k 解读你的新年运势。祝今年好运...");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

