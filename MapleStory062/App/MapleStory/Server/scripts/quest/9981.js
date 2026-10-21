/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9981 4周年纪念升级活动
   开始NPC: 9010000  结束NPC: 9010000
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("如果你提升等级，将会得到4周年纪念活动的枫叶。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

