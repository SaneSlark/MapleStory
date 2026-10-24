/*
黑龙入口
*/


function start() {
			cm.sendSimple("你好，勇敢的人类! 欢迎你来到生命的洞穴 - 入口 ! 你已经做好了挑战#b暗黑龙王#k的准备了吗? 如果你真的想进入该洞穴打败暗黑龙王, 你可能需要购买一些#b超级药水#k, 这样打暗黑龙王的时候就能很快的恢复生命值和魔法值.\r\n#L1#我想购买 100 瓶超级药水,总共需要价值 1000W 金币!#l\r\n\#L2#挑战黑龙需要1千万，你真的要进去么?#l");
}

function action(mode, type, selection) {
	cm.dispose();
			if (selection == 1) {
				if(cm.getMeso() >= 100000000) {
					cm.gainMeso(-10000000);
					cm.gainItem(2000005, 100);
					cm.sendOk("谢谢你买了这些，请好好使用吧!");
				} else {
					cm.sendOk("对不起，你没有足够的钱购买!");
				}
				cm.dispose();
			} else if (selection == 2) {
			if(cm.getMeso() >= 10000000) {
					cm.gainMeso(-10000000);                        
					cm.warp(240050400, 0);
}else{
cm.sendOk("很抱歉,你现在不能进入此洞穴,请确认你有1千万,那时我会考虑让你进去的!");
cm.dispose();
		}
	}
}
