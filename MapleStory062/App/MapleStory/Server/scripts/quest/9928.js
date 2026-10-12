/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9928 奇怪的少女
   开始NPC: 2120005  结束NPC: 2120005
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("按#p2120000#所说，来到了住宅的#b左侧房间#k，和那里的人们进行对话。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

