/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3452 机器章鱼是外星生物？
   开始NPC: 2050001  结束NPC: 2050001
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#m221000000#的#p2050001#说，有了一个新的研究课题！但听说。.若想要进行这项研究，势必要有别人的帮忙。.");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

