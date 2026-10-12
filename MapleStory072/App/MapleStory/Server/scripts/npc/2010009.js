/*
	This file is part of the OdinMS Maple Story Server
	Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
					   Matthias Butz <matze@odinms.de>
					   Jan Christian Meyer <vimes@odinms.de>

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as
	published by the Free Software Foundation version 3 as published by
	the Free Software Foundation. You may not use, modify or distribute
	this program under any other version of the GNU Affero General Public
	License.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * Guild Alliance NPC
 */

var status;
var choice;
var guildName;
var partymembers;

function start() {
	//cm.sendOk("The Guild Alliance is currently under development.");
	//cm.dispose();
	partymembers = cm.getPartyMembers();
	status = -1;
	action(1,0,0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendSimple("你好！我是#b蕾那丽#k\r\n#b#L0#能告诉我家族联盟是什么吗？#l\r\n#L1#怎样创建家族联盟？#l\r\n#L2#我想创建家族联盟#l\r\n#L3#我想增加联盟容量#l\r\n#L4#我想解散家族联盟#l");
	} else if (status == 1) {
		choice = selection;
	    if (selection == 0) {
		    cm.sendOk("家族联盟由多个家族联合组成，我负责管理这些联盟。");
			cm.dispose();
		} else if (selection == 1) {
			cm.sendOk("创建联盟需要两位族长组成队伍，队长将成为联盟盟主。");
			cm.dispose();
		} else if(selection == 2) {
			if (cm.getPlayer().getParty() == null || partymembers == null || partymembers.size() != 2 || !cm.isLeader()) {
				cm.sendOk("你必须先组成2人的队伍，才能创建联盟。"); //Not real text
				cm.dispose();
			} else if (partymembers.get(0).getGuildId() <= 0 || partymembers.get(0).getGuildRank() > 1) {
				cm.sendOk("你必须先拥有家族，才能创建联盟。");
				cm.dispose();
			} else if (partymembers.get(1).getGuildId() <= 0 || partymembers.get(1).getGuildRank() > 1) {
				cm.sendOk("你的队员似乎没有自己的家族。");
				cm.dispose();
			} else {
				var gs = cm.getGuild(cm.getPlayer().getGuildId());
				var gs2 = cm.getGuild(partymembers.get(1).getGuildId());
				if (gs.getAllianceId() > 0) {
					cm.sendOk("你已经加入其他联盟，不能再创建联盟。");
					cm.dispose();
				} else if (gs2.getAllianceId() > 0) {
					cm.sendOk("你的队员已经加入其他联盟。");
					cm.dispose();
				} else if (cm.partyMembersInMap() < 2) {
					cm.sendOk("请让另一名队员来到同一张地图。");
					cm.dispose();
				} else
                			cm.sendYesNo("你有兴趣创建家族联盟吗？");
			}
		} else if (selection == 3) {
			if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
				cm.sendYesNo("增加联盟容量需要10,000,000金币，是否继续？"); //ExpandGuild Text
			} else {
			    cm.sendOk("只有联盟盟主才能增加容量。");
				cm.dispose();
			}
		} else if(selection == 4) {
			if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
				cm.sendYesNo("你确定要解散家族联盟吗？");
			} else {
				cm.sendOk("只有联盟盟主才能解散联盟。");
				cm.dispose();
			}
		}
	} else if(status == 2) {
	    if (choice == 2) {
		    cm.sendGetText("请输入新联盟名称，最长12个字符。");
		} else if (choice == 3) {
			if (cm.getPlayer().getGuildId() <= 0) {
				cm.sendOk("不能扩充不存在的联盟。");
				cm.dispose();
			} else {
				if (cm.addCapacityToAlliance()) {
					cm.sendOk("联盟容量已经增加。");
				} else {
					cm.sendOk("联盟容量已满，最多5个家族。");
				}
				cm.dispose();
			}
		} else if (choice == 4) {
			if (cm.getPlayer().getGuildId() <= 0) {
				cm.sendOk("不能解散不存在的联盟。");
				cm.dispose();
			} else {
				if (cm.disbandAlliance()) {
					cm.sendOk("家族联盟已经解散。");
				} else {
					cm.sendOk("解散联盟时发生错误。");
				}
				cm.dispose();
			}
		}
	} else if (status == 3) {
		guildName = cm.getText();
	    cm.sendYesNo("确定要用#b"+ guildName + "#k作为你的家族联盟名称吗？");
	} else if (status == 4) {
			if (!cm.createAlliance(guildName)) {
				cm.sendNext("这个名称不可用，请换一个。"); //Not real text
				status = 1;
				choice = 2;
			} else
				cm.sendOk("家族联盟创建成功。");
			cm.dispose();
	}
}