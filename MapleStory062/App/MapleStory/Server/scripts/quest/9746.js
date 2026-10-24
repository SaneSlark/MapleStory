/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9746 情侣黑巧克力！
   开始NPC: 9000007  结束NPC: 1022002
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我想我对 #p1022002# 做了一些坏事。但是，那个反应……老实说，这太有趣了。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

