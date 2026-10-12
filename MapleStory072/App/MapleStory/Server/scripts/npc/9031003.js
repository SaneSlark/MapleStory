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
	cm.sendSimple("#b#L0#学习/遗忘锻造#l");
    } else if (status == 1) {
	    if (cm.getPlayer().getProfessionLevel(92020000) > 0) {
		cm.sendYesNo("确定要遗忘锻造吗？将会失去锻造的全部经验和等级。");
	    } else if (cm.getPlayer().getProfessionLevel(92030000) > 0 || cm.getPlayer().getProfessionLevel(92040000) > 0 || cm.getPlayer().getProfessionLevel(92010000) <= 0) {
		cm.sendOk("你已有饰品制作或炼金术，或者尚未学习采矿，无法学习或遗忘锻造。");
		cm.dispose();
	    } else {
		cm.sendYesNo("要学习锻造吗？");
	    }
    } else if (status == 2) {
	    if (cm.getPlayer().getProfessionLevel(92020000) > 0) {
		cm.sendOk("已经遗忘锻造。");
		cm.teachSkill(92020000, 0, 0);
	    } else {
		cm.sendOk("已经学会锻造。");
		cm.teachSkill(92020000, 0x1000000, 0); //00 00 00 01
	    }
	    cm.dispose();
    }
}