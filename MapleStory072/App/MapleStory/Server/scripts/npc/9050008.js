var status = -1;

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
	cm.sendYesNo("你想离开这里吗？");
    } else if (status == 1) {
	cm.warp(682020000,0);
	cm.dispose();
    }
}