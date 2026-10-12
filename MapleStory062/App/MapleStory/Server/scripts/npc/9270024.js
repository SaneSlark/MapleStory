/* Denma the Owner
	射手整形高级会员
	Henesys VIP Eye Change.
*/
var status = 0;
var beauty = 0;
var price = 10000000;
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
			cm.sendSimple("哇哦,你好! 欢迎你来到的新加坡整形中心! 你身上是否有高级射手整形卡, 我可以改变你的面貌~!\r\n#L1#我要够买高级射手整形卡 " + price + " 金币!#l\r\n\#L2#我已经有高级新加坡整形卡，现在就使用!#l");
			} else if (status == 1) {
			if (selection == 1) {
				if(cm.getMeso() >= price) {
					cm.gainMeso(-price);
					cm.gainItem(5152001, 1);
					cm.sendOk("购买成功，并可以使用");
				} else {
					cm.sendOk("你身上没有足够的楓幣");
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
				cm.sendStyle("看看吧 我可以完全改变您的面貌。 您不想尝试一下吗? 需要高级射手整形卡, 请花费一点点时间选择自己喜欢的面貌.", facenew);
			}
		}
		else if (status == 2){	
			cm.dispose();
			if (cm.haveItem(5152001) == true){
				cm.gainItem(5152001, -1);
				cm.setFace(facenew[selection]);
				cm.sendOk("已经为你改变新的面貌，你看起来非常好看!");
			} else {
				cm.sendOk("郁闷，你身上并没有整形卡我不能为你做任何事情...");
			}
		}
	}
}