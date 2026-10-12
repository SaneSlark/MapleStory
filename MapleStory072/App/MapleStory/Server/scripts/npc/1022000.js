/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)

	Custom Quest 100003, 100005
*/

importPackage(net.sf.odinms.client);

var status = 0;
var job;

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
			cm.sendOk("考虑好了再来找我吧.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if ((cm.getJob() == net.sf.odinms.client.MapleJob.BEGINNER.getId())) {
				if (cm.getLevel() >= 10 && cm.getChar().getStr() >= 35)
					cm.sendNext("你想成为 #r战士#k吗?");
				else {
					cm.sendOk("你还没有转#r战士#k的条件.需要等级10力量35.")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 
					&& (cm.getJob() == net.sf.odinms.client.MapleJob.WARRIOR.getId())) {
					if (cm.getQuestStatus(100003) >=
						net.sf.odinms.client.MapleQuestStatus.Status.STARTED) {
						legacyComplete(100005);
						if (cm.getQuestStatus(100005) ==
						 net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
							status = 20;
							cm.sendNext("完成的很好. 下个阶段将有很长的路喔.");
						} else {
							cm.sendOk("去找 #r二转教官#k 吧.")
							cm.dispose();
						}
					} else {
						status = 10;
						cm.sendNext("你已经达到二转的条件了.");
					}
				} else if ((cm.getLevel()>=70 && Math.floor(cm.getJob()/100)==1 && cm.getJob()%10==0)) {
					legacyComplete(100101);
					if ((cm.getQuestStatus(100101) == MapleQuestStatus.Status.COMPLETED)) {
						cm.sendOk("好的，现在把这个交给#b泰勒斯#k。");
					} else {
						cm.sendOk("嘿, " + cm.getChar().getName() + "! 我需要个#b黑珠#k.");
						legacyStart(100101);
					}
					cm.dispose();
				} else {
					cm.sendOk("你的选择是明智的.");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("这是个非常重要的决定,一旦你转职成功就不能够再有其他的选择了.");
		} else if (status == 2) {
			cm.sendYesNo("你确定要成为 #r战士#k?");
		} else if (status == 3) {
			if ((cm.getJob() == net.sf.odinms.client.MapleJob.BEGINNER.getId()))
				cm.changeJob(net.sf.odinms.client.MapleJob.WARRIOR.getId());
			cm.gainItem(1402001, 1);
			cm.sendOk("转职成功.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("转职有三个选择 #r剑客#k, #r准骑士#k or #r枪战士#k.")
		} else if (status == 12) {
			cm.sendAcceptDecline("但是我必须先对你的能力进行考验. 你准备好了吗?");
		} else if (status == 13) {
			if (cm.haveItem(4031008)) {
				cm.sendOk("遇到问题，请联系管理员。");
			} else {
				legacyStart(100003);
				cm.sendOk("请把这封介绍信交给 #b二转教官#k 他就在部落附近. 他将告诉你转职的一些方式.");
			}
		} else if (status == 21) {
			cm.sendSimple("你想成为?#b\r\n#L0#剑客#l\r\n#L1#准骑士#l\r\n#L2#枪战士#l#k");
		} else if (status == 22) {
			var jobName;
			if (selection == 0) {
				jobName = "剑客";
				job = net.sf.odinms.client.MapleJob.FIGHTER.getId();
			} else if (selection == 1) {
				jobName = "准骑士";
				job = net.sf.odinms.client.MapleJob.PAGE.getId();
			} else {
				jobName = "枪战士";
				job = net.sf.odinms.client.MapleJob.SPEARMAN.getId();
			}
			cm.sendYesNo("你确定要成为 #r" + jobName + "#k?");
		} else if (status == 23) {
			cm.changeJob(job);
			cm.sendOk("转职成功了.");
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
var qdata=[[2077, 1, "战士之路", "来找我是想要成为战士吧...那你就来对了。"], [2128, 0, "新手战士的第一次修炼", "是小小的战士兄弟啊，要想成为一名真正的战士你的实力还不够啊。 目前还不能独自完成任务。。。 对你来说，#p1022000#的修炼是十分必要的…怎么样? 要接受修炼任务吗?\\r\\n#L0# #b接受修炼。#l  \\n\\n#L1# 能够凭自身的力量完成。 #I"], [2128, 1, "新手战士的第一次修炼", "捕捉到#o0130100# 20只了。 很好。 但不能因此而满足啊? 你只是向成为真正的战士迈出了第一步而已。"], [2129, 0, "新手战士的第二次修炼", "是小小的战士兄弟啊。 看起来比以前要强大了一些，但还稍显不足。 你还需要更多的基础修炼。 如何。 也许#p1022000#可以对你的修炼有帮助。接受修炼任务吗?"], [2129, 1, "新手战士的第二次修炼", "捕捉到 #o0130100# 50只了。 很好。看到你的成长我 #p1022000#也很高兴。 但不能就此而满足，因为你的力量还是很微弱。"], [2130, 0, "新手战士的第三次修炼", "原来是小小的战士兄弟啊。 看到你能成长我真是高兴，从你的眼中我看到了一位伟大战士将要诞生。 但是。。。 目前你还是有一定的缺陷。 为了自身的更快进步想要接受修炼任务吗?"], [2130, 1, "新手战士的第三次修炼", "捕捉到 #o0130100# 80只了。 能够通过如此困难的修炼任务，我只能对你表示敬意。 "], [2131, 0, "新手战士的最后修炼", "是小小的战士兄弟啊，你的修炼任务完成得很不错，虽然还有不足，但已经具备了相当的实力。 真是让人高兴。 看你充满自信的样子，这次又是想挑战修炼任务吧。"], [2131, 1, "新手战士的最后修炼", "是小小的战士兄弟啊。成功捕捉到 #o1110101# 15只了，我早就知道你可以的。。。 真是太好了。 从现在开始我不会再称呼你“小”战士了。 对于你这样成长迅速的战士此称呼并不合适。"], [2151, 0, "传闻的真相-武术教练", "找我有什么事儿吗？\\r\\n#b#L0#知道鬼树吗？#l"], [2151, 1, "传闻的真相-武术教练", ""], [3021, 1, "勇士部落的贤者", ""], [3022, 0, "武术教练的拜托", "哦哼...你找我有什么事啊？啊！那不是尔米娜的#b#t4031053##k吗？你怎么得到这戒指的…?啊…原来是阿尔卡斯特拜托你找#t4031056#啊。是#b《上古魔书》#k啊...那是很久以前的事了，我都忘记了这个东西。不好意思我也不知道那本书在哪儿，但我这里有样东西，也许可以找到一点线索…"], [3022, 1, "武术教练的拜托", ""], [3023, 0, "魔法密林的贤者", "你果然成功了，有了这个我就可以恢复力量。那么我按照约定给你找#b#t4031056##k所需要的线索。不过你应该先确认背包的其他窗口里有没有空间。"], [3523, 0, "追随遗忘的记忆", ""], [3942, 1, "巴一岚的推荐书", "是谁啊？有东西要给我？让我看看"], [4711, 0, "武术教练的勇气碎块(1日)", "冒险家，你来啦？我已经恭候你多时了。我们5大职业转职教官都已经知道你的来意了，我们也准备好对你考验的题目了。我这边授予你的任务是：打倒在外面的怪物，并且收集来30个勇气碎块。怎么样？有没有信心完成？"], [4711, 1, "武术教练的勇气碎块(1日)", "怎么样啊？冒险家，任务完成了么？"], [4721, 0, "武术教练的勇气碎块(7日)", "冒险家，你来啦？我已经恭候你多时了。我们5大职业转职教官都已经知道你的来意了，我们也准备好对你考验的题目了。我这边授予你的任务是：打倒在外面的怪物，并且收集来30个勇气碎块。怎么样？有没有信心完成？"], [4721, 1, "武术教练的勇气碎块(7日)", "怎么样啊？冒险家，任务完成了么？"], [9300, 1, "向'武术教练'拜年", "我是勇士部落本地专门为战士们提供各种帮助的#b#p1022000##k。很多人都来找我帮忙，我可是个大忙人。你来找我有什么事吗？\\r\\n#L0# #b专程来给您拜年的#k"], [9301, 0, "向'汉斯'拜年", "现在居然还有像你这样懂得尊敬长者的年轻人，真让人吃惊。好吧……你去拜访魔法森林的#b#p1032001##k吧，并把这个转交给他。已经好久都没有他的消息了。我想他见到你一定会很高兴的。"]];
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
