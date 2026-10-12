/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3529 寻找遗失的记忆
   开始NPC: 1101002  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("根据旁观者所说，想要寻找遗失的记忆，我要回到冒险旅程的起点。我的险旅程的起点。。。。我猜想应该是当我离开枫之岛时，然后到维多利亚岛进行转职。我应该得去找#b#p1101002##吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

