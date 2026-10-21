/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 29500 头衔挑战 - 枫叶偶像明星
   开始NPC: 9000040  结束NPC: 9000040
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#e头衔挑战 - 枫叶偶像明星#n(特别头衔)\n#k谁是枫险世界最爱的万人迷？德烈，荣誉的祭司将授予#e#b枫叶偶像明星#k#n头衔！");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#e头衔挑战 - 枫叶偶像明星#n(特别头衔)\n#k谁是枫险世界最爱的万人迷？德烈，荣誉的祭司将授予#e#b枫叶偶像明星#k#n头衔！");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

