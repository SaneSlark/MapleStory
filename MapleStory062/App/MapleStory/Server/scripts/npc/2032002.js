/* Aura
 * 
 * Adobis's Mission I: Unknown Dead Mine (280010000)
 * 
 * Zakum PQ NPC (the one and only)
*/

var status;
var selectedType;
var scrolls;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("...#b\r\n#L0#我能做什么?#l\r\n#L1#我已经拿到物品!#l\r\n#L2#我要回去!#l");
		}
		else if (status == 1) {
			selectedType = selection;
			if (selection == 0) {
				cm.sendNext("查明#b扎昆#k的真身,你需要找到30个交给我,或许能找到真正的源头.")
				cm.dispose();
			}
			else if (selection == 1) {
				if (!cm.haveItem(4001018)) { //documents
					cm.sendNext("请收集完全再来找我.")
					cm.dispose();
				}
				else {
					if (!cm.haveItem(4001015, 30)) { //documents
						cm.sendYesNo("下一阶段,将会是什么考验,只有去了才知道.");
						scrolls = false;
					}
					else {
						cm.sendYesNo("下一阶段,将会是什么考验,只有去了才知道.");
						scrolls = true;
					}
				}
			}
			else if (selection == 2) {
				cm.sendYesNo("你确定要离开吗?如果你是组里的队长,你队伍里的队员也将全部离开.")
			}
		}
		else if (status == 2) {
			var eim = cm.getChar().getEventInstance();
			if (selectedType == 1) {
				var party = eim.getPlayers();
				
				cm.gainItem(4001018, -1);
				if (scrolls) {
					cm.gainItem(4001015, -30);
				}
				
				//give items/exp
				cm.givePartyItems(4031061, 1, party);
				if (scrolls) {
					cm.givePartyItems(2030007, 5, party);
					cm.givePartyExp(20000, party);
				}
				else {
					cm.givePartyExp(12000, party);
				}
				
				//clear PQ
				eim.finishPQ();
				cm.dispose();
			}
			else if (selectedType == 2) {
				if (cm.isLeader())
					eim.disbandParty();
				else
					eim.leaveParty(cm.getChar());
				cm.dispose();
			}
		}
	}
}