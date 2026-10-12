/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9991 枫险世界速度问答题
   开始NPC: 9010010  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("琦仙灵以为了枫险世界的玩家准备了速度问答题！ 让我去试一试我对枫险世界的认识。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

