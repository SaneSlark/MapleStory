/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 4463 等级10的特别礼物
   开始NPC: 9010000  结束NPC: 9010000
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("训练到等级10一定很简单吧. 您才刚开始你在枫险世界的冒险. 枫险世界是充满了惊喜和快乐. 希望您冒险愉快, 我将在您等级20时再见你. 再见~~");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

