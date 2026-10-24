/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10039 中秋节快乐
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我收到了 卡珊德拉 准备的礼物。  他们说从#b9月21日#k每天都会送礼物......");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

