/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9930 完美的道具
   开始NPC: 2120004  结束NPC: 2120004
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("要制造出完美的娃娃的话，好像必须要有#b#t4031834##k。这样向#b#p2120004##k回答之后，他陷入了沉思。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

