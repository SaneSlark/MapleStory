/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10046 好好照顾鸟宝宝
   开始NPC: 9000021  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("好久没见到 #p9000042#. 不知道他身在何处.");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

