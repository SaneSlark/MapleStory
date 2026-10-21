var status = 0;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		cm.sendNext("既然是阿世顺让你来的, 那就进来吧!");
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
					cm.warp(670010200, 0);
					cm.dispose();
					cm.changeMusic("Bgm14/Ariant");
				} else {
					cm.sendOk("你需要觉醒卷轴.");
					cm.dispose();
				}
			}
		}
	}
