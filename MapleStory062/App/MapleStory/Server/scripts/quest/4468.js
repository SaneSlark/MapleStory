/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 4468 等级４0的特别礼物
   开始NPC: 9010000  结束NPC: 9010000
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("这结阶段可能对您而言太困难了, 不过你知道吗? 如果有一群好友就会容易多了. 去玩具城组队任务或怪物嘉年华考考自己吧! 您将体验全新的和令人兴奋的感受~");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

