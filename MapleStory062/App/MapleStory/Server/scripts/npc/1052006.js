importPackage(net.sf.odinms.client);

var status = 0;
var zones = 0;
var tickets = Array(4031036, 4031037, 4031038);
var names = Array("工地 B1", "工地 B2", "工地 B3");
var cost = Array(1000, 1000, 1000);
var selectedItem = -1;

function start() {
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("好的，下次再见。");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("你好，我是售票员！");
			if (!(cm.getQuestStatus(2057).equals(MapleQuestStatus.Status.NOT_STARTED))) {
			zones = 3;
			}
			else if (!(cm.getQuestStatus(2056).equals(MapleQuestStatus.Status.NOT_STARTED))) {
			zones = 2;
			}
			else if (!(cm.getQuestStatus(2055).equals(MapleQuestStatus.Status.NOT_STARTED))) {
			zones = 1;
			}
			else {
			zones = 0;
			}
		} else if (status == 1) {
			if (zones == 0) {
			cm.dispose();
			} else {
			var selStr = "想要买哪张票?#b";
			for (var i = 0; i < zones; i++) {
				selStr += "\r\n#L" + i + "#" + names[i] + " (" + cost[i] + " 金币)#l";
			}
			cm.sendSimple(selStr);
			}
		} else if (status == 2) {
			if (cm.getMeso() < cost[selection]) {
				cm.sendOk("您没有足够的钱.");
				cm.dispose();
			} else {
			selectedItem = selection;
			cm.gainMeso(-cost[selectedItem]);
			cm.gainItem(tickets[selectedItem],1);
			cm.dispose();
			}
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
    if ((cm.getQuestStatus(2219) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2214) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031894, 1))) { opts += "\r\n#L" + n + "#[接受] " + "冬青的情报" + "#l"; n++; }
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
        if ((cm.getQuestStatus(2219) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2214) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031894, 1))) { qi++; if (selection == qi) { qact = 0; qid = 2219; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2219) qt = "根据#t4031894#上的情报，#p1052006#好像也是吉姆所说的情报员之一。去见见#b#p1052006##k吧。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
        } else {
            if (qid == 2219) cm.startQuest(2219);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
