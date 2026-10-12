importPackage(net.sf.odinms.net.world.guild);

var status;
var choice;
var guildName;
var partymembers;

function start() {
	partymembers = cm.getPartyMembers();
	status = -1;
	action(1,0,0);
}

function action(mode, type, selection) {
	if (mode == 1)
		status++;
	else {
		cm.dispose();
		return;
	}


	if (status == 0)
	    cm.sendSimple("你好！我是 #b雷纳利奥#k\r\n#b#L0#能告诉我家族联盟是怎么回事吗？#l\r\n#L1#怎样才能创建家族联盟？#l\r\n#L2#我想创建一个家族联盟。#l\r\n#L3#我想为家族联盟增加成员家族。#l\r\n#L4#我想解散家族联盟。#l");
	else if (status == 1) {
		choice = selection;
	    if (selection == 0) {
		    cm.sendNext("家族联盟顾名思义，就是由多个家族联合起来组成的超级团体。我负责管理这些家族联盟。");
			cm.dispose();
		} else if (selection == 1) {
			cm.sendNext("要创建家族联盟，需要两位族长组成队伍。队伍的队长将被任命为家族联盟盟主。");
			cm.dispose();
		} else if(selection == 2) {
			if (cm.getPlayer().getParty() == null) {
				cm.sendNext("你必须先组成2人的队伍，才能创建联盟"); //Not real text
				cm.dispose();
			} else if (partymembers.get(0).getGuild() == null) {
				cm.sendNext("你必须先拥有自己的家族，才能创建家族联盟");
				cm.dispose();
			} else if (partymembers.get(1).getGuild() == null) {
				cm.sendNext("你的队员似乎没有加入家族。");
				cm.dispose();
			} else if (partymembers.get(0).getGuild().getAllianceId() > 0) {
				cm.sendNext("你已经加入了其他联盟，不能再创建家族联盟。");
				cm.dispose();
			} else if (partymembers.get(1).getGuild().getAllianceId() > 0) {
				cm.sendNext("你的队员已经加入了其他联盟");
				cm.dispose();
			} else if (partymembers.size() != 2) {
				cm.sendNext("请确认你的队伍里只有2名玩家。");
				cm.dispose();
			} else if (cm.partyMembersInMap() != 2) {
				cm.sendNext("请让你的另一名队员和你在同一个地图。");
				cm.dispose();
			} else
                cm.sendYesNo("哦，你有兴趣创建家族联盟吗？");
		} else if (selection == 3) {
		    var rank = cm.getPlayer().getMGC().getAllianceRank();
			if (rank == 1)
				cm.sendOk("尚未开放"); //ExpandGuild Text
			else {
			    cm.sendNext("只有家族联盟盟主才能扩充联盟中的家族数量。");
				cm.dispose();
			}
		} else if(selection == 4) {
		    var rank = cm.getPlayer().getMGC().getAllianceRank();
			if (rank == 1)
				cm.sendYesNo("你确定要解散你的家族联盟吗？");
			else {
				cm.sendNext("只有家族联盟盟主才能解散家族联盟。");
				cm.dispose();
			}
		}
	} else if(status == 2) {
	    if (choice == 2) {
		    cm.sendGetText("现在请输入你的新家族联盟名称。（最长12个字符）");
		} else if (choice == 4) {
			if (cm.getPlayer().getGuild() == null) {
				cm.sendNext("你不能解散一个不存在的家族联盟。");
				cm.dispose();
			} else if (cm.getPlayer().getGuild().getAllianceId() <= 0) {
				cm.sendNext("你不能解散一个不存在的家族联盟。");
				cm.dispose();
			} else {
				MapleAlliance.disbandAlliance(cm.getC(), cm.getPlayer().getGuild().getAllianceId());
				cm.sendOk("你的家族联盟已被解散");
				cm.dispose();
			}
		}
	} else if (status == 3) {
		guildName = cm.getText();
	    cm.sendYesNo("确定要用 "+ guildName + " 作为你的家族联盟名称吗？");
	} else if (status == 4) {
	    if (!MapleAlliance.canBeUsedAllianceName(guildName)) {
			cm.sendNext("这个名字不可用，请换一个"); //Not real text
			status = 1;
			choice = 2;
		} else {
			if (MapleAlliance.createAlliance(partymembers.get(0), partymembers.get(1), guildName) == null)
				cm.sendOk("发生了未知的系统错误");
			else
				cm.sendOk("你已成功创建了家族联盟。");
			cm.dispose();
		}
	}
}
