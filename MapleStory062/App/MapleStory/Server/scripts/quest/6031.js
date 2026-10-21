/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 6031 秀兹的科学课程
   开始NPC: 2110004  结束NPC: 2012017
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("去找炼金术士莫力恩学习新技术，他让我去古怪的科学家秀兹那里学习科学基础课程。啊……我有点担心。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

