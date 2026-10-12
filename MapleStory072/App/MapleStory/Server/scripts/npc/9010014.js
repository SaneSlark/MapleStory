/* 	Aramia
 * 	Henesys fireworks NPC
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendNext("你好，我是阿乐米，擅长制作烟花！请把从怪物那里得到的火药桶交给我，收集齐后就能举行烟花表演。");
    } else if (status == 1) {
	cm.sendSimple("收集齐所需火药桶，就可以举行烟花表演！\r\n#b#L0#捐赠火药桶#l#k\r\n#b#L1#查看收集进度#l#k");
    } else if (status == 2) {
	if (selection == 1) {
	    cm.sendNext("火药桶收集进度\r\n#B"+cm.getKegs()+"#\r\n收集完成后就能开始放烟花了……");
	    cm.safeDispose();
	} else if (selection == 0) {
	    cm.sendGetNumber("你带来火药桶了吗？把你的#b火药桶#k交给我，我会制作漂亮的烟花。你愿意交出多少？\r\n#b＜背包里的火药桶数量：0＞#k", 0, 0, 1000);
	}
    } else if (status == 3) {
	var num = selection;
	if (num == 0) {
	    cm.sendOk("需要火药桶才能放烟花，请再考虑一下。");
	} else if (cm.haveItem(4001128, num)) {
	    cm.gainItem(4001128, -num);
	    cm.giveKegs(num);
	    cm.sendOk("拿到火药桶后，别忘了交给我。");
	}
	cm.safeDispose();
    }
}