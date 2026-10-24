/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9860 卡桑德拉的魔法
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("你知道什么吗？只有我才能施展的特殊魔法。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

