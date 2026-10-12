function start() {
    qfresh = true;
    if (qQuestAction(1, 0, 0)) return;
	cm.sendOk ("#r0.  最新公告都在这里更新,每晚8点活动#k \r\n1.  点击右下角绿色窗口#b拍卖#k.享受快捷服务\r\n2.  在聊天窗输入#e#b@wnnpc#n#k 打开快捷服务\r\n3.  在聊天窗输入#e#b@ziyou#n#k 快速回自由市场\r\n4.  登陆其他帐号输入#b@zijiu [卡号的帐号]#k 卡号自救\r\n5.  在自由市场每分钟可以#b泡经验、金钱#k\r\n4.  快乐百宝箱出#b稀有装备、高级百宝券#k\r\n5.  高级快乐百宝箱出#b绝版装备、祝福卷\r\n#k6.  高级百宝箱豆豆票出#b绝世装备、神器#k\r\n6.  挑战勇士之魂得#b高级百宝券、GM装备#k,奖励递增\r\n7.  金币最高上限21亿,超过变负数,不过可以存#b仓库、银行#k\r\n8.  所有东东都可以靠自己的努力获取,#b人人平等#K");
	cm.dispose();
}

function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
}

/* AUTO-QUEST-BEGIN */
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
    if (cm.getQuestStatus(9800) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "4周年纪念升级活动" + "#l"; n++; }
    if (cm.getQuestStatus(4463) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "等级10的特别礼物" + "#l"; n++; }
    if (cm.getQuestStatus(4466) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "等级２0的特别礼物" + "#l"; n++; }
    if (cm.getQuestStatus(4467) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "等级３0的特别礼物" + "#l"; n++; }
    if (cm.getQuestStatus(4468) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "等级４0的特别礼物" + "#l"; n++; }
    if (cm.getQuestStatus(4469) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "等级５0的特别礼物" + "#l"; n++; }
    if (cm.getQuestStatus(10052) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? 2000?? ???" + "#l"; n++; }
    if (cm.getQuestStatus(10110) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "金大亨的邀请" + "#l"; n++; }
    if (cm.getQuestStatus(9981) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "4周年纪念升级活动" + "#l"; n++; }
    if (cm.getQuestStatus(10206) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "黑魔法师的足迹" + "#l"; n++; }
    if (cm.getQuestStatus(10207) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "黑魔法师的足迹" + "#l"; n++; }
    if (cm.getQuestStatus(10208) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "黑魔法师的足迹" + "#l"; n++; }
    if (cm.getQuestStatus(10209) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "黑魔法师的足迹" + "#l"; n++; }
    if ((cm.getQuestStatus(1048) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 8) && (cm.getLevel() <= 10) && ((cm.getJob().getId() == 0))) { opts += "\r\n#L" + n + "#[接受] " + "职业介绍" + "#l"; n++; }
    if ((cm.getQuestStatus(1049) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 20) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(1048) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "成为战士" + "#l"; n++; }
    if ((cm.getQuestStatus(1050) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 8) && (cm.getLevel() <= 20) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(1048) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "成为魔法师" + "#l"; n++; }
    if ((cm.getQuestStatus(1051) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 20) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(1048) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "成为弓箭手" + "#l"; n++; }
    if ((cm.getQuestStatus(1052) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 20) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(1048) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "成为飞侠" + "#l"; n++; }
    if ((cm.getQuestStatus(1053) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 20) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(1048) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "成为海盗" + "#l"; n++; }
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
        if (cm.getQuestStatus(9800) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9800; } }
        if (cm.getQuestStatus(4463) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4463; } }
        if (cm.getQuestStatus(4466) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4466; } }
        if (cm.getQuestStatus(4467) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4467; } }
        if (cm.getQuestStatus(4468) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4468; } }
        if (cm.getQuestStatus(4469) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4469; } }
        if (cm.getQuestStatus(10052) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10052; } }
        if (cm.getQuestStatus(10110) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10110; } }
        if (cm.getQuestStatus(9981) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9981; } }
        if (cm.getQuestStatus(10206) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10206; } }
        if (cm.getQuestStatus(10207) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10207; } }
        if (cm.getQuestStatus(10208) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10208; } }
        if (cm.getQuestStatus(10209) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10209; } }
        if ((cm.getQuestStatus(1048) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 8) && (cm.getLevel() <= 10) && ((cm.getJob().getId() == 0))) { qi++; if (selection == qi) { qact = 0; qid = 1048; } }
        if ((cm.getQuestStatus(1049) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 20) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(1048) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 1049; } }
        if ((cm.getQuestStatus(1050) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 8) && (cm.getLevel() <= 20) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(1048) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 1050; } }
        if ((cm.getQuestStatus(1051) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 20) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(1048) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 1051; } }
        if ((cm.getQuestStatus(1052) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 20) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(1048) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 1052; } }
        if ((cm.getQuestStatus(1053) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 20) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(1048) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 1053; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9800) qt = "提供升级时必须的4周年活动枫叶。";
        if (qid == 4463) qt = "训练到等级10一定很简单吧. 您才刚开始你在枫险世界的冒险. 枫险世界是充满了惊喜和快乐. 希望您冒险愉快, 我将在您等级20时再见你. 再见~~";
        if (qid == 4466) qt = "加油~ 您只差一点就到等级30了! 您知道你能在等级30时，做第二职业专职吧? 欢呼~~";
        if (qid == 4467) qt = "记得要在等级30时，做第二职业专职哦. 加油喔!";
        if (qid == 4468) qt = "这结阶段可能对您而言太困难了, 不过你知道吗? 如果有一群好友就会容易多了. 去玩具城组队任务或怪物嘉年华考考自己吧! 您将体验全新的和令人兴奋的感受~";
        if (qid == 4469) qt = "拥有组队队员不错吧? 您已有资格挑战女神之塔组队任务了, 不过也别忘记等级55的大海盗组队任务. 您将在枫险世界体会到永无止境的娱乐~~";
        if (qid == 10052) qt = "? ??? ??? 2000?? ?? ????. ?? ???? ??? ???? ????. #b#h0##k?? ???? ???? ?????? ?? ????? ???????. ? ?? ?? ?????. '???...2000?? ??!' ??? ?? ?? ?? ??? ???.";
        if (qid == 10110) qt = "收到了枫险世界的大商家, #b金大亨#k寄出的信息. 说些什么?";
        if (qid == 9981) qt = "如果你提升等级，将会得到4周年纪念活动的枫叶。";
        if (qid == 10206) qt = "枫险世界管理员正在呼唤你.";
        if (qid == 10207) qt = "枫险世界管理员正在呼唤你.";
        if (qid == 10208) qt = "枫险世界管理员正在呼唤你。";
        if (qid == 10209) qt = "枫险世界管理员正在呼唤你。";
        if (qid == 1048) qt = "他说他要帮助我选择职业。";
        if (qid == 1049) qt = "管理员说我适合当 战士。";
        if (qid == 1050) qt = "管理员说我适合当魔法师。";
        if (qid == 1051) qt = "管理员说我适合当弓箭手。";
        if (qid == 1052) qt = "管理员说我适合当飞侠。";
        if (qid == 1053) qt = "管理员说我适合当海盗。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9800) cm.completeQuest(9800);
            if (qid == 4463) cm.completeQuest(4463);
            if (qid == 4466) cm.completeQuest(4466);
            if (qid == 4467) cm.completeQuest(4467);
            if (qid == 4468) cm.completeQuest(4468);
            if (qid == 4469) cm.completeQuest(4469);
            if (qid == 10052) cm.completeQuest(10052);
            if (qid == 10110) cm.completeQuest(10110);
            if (qid == 9981) cm.completeQuest(9981);
            if (qid == 10206) cm.completeQuest(10206);
            if (qid == 10207) cm.completeQuest(10207);
            if (qid == 10208) cm.completeQuest(10208);
            if (qid == 10209) cm.completeQuest(10209);
        } else {
            if (qid == 1048) cm.startQuest(1048);
            if (qid == 1049) cm.startQuest(1049);
            if (qid == 1050) cm.startQuest(1050);
            if (qid == 1051) cm.startQuest(1051);
            if (qid == 1052) cm.startQuest(1052);
            if (qid == 1053) cm.startQuest(1053);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
