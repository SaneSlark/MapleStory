/*
-- odinms JavaScript --
        NPC脚本 
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

var status = 0;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		cm.sendYesNo("#b嘿，我厌倦了争夺这些猪，请您帮助我消灭它们？我将给你很好的回报，如果你能带回20个蝴蝶结。\r\n #b#v4000002##kx20");
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
				if(cm.haveItem(4000002)) {
					cm.gainItem(4000002, -20);

                                        cm.showEffect(true,"quest/party/clear");
                                        cm.playSound(true,"Party1/Clear");
                                        cm.getGuild().gainGP(10);						
                                        cm.dispose();
				} else {
					cm.sendOk("哎呀~ 你没有带回蝴蝶结.记好呀，是20个！");
					cm.dispose();
				}
			}
		}
	}
}
