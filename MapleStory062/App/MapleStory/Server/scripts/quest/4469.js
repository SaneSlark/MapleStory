/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 4469 等级５0的特别礼物
   开始NPC: 9010000  结束NPC: 9010000
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("拥有组队队员不错吧? 您已有资格挑战女神之塔组队任务了, 不过也别忘记等级55的大海盗组队任务. 您将在枫险世界体会到永无止境的娱乐~~");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

