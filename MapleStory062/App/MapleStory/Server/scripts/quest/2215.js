/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2215 找回皱巴巴的纸片
   开始NPC: 1052002  结束NPC: 1052108
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b(把手伸进积满灰尘的垃圾箱里，摸到了什么唏嗦作响的东西。您要把它拿出来吗？)#k");
    else if (status == 1) qm.sendNext("#b(拿出来的是一张沾满了蜘蛛网的皱巴巴的纸。)#k");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

