/* Grendel the Really Old
	Magician Job Advancement
	Victoria Road : Magic Library (101000003)

	Custom Quest 100006, 100008, 100100, 100101
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
				if (cm.getLevel() >= 8 && cm.getChar().getInt() >= 20)
					cm.sendNext("你的理想是想成为 #r魔法师#k吗?");
				else {
					cm.sendOk("可惜你没有当#r魔法师#k的条件呀!需要最小智力20等级8")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 
					&& cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) {
					if (cm.getQuestStatus(100006).getId() >=
						net.sf.odinms.client.MapleQuestStatus.Status.STARTED.getId()) {
						cm.completeQuest(100008);
						if (cm.getQuestStatus(100008) ==
						 net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
							status = 20;
							cm.sendNext("看来你已经完成的非常好了. 希望你能再以后德道路上走德更远.");
						} else {
							cm.sendOk("去见魔法密林附近的 #r二转教官#k 吧.")
							cm.dispose();
						}
					} else {
						status = 10;
						cm.sendNext("你已经达到了二转的条件.");
					}
				} else if (cm.getQuestStatus(100100).equals(MapleQuestStatus.Status.STARTED)) {
					cm.completeQuest(100101);
					if (cm.getQuestStatus(100101).equals(MapleQuestStatus.Status.COMPLETED)) {
						cm.sendOk("好德, 现在带这去 #bRobeira#k.");
					} else {
						cm.sendOk("嘿, " + cm.getChar().getName() + "! 我需要#b黑珠#k. 去找到次元之门吧.");
						cm.startQuest(100101);
					}
					cm.dispose();
				} else {
					cm.sendOk("你的选择是明智的.");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("这是一个非常神圣德决定.不可以反悔德.");
		} else if (status == 2) {
			cm.sendYesNo("你确定想成为一名 #r魔法师#k吗?");
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER))
				cm.changeJob(net.sf.odinms.client.MapleJob.MAGICIAN);
			cm.gainItem(1372005, 1);
			cm.sendOk("转职成功,猪你开心喔.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("一转后你可以成为下面三种 #r火/毒法师 #k, #r冰/雷法师#k 或着 #r牧师#k.");
		} else if (status == 12) {
			cm.sendAcceptDecline("但是首先我得考验下你德能力哦. 你准备好了吗?");
		} else if (status == 13) {
			if (cm.haveItem(4031009)) {
				cm.sendOk("有问题可以去论坛http://ourms.uu1001.com/.");
			} else {
				cm.startQuest(100006);
				cm.sendOk("把这封介绍信带给魔法密林附近的 #b二转教官#k . 他可以告诉你如何转职.");
			}
		} else if (status == 21) {
			cm.sendSimple("你想成为什么?#b\r\n#L0#火/毒法师#l\r\n#L1#冰/雷法师#l\r\n#L2#牧师#l#k");
		} else if (status == 22) {
			var jobName;
			if (selection == 0) {
				jobName = "火/毒法师";
				job = net.sf.odinms.client.MapleJob.FP_WIZARD;
			} else if (selection == 1) {
				jobName = "冰/雷法师";
				job = net.sf.odinms.client.MapleJob.IL_WIZARD;
			} else {
				jobName = "牧师";
				job = net.sf.odinms.client.MapleJob.CLERIC;
			}
			cm.sendYesNo("你确定要成为 #r" + jobName + "#k吗?");
		} else if (status == 23) {
			cm.changeJob(job);
			cm.sendOk("转职成功.猪你开心,嘎嘎.");
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
    if ((cm.getQuestStatus(3524) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 200 || cm.getJob().getId() == 210 || cm.getJob().getId() == 220 || cm.getJob().getId() == 230 || cm.getJob().getId() == 211 || cm.getJob().getId() == 221 || cm.getJob().getId() == 231 || cm.getJob().getId() == 212 || cm.getJob().getId() == 222 || cm.getJob().getId() == 232)) && (cm.getQuestStatus(3507) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "追随遗忘的记忆" + "#l"; n++; }
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
        if ((cm.getQuestStatus(3524) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 200 || cm.getJob().getId() == 210 || cm.getJob().getId() == 220 || cm.getJob().getId() == 230 || cm.getJob().getId() == 211 || cm.getJob().getId() == 221 || cm.getJob().getId() == 231 || cm.getJob().getId() == 212 || cm.getJob().getId() == 222 || cm.getJob().getId() == 232)) && (cm.getQuestStatus(3507) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 3524; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3524) qt = "按照旁观者的说法，要找回失去的记忆，必须回到开始的时候。冒险开始的时候……不就是离开枫之岛，踏上维多利亚岛的转职的时候吗？去见见#b#p1032001##k吧。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
        } else {
            if (qid == 3524) cm.startQuest(3524);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
