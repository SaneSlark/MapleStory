/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9984 剩余枫叶
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我得马上去见#b#p9010010##k。听说她有关于冒险岛秋之祭典的特别消息要告诉我……");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

