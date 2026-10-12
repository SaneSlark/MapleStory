function start() {
	cm.sendYesNo("你现在想离开这里吗？");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(100000000, 0);
    }
    cm.dispose();
}