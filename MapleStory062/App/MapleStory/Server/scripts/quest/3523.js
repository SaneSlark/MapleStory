/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3523 追随遗忘的记忆
   开始NPC: 1022000  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("按照旁观者的说法，要找回失去的记忆，必须回到开始的时候。冒险开始的时候……不就是离开枫之岛，踏上维多利亚岛的转职的时候吗？去见见#b#p1022000##k吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

