/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10050 鸟宝宝的羽毛
   开始NPC: 9000042  结束NPC: 9000042
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("一只刚孵出的小鸟带着恍惚的神情飞走了. 现场只留下一些羽毛. 看来它有话想跟#b#p9000042##k说.");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

