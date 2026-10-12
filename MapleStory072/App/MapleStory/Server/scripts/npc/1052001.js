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

/* Dark Lord
	Thief Job Advancement
	Victoria Road : Thieves' Hideout (103000003)

	Custom Quest 100009, 100011
*/

var status = 0;
var job;

importPackage(net.sf.odinms.client);

function start() {
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 2) {
			cm.sendOk("你应该知道，在这里已经没有别的选择!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if ((cm.getJob() == net.sf.odinms.client.MapleJob.BEGINNER.getId())) {
				if (cm.getLevel() >= 10 && cm.getChar().getDex() >= 25)
					cm.sendNext("那么你已经决定成为一名#r飞侠#k?");
				else {
					cm.sendOk("你还需要加强修炼我才能给你指明怎样成为一名出色的 #r飞侠#k.")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 
					&& (cm.getJob() == net.sf.odinms.client.MapleJob.THIEF.getId())) {
					if (cm.getQuestStatus(100009) >=
						net.sf.odinms.client.MapleQuestStatus.Status.STARTED) {
						legacyComplete(100011);
						if (cm.getQuestStatus(100011) ==
						 net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
							status = 20;
							cm.sendNext("不错,你做得很好. 我将允许你进入一下漫长的修炼阶段.");
						} else {
							cm.sendOk("去找 #r二转教官#k 吧.")
							cm.dispose();
						}
					} else {
						status = 10;
						cm.sendNext("你目前所做出的进步真的很让人吃惊.");
					}
				} else if ((cm.getLevel()>=70 && Math.floor(cm.getJob()/100)==4 && cm.getJob()%10==0)) {
					legacyComplete(100101);
					if ((cm.getQuestStatus(100101) == MapleQuestStatus.Status.COMPLETED)) {
						cm.sendOk("那么，请把这个转交给#b艾瑞克#k。");
					} else {
						cm.sendOk("嘿, " + cm.getChar().getName() + "! 我需要一个#b黑珠#k. 去找到次元之门吧.");
						legacyStart(100101);
					}
					cm.dispose();
				} else {
					cm.sendOk("你的选择是明智的.");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("这是非常重要也是你最后作出的一个选择. 一旦你选择了该职业,你将永远不能改变.");
		} else if (status == 2) {
			cm.sendYesNo("你真的想成为一名 #r飞侠#k 吗?");
		} else if (status == 3) {
			if ((cm.getJob() == net.sf.odinms.client.MapleJob.BEGINNER.getId()))
				cm.changeJob(net.sf.odinms.client.MapleJob.THIEF.getId());
			cm.sendOk("转职成功!那么现在请你去为了更高的境界而奋斗吧.");
                        cm.gainItem(1332000,1);
                        cm.gainItem(1472000,1);
                        cm.gainItem(2070000,5000);
                        cm.gainItem(2070000,5000);
                        cm.gainItem(2070000,5000);
                        cm.dispose();

		} else if (status == 11) {
			cm.sendNextPrev("作为一名 #r刺客#k 或者 #r侠客#k,你应该做好挑战下一个阶段的准备.");
		} else if (status == 12) {
			cm.sendAcceptDecline("但我首先得考考你的能力. 你准备好了吗?");
		} else if (status == 13) {
			if (cm.haveItem(4031011)) {
				cm.sendOk("发生异常，请联系管理员。");
			} else {
				legacyStart(100009);
				cm.sendOk("请你把这封信带给 #b二转教官#k 他就在废气北面的一座城市里. 他将会给你转职的指引.");
			}
		} else if (status == 21) {
			cm.sendSimple("你想转为下面哪个职业呢?#b\r\n#L0#刺客#l\r\n#L1#侠客#l#k");
		} else if (status == 22) {
			var jobName;
			if (selection == 0) {
				jobName = "刺客";
				job = net.sf.odinms.client.MapleJob.ASSASSIN.getId();
			} else {
				jobName = "侠客";
				job = net.sf.odinms.client.MapleJob.BANDIT.getId();
			}
			cm.sendYesNo("你真的想成为一名 #r" + jobName + "#k?");
		} else if (status == 23) {
			cm.changeJob(job);
			cm.sendOk("转职成功!那么现在请你去为了更高的境界而奋斗吧.");
		}
	}
}	

function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    qOrigAction(mode, type, selection);
}

