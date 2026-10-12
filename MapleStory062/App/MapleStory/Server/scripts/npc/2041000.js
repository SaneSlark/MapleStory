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
var tm;

function start() {
	status = -1;
	tm = cm.getEventManager("Trains");
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
		return;
	} else {
		status++;
		if(mode == 0) {
			cm.sendNext("你还有什么事情再这里没有完成吗？");
			cm.dispose();
			return;
		}
		if (status == 0) {
			if(tm == null) {
				cm.sendNext("脚本发生错误，请联系管理员解决。");
				cm.dispose();
			} else if(tm.getProperty("entry").equals("true")) {
				cm.sendYesNo("非常好，船上还有足够的位置，请准备好你的船票，我们将进入漫长的旅行，你是不是想登船？");
			} else if(tm.getProperty("entry").equals("false") && tm.getProperty("docked").equals("true")) {
				cm.sendNext("这次航班已经起飞，请等待下一次航班。");
				cm.dispose();
			} else {
				cm.sendNext("飞船起飞前5分钟内停止剪票，请注意时间。");
				cm.dispose();
			}
		} else if(status == 1) {
			if(!cm.haveItem(4031045)) {
				cm.sendNext("哦，不... 你是不是忘记买船票了？没有船票是不允许等船的。");
			} else {
				cm.gainItem(4031045,-1);
				tm.getInstance("Trains").registerPlayer(cm.getChar());
			}
			cm.dispose();
		}
	}
}