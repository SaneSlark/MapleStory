/* Athena Pierce
	Bowman Job Advancement
	Victoria Road : Bowman Instructional School (100000201)

	Custom Quest 100000, 100002
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
			cm.sendOk("想好了再来找我吧.");
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
					cm.sendNext("你的理想是成为一名 #r弓箭手#k吗?");
				else {
					cm.sendOk("你还需要修炼才能达到 #r弓箭手#k的体质.")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 
					&& (cm.getJob() == net.sf.odinms.client.MapleJob.BOWMAN.getId())) {
					if (cm.getQuestStatus(100000) >=
						net.sf.odinms.client.MapleQuestStatus.Status.STARTED) {
						legacyComplete(100002);
						if (cm.getQuestStatus(100002) ==
						 net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
							status = 20;
							cm.sendNext("我知道你完成了任务. 所以我允许你的转职申请.");
						} else {
							cm.sendOk("去找射手村附近的 #r二转教官#k 吧.")
							cm.dispose();
						}
					} else {
						status = 10;
						cm.sendNext("我考.你的成长速度真是惊人.");
					}
				} else if ((cm.getLevel()>=70 && Math.floor(cm.getJob()/100)==3 && cm.getJob()%10==0)) {
					legacyComplete(100101);
					if ((cm.getQuestStatus(100101) == MapleQuestStatus.Status.COMPLETED)) {
						cm.sendOk("好了，把它带给#b蕾妮#k。");
					} else {
						cm.sendOk("嘿, " + cm.getChar().getName() + "! 我需要 #b黑珠#k. 去找到次元之门吧.");
						legacyStart(100101);
					}
					cm.dispose();
				} else {
					cm.sendOk("你的选择是明智的.");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("这是一个神圣的决定,你可要想好了哦,不能复返的.");
		} else if (status == 2) {
			cm.sendYesNo("你确定想成为 #r弓箭手#k吗?");
		} else if (status == 3) {
			if ((cm.getJob() == net.sf.odinms.client.MapleJob.BEGINNER.getId()))
				cm.changeJob(net.sf.odinms.client.MapleJob.BOWMAN.getId());
			cm.gainItem(1452002, 1);
			cm.gainItem(2060000, 1000);
			cm.sendOk("转职成功.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("你可以选择下面两个职业发展 #r猎手#k or #r弩弓手#k.")
		} else if (status == 12) {
			cm.sendAcceptDecline("不过你先得通过我的考验.你准备好了吗?");
		} else if (status == 13) {
			if (cm.haveItem(4031010)) {
				cm.sendOk("遇到问题，请联系管理员。");
			} else {
				legacyStart(100000);
				cm.sendOk("把这封介绍信带给射手村附近的 #b二转教官#k . 由他来考核你.");
			}
		} else if (status == 21) {
			cm.sendSimple("你想成为哪一个?#b\r\n#L0#猎人#l\r\n#L1#弩弓手#l#k");
		} else if (status == 22) {
			var jobName;
			if (selection == 0) {
				jobName = "猎人";
				job = net.sf.odinms.client.MapleJob.HUNTER.getId();
			} else {
				jobName = "弩弓手";
				job = net.sf.odinms.client.MapleJob.CROSSBOWMAN.getId();
			}
			cm.sendYesNo("你确定要成为 #r" + jobName + "#k?");
		} else if (status == 23) {
			cm.changeJob(job);
			cm.sendOk("转职成功,继续加油吧.");
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
var qdata=[[2078, 1, "弓箭手之路", "来找我是想要成为弓箭手吗？"], [2136, 0, "新手弓箭手的第一次修炼", "年轻的弓箭手，虽然你已经脱离了入门阶段，但还面临着很多的困难。 如果要凭借现在的实力进行战斗还是不够的。 我会对你的修炼提出一些建议。。。 怎么样? 接受修炼任务吧?\\r\\n#L0# #b那么我们就开始修炼。#l  \\n\\n#L1# 你可以选择凭借自己的力量完成修炼。 #I"], [2136, 1, "新手弓箭手的第一次修炼", "捕捉到#o0210100# 16只了。 很好。 但如果你现在就满足就不可能再进步。 目前你只不过向成为真正的弓箭手迈出了第一步。"], [2137, 0, "新手弓箭手的第二次修炼", "你的力量比以前增强了啊。 但这还很不够。 我认为你还需要更多的修炼。 怎么样? 只要你愿意, 让我 #p1012100#来帮助你修炼吧。 "], [2137, 1, "新手弓箭手的第二次修炼", "捕捉到#o0210100# 40只了。很好。 对你的成长我感到很高兴。 但请不要就此满足，对于冒险岛中的很多怪物来说，你的力量还是不值一提的。"], [2138, 0, "新手弓箭手的第三次修炼", "年轻的弓箭手啊，你的成长速度真令人惊叹。 从你的眼神中我看到了一位伟大的弓箭手即将诞生。 但是。。。 现在的你还有一些不足之处。 要想获得更大的进步，就接受再一次的修炼任务吧?"], [2138, 1, "新手弓箭手的第三次修炼", "捕捉到 #o0210100# 65只了，做的很好，我要对你表示敬意。 "], [2139, 0, "新手弓箭手最后阶段的修炼", "感谢你能一直坚持跟着我修炼。 我能看到你成为一名真正的弓箭手真是很很高兴。 但为了证明你是一名真正的弓箭手，还需要通过一项考试。"], [2139, 1, "新手弓箭手最后阶段的修炼", "真的捕捉到 #o1210101# 15只了。。。 我就知道你能成功的。。。 太棒了。 像你这样成长迅速的弓箭手可不多见。"], [2162, 1, "写到一半扔掉的信", "听说有要交给我的信？真想知道会是谁的来信。"], [2163, 0, "赫丽娜的快乐", "谢谢你带给我凯琳的消息。听说她成长了不少，现在又风光回到金银岛，我还真替她自豪。但是总觉得凯琳心里还老记着以前的事……\\r\\n#b#L0# 以前的事？#l"], [2163, 1, "赫丽娜的快乐", "这真的要追溯到很久之前了。凯琳的爸爸过去在与黑魔法师的战斗中，金银岛和天空之城分离的时候他是为了守护金银岛而来的英雄戴斯托奈。"], [2164, 0, "赫丽娜的礼物", "凯琳好像因为过去招呼都不打一声就离开了射手村而对我充满愧疚。其实她根本无需如此啊。你能帮我把东西转交给她吗？也许看了这个，她就有勇气回射手村来了。"], [3025, 1, "射手村的贤者", ""], [3026, 0, "赫丽娜的拜托", "你的情况已经从魔法密林的#b#p1032001##k听说过了。我们不需要见面也可以通过心灵对话。一路上辛苦了。不过听说你…正在找#b#t4031056##k… 是吗？当然我这里也有一张地图碎片，这件事我差不多都要遗忘了…"], [3026, 1, "赫丽娜的拜托", ""], [3027, 0, "废弃都市的贤者", "你果然成功了。有了这个我就可以恢复体力。来，按照约定给你找#b#t4031056##k需要的线索。不过你应该先确认你背包的其他窗口里有没有空间。"], [3525, 0, "追随遗忘的记忆  ", ""], [3944, 1, "巴一岚的推荐书！！", "是谁啊？有东西要给我？让我看看"], [4713, 0, "赫丽娜的精准碎块(1日)", "冒险家，你来啦？我已经恭候你多时了。我们5大职业转职教官都已经知道你的来意了，我们也准备好对你考验的题目了。我这边授予你的任务是：打倒在外面的怪物，并且收集来30个精准碎块。怎么样？有没有信心完成？"], [4713, 1, "赫丽娜的精准碎块(1日)", "怎么样啊？冒险家，任务完成了么？"], [4723, 0, "赫丽娜的精准碎块(7日)", "冒险家，你来啦？我已经恭候你多时了。我们5大职业转职教官都已经知道你的来意了，我们也准备好对你考验的题目了。我这边授予你的任务是：打倒在外面的怪物，并且收集来30个精准碎块。怎么样？有没有信心完成？"], [4723, 1, "赫丽娜的精准碎块(7日)", "怎么样啊？冒险家，任务完成了么？"], [6101, 1, "古老的书", "你选择了弓手的道路，如果愿意的话，我会帮你修炼。有什么要紧的事情到此地？"], [6102, 0, "弓箭手的终极技能", "很久前就听说过#b弓手的终极技能#k和那个#b修练场#k的传说，但第一次发现居然在这本书中描述得这么详细。太神奇了，居然真有这样的书。那么关于弓手的终极技能传说应该是真实存在的。"], [6250, 1, "暴风箭雨", "…你是当年选择了弓箭手的道路的冒险家。果然变得很强。我作为引导你踏入弓箭手道路的人，看到你的进步，我觉得非常高兴。…但这是? \\n这是…我很久前送给一个少年的手套，但这怎么会在你身上？\\r\\n#b#L0#让我送给你的。"], [6251, 1, "穿透箭", "…你是当年选择了弓箭手的道路的冒险家。果然变得很强。我作为引导你踏入弓箭手道路的人，看到你的进步，我觉得非常高兴。…但这是? \\n这是…我很久前送给一个少年的手套，但这怎么会在你身上？\\r\\n#b#L0#让我送给你的。"], [6700, 0, "弓箭手之路", ""], [6700, 1, "弓箭手之路", "我已经为你准备好了必需的礼物，请挑选合适的礼品。"], [9302, 1, "向'赫丽娜'拜年", "我是射手村本地专门为弓箭手们提供各种帮助的#b#p1012100##k。很多人都来找我帮忙，我可是个大忙人。你来找我有什么事吗？\\r\\n#b#L0# 我是专程来给您拜年的。"], [9303, 0, "向'达克鲁'拜年", "谢谢你这么大老远的还专程来给我拜年。拿着这个，把它带给废弃都市的#b#p1052001##k。已经好久都没有他的消息了。我想他见到你一定会很高兴的。"]];
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
