/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 8189 宠物的再进化
   开始NPC: 9102001  结束NPC: 
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("若不喜欢目前龙的样貌，便可重新再尝试一次进化的过程！");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

