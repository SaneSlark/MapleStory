/*
		Author: Frisby
		NPC   : 9010008 - pettite
		Use   : Give a selection of All Pets in exchange for Jewel
 */
importPackage(net.sf.odinms.client);

var status = 0;

function start() {
    qfresh = true;
    status = -1;
    action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (cm.getPlayer().getMapId() != 109010110) {
            cm.dispose();
        }
        if (mode == 0) {
            cm.sendOk("哎呀.. 好吧，再见咯 :D");
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0 && cm.getPlayer().getMapId() == 109010110) { // change according to which ever npc you use that might already be in use
            if (cm.haveItem(4031574, 1)) { // change if u want the npc to take ANOTHER item instead of event ticket.
                cm.sendOk("太好了!");
            } else {
                cm.sendYesNo("你想离开这里吗?!");
                status = 1;
            }
        } else if (status == 1) {
            cm.completeQuest(100200);
            cm.removeAll(4031574);
            cm.warp(100000000);
            cm.dispose();
        } else if (status == 2) {
            cm.warp(100000000);
            cm.removeAll(4031574);
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}
function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    qOrigAction(mode, type, selection);
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
    if (cm.getQuestStatus(9251) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? (11? 24?)" + "#l"; n++; }
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
        if (cm.getQuestStatus(9251) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9251; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9251) qt = "#b#p9010000##k? ????? ????? ??. ? ?? ?? ?? ?? ??? ??? ????";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9251) cm.completeQuest(9251);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
