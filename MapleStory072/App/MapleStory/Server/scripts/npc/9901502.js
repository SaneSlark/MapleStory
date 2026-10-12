function action(mode, type, selection) {
    if (cm.haveItem(1002971,1) && cm.canHold(1052202,1) && !cm.haveItem(1052202,1)) {
	cm.gainItem(1052202,1);
    } else {
    	cm.sendOk ("带来品克缤帽子，并在装备栏空出一个位置，如果你还没有品克缤套服，就可以获得它。");
    }
    cm.safeDispose();
}