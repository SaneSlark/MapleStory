/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9985 制作枫叶糖浆
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我最好去找#p9010010#谈谈，如何提升#b#t01012098##k的效果。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

