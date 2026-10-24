/* Author: Xterminator
	NPC Name: 		Vikin
	Map(s): 		Victoria Road: Lith Harbor (104000000)
	Description: 		
*/
var status = 0;

function recoveredOriginalStart() {
	status = -1;
	action(1, 0, 0);
}

function recoveredOriginalAction(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendOk("现在还不是离开的时侯,我要找到传说中的宝藏才离开.");
		cm.dispose();
		}
	}
}



// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":9380,"name":"拜金的宝箱","startNpc":9000009,"endNpc":9000009},{"id":9381,"name":"送给爱立信的礼物","startNpc":9000009,"endNpc":2012018},{"id":9382,"name":"给伊恩的礼物","startNpc":9000009,"endNpc":1022007},{"id":9383,"name":"拜金的黑色宝箱","startNpc":9000009,"endNpc":9000009},{"id":9384,"name":"拜金的蓝色宝箱","startNpc":9000009,"endNpc":9000009},{"id":9385,"name":"拜金回归的消息","startNpc":9010000,"endNpc":9000009}];
var recoveredMenu = null;
function start() {
    var reader = new java.util.Scanner(new java.io.File("scripts/npc/legacy.js"), "GBK");
    try {
        var factory = eval(String(reader.useDelimiter("(?!)").next()));
        recoveredMenu = factory(cm, recoveredDefs, recoveredOriginalStart, recoveredOriginalAction, "暂时没有可以接取或交付的任务。");
    } finally { reader.close(); }
    recoveredMenu.start();
}
function action(mode, type, selection) {
    if (recoveredMenu) recoveredMenu.action(mode, type, selection);
    else cm.dispose();
}
