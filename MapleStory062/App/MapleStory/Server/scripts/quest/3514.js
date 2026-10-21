/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3514 出售情感的魔法术士
   开始NPC: 2140002  结束NPC: 2140002
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("见到了#p2140002#。他知道我的感情被冰冻之后，说想要给感情解冻的话，需要购买他出售的#b药#k。价格很贵，但是他说效果很好。只是需要注意会有副作用。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

