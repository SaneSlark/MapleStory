/*
-- odinms JavaScript --
        NPC脚本
-------------------------
   奇怪的石像 - 林中之城(105040300) 勇士闯关活动
   收 6000 金币 → 发 5220000 转蛋券 → 送去闯关地图 105040310
   （原挂在阿里安特卖票员西拉斯 2102002 上，2026-10-03 移挂此处）
*/
var cost = 6000;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
	} else {
		if(mode == 1) {
			status++;
		}
		if(mode == 0) {
			cm.sendNext("呵呵....你肯定是一个不简单的人吧..?");
			cm.dispose();
			return;
		}
		if(status == 0) {
			cm.sendYesNo("恭喜你完成第一关,\r\n这是本关的奖励#b#v5220000##k\r\n\r\n接下来让我送你去第二关吧！下一关的奖励将是#b#v5220010##k\r\n祝你好运！");
		} else if(status == 1) {
			if(cm.getMeso() >= cost && cm.canHold(4031045)) {
			cm.showEffect(true,"quest/party/clear");
                        cm.playSound(true,"Party1/Clear");
                        cm.gainItem(5220000,1);
                        cm.serverNotice("「勇士公告」 勇士  "+ cm.getChar().getName() +" 凭着永不言弃的信念,终于征服了第一关！！！ "); 
                        cm.warp(105040310, 0);
				cm.gainMeso(-cost);
			} else {
				cm.sendOk("抱歉喔...你没有资格进入~~.");
			}
			cm.dispose();
		}
	}
}
