/* Athena Pierce
	Bowman Job Advancement
	Victoria Road : Bowman Instructional School (100000201)

	Custom Quest 100000, 100002
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
			cm.sendOk("想好了再来找我吧.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				if (cm.getLevel() >= 10 && cm.getChar().getDex() >= 25)
					cm.sendNext("你的理想是成为一名 #r弓箭手#k吗?");
				else {
					cm.sendOk("你还需要修炼才能达到 #r弓箭手#k的体质.")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 
					&& cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
					if (cm.getQuestStatus(100000).getId() >=
						net.sf.odinms.client.MapleQuestStatus.Status.STARTED.getId()) {
						cm.completeQuest(100002);
						if (cm.getQuestStatus(100002) ==
						 net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
							status = 20;
							cm.sendNext("我知道你完成了任务. 所以我允许你的转职申请.");
						} else {
							cm.sendOk("去找射手村附近的 #r二转教官#k 吧.")
							cm.dispose();
						}
					} else {
						status = 10;
						cm.sendNext("我考.你的成长速度真是惊人.");
					}
				} else if (cm.getQuestStatus(100100).equals(MapleQuestStatus.Status.STARTED)) {
					cm.completeQuest(100101);
					if (cm.getQuestStatus(100101).equals(MapleQuestStatus.Status.COMPLETED)) {
						cm.sendOk("好了, 把它带给 #bRene#k.");
					} else {
						cm.sendOk("嘿, " + cm.getChar().getName() + "! 我需要 #b黑珠#k. 去找到次元之门吧.");
						cm.startQuest(100101);
					}
					cm.dispose();
				} else {
					cm.sendOk("你的选择是明智的.");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("这是一个神圣的决定,你可要想好了哦,不能复返的.");
		} else if (status == 2) {
			cm.sendYesNo("你确定想成为 #r弓箭手#k吗?");
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER))
				cm.changeJob(net.sf.odinms.client.MapleJob.BOWMAN);
			cm.gainItem(1452002, 1);
			cm.gainItem(2060000, 1000);
			cm.sendOk("转职成功.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("你可以选择下面两个职业发展 #r猎手#k or #r弩弓手#k.")
		} else if (status == 12) {
			cm.sendAcceptDecline("不过你先得通过我的考验.你准备好了吗?");
		} else if (status == 13) {
			if (cm.haveItem(4031010)) {
				cm.sendOk("有问题去 http://ourms.uu1001.com/.");
			} else {
				cm.startQuest(100000);
				cm.sendOk("把这封介绍信带给射手村附近的 #b二转教官#k . 由他来考核你.");
			}
		} else if (status == 21) {
			cm.sendSimple("你想成为哪一个?#b\r\n#L0#猎人#l\r\n#L1#弩弓手#l#k");
		} else if (status == 22) {
			var jobName;
			if (selection == 0) {
				jobName = "猎人";
				job = net.sf.odinms.client.MapleJob.HUNTER;
			} else {
				jobName = "弩弓手";
				job = net.sf.odinms.client.MapleJob.CROSSBOWMAN;
			}
			cm.sendYesNo("你确定要成为 #r" + jobName + "#k?");
		} else if (status == 23) {
			cm.changeJob(job);
			cm.sendOk("转职成功,继续加油吧.");
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
    if (cm.getQuestStatus(6700) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "弓箭手之路" + "#l"; n++; }
    if ((cm.getQuestStatus(3525) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 300 || cm.getJob().getId() == 310 || cm.getJob().getId() == 320 || cm.getJob().getId() == 311 || cm.getJob().getId() == 321 || cm.getJob().getId() == 312 || cm.getJob().getId() == 322)) && (cm.getQuestStatus(3507) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "追随遗忘的记忆" + "#l"; n++; }
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
        if (cm.getQuestStatus(6700) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 6700; } }
        if ((cm.getQuestStatus(3525) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 300 || cm.getJob().getId() == 310 || cm.getJob().getId() == 320 || cm.getJob().getId() == 311 || cm.getJob().getId() == 321 || cm.getJob().getId() == 312 || cm.getJob().getId() == 322)) && (cm.getQuestStatus(3507) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 3525; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 6700) qt = "我已经为你准备好了必需的礼物，请挑选合适的礼品。";
        if (qid == 3525) qt = "按照旁观者的说法，要找回失去的记忆，必须回到开始的时候。冒险开始的时候……不就是离开枫之岛，踏上维多利亚岛的转职的时候吗？去见见#b#p1012100##k吧。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 6700) cm.completeQuest(6700);
        } else {
            if (qid == 3525) cm.startQuest(3525);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
