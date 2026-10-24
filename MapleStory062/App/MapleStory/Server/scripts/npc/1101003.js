/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1101003
   覆盖任务: 20101, 20201, 20301, 20311, 20601, 20611
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
    if (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u9b42\u5e08\u4e4b\u8def" + "#l"; n++; }
    if (cm.getQuestStatus(20201) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u9b42\u5e08\u9a91\u58eb\u7b49\u7ea7\u6d4b\u8bd5" + "#l"; n++; }
    if (cm.getQuestStatus(20301) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u53d8\u5f62\u8005" + "#l"; n++; }
    if (cm.getQuestStatus(20601) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u9b42\u5e08\u65b0\u6280\u80fd" + "#l"; n++; }
    if (cm.getQuestStatus(20611) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u9b42\u5e08\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
    if ((cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u9b42\u5e08\u4e4b\u8def" + "#l"; n++; }
    if ((cm.getQuestStatus(20201) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1100)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u9b42\u5e08\u9a91\u58eb\u7b49\u7ea7\u6d4b\u8bd5" + "#l"; n++; }
    if ((cm.getQuestStatus(20301) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1110)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u53d8\u5f62\u8005" + "#l"; n++; }
    if ((cm.getQuestStatus(20311) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1110)) && (cm.getQuestStatus(20301) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u795e\u517d\u4e4b\u6cea" + "#l"; n++; }
    if ((cm.getQuestStatus(20601) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u9b42\u5e08\u65b0\u6280\u80fd" + "#l"; n++; }
    if ((cm.getQuestStatus(20611) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u9b42\u5e08\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
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
        if (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20101; } }
        if (cm.getQuestStatus(20201) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20201; } }
        if (cm.getQuestStatus(20301) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20301; } }
        if (cm.getQuestStatus(20601) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20601; } }
        if (cm.getQuestStatus(20611) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20611; } }
        if ((cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20101; } }
        if ((cm.getQuestStatus(20201) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1100)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20201; } }
        if ((cm.getQuestStatus(20301) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1110)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20301; } }
        if ((cm.getQuestStatus(20311) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1110)) && (cm.getQuestStatus(20301) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20311; } }
        if ((cm.getQuestStatus(20601) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20601; } }
        if ((cm.getQuestStatus(20611) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20611; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20101) qt = (qact == 1 ? "你现在是魂师了！" : "你想成为一名骑士吗？我叫#p1101003#，他是光之骑士团的领袖，#k，领导着#b天鹅骑士团的魂师。如果你选择魂师之路，你就会加入我。");
        if (qid == 20201) qt = (qact == 1 ? "完成工程师等级测试。现在我的骑士修行已经结束，被任命为全职骑士。作为天鹅座骑士团的正式骑士，尽量不要感到尴尬吧。" : "您想参加工程师等级考试吗？考虑到你迄今为止对天鹅骑士团的贡献，想再让你当见习骑士肯定很难了。晚安。允许进行工程师等级考试。您想立即参加考试吗？");
        if (qid == 20301) qt = (qact == 1 ? "我在击败 #o9001009# #p1104001# 后回来了。太棒了。" : "当邪恶之人入侵受神树保护的埃雷夫时，奇怪的事情立即发生。但这次情况并非如此。这是因为罪犯化身为骑士。  #r 黑翼成员 #o9001009# 巴洛克 #k .他就是偷走宝藏的罪魁祸首。");
        if (qid == 20601) qt = (qact == 1 ? "您收到了 #t4032120#。晚安。我承认你值得拥有这个技能。那么……我就传授技艺。坚定你的决心。" : "...发生了什么事？新技能？ ……看来#p1101002#说的是多余的话。确实有新的技能，但以你的水平是学不到的。学习太危险了。 \r\n#b#L0# 即使危险我也想学习技能。 #l\r\n#L1# 如果有危险，我们无能为力... #l\r\n#k");
        if (qid == 20611) qt = (qact == 1 ? "我找到了 #t4032125#。晚安。我已经确认你有能力学习这项技能。那么接下来我们就来传授一下技能吧。" : "...发生了什么事？新技能？ ...这次也是，#p1101002# 罗贡...很好。我很了解你的固执。我会把技能传授给你。但是，您必须像以前一样通过测试。");
        if (qid == 20101) qt = (qact == 1 ? "你现在是魂师了！" : "你想成为一名骑士吗？我叫#p1101003#，他是光之骑士团的领袖，#k，领导着#b天鹅骑士团的魂师。如果你选择魂师之路，你就会加入我。");
        if (qid == 20201) qt = (qact == 1 ? "完成工程师等级测试。现在我的骑士修行已经结束，被任命为全职骑士。作为天鹅座骑士团的正式骑士，尽量不要感到尴尬吧。" : "您想参加工程师等级考试吗？考虑到你迄今为止对天鹅骑士团的贡献，想再让你当见习骑士肯定很难了。晚安。允许进行工程师等级考试。您想立即参加考试吗？");
        if (qid == 20301) qt = (qact == 1 ? "我在击败 #o9001009# #p1104001# 后回来了。太棒了。" : "当邪恶之人入侵受神树保护的埃雷夫时，奇怪的事情立即发生。但这次情况并非如此。这是因为罪犯化身为骑士。  #r 黑翼成员 #o9001009# 巴洛克 #k .他就是偷走宝藏的罪魁祸首。");
        if (qid == 20311) qt = (qact == 1 ? "他被任命为天鹅骑士团的高级骑士，以表彰他在击败#o9001009#并收回神兽之泪方面做出的贡献。让我们更加努力，不要玷污了高级骑士的荣誉。" : "他被任命为天鹅骑士团的高级骑士，以表彰他在击败#o9001009#并收回神兽之泪方面做出的贡献。");
        if (qid == 20601) qt = (qact == 1 ? "您收到了 #t4032120#。晚安。我承认你值得拥有这个技能。那么……我就传授技艺。坚定你的决心。" : "...发生了什么事？新技能？ ……看来#p1101002#说的是多余的话。确实有新的技能，但以你的水平是学不到的。学习太危险了。 \r\n#b#L0# 即使危险我也想学习技能。 #l\r\n#L1# 如果有危险，我们无能为力... #l\r\n#k");
        if (qid == 20611) qt = (qact == 1 ? "我找到了 #t4032125#。晚安。我已经确认你有能力学习这项技能。那么接下来我们就来传授一下技能吧。" : "...发生了什么事？新技能？ ...这次也是，#p1101002# 罗贡...很好。我很了解你的固执。我会把技能传授给你。但是，您必须像以前一样通过测试。");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20101) cm.completeQuest(20101);
            if (qid == 20201) cm.completeQuest(20201);
            if (qid == 20301) cm.completeQuest(20301);
            if (qid == 20601) cm.completeQuest(20601);
            if (qid == 20611) cm.completeQuest(20611);
        } else {
            if (qid == 20101) cm.startQuest(20101);
            if (qid == 20201) cm.startQuest(20201);
            if (qid == 20301) cm.startQuest(20301);
            if (qid == 20311) cm.startQuest(20311);
            if (qid == 20601) cm.startQuest(20601);
            if (qid == 20611) cm.startQuest(20611);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
