/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2040029
   覆盖任务: 3231, 3232, 3233, 3234, 3235, 9846
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
    if (cm.getQuestStatus(3231) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "被损伤的时间塔" + "#l"; n++; }
    if (cm.getQuestStatus(3232) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "挂钟的拜托" + "#l"; n++; }
    if (cm.getQuestStatus(3234) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "时间塔的问题" + "#l"; n++; }
    if (cm.getQuestStatus(3235) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "工人表的电池" + "#l"; n++; }
    if (cm.getQuestStatus(9846) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ????" + "#l"; n++; }
    if ((cm.getQuestStatus(3232) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 33) && (cm.getQuestStatus(3231) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "挂钟的拜托" + "#l"; n++; }
    if ((cm.getQuestStatus(3233) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 33) && (cm.getQuestStatus(3232) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "运送完成" + "#l"; n++; }
    if ((cm.getQuestStatus(3234) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 34) && (cm.getQuestStatus(3233) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "时间塔的问题" + "#l"; n++; }
    if ((cm.getQuestStatus(3235) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 39) && (cm.getQuestStatus(3234) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "工人表的电池" + "#l"; n++; }
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
        if (cm.getQuestStatus(3231) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3231; } }
        if (cm.getQuestStatus(3232) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3232; } }
        if (cm.getQuestStatus(3234) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3234; } }
        if (cm.getQuestStatus(3235) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3235; } }
        if (cm.getQuestStatus(9846) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9846; } }
        if ((cm.getQuestStatus(3232) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 33) && (cm.getQuestStatus(3231) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3232; } }
        if ((cm.getQuestStatus(3233) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 33) && (cm.getQuestStatus(3232) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3233; } }
        if ((cm.getQuestStatus(3234) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 34) && (cm.getQuestStatus(3233) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3234; } }
        if ((cm.getQuestStatus(3235) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 39) && (cm.getQuestStatus(3234) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3235; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3231) qt = "要去玩具塔找玩具兵哦尔萨恩";
        if (qid == 3232) qt = "哦。。。你终于找到了#b#t4031098##k吧。太好了。。。有这个我也能再开始工作。。那你给我#b#t4031094##k吧。我把它安装到我的身体上。";
        if (qid == 3234) qt = "你怎么来得这么晚? 我等你已经很久了。听说你已经都打退了100个#b#o3210207##k? 辛苦你了。你这么帮我，我就给你个谢礼。";
        if (qid == 3235) qt = "你回来了！看看。。。你真的收集#b200个#t4000111##k来了。太好了。你为我们这么辛苦，我给你礼物。请收下。";
        if (qid == 9846) qt = "#b#p9010010##k? ?? ?? ??? ????… ?? ?? ??? ?????.";
        if (qid == 3232) qt = "哼。。。我是#b#p2040029##k。你找我有什么事情？嗯？#b#p2040002##k给#b#t4031094##k了？嗯。。。他拜托我去时间塔安装那个吗？然后让时间塔再启动？那不是什么难做的事。但其实我个人有一个问题。。。";
        if (qid == 3233) qt = "哟！我的力气回来了！好！我马上去安装配件！好。。。结束了。从现在玩具城时间塔会开始正常启动。那你快点回去告诉#b#p2040002##k这个好消息吧。我要在这里进行我的工作。再见！";
        if (qid == 3234) qt = "你到这里有什么事吗？对。。。因为以前你帮我，我现在做事做得都没问题。特别#t4031098#这个质量特别好。我不用担心以后很长时间再发生发条动力不足的问题。哈哈。";
        if (qid == 3235) qt = "你是以前为我们打退了怪物的那个人吧。你在这里又有什么事？我们是有工作不得不在这里，但在这里危险的怪物满多，非常危险。你应该小心点。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3231) cm.completeQuest(3231);
            if (qid == 3232) cm.completeQuest(3232);
            if (qid == 3234) cm.completeQuest(3234);
            if (qid == 3235) cm.completeQuest(3235);
            if (qid == 9846) cm.completeQuest(9846);
        } else {
            if (qid == 3232) cm.startQuest(3232);
            if (qid == 3233) cm.startQuest(3233);
            if (qid == 3234) cm.startQuest(3234);
            if (qid == 3235) cm.startQuest(3235);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
