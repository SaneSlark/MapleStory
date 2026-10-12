/* 
 * 
 * Adobis's Mission I: Unknown Dead Mine (280010000)
 * 
 * Zakum PQ NPC (the one and only)
 */

var status = -1;
var selectedType;
var scrolls;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	cm.sendSimple("怎么样，都收集好了吗？#b\r\n#L0#告诉我应该做什么#l\r\n#L1#我已经收集好物品#l\r\n#L2#我要离开这里#l");
    } else if (status == 1) {
	selectedType = selection;
	if (selection == 0) {
	    cm.sendNext("为了揭开扎昆的真身，需要重建它的核心。这里藏着核心材料火矿石，请找到后交给我。\r\n另外，岩石下面散落着文件，如果收集到30份，也可以获得奖励。")
	    cm.safeDispose();
	} else if (selection == 1) {
	    if (!cm.haveItem(4001018)) { //documents
		cm.sendNext("请带来火矿石。")
		cm.safeDispose();
	    } else {
		if (!cm.haveItem(4001015, 30)) { //documents
		    cm.sendYesNo("你带来了火矿石！我会给你和队员足够制作扎昆核心的碎片。请先确认所有队员的背包都有空位。");
		    scrolls = false;
		} else {
		    cm.sendYesNo("你带来了火矿石和文件！我会给你和队员核心碎片，并额外奖励能够返回矿洞入口的物品。请先确认所有队员的背包都有空位。");
		    scrolls = true;
		}
	    }
	} else if (selection == 2) {
	    cm.sendYesNo("你确定要离开吗？如果你是队长，所有队员也会一起离开矿洞。")
	}
    } else if (status == 2) {
	var eim = cm.getEventInstance();
	if (selectedType == 1) {
				
	    cm.gainItem(4001018, -1);
	    if (scrolls) {
		cm.gainItem(4001015, -30);
	    }
	    //give items/exp
	    cm.givePartyItems(4031061, 1);
	    if (scrolls) {
		cm.givePartyItems(2030007, 5);
		cm.givePartyExp(20000);
	    } else {
		cm.givePartyExp(12000);
	    }
				
	    //clear PQ

	    if (eim != null) {
	    	eim.finishPQ();
	    }
	    cm.dispose();
	} else if (selectedType == 2) {
	if (eim != null) {
	    if (cm.isLeader())
		eim.disbandParty();
	    else
		eim.leftParty(cm.getChar());
	} else {
		cm.warp(280090000, 0);
	}
	    cm.dispose();
	}
    }
}