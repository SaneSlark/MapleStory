/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10012 特别命令：寻找头目M的指令书！
   开始NPC: 9000036  结束NPC: 9000036
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("枫之岛世界到处充满了奇怪的气息。头目M到底是谁，让大家紧张成这样？#b#p9000036##k应该会知道点什么。去见见她吧？");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

