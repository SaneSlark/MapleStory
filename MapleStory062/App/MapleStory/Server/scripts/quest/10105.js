/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10105 希纳斯之书第2集
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("是时候寻找希纳斯之书 第2集. 不知下一集的内容会写些什么.");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

