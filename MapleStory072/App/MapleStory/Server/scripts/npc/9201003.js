/**
 *9201003.js - Mom and Dad
 *@author Jvlaple
 */
var numberOfLoves = 0;
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (cm.getPlayer().getMarriageQuestLevel() == 51) {
			if (status == 0) {
				if (cm.getPlayer().getGender() == 0) {
					cm.sendYesNo("你好，我的孩子。你确定要和这个女孩结婚吗？我相信一见钟情，但这也太突然了……我觉得我们还没准备好。再想想吧。你是真的爱这个女孩吗？");
				} else {
					cm.sendYesNo("你好，我的孩子。你确定要和这个男人结婚吗？我相信一见钟情，但这也太突然了……我觉得我们还没准备好。再想想吧。你是真的爱这个男人吗？");
				}
			} else if (status == 1) {
				cm.getPlayer().addMarriageQuestLevel();
				cm.sendNext("那好吧。回城里去，再收集两个#b爱情的证明#k来向我证明吧。");
				cm.dispose();
			}
		} else if (cm.getPlayer().getMarriageQuestLevel() == 52) {
			if (status == 0) {
				numberOfLoves += cm.getPlayer().countItem(4031367);
				numberOfLoves += cm.getPlayer().countItem(4031368);
				numberOfLoves += cm.getPlayer().countItem(4031369);
				numberOfLoves += cm.getPlayer().countItem(4031370);
				numberOfLoves += cm.getPlayer().countItem(4031371);
				numberOfLoves += cm.getPlayer().countItem(4031372);
				if (numberOfLoves >= 2) {
					cm.sendNext("哇，看来你是认真的！那好吧，我们把祝福送给你们。");
				} else {
					cm.sendNext("等你拿到两个#b爱情的证明#k再回来吧。");
					cm.dispose();
				}
			} else if (status == 1) {
				cm.getPlayer().addMarriageQuestLevel();
				cm.removeAll(4031367);
				cm.removeAll(4031368);
				cm.removeAll(4031369);
				cm.removeAll(4031370);
				cm.removeAll(4031371);
				cm.removeAll(4031372);
				cm.gainItem(4031373, 1);
				cm.dispose();
			}
		} else {
			cm.sendOk("孩子,我们来看你来了...");
			cm.dispose();
		}
	}
}