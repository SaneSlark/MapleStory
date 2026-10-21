/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 4575 新手的特别礼物
   开始NPC: 2100  结束NPC: 2100
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("你即将开始在枫险世界里进行一连串的冒险旅程. 旅途中将会有特别的惊喜. 希望你能尽情的在枫险世界里闯出名堂, 等你等级10后我们再见了~~");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

