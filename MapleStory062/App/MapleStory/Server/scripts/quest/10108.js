/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10108 改变绿色运动奖章
   开始NPC: 9010000  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("您可以再次访问管理员来更改您的绿色运动勋章。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

