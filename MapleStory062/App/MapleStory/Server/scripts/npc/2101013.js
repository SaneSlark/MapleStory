function start() {
    qfresh = true;
    if (qQuestAction(1, 0, 0)) return;
	cm.sendNext("#e梦岛欢迎你#n!");
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
    if (cm.getQuestStatus(3941) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "抢夺王妃的丝绸" + "#l"; n++; }
    if ((cm.getQuestStatus(3941) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3941) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 29) && (cm.getQuestStatus(3940) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4031571, 1))) { opts += "\r\n#L" + n + "#[接受] " + "抢夺王妃的丝绸" + "#l"; n++; }
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
        if (cm.getQuestStatus(3941) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3941; } }
        if ((cm.getQuestStatus(3941) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3941) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 29) && (cm.getQuestStatus(3940) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4031571, 1))) { qi++; if (selection == qi) { qact = 0; qid = 3941; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3941) qt = "来，这里。请小心。这个丝绸是很难弄到的。如果有一些刮伤的话，王妃肯定会把#p2101004#先生关进监狱的。";
        if (qid == 3941) qt = "作为沙子图团员，正在执行第一个任务…… 任务是抢夺王妃订的丝绸！以#p2101004#的模样去#b#m260010600##k，与王妃做丝绸生意的 #b#p2101013##k那儿拿到丝绸。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3941) cm.completeQuest(3941);
        } else {
            if (qid == 3941) cm.startQuest(3941);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
