/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2152 传闻的真相-巴缇
   开始NPC: 1032104  结束NPC: 1032104
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("快来吧。有什么事吗？\r\n#b 了解鬼树吗？");
    else if (status == 1) qm.sendNext("是在帮#p1022006# 博士的研究吗？是啊，我也是受博士之托来调查，不过没有什么发现。只知道最近与#m102000000#接壤的魔法林开始干枯了。虽然速度较慢，但一定要引起警觉。\r\n#b好，感谢你抽空帮我。");
    else if (status == 2) qm.sendNext("很抱歉，没能帮上什么忙。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

