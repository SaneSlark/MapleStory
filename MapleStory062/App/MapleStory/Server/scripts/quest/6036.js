/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 6036 意外的结果
   开始NPC: 2110004  结束NPC: 2110004
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("莫力恩丢失的纸条上，写着制作金砧的方法。金砧……好像是很不错的东西。虽然莫力恩嫌麻烦，但我应该试着制作一下。\n\n#i4031980# #t4031980# #b#c4031980# / 1");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

