/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1101005
   覆盖任务: 20103, 20203, 20303, 20313, 20603, 20613
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
    if (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u9632\u98ce\u8def" + "#l"; n++; }
    if (cm.getQuestStatus(20203) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u7a81\u7834\u98ce\u901f\u7684\u9a91\u58eb\u7ea7\u6d4b\u8bd5" + "#l"; n++; }
    if (cm.getQuestStatus(20303) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u53d8\u5f62\u8005" + "#l"; n++; }
    if (cm.getQuestStatus(20603) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u98ce\u901f\u7a81\u7834\u5668\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
    if (cm.getQuestStatus(20613) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u7834\u98ce\u8005\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
    if ((cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u9632\u98ce\u8def" + "#l"; n++; }
    if ((cm.getQuestStatus(20203) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1300)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u7a81\u7834\u98ce\u901f\u7684\u9a91\u58eb\u7ea7\u6d4b\u8bd5" + "#l"; n++; }
    if ((cm.getQuestStatus(20303) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1310)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4032179, 1))) { opts += "\r\n#L" + n + "#[接受] " + "\u53d8\u5f62\u8005" + "#l"; n++; }
    if ((cm.getQuestStatus(20313) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1310)) && (cm.getQuestStatus(20303) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u795e\u517d\u4e4b\u6cea" + "#l"; n++; }
    if ((cm.getQuestStatus(20603) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u98ce\u901f\u7a81\u7834\u5668\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
    if ((cm.getQuestStatus(20613) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u7834\u98ce\u8005\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
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
        if (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20103; } }
        if (cm.getQuestStatus(20203) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20203; } }
        if (cm.getQuestStatus(20303) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20303; } }
        if (cm.getQuestStatus(20603) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20603; } }
        if (cm.getQuestStatus(20613) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20613; } }
        if ((cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20103; } }
        if ((cm.getQuestStatus(20203) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1300)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20203; } }
        if ((cm.getQuestStatus(20303) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1310)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4032179, 1))) { qi++; if (selection == qi) { qact = 0; qid = 20303; } }
        if ((cm.getQuestStatus(20313) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1310)) && (cm.getQuestStatus(20303) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20313; } }
        if ((cm.getQuestStatus(20603) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20603; } }
        if ((cm.getQuestStatus(20613) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20613; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20103) qt = (qact == 1 ? "现在你是风衣了！" : "你想成为骑士吗……我叫#p1101005#，担任希纳斯骑士团中#b统领风灵使者的风之骑士团长#k。如果你选择风灵使者，我们或许会并肩作战……");
        if (qid == 20203) qt = (qact == 1 ? "完成工程师等级测试。现在我的骑士修行已经结束，被任命为全职骑士。作为天鹅座骑士团的正式骑士，我们不能忘记理性的思考。" : "骑士等级测试……你已经到了参加骑士等级测试的时间了……考虑到你迄今为止为天鹅骑士团做出的贡献，这是理所当然的……好吧……我授权你参加骑士等级测试。我们马上开始考试吧？");
        if (qid == 20303) qt = (qact == 1 ? "你打败#o9001009# #p1104001#后回来了……你……真是太棒了。" : "...你可能听过#p1101002#的详细解释，所以我就开门见山了。如你所知，艾瑞夫是一片被神树保护的土地……邪恶之人无法进入，即使进入，也会立刻被认出并驱逐……");
        if (qid == 20603) qt = (qact == 1 ? "你带来了#t4032122#...果然...我不会辜负您的期望...那就好。你完全有资格学习这项技能。那么接下来就让我来传授一下技能吧..." : "...发生了什么事？新技能……？  #p1101002#好像是这么说的……如果他是个狠人，早就在你不备的时候把那个信息泄露给你了。确实有新技能，但是你的等级太低，学不来……很危险。 \r\n#b#L0# 即使危险我也想学习技能。 #l\r\n#L1# 这很危险，所以我们无能为力... #l\r\n#k");
        if (qid == 20613) qt = (qact == 1 ? "你救了#t4032127#。...我也承认你...有能力学习新技能。然后我们传授技能。" : "发生了什么事？新技能……#p1101002#再次泄露信息。我以为他会的。而且你想再次学习该技能并不意外......好吧......我会教你一些技能。如果你通过了测试...");
        if (qid == 20103) qt = (qact == 1 ? "现在你是风衣了！" : "你想成为骑士吗……我叫#p1101005#，担任希纳斯骑士团中#b统领风灵使者的风之骑士团长#k。如果你选择风灵使者，我们或许会并肩作战……");
        if (qid == 20203) qt = (qact == 1 ? "完成工程师等级测试。现在我的骑士修行已经结束，被任命为全职骑士。作为天鹅座骑士团的正式骑士，我们不能忘记理性的思考。" : "骑士等级测试……你已经到了参加骑士等级测试的时间了……考虑到你迄今为止为天鹅骑士团做出的贡献，这是理所当然的……好吧……我授权你参加骑士等级测试。我们马上开始考试吧？");
        if (qid == 20303) qt = (qact == 1 ? "你打败#o9001009# #p1104001#后回来了……你……真是太棒了。" : "...你可能听过#p1101002#的详细解释，所以我就开门见山了。如你所知，艾瑞夫是一片被神树保护的土地……邪恶之人无法进入，即使进入，也会立刻被认出并驱逐……");
        if (qid == 20313) qt = (qact == 1 ? "他被任命为天鹅骑士团的高级骑士，以表彰他在击败#o9001009#并收回神兽之泪方面做出的贡献。永远用自由的眼光看世界，但也不要忘记作为一名高级骑士所肩负的更伟大的责任。" : "他被任命为天鹅骑士团的高级骑士，以表彰他在击败#o9001009#并收回神兽之泪方面做出的贡献。");
        if (qid == 20603) qt = (qact == 1 ? "你带来了#t4032122#...果然...我不会辜负您的期望...那就好。你完全有资格学习这项技能。那么接下来就让我来传授一下技能吧..." : "...发生了什么事？新技能……？  #p1101002#好像是这么说的……如果他是个狠人，早就在你不备的时候把那个信息泄露给你了。确实有新技能，但是你的等级太低，学不来……很危险。 \r\n#b#L0# 即使危险我也想学习技能。 #l\r\n#L1# 这很危险，所以我们无能为力... #l\r\n#k");
        if (qid == 20613) qt = (qact == 1 ? "你救了#t4032127#。...我也承认你...有能力学习新技能。然后我们传授技能。" : "发生了什么事？新技能……#p1101002#再次泄露信息。我以为他会的。而且你想再次学习该技能并不意外......好吧......我会教你一些技能。如果你通过了测试...");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20103) cm.completeQuest(20103);
            if (qid == 20203) cm.completeQuest(20203);
            if (qid == 20303) cm.completeQuest(20303);
            if (qid == 20603) cm.completeQuest(20603);
            if (qid == 20613) cm.completeQuest(20613);
        } else {
            if (qid == 20103) cm.startQuest(20103);
            if (qid == 20203) cm.startQuest(20203);
            if (qid == 20303) cm.startQuest(20303);
            if (qid == 20313) cm.startQuest(20313);
            if (qid == 20603) cm.startQuest(20603);
            if (qid == 20613) cm.startQuest(20613);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
