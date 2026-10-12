/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 4585 Gemini头巾活动
   开始NPC: 9010000  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("欢迎来到Gemini, 第6个枫险世界! 我们有个特别的礼物等着你哦~");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

