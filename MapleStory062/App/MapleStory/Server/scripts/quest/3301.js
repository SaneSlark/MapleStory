/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3301 杰努麦斯协会会长的考试
   开始NPC: 2111007  结束NPC: 2111007
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("魔法和科学的结合。#b纯粹的炼金术的世界——杰努麦斯#k。但是在#m261000000#对立的时期，杰努麦斯好像不接纳外部人员。不过我真的很想加入杰努麦斯……去找#b#p2111007##k看看吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

