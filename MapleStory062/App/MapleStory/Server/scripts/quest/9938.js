/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9938 想要重新选择。
   开始NPC: 2120004  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("仔细想了一下，制作完美的娃娃所需的东西应该不是刚才选择的东西……去和#b#p2120004##k对话，说想#b重新选择#k吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

