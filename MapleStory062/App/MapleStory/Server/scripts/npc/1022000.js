/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)

	Custom Quest 100003, 100005
*/

importPackage(net.sf.odinms.client);

var status = 0;
var job;

function start() {
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 2) {
			cm.sendOk("考虑好了再来找我吧.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				if (cm.getLevel() >= 10 && cm.getChar().getStr() >= 35)
					cm.sendNext("你想成为 #r战士#k吗?");
				else {
					cm.sendOk("你还没有转#r战士#k的条件.需要等级10力量35.")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 
					&& cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
					if (cm.getQuestStatus(100003).getId() >=
						net.sf.odinms.client.MapleQuestStatus.Status.STARTED.getId()) {
						cm.completeQuest(100005);
						if (cm.getQuestStatus(100005) ==
						 net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
							status = 20;
							cm.sendNext("完成的很好. 下个阶段将有很长的路喔.");
						} else {
							cm.sendOk("去找 #r二转教官#k 吧.")
							cm.dispose();
						}
					} else {
						status = 10;
						cm.sendNext("你已经达到二转的条件了.");
					}
				} else if (cm.getQuestStatus(100100).equals(MapleQuestStatus.Status.STARTED)) {
					cm.completeQuest(100101);
					if (cm.getQuestStatus(100101).equals(MapleQuestStatus.Status.COMPLETED)) {
						cm.sendOk("好的 ,现在把这个交给 #bTylus#k.");
					} else {
						cm.sendOk("嘿, " + cm.getChar().getName() + "! 我需要个#b黑珠#k.");
						cm.startQuest(100101);
					}
					cm.dispose();
				} else {
					cm.sendOk("你的选择是明智的.");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("这是个非常重要的决定,一旦你转职成功就不能够再有其他的选择了.");
		} else if (status == 2) {
			cm.sendYesNo("你确定要成为 #r战士#k?");
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER))
				cm.changeJob(net.sf.odinms.client.MapleJob.WARRIOR);
			cm.gainItem(1402001, 1);
			cm.sendOk("转职成功.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("转职有三个选择 #r剑客#k, #r准骑士#k or #r枪战士#k.")
		} else if (status == 12) {
			cm.sendAcceptDecline("但是我必须先对你的能力进行考验. 你准备好了吗?");
		} else if (status == 13) {
			if (cm.haveItem(4031008)) {
				cm.sendOk("有BUG请联系 http://ourms.uu1001.com/");
			} else {
				cm.startQuest(100003);
				cm.sendOk("请把这封介绍信交给 #b二转教官#k 他就在部落附近. 他将告诉你转职的一些方式.");
			}
		} else if (status == 21) {
			cm.sendSimple("你想成为?#b\r\n#L0#剑客#l\r\n#L1#准骑士#l\r\n#L2#枪战士#l#k");
		} else if (status == 22) {
			var jobName;
			if (selection == 0) {
				jobName = "剑客";
				job = net.sf.odinms.client.MapleJob.FIGHTER;
			} else if (selection == 1) {
				jobName = "准骑士";
				job = net.sf.odinms.client.MapleJob.PAGE;
			} else {
				jobName = "枪战士";
				job = net.sf.odinms.client.MapleJob.SPEARMAN;
			}
			cm.sendYesNo("你确定要成为 #r" + jobName + "#k?");
		} else if (status == 23) {
			cm.changeJob(job);
			cm.sendOk("转职成功了.");
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
    if (cm.getQuestStatus(2151) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "传闻的真相-与巴洛共舞" + "#l"; n++; }
    if ((cm.getQuestStatus(2151) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "传闻的真相-与巴洛共舞" + "#l"; n++; }
    if ((cm.getQuestStatus(3523) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 100 || cm.getJob().getId() == 110 || cm.getJob().getId() == 120 || cm.getJob().getId() == 130 || cm.getJob().getId() == 111 || cm.getJob().getId() == 121 || cm.getJob().getId() == 131 || cm.getJob().getId() == 112 || cm.getJob().getId() == 122 || cm.getJob().getId() == 132)) && (cm.getQuestStatus(3507) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "追随遗忘的记忆" + "#l"; n++; }
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
        if (cm.getQuestStatus(2151) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2151; } }
        if ((cm.getQuestStatus(2151) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 2151; } }
        if ((cm.getQuestStatus(3523) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 100 || cm.getJob().getId() == 110 || cm.getJob().getId() == 120 || cm.getJob().getId() == 130 || cm.getJob().getId() == 111 || cm.getJob().getId() == 121 || cm.getJob().getId() == 131 || cm.getJob().getId() == 112 || cm.getJob().getId() == 122 || cm.getJob().getId() == 132)) && (cm.getQuestStatus(3507) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 3523; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2151) qt = "去找#m102000000#的长老#b#p1022000##k问问吧。";
        if (qid == 2151) qt = "找我有什么事儿吗？\r\n#b知道鬼树吗？";
        if (qid == 3523) qt = "按照旁观者的说法，要找回失去的记忆，必须回到开始的时候。冒险开始的时候……不就是离开枫之岛，踏上维多利亚岛的转职的时候吗？去见见#b#p1022000##k吧。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2151) cm.completeQuest(2151);
        } else {
            if (qid == 2151) cm.startQuest(2151);
            if (qid == 3523) cm.startQuest(3523);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
