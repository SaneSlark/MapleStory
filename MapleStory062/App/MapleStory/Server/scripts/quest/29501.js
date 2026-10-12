/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 29501 头衔挑战 - 暗黑龙王屠宰者
   开始NPC: 9000040  结束NPC: 9000040
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#e头衔挑战 - 暗黑龙王屠宰者#n(特别头衔)\n#k 头衔 #e#b暗黑龙王 屠宰者 #k#n, 头衔将授予于诛戮最多的暗黑龙王的玩家。头衔只能有一位得主。德烈说诛戮后而没有通知他的次数将不会被计算。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#e头衔挑战 - 暗黑龙王屠宰者#n(特别头衔)\n#k 头衔 #e#b暗黑龙王 屠宰者 #k#n, 头衔将授予于诛戮最多的暗黑龙王的玩家。头衔只能有一位得主。德烈说诛戮后而没有通知他的次数将不会被计算。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

