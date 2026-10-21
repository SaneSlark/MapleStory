/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9934 香甜的食物
   开始NPC: 2120006  结束NPC: 2120006
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("觉得在舞会上最重要的东西是可以为舞会添香的#b香甜的食物#k。和#b#p2120006##k说了之后，她好像同意地优雅地点了点头。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

