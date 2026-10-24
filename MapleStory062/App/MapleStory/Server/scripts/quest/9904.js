/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9904 消灭克朗国王
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b 卡珊德拉 #k 每天都寻求帮助，直到 10/21。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

