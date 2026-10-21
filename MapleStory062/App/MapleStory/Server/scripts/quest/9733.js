/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9733 帮助高登爷爷！
   开始NPC: 9270035  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("星缘一副担心的表情。一定是有什么烦心的事情……去问问星缘是什么事情吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

