/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9683 日日活动　３月 １０号
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我有预感，见了#b#p9010010##k过后将会有好事发生．．．");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

