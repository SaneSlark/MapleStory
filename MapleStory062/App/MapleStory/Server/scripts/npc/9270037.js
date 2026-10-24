/* Brittany
	Henesys Random Hair/Hair Color Change.
*/
var status = 0;
var beauty = 0;
var hairprice = 35000000;
var haircolorprice = 35000000;
var mhair = Array(30000, 30020, 30030, 30040, 30050, 30060, 30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30570, 30580, 30590, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30690, 30700, 30710, 30720, 30730, 30740, 30750, 30760, 30770, 30780, 30790, 30800, 30810, 30820);
var fhair = Array(31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31410, 31420, 31430, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31570, 31580, 31590, 31600, 31610, 31620, 31630, 31640, 31650, 31670, 31680, 31690, 31700, 31710, 31720, 31730, 31740, 31750, 31760, 31770, 31780, 31790, 31800, 31810);
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
			cm.sendSimple("只需要花少量金币就能随机的换一次发型和发色，你准备好了吗?\r\n#L0#我想买卡!#l\r\n#L1#我有发型卡，想换发型\r\n#L2#我有发色卡，想换发色#l");						
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("选择一个你想要买的卡?\r\n#L0#发型卡(3500万金币)#l\r\n#L1#发色卡(3500万金币)#l");
			} else if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				if (cm.getGender() == 0) {
					for(var i = 0; i < mhair.length; i++) {
						hairnew.push(mhair[i] + parseInt(cm.getHair() % 10));
					}
				} 
				if (cm.getGender() == 1) {
					for(var i = 0; i < fhair.length; i++) {
						hairnew.push(fhair[i] + parseInt(cm.getHair() % 10));
					}
				}
				cm.sendYesNo("如果您使用普通卡,您的头发将随机获得,我还是推荐你使用贵宾卡 . 那么你要使用  #b#t5150010##k 改变你的发形状?");
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getHair()/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendYesNo("如果您使用普通卡,您的头发将随机获得,我还是推荐你使用贵宾卡. 那么你要使用 #b#t5151000##k 改变你的发色?");
			}
		}
		else if (status == 2){
			if (beauty == 1){
				if (cm.haveItem(5150010) == true){
					cm.gainItem(5150010, -1);
					cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
					cm.sendOk("你自己看看怎么样,随机发型哦!");
				} else {
					cm.sendOk("嗯...我没有看见你带卡来,那我是不能帮你换发型的");
					cm.dispose();
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151000) == true){
					cm.gainItem(5151000, -1);
					cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
					cm.sendOk("你自己看看怎么样,随机发型哦!");
				} else {
					cm.sendOk("嗯...我没有看见你带卡来,那我是不能帮你换发型的...");
					cm.dispose();
				}
			}
			if (beauty == 0){
				if (selection == 0 && cm.getMeso() >= hairprice) {
					cm.gainMeso(-hairprice);
					cm.gainItem(5150010, 1);
					cm.sendOk("购买成功!");
					cm.dispose();
				} else if (selection == 1 && cm.getMeso() >= haircolorprice) {
					cm.gainMeso(-haircolorprice);
					cm.gainItem(5151000, 1);
					cm.sendOk("购买成功!");
					cm.dispose();
				} else {
					cm.sendOk("你没有足够的金币,回家去拿钱!");
				}
			}
		}
	}
}