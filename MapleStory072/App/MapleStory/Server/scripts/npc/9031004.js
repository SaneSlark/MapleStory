var status = -1;
var sel = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("#b#L0#学习/遗忘饰品制作#l");
    } else if (status == 1) {
	    if (cm.getPlayer().getProfessionLevel(92030000) > 0) {
		cm.sendYesNo("确定要遗忘饰品制作吗？将会失去饰品制作的全部经验和等级。");
	    } else if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92040000) > 0 || cm.getPlayer().getProfessionLevel(92010000) <= 0) {
		cm.sendOk("你已有锻造或炼金术，或者尚未学习采矿，无法学习或遗忘饰品制作。");
		cm.dispose();
	    } else {
		cm.sendYesNo("要学习饰品制作吗？");
	    }
    } else if (status == 2) {
	    if (cm.getPlayer().getProfessionLevel(92030000) > 0) {
		cm.sendOk("已经遗忘饰品制作。");
		cm.teachSkill(92030000, 0, 0);
	    } else {
		cm.sendOk("已经学会饰品制作。");
		cm.teachSkill(92030000, 0x1000000, 0); //00 00 00 01
	    }
	    cm.dispose();
    }
}