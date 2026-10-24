/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10076 索菲莉亚的遗憾
   开始NPC: 2120004  结束NPC: 2120005
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("变身为皮托并解除了索菲莉亚的诅咒。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

