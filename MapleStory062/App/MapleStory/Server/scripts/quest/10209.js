/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10209 黑魔法师的足迹
   开始NPC: 9010000  结束NPC: 9010000
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 0 && status == 0) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendYesNo("随着涅槃岛世界中天鹅女皇的出现，黑魔法师的能量似乎又变强了一些。有消息称，一种物质已经被黑巫师的能量所转化。如果吃了变化的物质，你可能会变成更强大的怪物。我需要分析这种变化的物质...你能帮我吗？");
    else if (status == 1) qm.sendNext("谢谢。这种改变的物质和它的黑色能量可以改变你。你应该得到... #b#t4001240# #k。你可以收集更改的材料并将它们带给我，或者你可以将它们交给加加或卡珊德拉。因为每个人做的研究不同，报酬也会不同吧？那么我请你帮个忙。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("枫险世界管理员正在呼唤你。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

