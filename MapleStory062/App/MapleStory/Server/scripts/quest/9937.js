/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9937 想去其他的地方。
   开始NPC: 2120005  结束NPC: 2120005
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("如果觉得好像回答#b苏菲莉亚#k的时候回答错了的话，就去和她说想要#b重新选择#k吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

