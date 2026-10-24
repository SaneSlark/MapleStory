/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10069 幽灵T是谁？
   开始NPC: 2120008  结束NPC: 2120008
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b 幽灵T #k 是 #b 皮特 #k。这座豪宅发生了什么？");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

