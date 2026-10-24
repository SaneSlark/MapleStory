/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10066 过去的记忆
   开始NPC: 2120005  结束NPC: 2120005
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("皮托是钢琴家吗？你现在怎么不在这座宅子里？");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

