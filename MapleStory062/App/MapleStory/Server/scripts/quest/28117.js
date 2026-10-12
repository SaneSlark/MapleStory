/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 28117 4根蜡烛 
   开始NPC: 9000021  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我们能从#b#p9000021##k得到蜡烛？枫险之旅4周年纪念活动! 听起来很好玩似的！");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

