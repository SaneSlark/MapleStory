/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3108 雪人的愤怒-发现线索
   开始NPC: 2020012  结束NPC: 
   ============================================================ */
var status = -1;
var startClosed = false;

function start(mode, type, selection) {
    if (startClosed) return;
    if (mode == -1) { startClosed = true; qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { startClosed = true; qm.dispose(); return; }
    if (status == 0) qm.sendNext("斯卡德所说的线索是什么呢？去看一下#b雪人之谷#k周边吧。");
    else {
        startClosed = true;
        qm.startQuestInScript(qm.getQuest());
        qm.dispose();
    }
}

