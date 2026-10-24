/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10037 卡桑德拉的帮助
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("接过食物的#p9010010#笑容灿烂，从口袋里拿出了一张月亮照片。我捡到的照片片段不是别人，正是#p9010010#。我通过#p9010010#获得了三张照片片段之一。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

