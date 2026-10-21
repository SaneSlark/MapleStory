/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 4466 等级２0的特别礼物
   开始NPC: 9010000  结束NPC: 9010000
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("加油~ 您只差一点就到等级30了! 您知道你能在等级30时，做第二职业专职吧? 欢呼~~");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

