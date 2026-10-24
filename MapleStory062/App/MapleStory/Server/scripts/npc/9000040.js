/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 9000040
   覆盖任务: 29000, 29001, 29002, 29003, 29300, 29301, 29302, 29303, 29304, 29400, 29500, 29501, 29502, 29503
   ============================================================ */
importPackage(net.sf.odinms.client);

var status = -1;

function start() {
    status = -1;
    qfresh = true;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    cm.sendOk("……");
    cm.dispose();
}

var qstatus = -1;
var qact = -1;
var qid = -1;
var qactive = false;
var qfresh = false;
function qQuestAction(mode, type, selection) {
    if (!qactive) {
        if (!qfresh || mode != 1) return false;
        qfresh = false;
    var opts = '';
    var n = 0;
    if (cm.getQuestStatus(29000) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 组队任务狂" + "#l"; n++; }
    if (cm.getQuestStatus(29001) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 任务专家" + "#l"; n++; }
    if (cm.getQuestStatus(29002) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 最受欢迎先生!" + "#l"; n++; }
    if (cm.getQuestStatus(29003) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 用功的冒险家" + "#l"; n++; }
    if (cm.getQuestStatus(29300) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 战士 接近无敌" + "#l"; n++; }
    if (cm.getQuestStatus(29301) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 魔法师 接近无敌" + "#l"; n++; }
    if (cm.getQuestStatus(29302) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 弓箭手 接近无敌" + "#l"; n++; }
    if (cm.getQuestStatus(29303) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 飞侠 接近无敌" + "#l"; n++; }
    if (cm.getQuestStatus(29304) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 海盗 接近无敌" + "#l"; n++; }
    if (cm.getQuestStatus(29400) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 最有经验的猎人" + "#l"; n++; }
    if (cm.getQuestStatus(29500) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 枫叶偶像明星" + "#l"; n++; }
    if (cm.getQuestStatus(29501) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 暗黑龙王屠宰者" + "#l"; n++; }
    if (cm.getQuestStatus(29502) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 粉红魔宝屠宰者" + "#l"; n++; }
    if (cm.getQuestStatus(29503) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 捐款之王" + "#l"; n++; }
    if ((cm.getQuestStatus(29000) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29000) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 15) && (cm.haveItem(1142001, 1))) { opts += "\r\n#L" + n + "#[接受] " + "头衔挑战 - 组队任务狂" + "#l"; n++; }
    if ((cm.getQuestStatus(29001) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29001) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 30) && (cm.haveItem(1142002, 1))) { opts += "\r\n#L" + n + "#[接受] " + "头衔挑战 - 任务专家" + "#l"; n++; }
    if ((cm.getQuestStatus(29002) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29002) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 20) && (cm.haveItem(1142003, 1))) { opts += "\r\n#L" + n + "#[接受] " + "头衔挑战 - 最受欢迎先生!" + "#l"; n++; }
    if ((cm.getQuestStatus(29003) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29003) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 20) && (cm.haveItem(1142000, 1))) { opts += "\r\n#L" + n + "#[接受] " + "头衔挑战 - 用功的冒险家" + "#l"; n++; }
    if ((cm.getQuestStatus(29300) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 180) && ((cm.getJob().getId() == 100 || cm.getJob().getId() == 110 || cm.getJob().getId() == 120 || cm.getJob().getId() == 130 || cm.getJob().getId() == 111 || cm.getJob().getId() == 121 || cm.getJob().getId() == 131 || cm.getJob().getId() == 112 || cm.getJob().getId() == 122 || cm.getJob().getId() == 132)) && (cm.haveItem(1142009, 1))) { opts += "\r\n#L" + n + "#[接受] " + "头衔挑战 - 战士 接近无敌" + "#l"; n++; }
    if ((cm.getQuestStatus(29301) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29301) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 180) && ((cm.getJob().getId() == 200 || cm.getJob().getId() == 210 || cm.getJob().getId() == 220 || cm.getJob().getId() == 230 || cm.getJob().getId() == 211 || cm.getJob().getId() == 221 || cm.getJob().getId() == 231 || cm.getJob().getId() == 212 || cm.getJob().getId() == 222 || cm.getJob().getId() == 232)) && (cm.haveItem(1142010, 1))) { opts += "\r\n#L" + n + "#[接受] " + "头衔挑战 - 魔法师 接近无敌" + "#l"; n++; }
    if ((cm.getQuestStatus(29302) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29302) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 180) && ((cm.getJob().getId() == 300 || cm.getJob().getId() == 310 || cm.getJob().getId() == 320 || cm.getJob().getId() == 311 || cm.getJob().getId() == 321 || cm.getJob().getId() == 312 || cm.getJob().getId() == 322)) && (cm.haveItem(1142011, 1))) { opts += "\r\n#L" + n + "#[接受] " + "头衔挑战 - 弓箭手 接近无敌" + "#l"; n++; }
    if ((cm.getQuestStatus(29303) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29303) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 180) && ((cm.getJob().getId() == 400 || cm.getJob().getId() == 410 || cm.getJob().getId() == 420 || cm.getJob().getId() == 411 || cm.getJob().getId() == 421 || cm.getJob().getId() == 412 || cm.getJob().getId() == 422)) && (cm.haveItem(1142012, 1))) { opts += "\r\n#L" + n + "#[接受] " + "头衔挑战 - 飞侠 接近无敌" + "#l"; n++; }
    if ((cm.getQuestStatus(29304) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29304) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 180) && ((cm.getJob().getId() == 500 || cm.getJob().getId() == 510 || cm.getJob().getId() == 520 || cm.getJob().getId() == 511 || cm.getJob().getId() == 521 || cm.getJob().getId() == 512 || cm.getJob().getId() == 522)) && (cm.haveItem(1142013, 1))) { opts += "\r\n#L" + n + "#[接受] " + "头衔挑战 - 海盗 接近无敌" + "#l"; n++; }
    if ((cm.getQuestStatus(29400) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29400) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 10)) { opts += "\r\n#L" + n + "#[接受] " + "头衔挑战 - 最有经验的猎人" + "#l"; n++; }
    if ((cm.getQuestStatus(29500) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29500) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1142003, 1))) { opts += "\r\n#L" + n + "#[接受] " + "头衔挑战 - 枫叶偶像明星" + "#l"; n++; }
    if ((cm.getQuestStatus(29501) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29501) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3707) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "头衔挑战 - 暗黑龙王屠宰者" + "#l"; n++; }
    if ((cm.getQuestStatus(29502) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29502) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3521) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "头衔挑战 - 粉红魔宝屠宰者" + "#l"; n++; }
    if ((cm.getQuestStatus(29503) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29503) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 30)) { opts += "\r\n#L" + n + "#[接受] " + "头衔挑战 - 捐款之王" + "#l"; n++; }
    if (n == 0) return false;
    qact = -1;
    cm.sendSimple("有什么我能帮你的吗?\r\n" + opts);
    qactive = true;
    return true;
    }
    if (mode != 1) { cm.dispose(); return true; }
    qstatus++;
    if (qstatus == 0) {
        var qt = "";
        var qi = -1;
        qact = -1;
        qid = -1;
        if (cm.getQuestStatus(29000) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29000; } }
        if (cm.getQuestStatus(29001) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29001; } }
        if (cm.getQuestStatus(29002) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29002; } }
        if (cm.getQuestStatus(29003) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29003; } }
        if (cm.getQuestStatus(29300) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29300; } }
        if (cm.getQuestStatus(29301) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29301; } }
        if (cm.getQuestStatus(29302) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29302; } }
        if (cm.getQuestStatus(29303) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29303; } }
        if (cm.getQuestStatus(29304) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29304; } }
        if (cm.getQuestStatus(29400) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29400; } }
        if (cm.getQuestStatus(29500) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29500; } }
        if (cm.getQuestStatus(29501) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29501; } }
        if (cm.getQuestStatus(29502) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29502; } }
        if (cm.getQuestStatus(29503) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29503; } }
        if ((cm.getQuestStatus(29000) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29000) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 15) && (cm.haveItem(1142001, 1))) { qi++; if (selection == qi) { qact = 0; qid = 29000; } }
        if ((cm.getQuestStatus(29001) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29001) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 30) && (cm.haveItem(1142002, 1))) { qi++; if (selection == qi) { qact = 0; qid = 29001; } }
        if ((cm.getQuestStatus(29002) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29002) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 20) && (cm.haveItem(1142003, 1))) { qi++; if (selection == qi) { qact = 0; qid = 29002; } }
        if ((cm.getQuestStatus(29003) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29003) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 20) && (cm.haveItem(1142000, 1))) { qi++; if (selection == qi) { qact = 0; qid = 29003; } }
        if ((cm.getQuestStatus(29300) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 180) && ((cm.getJob().getId() == 100 || cm.getJob().getId() == 110 || cm.getJob().getId() == 120 || cm.getJob().getId() == 130 || cm.getJob().getId() == 111 || cm.getJob().getId() == 121 || cm.getJob().getId() == 131 || cm.getJob().getId() == 112 || cm.getJob().getId() == 122 || cm.getJob().getId() == 132)) && (cm.haveItem(1142009, 1))) { qi++; if (selection == qi) { qact = 0; qid = 29300; } }
        if ((cm.getQuestStatus(29301) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29301) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 180) && ((cm.getJob().getId() == 200 || cm.getJob().getId() == 210 || cm.getJob().getId() == 220 || cm.getJob().getId() == 230 || cm.getJob().getId() == 211 || cm.getJob().getId() == 221 || cm.getJob().getId() == 231 || cm.getJob().getId() == 212 || cm.getJob().getId() == 222 || cm.getJob().getId() == 232)) && (cm.haveItem(1142010, 1))) { qi++; if (selection == qi) { qact = 0; qid = 29301; } }
        if ((cm.getQuestStatus(29302) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29302) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 180) && ((cm.getJob().getId() == 300 || cm.getJob().getId() == 310 || cm.getJob().getId() == 320 || cm.getJob().getId() == 311 || cm.getJob().getId() == 321 || cm.getJob().getId() == 312 || cm.getJob().getId() == 322)) && (cm.haveItem(1142011, 1))) { qi++; if (selection == qi) { qact = 0; qid = 29302; } }
        if ((cm.getQuestStatus(29303) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29303) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 180) && ((cm.getJob().getId() == 400 || cm.getJob().getId() == 410 || cm.getJob().getId() == 420 || cm.getJob().getId() == 411 || cm.getJob().getId() == 421 || cm.getJob().getId() == 412 || cm.getJob().getId() == 422)) && (cm.haveItem(1142012, 1))) { qi++; if (selection == qi) { qact = 0; qid = 29303; } }
        if ((cm.getQuestStatus(29304) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29304) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 180) && ((cm.getJob().getId() == 500 || cm.getJob().getId() == 510 || cm.getJob().getId() == 520 || cm.getJob().getId() == 511 || cm.getJob().getId() == 521 || cm.getJob().getId() == 512 || cm.getJob().getId() == 522)) && (cm.haveItem(1142013, 1))) { qi++; if (selection == qi) { qact = 0; qid = 29304; } }
        if ((cm.getQuestStatus(29400) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29400) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 10)) { qi++; if (selection == qi) { qact = 0; qid = 29400; } }
        if ((cm.getQuestStatus(29500) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29500) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1142003, 1))) { qi++; if (selection == qi) { qact = 0; qid = 29500; } }
        if ((cm.getQuestStatus(29501) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29501) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3707) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 29501; } }
        if ((cm.getQuestStatus(29502) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29502) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3521) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 29502; } }
        if ((cm.getQuestStatus(29503) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(29503) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 30)) { qi++; if (selection == qi) { qact = 0; qid = 29503; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 29000) qt = "你在五个组队任务中得到S-等级! 真是成绩非凡.";
        if (qid == 29001) qt = "你已完成 800任务! 活动任务不包括在内. 真是成绩非凡.";
        if (qid == 29002) qt = "#b#e 头衔挑战 - 最受欢迎先生!#n\n#k将赐予能在30天内取得人气度+1000的玩家的头衔。去向德烈挑战吧！并赢得 #e#b最受欢迎先生#n#k 勋章。";
        if (qid == 29003) qt = "你成功每天三小时不断,连续27天玩此游戏. 真是成绩非凡.";
        if (qid == 29300) qt = "拿去吧.";
        if (qid == 29301) qt = "你已达到 战士 等级 200! 真是成绩非凡.";
        if (qid == 29302) qt = "你已达到 弓箭手等级 200! 真是成绩非凡.";
        if (qid == 29303) qt = "你已达到 飞侠 等级 200! 真是成绩非凡.";
        if (qid == 29304) qt = "你已达到 海盗 等级 200! 真是成绩非凡.";
        if (qid == 29400) qt = "#b#e 头衔挑战 - 最有经验的猎人#n\n#k 在30天内，猎杀#r100000#k怪物等级高于自己的等级! 德烈,荣誉的祭司 在寻找最有经验与聪明的猎人们. 他将授予做到此举的玩家们#e#b最有经验的猎人#k#n头衔！#e#b 传奇猎神 (特别头衔)#n#k 最优秀的猎人将授予此特别头衔！";
        if (qid == 29500) qt = "#b#e头衔挑战 - 枫叶偶像明星#n(特别头衔)\n#k谁是枫险世界最爱的万人迷？德烈，荣誉的祭司将授予#e#b枫叶偶像明星#k#n头衔！";
        if (qid == 29501) qt = "#b#e头衔挑战 - 暗黑龙王屠宰者#n(特别头衔)\n#k 头衔 #e#b暗黑龙王 屠宰者 #k#n, 头衔将授予于诛戮最多的暗黑龙王的玩家。头衔只能有一位得主。德烈说诛戮后而没有通知他的次数将不会被计算。";
        if (qid == 29502) qt = "#b#e头衔挑战 - 粉红魔宝屠宰者#n(特别头衔)\n# 荣誉头衔 #e#b粉红魔宝 屠宰者 #k#n, 头衔将授予于诛戮最多的粉红魔宝的玩家。头衔只能有一位得主。德烈说诛戮后而没有通知他的次数将不会被计算。";
        if (qid == 29503) qt = "#b#e头衔挑战 - 捐款之王#n(特别头衔)\n#k挑战此头衔 #e#b捐款之王#k#n, 象征着财富和荣誉，只有一名玩家可以拥有！ 他说他正在挑选每个城镇的捐款之王。 去见见 #b#p9000040##k, 荣誉的祭司。";
        if (qid == 29000) qt = "#v1142001# #e#b#t1142001##k\n\n - 组队任务中得到五个S-等级. \n\n#n你可想看看你是否有资格拥有这面奖牌?";
        if (qid == 29001) qt = "#v1142002# #e#b#t1142002##k\n\n - 800 个任务完成 (活动任务例外). \n\n#n 你可想看看你是否有资格拥有这面奖牌?";
        if (qid == 29002) qt = "#b#e 头衔挑战 - 最受欢迎先生!#n\n#k将赐予能在30天内取得人气度+1000的玩家的头衔。去向德烈挑战吧！并赢得 #e#b最受欢迎先生#n#k 勋章。";
        if (qid == 29003) qt = "#v1142000# #e#b#t1142000##k\n\n -时限30天\n - 每天三小时不断,连续27天玩此游戏. \n\n#n 你可想看看你是否有资格拥有这面奖牌?";
        if (qid == 29300) qt = "我, 德烈 以荣誉之神的名誉向世界宣布 你就是此头衔的得主. 请回到我这里.";
        if (qid == 29301) qt = "#v1142009# #e#b#t1142009##k\n\n - 达到 魔法师 等级 200 \n\n#n你可想看看你是否有资格拥有这面奖牌?";
        if (qid == 29302) qt = "#v1142009# #e#b#t1142009##k\n\n - 达到 弓箭手 等级 200 \n\n#n你可想看看你是否有资格拥有这面奖牌?";
        if (qid == 29303) qt = "#v1142009# #e#b#t1142009##k\n\n -  达到 飞侠 等级 200 \n\n#n你可想看看你是否有资格拥有这面奖牌?";
        if (qid == 29304) qt = "#v1142009# #e#b#t1142009##k\n\n -达到 海盗 等级 200 \n\n#n你可想看看你是否有资格拥有这面奖牌?";
        if (qid == 29400) qt = "#b#e 头衔挑战 - 最有经验的猎人#n\n#k 在30天内，猎杀#r100000#k怪物等级高于自己的等级! 德烈,荣誉的祭司 在寻找最有经验与聪明的猎人们. 他将授予做到此举的玩家们#e#b最有经验的猎人#k#n头衔！#e#b 传奇猎神 (特别头衔)#n#k 最优秀的猎人将授予此特别头衔！";
        if (qid == 29500) qt = "#b#e头衔挑战 - 枫叶偶像明星#n(特别头衔)\n#k谁是枫险世界最爱的万人迷？德烈，荣誉的祭司将授予#e#b枫叶偶像明星#k#n头衔！";
        if (qid == 29501) qt = "#b#e头衔挑战 - 暗黑龙王屠宰者#n(特别头衔)\n#k 头衔 #e#b暗黑龙王 屠宰者 #k#n, 头衔将授予于诛戮最多的暗黑龙王的玩家。头衔只能有一位得主。德烈说诛戮后而没有通知他的次数将不会被计算。";
        if (qid == 29502) qt = "#i1140003##e#b#t1140003##k\n\n#n累计20,000 人气度\n\n\n你可想看看你是否有资格拥有这面奖牌?";
        if (qid == 29503) qt = "#b#e头衔挑战 - 捐款之王#n(特别头衔)\n#k挑战此头衔 #e#b捐款之王#k#n, 象征着财富和荣誉，只有一名玩家可以拥有！ 他说他正在挑选每个城镇的捐款之王。 去见见 #b#p9000040##k, 荣誉的祭司。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 29000) cm.completeQuest(29000);
            if (qid == 29001) cm.completeQuest(29001);
            if (qid == 29002) cm.completeQuest(29002);
            if (qid == 29003) cm.completeQuest(29003);
            if (qid == 29300) cm.completeQuest(29300);
            if (qid == 29301) cm.completeQuest(29301);
            if (qid == 29302) cm.completeQuest(29302);
            if (qid == 29303) cm.completeQuest(29303);
            if (qid == 29304) cm.completeQuest(29304);
            if (qid == 29400) cm.completeQuest(29400);
            if (qid == 29500) cm.completeQuest(29500);
            if (qid == 29501) cm.completeQuest(29501);
            if (qid == 29502) cm.completeQuest(29502);
            if (qid == 29503) cm.completeQuest(29503);
        } else {
            if (qid == 29000) cm.startQuest(29000);
            if (qid == 29001) cm.startQuest(29001);
            if (qid == 29002) cm.startQuest(29002);
            if (qid == 29003) cm.startQuest(29003);
            if (qid == 29300) cm.startQuest(29300);
            if (qid == 29301) cm.startQuest(29301);
            if (qid == 29302) cm.startQuest(29302);
            if (qid == 29303) cm.startQuest(29303);
            if (qid == 29304) cm.startQuest(29304);
            if (qid == 29400) cm.startQuest(29400);
            if (qid == 29500) cm.startQuest(29500);
            if (qid == 29501) cm.startQuest(29501);
            if (qid == 29502) cm.startQuest(29502);
            if (qid == 29503) cm.startQuest(29503);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
