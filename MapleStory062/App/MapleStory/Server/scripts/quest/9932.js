/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9932 露迪米拉的耳环
   开始NPC: 2120006  结束NPC: 2120006
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("既然和#p2120005#说要去#b#m229000210##k那边，就去乔纳斯的房间看看吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

