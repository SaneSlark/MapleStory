/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1012003
   覆盖任务: 2014, 2015, 2016, 2190, 3400, 8299, 9142, 9520, 9521, 9526, 10083
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
    if (cm.getQuestStatus(2014) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "阿勒斯的拜托" + "#l"; n++; }
    if (cm.getQuestStatus(2015) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "说服长老斯坦" + "#l"; n++; }
    if (cm.getQuestStatus(8299) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "长老斯坦的一片秘枫叶项链" + "#l"; n++; }
    if (cm.getQuestStatus(9142) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9520) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? (12? 9?)" + "#l"; n++; }
    if (cm.getQuestStatus(9521) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? (12? 10?)" + "#l"; n++; }
    if (cm.getQuestStatus(10083) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(2015) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20) && (cm.getQuestStatus(2014) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "说服长老斯坦" + "#l"; n++; }
    if ((cm.getQuestStatus(2016) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20) && (cm.getQuestStatus(2015) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "母亲的金表" + "#l"; n++; }
    if ((cm.getQuestStatus(3400) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30)) { opts += "\r\n#L" + n + "#[接受] " + "长老斯坦的信件" + "#l"; n++; }
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
        if (cm.getQuestStatus(2014) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2014; } }
        if (cm.getQuestStatus(2015) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2015; } }
        if (cm.getQuestStatus(8299) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8299; } }
        if (cm.getQuestStatus(9142) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9142; } }
        if (cm.getQuestStatus(9520) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9520; } }
        if (cm.getQuestStatus(9521) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9521; } }
        if (cm.getQuestStatus(10083) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10083; } }
        if ((cm.getQuestStatus(2015) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20) && (cm.getQuestStatus(2014) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2015; } }
        if ((cm.getQuestStatus(2016) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20) && (cm.getQuestStatus(2015) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2016; } }
        if ((cm.getQuestStatus(3400) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30)) { qi++; if (selection == qi) { qact = 0; qid = 3400; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2014) qt = "听说在堕落都市有离家出去的小孩子";
        if (qid == 2015) qt = "喂？你是谁？好像没见过你嘛。\r\n啊…对不起，我只是路过的游客，您不用管我。\r\n其实是#p1052000#的委托我来的。请给我一点时间。\r\n哈哈~今天天气真不错呀？";
        if (qid == 8299) qt = "您完成了您的任务了吗？";
        if (qid == 9142) qt = "?? ??? ?? ??????";
        if (qid == 9520) qt = "??~?? ?? ??? ?? ??? ?? ??? ?? ?? ????? ????? ??? ? ??? ??? ??? ??? ???? ?? ??.";
        if (qid == 9521) qt = "?? ?? ??? ????? ???. ?? ???!";
        if (qid == 10083) qt = "????? ?????? ????? ???? ??.";
        if (qid == 2015) qt = "想跟我说说话？我是这个村落的长老，没有时间跟你这样的小家伙聊天。实在想跟我聊聊，就帮我收集守护村落所需的物品吧。如果你给我收集#b#t4000007# #e50个#n#k和 #b#t4000002# #e100个#n#k，说不定到时候我有时间…";
        if (qid == 2016) qt = "这只表很贵重，千万不要弄丢啊。我想#p1052000#肯定在#m103000000#？他在什么地方我还是能够猜得到阿。那拜托你了，千万保重自己啊。";
        if (qid == 3400) qt = "哦。。。我正好要找个像你这样的年轻人。其实我们村的居民拣到了一封看起来非常危险的信。我想把这封信件快点给原来的主人。所以我想拜托你把这封信件送回去。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2014) cm.completeQuest(2014);
            if (qid == 2015) cm.completeQuest(2015);
            if (qid == 8299) cm.completeQuest(8299);
            if (qid == 9142) cm.completeQuest(9142);
            if (qid == 9520) cm.completeQuest(9520);
            if (qid == 9521) cm.completeQuest(9521);
            if (qid == 10083) cm.completeQuest(10083);
        } else {
            if (qid == 2015) cm.startQuest(2015);
            if (qid == 2016) cm.startQuest(2016);
            if (qid == 3400) cm.startQuest(3400);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
