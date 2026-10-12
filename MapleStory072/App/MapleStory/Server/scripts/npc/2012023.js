
function action(mode, type, selection) {
    if (cm.getQuestStatus(6230) == 1) {
	if (!cm.haveItem(4031456)) {
	    if (cm.haveItem(4031476)) {
		if (cm.canHold(4031456)) {
		    cm.gainItem(4031456, 1);
		    cm.gainItem(4031476, -1);
		    cm.sendOk("枫叶被吸入闪闪发光的玻璃珠中。" );
		    cm.safeDispose();
		} else {
		    cm.sendOk("其他栏没有空位，无法获得枫叶玻璃珠，请空出位置后再试。" );
		    cm.safeDispose();
		}
	    } else {
		cm.dispose();
	    }
	} else {
	    cm.dispose();
	}
    } else {
	cm.dispose();
    }
}