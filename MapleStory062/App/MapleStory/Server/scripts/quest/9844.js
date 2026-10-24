/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9844 星精灵的责骂
   开始NPC: 9010010  结束NPC: 2012020
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我责骂星精灵对任何人使用魔法。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

