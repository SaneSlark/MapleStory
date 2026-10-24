/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9850 波特的测试
   开始NPC: 2091001  结束NPC: 2091001
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("击败大眼和密森后，他回到了杜东，杜东告诉他要继续努力，并说只有进一步的训练才是达到圣人的方法。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

