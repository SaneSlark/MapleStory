/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20720 军事派遣任务开始前
   开始NPC: 1101002  结束NPC: 1101002
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("到目前为止，你的升级顺利吗？您现在可能正在拨打 #m103000000# 进行派对任务。升级固然很好，但你需要承担一段时间的骑士职责。新信息已经到来。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

