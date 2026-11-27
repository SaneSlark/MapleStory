var ticketClosed=false;
var originMap=-1;
importPackage(net.sf.odinms.client);

var status = 0;
var zones = 0;
var tickets = Array(4031036, 4031037, 4031038);
var names = Array("工地B1", "工地B2", "工地B3");
var maps = Array(103000900, 103000903, 103000906);
var selectedMap = -1;

function start() {
    originMap=cm.getMapId();
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if(ticketClosed)return;
    if(cm.getMapId()!=originMap){ticketClosed=true;cm.dispose();return;}
    if(mode!=1){ticketClosed=true;cm.dispose();return;}
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("那么, 下次见.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("嗨,我是检票口.");
			if (!((cm.getQuestStatus(2057) == MapleQuestStatus.Status.NOT_STARTED))) {
			zones = 3;
			}
			else if (!((cm.getQuestStatus(2056) == MapleQuestStatus.Status.NOT_STARTED))) {
			zones = 2;
			}
			else if (!((cm.getQuestStatus(2055) == MapleQuestStatus.Status.NOT_STARTED))) {
			zones = 1;
			}
			else {
			zones = 0;
			}
		} else if (status == 1) {
			if (zones == 0) {
			cm.dispose();
			} else {
			var selStr = "你要去哪?#b";
			for (var i = 0; i < zones; i++) {
				selStr += "\r\n#L" + i + "#" + names[i] + "#l";
			}
			cm.sendSimple(selStr);
			}
		} else if (status == 2) {
            ticketClosed=true;
            var currentZones=cm.getQuestStatus(2057)!=0?3:cm.getQuestStatus(2056)!=0?2:cm.getQuestStatus(2055)!=0?1:0;
            if(selection!=Math.floor(selection)||selection<0||selection>=zones||selection>=currentZones){cm.dispose();return;}
			if (!(cm.haveItem(tickets[selection]))) {
				cm.sendOk("你没有买票.");
				cm.dispose();
			} else {
			selectedMap = selection;
			try {
                cm.warp(maps[selectedMap],0);
                if(cm.getMapId()==maps[selectedMap]) cm.gainItem(tickets[selectedMap],-1);
            } finally {
                cm.dispose();
            }
			}
		} 
	}
}	