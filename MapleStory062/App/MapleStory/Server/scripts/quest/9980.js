/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9980 特安可的怪物卡
   开始NPC: 2006  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("利斯海港的特安可将会派送怪物卡作为4周年纪念礼。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

