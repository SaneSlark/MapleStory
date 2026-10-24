/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10089 万吉的欢呼
   开始NPC: 1022002  结束NPC: 1022002
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("麦吉 支持绿色运动。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

