importPackage(java.util);
importPackage(java.lang);
var status = -1;
var sr = null;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
		return;
	}
	status++;
	if (status == 0) {
		cm.sendSimple("你好，请选择：#b\r\n#L0#挑战帕普拉图斯竞速（立即开始计时）#l\r\n#L1#查看帕普拉图斯竞速记录#l#k");
	} else if (status == 1) {
		if (selection == 0) {
			if (cm.getClient().getChannel() != 1 && cm.getClient().getChannel() != 2) {
				cm.sendOk("只能在频道1和2挑战这个首领。");
			} else if (!cm.haveItem(4031172)) {
				cm.sendOk("你需要玩具城奖牌。");
			} else if (cm.getPlayer().isGM()) {
				cm.sendOk("管理员不能参加竞速挑战。");
			} else if (cm.getPlayerCount(220080001) <= 0) {
				var map = cm.getMap(220080001);
				map.resetFully();
				map.startSpeedRun(cm.getPlayer().getName());
				cm.playerMessage(5, "竞速挑战开始！");
				cm.warp(220080001, "st00");
			} else {
				cm.sendOk("地图内已有其他玩家。");
			}
			cm.dispose();
		} else {
			sr = cm.getSpeedRun("Papulatus");
			if (sr.getLeft().equals("")) {
				cm.sendOk("暂无速通记录。");
				cm.dispose();
			} else {
				cm.sendSimple(sr.getLeft());
			}
		}
	} else if (status == 2 && sr != null && selection > 0 && cm.getSR(sr, selection)) {
		status = -1;	
	}
}