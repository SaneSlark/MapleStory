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
var item;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getQuestStatus(2186).equals(net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) {
				var rand = Math.floor(Math.random() * 2);
				if (rand == 0 && !cm.haveItem(4031853)) {
					item = 4031853;
				} else if (rand == 1) {
					item = 4031854;
				} else {
					item = 4031855;
				}
				cm.gainItem(item, 1);
				if (item == 4031853) {
					cm.sendNext("我找到了亚伯的眼镜.");
				} else {
					cm.sendOk("我找到了一副眼镜,但好像不是亚伯的。亚伯的那副是玳瑁框的...");
				}
			}
			cm.dispose();
		}
	}
}
