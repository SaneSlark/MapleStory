/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 4570 枫叶礼品卡组合
   开始NPC: 9270035  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("只要枫叶礼品卡组合正确的话, 我便能的提升它的等级!");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

