/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 29002 头衔挑战 - 最受欢迎先生!
   开始NPC: 9000040  结束NPC: 9000040
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#e 头衔挑战 - 最受欢迎先生!#n\n#k将赐予能在30天内取得人气度+1000的玩家的头衔。去向德烈挑战吧！并赢得 #e#b最受欢迎先生#n#k 勋章。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#e 头衔挑战 - 最受欢迎先生!#n\n#k将赐予能在30天内取得人气度+1000的玩家的头衔。去向德烈挑战吧！并赢得 #e#b最受欢迎先生#n#k 勋章。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

