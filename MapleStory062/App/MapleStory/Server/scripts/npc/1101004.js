/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1101004
   覆盖任务: 20102, 20202, 20302, 20312, 20602, 20612
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
    if (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u706b\u7130\u5deb\u5e08\u4e4b\u8def" + "#l"; n++; }
    if (cm.getQuestStatus(20202) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u706b\u7130\u5deb\u5e08\u7684\u9a91\u58eb\u7b49\u7ea7\u6d4b\u8bd5" + "#l"; n++; }
    if (cm.getQuestStatus(20302) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u53d8\u5f62\u8005" + "#l"; n++; }
    if (cm.getQuestStatus(20602) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u706b\u7130\u6cd5\u5e08\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
    if (cm.getQuestStatus(20612) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u706b\u7130\u5deb\u5e08\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
    if ((cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u706b\u7130\u5deb\u5e08\u4e4b\u8def" + "#l"; n++; }
    if ((cm.getQuestStatus(20202) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1200)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u706b\u7130\u5deb\u5e08\u7684\u9a91\u58eb\u7b49\u7ea7\u6d4b\u8bd5" + "#l"; n++; }
    if ((cm.getQuestStatus(20302) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1210)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u53d8\u5f62\u8005" + "#l"; n++; }
    if ((cm.getQuestStatus(20312) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1210)) && (cm.getQuestStatus(20302) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u795e\u517d\u4e4b\u6cea" + "#l"; n++; }
    if ((cm.getQuestStatus(20602) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u706b\u7130\u6cd5\u5e08\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
    if ((cm.getQuestStatus(20612) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u706b\u7130\u5deb\u5e08\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
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
        if (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20102; } }
        if (cm.getQuestStatus(20202) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20202; } }
        if (cm.getQuestStatus(20302) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20302; } }
        if (cm.getQuestStatus(20602) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20602; } }
        if (cm.getQuestStatus(20612) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20612; } }
        if ((cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20102; } }
        if ((cm.getQuestStatus(20202) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1200)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20202; } }
        if ((cm.getQuestStatus(20302) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1210)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20302; } }
        if ((cm.getQuestStatus(20312) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1210)) && (cm.getQuestStatus(20302) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20312; } }
        if ((cm.getQuestStatus(20602) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20602; } }
        if ((cm.getQuestStatus(20612) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20612; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20102) qt = (qact == 1 ? "现在你是一名火焰巫师了！" : "Ki，你是想成为骑士的人吗？我的名字是天鹅骑士团的#p1101004#。#b。这是#k，火焰法师的领袖。妈妈，很高兴认识你。如果你选择火焰巫师这条路，也许我们会更频繁地见面……");
        if (qid == 20202) qt = (qact == 1 ? "完成工程师等级测试。现在我的骑士修行已经结束，被任命为全职骑士。让我们作为天鹅座骑士团的正式骑士充满激情吧。" : "Gi，你打算参加工程师等级考试吗？哇……你真快。考虑到您迄今为止为天鹅骑士团所做的所有努力，现在绝对是您成为正式骑士的时候了。是的。我将允许你参加工程师等级考试。你介意我立即开始测试吗？");
        if (qid == 20302) qt = (qact == 1 ? "你已经消灭了水稻，#o9001009# #p1104001#！哇！哇，那真是太棒了！你真是一篇很棒的文章！" : "哇，你来了！  #p1101002# 听到解释了吗？那么，我们就直接进入正题吧。原本，艾瑞夫是受到神兽保护的。所以，恶人是进不来的，即使进了，也能立刻被认出来。");
        if (qid == 20602) qt = (qact == 1 ? "你带来了#t4032121#！太棒了！啊，谢天谢地……我还担心呢……你完全有资格学习这个技能！那我就传授技能吧！" : "？你在这里做什么？是的？新的、新的技能？是#p1101002#先生说的吗？我告诉过你要保守秘密……！确实有新的、新的技能，但是……老实说，#h0#，你的等级还不够，你学不了……太危险了，所以学不了……\r\n#b#L0# 即使危险我也想学技能。 #l\r\n#L1# 我无法帮助它，因为它很危险...... #l\r\n#k");
        if (qid == 20612) qt = (qact == 1 ? "您保存了 #t4032126#！啊，谢天谢地。我现在感觉有点释然了。好吧，我已经确认你有能力掌握这项技能了。现在我将它传递下去。" : "这是怎么回事？诶？！又一个新技能？！还有#p1101002#对吧？！这次我让他不要说什么，但他什么也没做……！ ...是的。伟大的。我很了解你的性格，所以我会教你一些技巧。当然，你必须像以前一样通过测试。");
        if (qid == 20102) qt = (qact == 1 ? "现在你是一名火焰巫师了！" : "Ki，你是想成为骑士的人吗？我的名字是天鹅骑士团的#p1101004#。#b。这是#k，火焰法师的领袖。妈妈，很高兴认识你。如果你选择火焰巫师这条路，也许我们会更频繁地见面……");
        if (qid == 20202) qt = (qact == 1 ? "完成工程师等级测试。现在我的骑士修行已经结束，被任命为全职骑士。让我们作为天鹅座骑士团的正式骑士充满激情吧。" : "Gi，你打算参加工程师等级考试吗？哇……你真快。考虑到您迄今为止为天鹅骑士团所做的所有努力，现在绝对是您成为正式骑士的时候了。是的。我将允许你参加工程师等级考试。你介意我立即开始测试吗？");
        if (qid == 20302) qt = (qact == 1 ? "你已经消灭了水稻，#o9001009# #p1104001#！哇！哇，那真是太棒了！你真是一篇很棒的文章！" : "哇，你来了！  #p1101002# 听到解释了吗？那么，我们就直接进入正题吧。原本，艾瑞夫是受到神兽保护的。所以，恶人是进不来的，即使进了，也能立刻被认出来。");
        if (qid == 20312) qt = (qact == 1 ? "他被任命为天鹅骑士团的高级骑士，以表彰他在击败#o9001009#并收回神兽之泪方面做出的贡献。让我们训练自己，像高级骑士一样更加热情和无畏。" : "他被任命为天鹅骑士团的高级骑士，以表彰他在击败#o9001009#并收回神兽之泪方面做出的贡献。");
        if (qid == 20602) qt = (qact == 1 ? "你带来了#t4032121#！太棒了！啊，谢天谢地……我还担心呢……你完全有资格学习这个技能！那我就传授技能吧！" : "？你在这里做什么？是的？新的、新的技能？是#p1101002#先生说的吗？我告诉过你要保守秘密……！确实有新的、新的技能，但是……老实说，#h0#，你的等级还不够，你学不了……太危险了，所以学不了……\r\n#b#L0# 即使危险我也想学技能。 #l\r\n#L1# 我无法帮助它，因为它很危险...... #l\r\n#k");
        if (qid == 20612) qt = (qact == 1 ? "您保存了 #t4032126#！啊，谢天谢地。我现在感觉有点释然了。好吧，我已经确认你有能力掌握这项技能了。现在我将它传递下去。" : "这是怎么回事？诶？！又一个新技能？！还有#p1101002#对吧？！这次我让他不要说什么，但他什么也没做……！ ...是的。伟大的。我很了解你的性格，所以我会教你一些技巧。当然，你必须像以前一样通过测试。");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20102) cm.completeQuest(20102);
            if (qid == 20202) cm.completeQuest(20202);
            if (qid == 20302) cm.completeQuest(20302);
            if (qid == 20602) cm.completeQuest(20602);
            if (qid == 20612) cm.completeQuest(20612);
        } else {
            if (qid == 20102) cm.startQuest(20102);
            if (qid == 20202) cm.startQuest(20202);
            if (qid == 20302) cm.startQuest(20302);
            if (qid == 20312) cm.startQuest(20312);
            if (qid == 20602) cm.startQuest(20602);
            if (qid == 20612) cm.startQuest(20612);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
