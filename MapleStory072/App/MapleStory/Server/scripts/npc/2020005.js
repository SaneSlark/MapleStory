/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Alcaster - El Nath Market (211000100)
-- By ---------------------------------------------------------------------------------------------
	Unknown/Information/xQuasar
-- Version Info -----------------------------------------------------------------------------------
	1.3 - Fixed up completely [xQuasar]
	1.2 - Add a missing text part [Information]
	1.1 - Recoded to official [Information]
	1.0 - First Version by Unknown
---------------------------------------------------------------------------------------------------
**/

importPackage(net.sf.odinms.client);
var selected;
var amount;
var totalcost;
var item = new Array(2050003,2050004,4006000,4006001);
var cost = new Array(300,400,5000,5000);
var msg = new Array("可以解除封印和诅咒状态","可以治愈所有异常状态","，蕴含魔力，可用于施展高级技能","，蕴含召唤之力，可用于施展高级技能");

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == 0 && status == 2) {
		cm.sendNext("这样啊。你要知道我这里有很多不同的物品，随便看看吧。这些东西我只卖给你一个人，绝不会坑你的。");
		cm.dispose();
		return;
	}
	if(mode == 0 || mode == -1) {
		cm.dispose();
		return;
	}
	else
		status++;
	if (status == 0) {
		if ((cm.getQuestStatus(3035) == MapleQuestStatus.Status.COMPLETED)) {
			var selStr;
			for (var i = 0; i < item.length; i++){
				selStr += "\r\n#L" + i + "# #b#t" + item[i] + "# (价格: "+cost[i]+" 金币)#k#l";
			}
			cm.sendSimple("多亏了你，#b#t4031056##k 已经被安全地封印了。当然，为此我也耗尽了这800年来积累的大约一半力量……不过我现在可以安心离去了。哦，对了……你是不是在找稀有的物品？为了感谢你的辛苦付出，我把我收藏的一些东西卖给你，而且只卖给你一个人。挑一个你想要的吧！"+selStr);
		}
		else {
			cm.sendNext("如果你决定帮我,作为回报,我会给你一样东西.");
			cm.dispose();
		}
	}
	else if(status == 1) {
		selected = selection;
		cm.sendGetNumber("#b#t"+item[selected]+"##k 真的是你需要的东西吗？它"+msg[selected]+"。这东西可不容易弄到，不过我会给你个好价钱。每个要 #b"+cost[selected]+" 金币#k。你想买多少个？", 0, 1, 100);
	}
	else if(status == 2) {
		amount = selection;
		totalcost = cost[selected] * amount;
		if (amount == 0) {
			cm.sendOk("如果你不打算买东西，那我也没什么可卖的了。");
			cm.dispose();
		}
		cm.sendYesNo("你确定要买 #r"+amount+" 个 #t"+item[selected]+"##k 吗？每个 #t"+item[selected]+"# 要 "+cost[selected]+" 金币，总共需要 #r"+totalcost+" 金币#k。");
	} else if(status == 3) {
		if(cm.getMeso() < totalcost || !cm.canHold(item[selected])) {
			cm.sendNext("你带够钱了么?或是你的包裹窗已满?.");
			cm.dispose();
		}
		cm.sendNext("谢谢,如果要制造魔法物品,我会你免费制作.虽然我年岁已高,不过我还是可以帮你的忙.");
		cm.gainMeso(-totalcost);
		cm.gainItem(item[selected], amount);
		cm.dispose();
	}
}
