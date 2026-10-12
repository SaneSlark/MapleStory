/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9931 苏菲莉亚的肖像画
   开始NPC: 2120004  结束NPC: 2120004
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("要制作和女儿相像的完美的娃娃的话，当然就需要#p2120004#——他女儿的#r肖像画#k。这样回答之后，#b#p2120004##k一脸忧郁地陷入了沉思。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

