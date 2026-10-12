var status = 0;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		cm.sendYesNo("你要返回么？");
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
					cm.sendOk ("好吧！既然你想回去，那我无话可说！");
					status++
			} else if (status == 2) {
					cm.warp(270050000, 0);
					cm.dispose();
			}
		}
	}
}
