/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9927 和假面绅士的对话
   开始NPC: 2120000  结束NPC: 2120000
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("听说清明踏青舞会的主宰者用奇怪的#r白色面具遮着脸#k。感兴趣的话，就去和他对话吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

