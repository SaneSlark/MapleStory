/*
-- odinms JavaScript --
        NPC脚本
-------------------------
   鹤（2090005）- 仙鹤出租车，三个放置点共用：
   百草堂 251000000 → 武陵 250000100
   武陵 250000100 → 天空之城 200000100
   天空之城码头 200000141 → 武陵 250000100
*/
importPackage(net.sf.odinms.client);

var status = 0;
var cost = 5000; // 辛苦钱
var em;

function start() {
	status = -1;
	em = cm.getEventManager("Hak");
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendNext("好吧，下次见。");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (em == null) {
				cm.sendNext("脚本发生错误，请联系管理员解决。");
				cm.dispose();
			} else if (em.getProperty("isRiding") != null && em.getProperty("isRiding").equals("true")) {
				cm.sendNext("仙鹤刚载着客人飞走了，请稍等片刻再回来。");
				cm.dispose();
			} else {
				var curMap = cm.getChar().getMapId();
				var route;
				if (curMap == 251000000) {
					route = "百草堂 <-> 武陵";
				} else {
					route = "武陵 <-> 天空之城";
				}
				cm.sendYesNo("你好，我是仙鹤。我的航线是#b" + route + "#k！给些辛苦钱我就送你，比走着去快多了是不是？只要 #b" + cost + " 金币#k，现在就出发吗？");
			}
		} else if (status == 1) {
			if (cm.getMeso() < cost) {
				cm.sendNext("你的金币不够啊... 凑够 #b" + cost + " 金币#k 再来找我吧。");
				cm.dispose();
			} else {
				if (cm.getChar().getMapId() == 250000100) {
					em.setProperty("myRide", "1"); // 飞回天空之城
				} else {
					em.setProperty("myRide", "0"); // 飞往武陵
				}
				cm.gainMeso(-cost);
				em.newInstance("Hak").registerPlayer(cm.getChar());
				cm.dispose();
			}
		}
	}
}
