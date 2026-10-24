/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10222 令人兴奋的枫树！令人兴奋的我的宠物！
   开始NPC: 9010000  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("探索冰冷世界的冒险家心中总是充满着令人兴奋的好奇心。据说枫操作员对这个好奇心很感兴趣……");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

