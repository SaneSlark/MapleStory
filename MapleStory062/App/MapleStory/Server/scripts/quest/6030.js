/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 6030 卡森的炼金术课程
   开始NPC: 2110004  结束NPC: 2111000
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("去找炼金术士莫力恩学习新技术，他让我去杰努麦斯协会会长卡森那里学习炼金术基础课程。啊……好像会很无聊吧……");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

