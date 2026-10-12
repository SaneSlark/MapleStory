/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 29503 头衔挑战 - 捐款之王
   开始NPC: 9000040  结束NPC: 9000040
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#e头衔挑战 - The 捐款之王#n(特别头衔)\n#k挑战此头衔 #e#b捐款之王#k#n, 象征着财富和荣誉，只有一名玩家可以拥有！ 他说他正在挑选每个城镇的捐款之王。 去见见 #b#p9000040##k, 荣誉的祭司。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#e头衔挑战 - The 捐款之王#n(特别头衔)\n#k挑战此头衔 #e#b捐款之王#k#n, 象征着财富和荣誉，只有一名玩家可以拥有！ 他说他正在挑选每个城镇的捐款之王。 去见见 #b#p9000040##k, 荣誉的祭司。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

