/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9970 佩蒂特的维修零件
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我把获得的零件拿到了#b#p9010010##k。当收音机正常工作时，佩蒂特非常高兴。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

