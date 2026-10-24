/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10036 月亮是什么样子的
   开始NPC: 9001102  结束NPC: 9001102
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("地面上的月光爱好者向 #p9001102# 个从未见过满月的人发送了月球照片。然而，当我跳向月球时，照片被撕碎，散成了碎片。  到达#p9001102#的只是一个相框……根据野月宝宝的说法，这些照片可能在某人的手中，#b，怪物，或隐藏在花中。 #k。让我们收集散落的#b张照片片#k，展示月球的本来面目。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("宝宝月苗看到了月亮的照片，似乎被月亮的美丽外表深深感动了。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

