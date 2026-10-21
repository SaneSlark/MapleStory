var status = 0;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		cm.sendYesNo("你想中途离开这趟航程吗?");
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
					cm.sendNext ("好的，下次再见。保重。");
					status++;
			} else if (status == 2) {
					cm.warp(240000110, 0);// back to Leafre
					cm.dispose();
			}
		}
	}
}
