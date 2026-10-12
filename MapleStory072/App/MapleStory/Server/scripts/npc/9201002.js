/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/*
 @author Jvlaple
 This notice may not be removed, or it will invalidate the conditions of using this script, or any other script/source/program released by Jvlaple.
 */
 

var status = 0;
var minLevel = 10;
var maxLevel = 200;
var minPlayers = 2;
var maxPlayers = 2;
var mySelection = -1;
var rings = Array(1112001, 1112002, 1112003, 1112005, 1112006);

//importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.tools);

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
	if (cm.getPlayer().getMapId() == 680000000){
		if (status == 0) {
			cm.sendSimple("你好! #h #,\r\n#b你想结婚?或者是来参加您的朋友的婚礼的?\r\n#L0#我想结婚!#l\r\n#L1#我想去看看我朋友的婚礼!#l\r\n#L2#我想买高级婚礼邀请票5张!#l\r\n#L3#我想买更好的婚礼邀请票,每张25000000金币!#l\r\n#L4#我想获得一个婚礼许可证!.#l\r\n");
		}else if (status == 1 && selection == 0) {
			// Slate has no preamble, directly checks if you're in a party
			if (cm.getParty() == null) { // no party
				cm.sendOk("你想结婚？得到了双方家长的认可了么?");
				cm.dispose();
                return;
			}
			if (!cm.isLeader()) { // not party leader
				cm.sendOk("请询问您的对象,然后跟我说!.");
				cm.dispose();
            }else {
				// Check teh partyy
				var party = cm.getParty().getMembers();
				var mapId = cm.getChar().getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;
				var genderRight = 0;
				var alreadyMarried = 0;
				// Temp removal for testing
				if (party.size() < minPlayers || party.size() > maxPlayers) 
					next = false;
				else {
					for (var i = 0; i < party.size() && next; i++) {
						if ((party.get(i).getLevel() >= minLevel) && (party.get(i).getLevel() <= maxLevel))
							levelValid += 1;
						if (party.get(i).getMapid() == mapId)
							inMap += 1;
						if (party.get(i).getGender() == 0) {
								genderRight += 1;
						} else if (party.get(i).getGender() == 1) {
								genderRight += 2;
						}
						if (party.get(i).isMarried() == 1) {
								alreadyMarried += 1;
						}
					}
					if (party.get(0).getGender() == 1) {
						next = false;
					}
					if (levelValid < minPlayers || inMap < minPlayers || genderRight != 3 || alreadyMarried != 0)
						next = false;
				}
				if (!cm.haveItem(4031374, 1)) {
					next = false;
				}		
				if (!cm.haveItem(5251003, 1)) {
					next = false;
				}		
				if (next) {
					// Kick it into action.  Slate says nothing here, just warps you in.
					var em = cm.getEventManager("CathedralWedding");
					if (em == null) {
						cm.sendOk("你太过分了！");
						cm.dispose();
					}
					else {
						// Begin the Wedding o.O
						em.startInstance(cm.getParty(),cm.getChar().getMap());
						party = cm.getChar().getEventInstance().getPlayers();
						var hname = party.get(0).getName();
						var wname = party.get(1).getName();
						var hidd = party.get(0).getId();
						var widd = party.get(1).getId();
						var StringLine = hname + " and " + wname + "'s Wedding is going to be started in Cathedral at Channel " + cm.getC().getChannel() +".";
						cm.worldMessage(5, StringLine);
						var eimi = cm.getChar().getEventInstance();
						eimi.setProperty("husband", hname);
						eimi.setProperty("wife", wname);
						eimi.setProperty("husid", hidd);
						eimi.setProperty("wifeid", widd);
						
					}
					cm.dispose();
				}
				else {
					cm.sendOk("您可能没有在同一个地图与您的对象在一起，或者你们两个是相同的性别，或者其中一个已经结过婚了，或者早已经是新娘，或者您没有结婚许可证书。请记住，你必须要双方都10级以上结婚(By:稻、香汉化).");
					cm.dispose();
				}
			}
		}
		else if (status == 1 && selection == 1) {
			if (cm.haveItem(5251100, 1)) {
				//cm.warp(680000200);
				//cm.dispose();
					cm.sendGetText("请输入的成员之一的名字,然后进行婚礼!.");
			}else {
					cm.sendOk("看起来那对情侣并没有给你一个婚礼邀请票,所以你不可以进去!.");
				}
		}else if (status == 1 && selection == 2) {
			if (cm.haveItem(5251003, 1)) {
					cm.gainItem(5251003, -1);
					cm.gainItem(5251100,5);
					cm.dispose();
			}else {
					cm.sendOk("您还没有白金婚礼票~.");
					cm.dispose();
				}
		}else if (status == 1 && selection == 3) {
			if (cm.getMeso() >= 25000000) {
					cm.gainMeso(-25000000)
					cm.gainItem(5251003, 1);
					cm.dispose();
				}else {
					cm.sendOk("你没有足够的钱!.");
					cm.dispose();
				}
			}
		else if (status == 1 && selection == 4) {
				if (cm.getPlayer().getMarriageQuestLevel() == 50) {
					cm.sendNext("请去爸爸妈妈家里拜访他们吧。他们就住在射手村狩猎场II的某个地方。");
					cm.getPlayer().addMarriageQuestLevel();
					cm.dispose();
				} else if (cm.getPlayer().getMarriageQuestLevel() == 53) {
					if (cm.haveItem(4031373, 1)) {
						cm.sendNext("太好了，这是我的许可。");
						cm.removeAll(4031373);
						cm.gainItem(4031374, 1);
						cm.getPlayer().setMarriageQuestLevel(100);
						cm.dispose();
					} else {
						cm.sendNext("您还没有得到爸爸妈妈或者GM们的祝福!.");
						cm.dispose();
					}
				} else {
					cm.sendNext("我不知道是什么问题!");
					cm.dispose();
				}
			} else if (status == 2) {
				var mapid = 99;
				var txt = cm.getText();
				var chrr = cm.getCharByName(txt);
				if (chrr != null)
				mapid = chrr.getMapId();
				if (mapid == 680000200) {
					var eim = chrr.getEventInstance();
					eim.registerPlayer(cm.getPlayer());
					cm.dispose();
				} else {
					cm.sendOk("您想参加的婚礼还没有开始呢,别着急啊!");
					cm.dispose();
				}
				cm.dispose();
			}
		} else if (cm.getPlayer().getMapId() == 680000210) {
			//Vows
			var eimii = cm.getChar().getEventInstance();
			var hiidii = eimii.getProperty("husid");
			var wiidii = eimii.getProperty("wifeid");
			var partyi = cm.getParty().getMembers();
			var alrediClicked = eimii.getProperty("alreadyClicked");
			if (status == 0) {
				if (cm.getPlayer().getId() != hiidii && cm.getPlayer().getId() != wiidii) {
					cm.sendOk("你不是要结婚的人！");
					cm.dispose();
					cm.dispose();
				} else if (cm.getPlayer().isMarried() != 0) {
					cm.sendOk("你已经结过婚了。");
					cm.dispose();
				} else {
					cm.sendYesNo("你愿意嫁给他/她么?想清楚了么?\r\n\r\n这将是最后的说明了!");
				}
			} else if (status == 1) {
				if (alrediClicked == 0) {
					eimii.setProperty("alreadyClicked", 1);
					kkk = Math.floor(Math.random() * rings.length);
					cm.createMarriage(partyi.get(0), partyi.get(1));//rings[1]);
					if (cm.getPlayer().getGender() == 0) {
						cm.getPlayer().setPartnerId(eimii.getProperty("wifeid")); //Force Save to DB
						cm.getPlayer().saveToDB(true);
					} else {	
						cm.getPlayer().setPartnerId(eimii.getProperty("husid"));
						cm.getPlayer().saveToDB(true);
					}
				} else {
					cm.getPlayer().setMarried(1);
					if (cm.getPlayer().getGender() == 0) {
						cm.getPlayer().setPartnerId(eimii.getProperty("wifeid")); //Force Save to DB
						cm.getPlayer().saveToDB(true);
					} else {	
						cm.getPlayer().setPartnerId(eimii.getProperty("husid"));
						cm.getPlayer().saveToDB(true);
					}
				}
				cm.sendOk("您已成功地结婚了。祝贺你们,恭喜发财!别忘记了办酒席啊!!!");
                                cm.serverNotice("[枫叶物语祝福]：哇."+ cm.getChar().getName() +" 玩家 在 ~冒险岛世界里顺利完成结婚了,大家一起祝福他们吧！祝他们白头到老!!恭喜,恭喜!");
				cm.removeAll(4031374);
				cm.dispose();
			}
		}
	}
}
					
					
