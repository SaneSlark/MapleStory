/* Dr. Feeble
	新加坡随机整形
	Henesys Random Eye Change.
*/
var status = 0;
var beauty = 0;
var price = 2000000;
var mface = Array(20400, 20401, 20402, 20403, 20404, 20405, 20406, 20407, 20408, 20409, 20410, 20411, 20412, 20413, 20414, 20016, 20017, 20418, 20419, 20420, 20421, 20022, 20423, 20424);
var fface = Array(21800, 21801, 21802, 21803, 21804, 21805, 21806, 21807, 21808, 21809, 21810, 21811, 21812, 21813, 21814, 21816, 21818, 21819, 21821, 21822, 21824, 21825);
var facenew = Array();

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("你好, 我是个整容医生，如果你有新加坡随机整形卡, 我可以帮助你随机更换你的面貌. 那么你要做什么!\r\n#L1#我要购买新加坡随机整形卡 " + price + " 元!#l\r\n\#L2#我已经有新加坡随机整形卡，现在使用!#l");
			} else if (status == 1) {
			if (selection == 1) {
				if(cm.getMeso() >= price) {
					cm.gainMeso(-price);
					cm.gainItem(5152000, 1);
					cm.sendOk("购买成功，并且可以使用!");
				} else {
					cm.sendOk("你身上没有足够的钱!");
				}
				cm.dispose();
			} else if (selection == 2) {
				facenew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mface.length; i++) {
						facenew.push(mface[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
					}
				}
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fface.length; i++) {
						facenew.push(fface[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
					}
				}
				cm.sendYesNo("你确定要使用新加坡随机整形卡让我来改变你面貌?");
		}
		}
		else if (status == 2){
			cm.dispose();
			if (cm.haveItem(5152000) == true){
				cm.gainItem(5152000, -1);
				cm.setFace(facenew[Math.floor(Math.random() * facenew.length)]);
				cm.sendOk("手术非常成功，不知道你喜欢现在的面孔吗!");
			} else {
				cm.sendOk("不不不，你身上没有新加坡随机整形卡我可什么都不能帮你哦...");
			}
		}
	}
}