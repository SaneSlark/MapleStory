/*
-- odinms JavaScript --
        NPC脚本 
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/
importPackage(net.sf.odinms.client);

var status = 0;
var yes = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (cm.getChar().getMapId() == 0 ) {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (status == -1 && mode == 0) {
			cm.sendNext("请想清楚了再来告诉我你的决定.");
			cm.dispose();
			return;
		} else if (status >= 0 && mode == 0) {
			yes = 1;
			cm.sendYesNo("你真的想不经过训练直接开始您的旅程吗？");
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (!cm.getJob().equals(MapleJob.BEGINNER)) {
				status = 3;
				cm.sendNext("找我有什么事吗？你不应该来这里！");
			} else {
				if (yes == 1) {
					status = 2;
					cm.sendNext("你好象没有进入训练营就直接想离开，好吧，祝你好运，我现在就送你离开训练营。");
				} else {
					cm.sendYesNo("#b#e欢迎您来到XX冒险岛#k。我不能停止闪烁....\r\n #b#r也许你会感到好奇，为什么我们这台服务器跟别的服务器不一样呢，这问题就要我来回答你吧，换了服务器后，新手都是要经过枯燥的新手升级过程。而到最后实际上什么都会没有，我会把你送到训练营，以帮助你。如果你实习的好，也许我会送你些特别的礼物！到此，有些人开始考虑离开训练营。但我强烈建议您采取的第一个训练.你想进入这个训练营训练吗？");
				}
			}
		} else if (status == 1) {
				cm.sendNext("#b#r 这里是本服务器送你的一点小礼物：#k \r\n #b#v5000005##k = 1个  #b#v5170000##k = 1个  #b#v2120000##k = 50个  #b#v1002518##k = 1个\r\n#b#v1322053##k = 1个  #b#v5072000##k = 1个  #b#v1322006##k = 1个  #b#v2000002##k = 100个\r\n  #b#v2022179##k = 2个  #b#v2022070##k = 3个  #b#v2022048##k = 3个  #b#v1040014##k = 1个\r\n  #r#e经验: 50000点#n \r\n#r#e金币: 500000#n");
					cm.warp(1,0);
					cm.resetStats();
					cm.gainItem(5000005, 1);
					cm.gainItem(5170000, 1);
					cm.gainItem(2120000, 50);
					cm.gainItem(1002518, 1);
					cm.gainItem(1322053, 1);
					cm.gainItem(5072000, 1);
					cm.gainItem(1322006, 1);
					cm.gainItem(2000002, 100);
					cm.gainItem(2022179, 2);
					cm.gainItem(2022070, 3);
					cm.gainItem(2022048, 3);
					cm.gainItem(1040014, 1);
					cm.gainExp(50000);
                                        cm.gainMeso(500000);
					cm.sendOk("#e#r好的,礼物已经成功放入你的背包内,你可以打开背包来查看,经验值同时也增加了5000点,你目前的等级也得到了相应的提高.但是,这些都不是白给你的,在新手训练有好几个阶段的.请注意地图内的居民,在结束新手训练的最后一阶段，需要你挑战一个首领才能继续冒险世界！如果你完成了全部的任务,你还会得到特别的奖励,加油吧！！！");
					cm.dispose();
		} else if (status == 2) {
			var statup = new java.util.ArrayList();
			var p = cm.c.getPlayer();
			var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();		
			p.setStr(4);
			p.setDex(4);
			p.setInt(4);
			p.setLuk(4);
			p.setRemainingAp (totAp - 16);
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
			p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
			cm.warp(1, 0);
			cm.dispose();
		} else if (status == 3) {
			var statup = new java.util.ArrayList();
			var p = cm.c.getPlayer();
			var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();		
			p.setStr(4);
			p.setDex(4);
			p.setInt(4);
			p.setLuk(4);
			p.setRemainingAp (totAp - 16);
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
			p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
			cm.warp(40000, 0);
			cm.dispose();
		} else if (status == 4) {
			cm.warp(100000000, 0);
			cm.dispose();
			}
		}
	} else {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("在这个房间里，是你第一个训练的开始，由此，你会有一个事先选择的职业。");
		} else if (status == 1) {
			cm.sendPrev("只要你刻苦训练，你将会表现的非常出色，你可以成为一个战士在 勇士部落，一个飞侠在 废气都市，一个弓箭手在 射手村，一个魔法师在 魔法密林。。。");
		} else if (status == 2) {
			cm.dispose();
			}
		}
	}
}