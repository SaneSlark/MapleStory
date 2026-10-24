/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9695 声母测验 2 月 18 日
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("现在。那么，我们要解决这个问题吗？");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

