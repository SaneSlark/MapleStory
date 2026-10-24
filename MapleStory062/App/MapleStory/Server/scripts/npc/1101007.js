/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1101007
   覆盖任务: 20105, 20205, 20305, 20315, 20605, 20615
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
    if (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u524d\u950b\u4e4b\u8def" + "#l"; n++; }
    if (cm.getQuestStatus(20205) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u524d\u950b\u7684\u9a91\u58eb\u7b49\u7ea7\u6d4b\u8bd5" + "#l"; n++; }
    if (cm.getQuestStatus(20305) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u53d8\u5f62\u8005" + "#l"; n++; }
    if (cm.getQuestStatus(20605) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u524d\u950b\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
    if (cm.getQuestStatus(20615) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u524d\u950b\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
    if ((cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u524d\u950b\u4e4b\u8def" + "#l"; n++; }
    if ((cm.getQuestStatus(20205) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1500)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u524d\u950b\u7684\u9a91\u58eb\u7b49\u7ea7\u6d4b\u8bd5" + "#l"; n++; }
    if ((cm.getQuestStatus(20305) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1510)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u53d8\u5f62\u8005" + "#l"; n++; }
    if ((cm.getQuestStatus(20315) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1510)) && (cm.getQuestStatus(20305) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u795e\u517d\u4e4b\u6cea" + "#l"; n++; }
    if ((cm.getQuestStatus(20605) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u524d\u950b\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
    if ((cm.getQuestStatus(20615) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u524d\u950b\u7684\u65b0\u6280\u80fd" + "#l"; n++; }
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
        if (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20105; } }
        if (cm.getQuestStatus(20205) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20205; } }
        if (cm.getQuestStatus(20305) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20305; } }
        if (cm.getQuestStatus(20605) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20605; } }
        if (cm.getQuestStatus(20615) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20615; } }
        if ((cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20105; } }
        if ((cm.getQuestStatus(20205) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1500)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20205; } }
        if ((cm.getQuestStatus(20305) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1510)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20305; } }
        if ((cm.getQuestStatus(20315) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1510)) && (cm.getQuestStatus(20305) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20315; } }
        if ((cm.getQuestStatus(20605) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20605; } }
        if ((cm.getQuestStatus(20615) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20615; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20105) qt = (qact == 1 ? "现在你是一名前锋了！" : "你来这里是为了成为一名骑士吗？哇！欢迎！很高兴见到你！我的名字是#p1101007#！  #b 闪电骑士团长带领前锋 #k 嘿！很高兴见到你！如果您选择前锋，我们以后会经常见到您！");
        if (qid == 20205) qt = (qact == 1 ? "完成工程师等级测试。现在我的骑士修行已经结束，被任命为全职骑士。作为天鹅骑士团的正式骑士，让我们在使命中找到快乐吧。" : "嗯？工程师等级考试？你已经看到了吗？嘿，这不是很棒吗？你进来也没有多久，好吧……考虑到我在天鹅座骑士团取得的成绩，是时候动手了……好吧，我就允许你参加骑士等级测试了！您想立即开始吗？");
        if (qid == 20305) qt = (qact == 1 ? "哇！你击败了变形者#p1104001#！惊人的！惊人的！哇，这有点令人兴奋吗？" : "#p1101002# 您听说过吗？噢，这可是一件大事啊！原本，埃里夫是一个有神兽守护的地方，邪恶之人无法进入，即便进入，也会很快被识别并驱除……变形者！谁能想到会发生这样的事！");
        if (qid == 20605) qt = (qact == 1 ? "天哪！你带来了！  #t4032124#？！你还好吗？你的经历还好吗？哈哈哈！无论如何，很好！我已经确认你有资格学习这个技能了！现在，让我们传授技能吧！" : "嗯？怎么了？哎呀？！新技能？！嗯，你怎么做到的！你怎么知道的！？啊，我从来没有打算告诉任何人……嗯，我的意思是，有一项技能，但以你的水平学习它有点危险。所以后来... \r\n#b#L0# 即使危险我也想学技能。 #l\r\n#L1# 这很危险，所以我们无能为力...... #l\r\n#k");
        if (qid == 20615) qt = (qact == 1 ? "天哪！  您找到了 #t4032129#！嗯，我以为你会做得很好！好的！我已经确认你有能力学习新技能！然后立即转移您的技能！呀呀呀！ ……不，没必要高兴吧？" : "嗯？什么？ ……啊？！又一个新技能？！不对，到底哪里的信息泄露了？！其他领导可能不是这么说的！啊！ ...好的。如果是你的话，我不告诉你也没有用吧？好的。我来教你技巧。只要我像以前一样通过考试就可以了。");
        if (qid == 20105) qt = (qact == 1 ? "现在你是一名前锋了！" : "你来这里是为了成为一名骑士吗？哇！欢迎！很高兴见到你！我的名字是#p1101007#！  #b 闪电骑士团长带领前锋 #k 嘿！很高兴见到你！如果您选择前锋，我们以后会经常见到您！");
        if (qid == 20205) qt = (qact == 1 ? "完成工程师等级测试。现在我的骑士修行已经结束，被任命为全职骑士。作为天鹅骑士团的正式骑士，让我们在使命中找到快乐吧。" : "嗯？工程师等级考试？你已经看到了吗？嘿，这不是很棒吗？你进来也没有多久，好吧……考虑到我在天鹅座骑士团取得的成绩，是时候动手了……好吧，我就允许你参加骑士等级测试了！您想立即开始吗？");
        if (qid == 20305) qt = (qact == 1 ? "哇！你击败了变形者#p1104001#！惊人的！惊人的！哇，这有点令人兴奋吗？" : "#p1101002# 您听说过吗？噢，这可是一件大事啊！原本，埃里夫是一个有神兽守护的地方，邪恶之人无法进入，即便进入，也会很快被识别并驱除……变形者！谁能想到会发生这样的事！");
        if (qid == 20315) qt = (qact == 1 ? "因击败#o9001009#、夺回神兽之泪的贡献，被认定为天鹅骑士团的高级骑士。让我们成为一名享受最艰难冒险的高级骑士吧。" : "他被任命为天鹅骑士团的高级骑士，以表彰他在击败#o9001009#并收回神兽之泪方面做出的贡献。");
        if (qid == 20605) qt = (qact == 1 ? "天哪！你带来了！  #t4032124#？！你还好吗？你的经历还好吗？哈哈哈！无论如何，很好！我已经确认你有资格学习这个技能了！现在，让我们传授技能吧！" : "嗯？怎么了？哎呀？！新技能？！嗯，你怎么做到的！你怎么知道的！？啊，我从来没有打算告诉任何人……嗯，我的意思是，有一项技能，但以你的水平学习它有点危险。所以后来... \r\n#b#L0# 即使危险我也想学技能。 #l\r\n#L1# 这很危险，所以我们无能为力...... #l\r\n#k");
        if (qid == 20615) qt = (qact == 1 ? "天哪！  您找到了 #t4032129#！嗯，我以为你会做得很好！好的！我已经确认你有能力学习新技能！然后立即转移您的技能！呀呀呀！ ……不，没必要高兴吧？" : "嗯？什么？ ……啊？！又一个新技能？！不对，到底哪里的信息泄露了？！其他领导可能不是这么说的！啊！ ...好的。如果是你的话，我不告诉你也没有用吧？好的。我来教你技巧。只要我像以前一样通过考试就可以了。");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20105) cm.completeQuest(20105);
            if (qid == 20205) cm.completeQuest(20205);
            if (qid == 20305) cm.completeQuest(20305);
            if (qid == 20605) cm.completeQuest(20605);
            if (qid == 20615) cm.completeQuest(20615);
        } else {
            if (qid == 20105) cm.startQuest(20105);
            if (qid == 20205) cm.startQuest(20205);
            if (qid == 20305) cm.startQuest(20305);
            if (qid == 20315) cm.startQuest(20315);
            if (qid == 20605) cm.startQuest(20605);
            if (qid == 20615) cm.startQuest(20615);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
