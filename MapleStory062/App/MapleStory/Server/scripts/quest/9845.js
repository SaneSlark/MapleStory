/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9845 呼啸的白狼
   开始NPC: 2030001  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#p2030001##k好像有事儿要说…… 点击头上的灯泡吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