/* AUTO-QUEST-BEGIN */
/* CMS072 client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[2079, 1, "飞侠之路", "想要成为飞侠才来到这个隐密的地方吗？"], [2140, 0, "新手飞侠的第一次修炼", "成为飞侠并不意味着你已经具备强大的实力，目前的你只不过是脱离了入门阶段的小贼而已，想要凭借自身的力量进行战斗还很困难。 特别是对于你的情况来说。。。 怎么样?接受我#p1052001#大爷所提供的特别修炼吧?\\r\\n#L0# #b让我们开始修炼吧。#l  \\n\\n#L1# 相信你能凭借自身的力量通过的。 #I"], [2140, 1, "新手飞侠的第一次修炼", "捕捉到#o0130100# 20只了。 什么，这只是小事一桩?你可不要因此骄傲自满。 你的飞侠生涯只不过是刚开始而已。"], [2141, 0, "新手飞侠的第二次修炼", "哼。 新手你的实力比以前进步了嘛。 但也只不过是一点点的进步而已，离真正的飞侠还早着呢。 无论如何不继续跟着我#p1052001#大爷修炼是不行的? 怎么样? 接受修炼任务吗?"], [2141, 1, "新手飞侠的第二次修炼", "捕捉到#o0130100# 50只了。 还不错。。。 新手能做到这一步很不容易。 嗯? 怎么那种表情? 你以为自己做了多伟大的事情吗？ 别开玩笑了~ 还早着呢。"], [2142, 0, "新手飞侠的第三次修炼", "嗯。。。 新手你的实力又比以前进步了。 也许可以称为优秀?只要你更加努力一名出色的飞侠就要诞生了。。。 只不过。。。 你现在还不行。 想要更快成长必须再完成一项任务。"], [2142, 1, "新手飞侠的第三次修炼", "捕捉到#o0130100# 80只了，这次的任务你做的还不错。 "], [2143, 0, "新手飞侠最后阶段的修炼", "新手朋友。 你的修炼进度很不错。 虽然还有不足之处但现在总算有点飞侠的样子了，我真为你高兴。 那么我们现在就来测验一下你的实力吧? "], [2143, 1, "新手飞侠最后阶段的修炼", "成功捕捉到#o1120100# 10只了。 哈哈哈。 很不错。 曾经一无所知的新手也能做到这种程度了。 这也是拜我达克鲁大爷所赐吧? 呵呵。 真让人高兴。"], [3027, 1, "废弃都市的贤者", ""], [3028, 0, "达克鲁的拜托", "关于你我已经从射手村的#b#p1012100##k听说过了。我们不需要见面也可以通过心灵对话呀。一路上来辛苦了。不过听说你…正在找#b#t4031056##k...？当然我这里也有一张地图碎片，这件事我差不多都要遗忘了…"], [3028, 1, "达克鲁的拜托", ""], [3029, 0, "收集完的地图碎片", "你果然成功了。有了这个我就可以恢复了。来，按照约定给你找#b#t4031056##k需要的线索。不过你应该先确认你背包的其他窗口里有没有空间。"], [3526, 0, "追随遗忘的记忆   ", ""], [3945, 1, "巴一岚的推荐书！！！", "是谁啊？有东西要给我？让我看看"], [4714, 0, "达克鲁的敏捷碎块(1日)", "冒险家，你来啦？我已经恭候你多时了。我们5大职业转职教官都已经知道你的来意了，我们也准备好对你考验的题目了。我这边授予你的任务是：打倒在外面的怪物，并且收集来30个敏捷碎块。怎么样？有没有信心完成？"], [4714, 1, "达克鲁的敏捷碎块(1日)", "怎么样啊？冒险家，任务完成了么？"], [4724, 0, "达克鲁的敏捷碎块(7日)", "冒险家，你来啦？我已经恭候你多时了。我们5大职业转职教官都已经知道你的来意了，我们也准备好对你考验的题目了。我这边授予你的任务是：打倒在外面的怪物，并且收集来30个敏捷碎块。怎么样？有没有信心完成？"], [4724, 1, "达克鲁的敏捷碎块(7日)", "怎么样啊？冒险家，任务完成了么？"], [6140, 1, "达克鲁", "既然到这里了，就证明你决心踏入飞侠行列? 这样看来有点面熟... 当年啥都不懂的年轻冒险家为了做飞侠而找过我的，不敢相信现在成长为这么出色的飞侠，难道你是#p2081400#推荐的那个人？"], [6141, 0, "影子中的存在", "你也已经达到一定的境界，需要手下的，不是吗？想你这样的能人如果一个手下都没有，单独行动会有些不便..."], [6141, 1, "影子中的存在", "#k果然是出色的战斗力，你已经证明你的能力，手下一定会跟着你的。"], [9303, 1, "向'达克鲁'拜年", "我是废弃都市本地专门为飞侠们提供各种帮助的#b#p1052001##k。很多人都来找我帮忙，我可是个大忙人。你来找我有什么事吗？\\r\\n#b#L0# #b我是专程来给您拜年的。"], [9306, 0, "向凯琳问候", "特地远道而来问候新年，真的很感谢你啊。给你这个！拿这个去找诺特勒斯号的 #b#p1072008##k吧.很久没听到她的最新消息了。你去的话她肯定会非常欢迎的。"]];
function qQuestAction(mode,type,selection) {
    if (!qactive) {
        if (!qfresh || mode!=1) return false;
        qfresh=false; qchoices=[];
        var menu="";
        for(var i=0;i<qdata.length;i++) {
            var d=qdata[i], state=cm.getQuestStatus(d[0]);
            var quest=Packages.server.quest.MapleQuest.getInstance(d[0]);
            if ((d[1]==0 && quest.canStart(cm.getPlayer(),cm.getNpc())) || (d[1]==1 && state==1)) {
                menu+="\r\n#L"+qchoices.length+"#"+(d[1]==0?"[接受] ":"[完成] ")+d[2]+"#l";
                qchoices.push(d);
            }
        }
        if(qchoices.length==0) return false;
        if(typeof qOrigAction=="function") menu+="\r\n#L"+qchoices.length+"#其他服务与对话#l";
        qactive=true; qstatus=0; cm.sendSimple(menu); return true;
    }
    if(mode!=1) { qactive=false; qfresh=false; cm.dispose(); return true; }
    if(qstatus==0) {
        if(selection==qchoices.length && typeof qOrigAction=="function") {qactive=false;return false;}
        if(selection<0 || selection>=qchoices.length) { cm.dispose(); return true; }
        qchosen=qchoices[selection]; qstatus=1;
        cm.sendYesNo(qchosen[3] || qchosen[2]); return true;
    }
    if(qstatus==1) {
        qstatus=2;
        var q=Packages.server.quest.MapleQuest.getInstance(qchosen[0]);
        if(qchosen[1]==0) {
            if(q.canStart(cm.getPlayer(),cm.getNpc())) { cm.startClientNpcQuest(qchosen[0]); return true; }
        } else {
            if(q.canComplete(cm.getPlayer(),null)) { cm.completeClientNpcQuest(qchosen[0]); return true; }
            else cm.sendOk("任务条件尚未完成，请查看任务栏中的物品和狩猎要求。");
        }
        cm.dispose(); return true;
    }
    cm.dispose(); return true;
}
/* AUTO-QUEST-END */

