/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2124 沙漠小队的补给品
   开始NPC: 2012019  结束NPC: 2101002
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我在#m200000000#遇到了一只流浪狗#p2012019#。#p2012019#的脖子上挂着一个小盒子，盒子上写着一行字：#b\"致#m260000000#的#p2101002#……\"#k");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

