var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
		return;
	}
	status += mode == 1 ? 1 : -1;
	if (status < 0) {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendNext("飞机票价很贵？那就别买咯～");
	} else if (status == 1) {
		cm.sendPrev("只有我这里才可以买到机票哦．");
	} else {
		cm.dispose();
	}
}