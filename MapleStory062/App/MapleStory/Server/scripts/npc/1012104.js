/* Brittany
	Henesys Random Hair/Hair Color Change.
*/
var status = 0;
var beauty = 0;
var hairprice = 1000000;
var haircolorprice = 1000000;
var mhair = Array(30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200, 30560, 30510, 30610, 30470);
var fhair = Array(31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070, 31610, 31350, 31510, 31740);
var hairnew = Array();

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
			cm.sendSimple("我是老板娘的助理. 如果你有 #b#t5150010##k 或 #b#t5151000##k, 我可以为你塑造全新的形象\r\n#L0#我要买一张!#l\r\n#L1#美发: #i5150010##t5150010##l\r\n#L2#染色: #i5151000##t5151000##l");						
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("你要买哪种会员卡?\r\n#L0#美发 " + hairprice + " 金币: #i5150010##t5150010##l\r\n#L1#染发 " + haircolorprice + " 金币: #i5151000##t5151000##l");
			} else if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mhair.length; i++) {
						hairnew.push(mhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				} 
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fhair.length; i++) {
						hairnew.push(fhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				}
				cm.sendYesNo("普通会员卡会#e随机生成#n其中的一种, 你确定要使用 #b#t5150010##k ?");
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendYesNo("普通会员卡会#e随机生成#n其中的一种, 你确定要使用 #b#t5151000##k ?");
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150010) == true){
					cm.gainItem(5150010, -1);
					cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
					cm.sendOk("希望你能喜欢!");
				} else {
					cm.sendOk("恩...你好像没有普通会员卡,如果没带普通会员卡,我就无法帮你换发型,很抱歉.");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151000) == true){
					cm.gainItem(5151000, -1);
					cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
					cm.sendOk("希望你能喜欢!");
				} else {
					cm.sendOk(" 恩...你好像没有普通会员卡,如果没带普通会员卡,我就无法帮你染色,很抱歉.");
				}
			}
			if (beauty == 0){
				if (selection == 0 && cm.getMeso() >= hairprice) {
					cm.gainMeso(-hairprice);
					cm.gainItem(5150010, 1);
					cm.sendOk("谢谢惠顾!");
				} else if (selection == 1 && cm.getMeso() >= haircolorprice) {
					cm.gainMeso(-haircolorprice);
					cm.gainItem(5151000, 1);
					cm.sendOk("谢谢惠顾!");
				} else {
					cm.sendOk("你没有足够的金币购买普通会员卡!");
				}
			}
		}
	}
}
