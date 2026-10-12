/* Author: Xterminator
	NPC Name: 		Vikin
	Map(s): 		Victoria Road: Lith Harbor (104000000)
	Description: 		
*/
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
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