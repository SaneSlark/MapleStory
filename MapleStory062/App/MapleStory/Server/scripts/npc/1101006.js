/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1101006
   覆盖任务: 20104, 20204, 20304, 20314, 20604, 20614
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
    if (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u591c\u884c\u8005\u4e4b\u8def" + "#l"; n++; }
    if (cm.getQuestStatus(20204) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u9a91\u58eb\u6c83\u514b\u7684\u9a91\u58eb\u7b49\u7ea7\u6d4b\u8bd5" + "#l"; n++; }
    if (cm.getQuestStatus(20304) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u53d8\u5f62\u8005" + "#l"; n++; }
    if (cm.getQuestStatus(20604) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u591c\u884c\u8005\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
    if (cm.getQuestStatus(20614) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u591c\u884c\u8005\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
    if ((cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u591c\u884c\u8005\u4e4b\u8def" + "#l"; n++; }
    if ((cm.getQuestStatus(20204) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1400)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u9a91\u58eb\u6c83\u514b\u7684\u9a91\u58eb\u7b49\u7ea7\u6d4b\u8bd5" + "#l"; n++; }
    if ((cm.getQuestStatus(20304) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1410)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u53d8\u5f62\u8005" + "#l"; n++; }
    if ((cm.getQuestStatus(20314) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1410)) && (cm.getQuestStatus(20304) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u795e\u517d\u4e4b\u6cea" + "#l"; n++; }
    if ((cm.getQuestStatus(20604) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u591c\u884c\u8005\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
    if ((cm.getQuestStatus(20614) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u591c\u884c\u8005\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
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
        if (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20104; } }
        if (cm.getQuestStatus(20204) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20204; } }
        if (cm.getQuestStatus(20304) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20304; } }
        if (cm.getQuestStatus(20604) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20604; } }
        if (cm.getQuestStatus(20614) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20614; } }
        if ((cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20104; } }
        if ((cm.getQuestStatus(20204) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1400)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20204; } }
        if ((cm.getQuestStatus(20304) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1410)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20304; } }
        if ((cm.getQuestStatus(20314) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1410)) && (cm.getQuestStatus(20304) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20314; } }
        if ((cm.getQuestStatus(20604) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20604; } }
        if ((cm.getQuestStatus(20614) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20614; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20104) qt = (qact == 1 ? "现在你是夜行者了！" : "...你来这里是为了成为一名骑士吗？哇，你的品味真独特。  #b 你来寻找黑暗骑士团的首领#k，他领导着夜行者。我的名字是#p1101006#，如果你选择夜行者，你就别无选择，只能一起走。");
        if (qid == 20204) qt = (qact == 1 ? "完成工程师等级测试。现在我的骑士修行已经结束，被任命为全职骑士。作为天鹅座骑士团的正式骑士，让我们成为未被邪恶玷污的黑暗吧。" : "工程师等级考试？那个时刻已经到来了吗？想想看……你已经有一段时间没有在天鹅骑士团工作了，所以这是有道理的。好的。我允许骑士等级测试。我们马上开始吧？");
        if (qid == 20304) qt = (qact == 1 ? "你消除了 #o9001009# #p1104001# 吗？嗯，很好，对吧？我想说这真的很棒。" : "...你在吗？  你一定听过#p1101002#的解释，所以我就跳过详细的解释了……这是一个行不通的表达方式。如你所知，埃里夫是一个受到神兽守护的地方。邪物进不来，即使进了，也很快被识别出来，赶出去。");
        if (qid == 20604) qt = (qact == 1 ? "你得到了 #t4032123#。嗯...无论如何，这相当不错。好的。我已经确认你完全有资格学习这项技能。那我就传授一下技能吧。" : "这是什么？ ...嗯？新技能？这些信息从哪里来... #p1101002# 罗根。反正我的性格是最差的。我不敢相信你要把这些信息提供给一个甚至无法学习的人，因为他还没有达到这个水平。确实有一项技能，但是你掌握它太危险了。 \r\n#b#L0# 即使危险我也想学习技能。 #l\r\n#L1# 如果有危险，我们无能为力... #l\r\n#k");
        if (qid == 20614) qt = (qact == 1 ? "你得到了#t4032128#。正如所料，你相当不错。好的。我已经确认你有能力学习新技能。传承技能。" : "这是什么？新技能？又是#p1101002#吗？反正你应该知道那个人内心是黑的……好吧。如果是你，你说不教我我也不会听。我会把技能传授给你。但是，我必须像以前一样参加考试。");
        if (qid == 20104) qt = (qact == 1 ? "现在你是夜行者了！" : "...你来这里是为了成为一名骑士吗？哇，你的品味真独特。  #b 你来寻找黑暗骑士团的首领#k，他领导着夜行者。我的名字是#p1101006#，如果你选择夜行者，你就别无选择，只能一起走。");
        if (qid == 20204) qt = (qact == 1 ? "完成工程师等级测试。现在我的骑士修行已经结束，被任命为全职骑士。作为天鹅座骑士团的正式骑士，让我们成为未被邪恶玷污的黑暗吧。" : "工程师等级考试？那个时刻已经到来了吗？想想看……你已经有一段时间没有在天鹅骑士团工作了，所以这是有道理的。好的。我允许骑士等级测试。我们马上开始吧？");
        if (qid == 20304) qt = (qact == 1 ? "你消除了 #o9001009# #p1104001# 吗？嗯，很好，对吧？我想说这真的很棒。" : "...你在吗？  你一定听过#p1101002#的解释，所以我就跳过详细的解释了……这是一个行不通的表达方式。如你所知，埃里夫是一个受到神兽守护的地方。邪物进不来，即使进了，也很快被识别出来，赶出去。");
        if (qid == 20314) qt = (qact == 1 ? "因击败#o9001009#、夺回神兽之泪的贡献，被认定为天鹅骑士团的高级骑士。作为一名高级骑士，即使在黑暗中，我们也不要失去信心。" : "他被任命为天鹅骑士团的高级骑士，以表彰他在击败#o9001009#并收回神兽之泪方面做出的贡献。");
        if (qid == 20604) qt = (qact == 1 ? "你得到了 #t4032123#。嗯...无论如何，这相当不错。好的。我已经确认你完全有资格学习这项技能。那我就传授一下技能吧。" : "这是什么？ ...嗯？新技能？这些信息从哪里来... #p1101002# 罗根。反正我的性格是最差的。我不敢相信你要把这些信息提供给一个甚至无法学习的人，因为他还没有达到这个水平。确实有一项技能，但是你掌握它太危险了。 \r\n#b#L0# 即使危险我也想学习技能。 #l\r\n#L1# 如果有危险，我们无能为力... #l\r\n#k");
        if (qid == 20614) qt = (qact == 1 ? "你得到了#t4032128#。正如所料，你相当不错。好的。我已经确认你有能力学习新技能。传承技能。" : "这是什么？新技能？又是#p1101002#吗？反正你应该知道那个人内心是黑的……好吧。如果是你，你说不教我我也不会听。我会把技能传授给你。但是，我必须像以前一样参加考试。");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20104) cm.completeQuest(20104);
            if (qid == 20204) cm.completeQuest(20204);
            if (qid == 20304) cm.completeQuest(20304);
            if (qid == 20604) cm.completeQuest(20604);
            if (qid == 20614) cm.completeQuest(20614);
        } else {
            if (qid == 20104) cm.startQuest(20104);
            if (qid == 20204) cm.startQuest(20204);
            if (qid == 20304) cm.startQuest(20304);
            if (qid == 20314) cm.startQuest(20314);
            if (qid == 20604) cm.startQuest(20604);
            if (qid == 20614) cm.startQuest(20614);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
