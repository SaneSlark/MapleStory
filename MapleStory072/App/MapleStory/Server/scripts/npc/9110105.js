/* 
 *  NPC     Naosuke
 *  Maps ;  Ninja Castle Hallway
 *
 */
var status = -1

function start() {
    cm.sendNext("哇！你是谁？！");
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++
    } else {
	if (status == 0) {
	    cm.sendOk("前方非常危险，很多前往那里的人都有去无回。若我是你，会立刻转身离开，保住性命。");
	}
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("你还想继续前进？你真的知道那里有什么吗？");
    } else if (status == 1) {
	cm.sendNext("既然你清楚危险，我就不阻拦了。希望你平安到达天守阁，并打败那些家伙！")
    } else if (status == 2) {
	cm.warp(800040300, 0);
	cm.dispose();
    }
}