function start() {
	cm.sendYesNo("你想离开这里吗？");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(682020000,0);
    }
    cm.dispose();
}