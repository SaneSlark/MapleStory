/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9939 好像回答错了。
   开始NPC: 2120006  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("仔细想了一下，宴会最重要的好像是其他地方。去跟#b#p2120006##k说刚才好像选择了#b错误的答案#k吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

