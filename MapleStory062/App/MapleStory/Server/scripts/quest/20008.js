/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20008 骑士之路
   开始NPC: 1102000  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("对皇后的忠诚。有勇气不惧怕黑巫师。在任何情况下都保持信念的意愿。只要不忘记这三件事，就能作为天鹅骑士团的一员战斗到最后。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