// 062 stored these as custom quest actions; both available 062 databases have empty action tables.
// Recovered item flow from 079 original instructor scripts and CMS072 item/map resources.
var legacyRoutes=[
 [100000,300,1012100,1072002,1072006,4031010,108000100],
 [100003,100,1022000,1072000,1072004,4031008,108000300],
 [100006,200,1032001,1072001,1072005,4031009,108000200],
 [100009,400,1052001,1072003,1072007,4031011,108000400]
];
function legacyState(id,n){cm.getQuestRecord(id).setStatus(n);}
function legacyStart(id){
 for(var i=0;i<legacyRoutes.length;i++){
  var r=legacyRoutes[i],phase=id-r[0];if(phase<0||phase>2)continue;
  if(cm.getJob()!=r[1]||cm.getLevel()<30)return;
  if(phase==0 && cm.getNpc()==r[2]){
   if(cm.getQuestStatus(id)==2)return;
   if(!cm.haveItem(r[5])){if(!cm.canHold(r[5],1))return;cm.gainItem(r[5],1);}
   legacyState(id,1);
  }else if(phase==1 && cm.getNpc()==r[3] && cm.getQuestStatus(r[0])==2){
   if(cm.getQuestStatus(id)==0)legacyState(id,1);
  }else if(phase==2 && cm.getNpc()==r[4] && cm.getQuestStatus(r[0]+1)==2){
   if(cm.getQuestStatus(id)==0){if(!cm.canHold(4031012,1))return;cm.gainItem(4031012,1);legacyState(id,1);}
  }
  return;
 }
 if(id==100101 && cm.getLevel()>=70)legacyState(id,1);
}
function legacyComplete(id){
 for(var i=0;i<legacyRoutes.length;i++){
  var r=legacyRoutes[i],phase=id-r[0];if(phase<0||phase>2)continue;
  if(cm.getJob()!=r[1]||cm.getLevel()<30||cm.getQuestStatus(id)!=1)return;
  if(phase==0 && cm.getNpc()==r[3] && cm.haveItem(r[5],1)){
   cm.gainItem(r[5],-1);legacyState(id,2);
  }else if(phase==1 && cm.getNpc()==r[4] && Math.floor(cm.getMapId()/100)==Math.floor(r[6]/100) && cm.haveItem(4031013,30) && cm.canHold(4031012,1)){
   cm.gainItem(4031013,-30);cm.gainItem(4031012,1);legacyState(id,2);legacyState(r[0]+2,1);
  }else if(phase==2 && cm.getNpc()==r[2] && cm.haveItem(4031012,1)){
   cm.gainItem(4031012,-1);legacyState(id,2);
  }
  return;
 }
 if(id==100101 && cm.getQuestStatus(id)!=2 && cm.getLevel()>=70 && cm.haveItem(4031059,1) && cm.canHold(4031057,1)){
  cm.gainItem(4031059,-1);cm.gainItem(4031057,1);legacyState(id,2);
 }
}
