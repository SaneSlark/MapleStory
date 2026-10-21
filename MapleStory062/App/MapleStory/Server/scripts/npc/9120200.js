function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	}else {
		if (mode == 0) {
			cm.sendOk("如果要回 #b#m801000000##k,我带你去.");
			cm.dispose();
			return;
		} if (mode == 1) {
			status++;
		}
		if (status == 0) {
			cm.sendYesNo("你现在要回 #b#m801000000##k么?");
		} if (status == 1) {
			cm.warp("801000000");
			cm.dispose();
		}
	}
}