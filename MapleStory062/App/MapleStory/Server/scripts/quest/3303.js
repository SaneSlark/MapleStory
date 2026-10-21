/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3303 阿卡德诺协会会长的考试
   开始NPC: 2111007  结束NPC: 2111007
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("炼金术和机械工学的结合。#b全新的炼金术的世界——阿卡德诺#k。阿卡德诺好像不接纳外部人员。不过我真的很想加入阿卡德诺……去找#b#p2111007##k看看吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

