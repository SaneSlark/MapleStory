var maps = Array(105070001, 105090200); 
var mapsname = Array("林中之城 - 蚂蚁广场", "林中之城 - 迷宫");
var cost = Array( 33340, 44303);
var selectedMap = -1;
var job;


importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 1 && mode == 0) {
			cm.sendOk("嘿嘿~!有需要的时候记得来找我们哟~我们长期在#b明珠港口#k为冒险家服务的哟..!");
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		if (status == 0) {
			cm.sendNext("嘿您好呀~我是明珠港口的#r星级出租车#k\r\n不同于村落之间来往的一般的士~!我们给您提供更好`更高级的服务,因此车费都比他们贵一点!");
		} else if (status == 1) {
			var selStr = "每个村落区域我们都会为大家提供满意热诚的服务,那么请选择下面您想去的地方吧.#b";
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				for (var i = 0; i < maps.length; i++) {
					selStr += "\r\n#L" + i + "#" + mapsname[i] + "(" + costBeginner[i] + " 金币)#l";
				}
			} else {
				for (var i = 0; i < maps.length; i++) {
					selStr += "\r\n#L" + i + "#" + mapsname[i] + "(" + cost[i] + " 金币)#l";
				}
			}
			cm.sendSimple(selStr);
		} else if (status == 2) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				if (cm.getMeso() < costBeginner[selection]) {
					cm.sendOk("噢上帝啊~ 你好像带不够金币哟,那我不能为你服务的啦.!")
					cm.dispose();
				} else {
					cm.sendYesNo("你选择要去 " + mapsname[selection] + "吗?");
					selectedMap = selection;
				}
			}
			else {
				if (cm.getMeso() < cost[selection]) {
					cm.sendOk("噢上帝啊~ 你好像带不够金币哟,那我不能为你服务了啦.!")
					cm.dispose();
				} else {
					cm.sendYesNo("你选择要去 " + mapsname[selection] + "吗?");
					selectedMap = selection;
				}
			}		
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.gainMeso(-costBeginner[selectedMap]);
			}
			else {
				cm.gainMeso(-cost[selectedMap]);
			}
			cm.warp(maps[selectedMap], 0);
			cm.dispose();
		}
	}
}