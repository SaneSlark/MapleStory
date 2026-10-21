/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2186 找眼镜
   开始NPC: 1094001  结束NPC: 1094001
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("听说在海王港的码头上有谁正烦着呢。他丢失了自己的身体一样重要的东西……");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

