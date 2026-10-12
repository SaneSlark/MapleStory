// White Scroll Maker By Sawyer of LynnStory
//Nana(H) (9201001)
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
		if (status >= 2 && mode == 0) {
			cm.sendOk("嗷呜!?");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("战士们正在休息....小声点！战士的武器在一旁闪着光芒..#v1402037# #v1402036# .如果你想要的话..请拿来#b 力量水晶20个#k#v4005000#, #b #k#v1402035#, 以及 #b5E冒险B. .....");
			}
		else if (status == 1) {
			if ((cm.haveItem(4005000, 20)) && (cm.haveItem(1402035)) && (cm.getMeso() >= 500000000)) {
			cm.sendYesNo("不错喔，看来你已经收集到所需要的所有材料..现在就给你么?");
			}
			else if (!cm.haveItem(4005000, 20)) {
			cm.sendOk("你所收集的 力量水晶20个#k#v4005000#没有达到我所要求的数量.");
			cm.dispose();
			}
			else if (!cm.haveItem(1402035)) {
			cm.sendOk("你还没有#k#v1402035#");
			cm.dispose();
			}
			else if (!cm.getMeso() <= 500000000) {
			cm.sendOk("很抱歉，你身上的金币不够支付本次制作卷轴的费用.");
			cm.dispose();
			}
			
		}
		else if (status == 2) {
			cm.gainItem(4005000, -20);
			cm.gainItem(1402035, -1);
			cm.gainMeso(-500000000);
			cm.gainItem(1402037, 1);
			cm.gainItem(1402036, 1);			
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
    if (cm.getQuestStatus(10087) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
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
        if (cm.getQuestStatus(10087) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10087; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 10087) qt = "??? ?????? ???? ?? ???? ??.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 10087) cm.completeQuest(10087);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
