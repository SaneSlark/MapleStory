/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20610 仍然永无止境的训练
   开始NPC: 1101002  结束NPC: 1101002
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("这段时间，已经学会不少技能了吧？想必也熟练了……现在该学习#b新技能#k了吧？");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

