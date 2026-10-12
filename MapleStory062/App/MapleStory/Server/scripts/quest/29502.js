/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 29502 头衔挑战 - 粉红魔宝屠宰者
   开始NPC: 9000040  结束NPC: 9000040
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 0 && status == 0) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendYesNo("#i1140003##e#b#t1140003##k\n\n#n累计20,000 人气度\n\n\n你可想看看你是否有资格拥有这面奖牌?");
    else if (status == 1) qm.sendNext("好的,祝你好运. 此项目没有截止日期.只要你认为自己有资格,就前来接受挑战,我随时恭候.");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#e头衔挑战 - 粉红魔宝屠宰者#n(特别头衔)\n# 荣誉头衔 #e#b粉红魔宝 屠宰者 #k#n, 头衔将授予于诛戮最多的粉红魔宝的玩家。头衔只能有一位得主。德烈说诛戮后而没有通知他的次数将不会被计算。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

