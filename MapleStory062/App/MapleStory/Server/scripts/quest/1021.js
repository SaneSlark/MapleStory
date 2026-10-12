/* Author: Xterminator (Modified by RMZero213)
	NPC Name: 		Roger
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Quest - Roger's Apple
*/
importPackage(net.sf.odinms.client);

var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("嘿，朋友~ 最近怎么样？哈哈！我是罗杰，可以教你们这些可爱的冒险岛新手很多东西哦。");
		} else if (status == 1) {
			qm.sendNextPrev("你问是谁让我做这些的？啊哈哈哈！\r\n是我自己！我就是想做点好事，帮帮你们这些新来的旅行者。");
		} else if (status == 2) {
			qm.sendAcceptDecline("那么…… 就让我来玩个有趣的吧！变变变~！");
		} else if (status == 3) {
			if (qm.getClient().getTimesTalked(qm.getNpc()) == 0) {
				qm.getPlayer().setHp(25);
				qm.getPlayer().updateSingleStat(MapleStat.HP, 25);
			}
			if (!qm.haveItem(2010007))
				qm.gainItem(2010007, 1);
			qm.sendNext("吓了一跳吧？如果 HP 变成 0 可就麻烦大了。现在，我把#r罗杰的苹果#k送给你。请收下吧，吃了它你会感觉更有力气。打开物品栏双击就能使用。嘿，打开物品栏很简单，只要按键盘上的#bI#k键就行。");
		} else if (status == 4) {
			qm.getClient().setTimesTalked(qm.getNpc(), qm.getClient().getTimesTalked(qm.getNpc()) + 1);
			qm.sendPrev("请把我给你的罗杰的苹果都吃掉吧。你会看到 HP 条慢慢恢复。等你的 HP 100% 恢复之后，再来找我谈谈。");
		} else if (status == 5) {
			qm.forceStartQuest();
			qm.dispose();
		}
	}
}

function end(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("使用道具很简单吧？很简单对吧？你还可以在右下角的快捷栏上设置#b快捷键#k。哈哈，你不知道吧！对了，如果你是新手，HP 会随着时间自动恢复。虽然要花点时间，但这是新手的重要诀窍之一。");
		} else if (status == 1) {
			qm.sendNextPrev("好啦！你已经学会了很多，我要送你一份礼物。这是你在冒险岛世界旅行必备的东西，快谢谢我吧！紧急情况下记得使用哦！");
		} else if (status == 2) {
			qm.sendNextPrev("好了，我能教你的就这些了。虽然有点舍不得，但到说再见的时候了。好好照顾自己，祝你好运，我的朋友！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2010000# 3 #t2010000#\r\n#v2010009# 3 #t2010009#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 经验值");
		} else if (status == 3) {
			qm.forceCompleteQuest();
			qm.gainExp(10);
			qm.gainItem(2010000, 3);
			qm.gainItem(2010009, 3);
			qm.dispose();
		}
	}
}
