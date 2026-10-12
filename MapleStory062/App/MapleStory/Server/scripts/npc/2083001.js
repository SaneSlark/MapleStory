var status = 0;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		cm.sendYesNo("如果你是VIP,我可以直接将你传送到暗黑龙王洞穴入口");
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
			  if(cm.getChar().getVip() < 1) {
					cm.sendOk ("你不是VIP");
					cm.dispose();
					}else{
					status++
					cm.warp(240050400, 0);
					cm.dispose();
			  }
			}
		}
	}
}