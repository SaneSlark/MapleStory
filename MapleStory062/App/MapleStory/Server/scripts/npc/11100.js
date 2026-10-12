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
var maps = new Array(60000, 221000300);

function start() {
	status = 0;
	cm.sendYesNo("哟！我是 #p" + cm.getNpc() + "#，嘿嘿！我可以把你传送到别的地方去哦。");
}

function action(mode, type, selection) {
	if (status == 0) {
		status = 1;
		cm.sendNext("#b做好准备#k ;)))");
	} else if (status == 1) {
		status = 2;
		var warpText = "快选一个吧！哇哈哈哈哈 ;))#b";
		for (var i = 0; i < maps.length; i++)
			warpText += "\r\n#L" + i + "##m" + maps[i] + "##l";
		cm.sendSimple(warpText);
	} else if (status == 2) {
		cm.warp(maps[selection], 0);
		cm.dispose();
	}
}	
