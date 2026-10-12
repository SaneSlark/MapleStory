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

function start() {
	status = -1;
	cb = cm.getEventManager("Cabin");
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
	} else {
		status++;
		if(mode == 0) {
			cm.sendOk("不下船就跟别人聊聊天吧.");
			cm.dispose();
		}
		if(status == 0) {
			cm.sendYesNo("你想下船吗？如果下船，船票是不会退还的。你真的要下船吗？");
		} else if(status == 1) {
			cb.getInstance("Cabin").unregisterPlayer(cm.getChar());
			cm.dispose();
		}
	}
}