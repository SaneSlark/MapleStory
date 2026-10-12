/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10207 黑魔法师的足迹
   开始NPC: 9010000  结束NPC: 9010000
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 0 && status == 0) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendYesNo("自从希纳斯女神重回枫险世界，似乎黑暗魔法师的力量也随着加强了. 我甚至听说有个道具因黑暗魔法师的力量而改变了！如果让怪物食下这个道具的话，他们将变成难以对付的强劲怪物。我必须找到此物后，加以研究.你能帮我吗？");
    else if (status == 1) qm.sendNext("谢谢你.这包围着变质道具的强力黑暗的气息...足以变质任何事物. 我希望你能为我找来...#b#t4001237##k.请你收集变质变质道具后交给我，或你也能交给佳佳还是琦仙灵.因为我们同时都在进行不同的研究，奖励也将不一样. 在此先向你说谢谢.");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("枫险世界管理员正在呼唤你.");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

