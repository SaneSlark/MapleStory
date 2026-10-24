/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9745 情侣黑巧克力
   开始NPC: 1012102  结束NPC: 1012108
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#p1012108#的脸有点不幸……这真是一个很难看到的景象。但独唱的嫉妒难道不可怕吗？");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

