/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9951 他们的名字叫海盗
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("枫之岛各地都有奇怪的人们。充满自信的脸庞和神奇的武器…从他们的身上隐隐约约能感觉到大海的气息，他们到底是什么人呢？去问问#b#p9310060##k吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

