/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 29505 头衔挑战 - 嘉年华胜利战斗者嘉年华战斗者 
   开始NPC: 2042005  结束NPC: 2042005
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("如果你认为你是怪物嘉年华第二季里拥有最多胜利次数，请找休彼德蔓并获得#嘉年华胜利战斗者#k勋章!");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("如果你认为你是怪物嘉年华第二季里拥有最多胜利次数，请找休彼德蔓并获得#嘉年华胜利战斗者#k勋章!");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

