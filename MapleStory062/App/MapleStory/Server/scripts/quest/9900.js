/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9900 中秋节快乐
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b 我收到了 卡珊德拉 #k 准备的礼物。他们说他们每天都会送礼物，直到 10 和 7...");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

