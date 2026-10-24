/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10043 领取月花年糕
   开始NPC: 9001101  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("收到来自月球的5个月花年糕。但尽管它们看起来很相似，但似乎有什么不同？有什么不同？");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

