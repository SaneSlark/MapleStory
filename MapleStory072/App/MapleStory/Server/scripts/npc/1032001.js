/* Grendel the Really Old
	Magician Job Advancement
	Victoria Road : Magic Library (101000003)

	Custom Quest 100006, 100008, 100100, 100101
*/

importPackage(net.sf.odinms.client);

var status = 0;
var advDone=false,advOrigin=-1;
var job;

function start() {
    advDone=false;advOrigin=cm.getMapId();
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
    if(advDone)return;
    if(mode==-1 || (mode==0 && type==1) || cm.getMapId()!=advOrigin){advDone=true;cm.dispose();return;}
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
				if (cm.getLevel() >= 8 && cm.getChar().getStat().getInt() >= 20)
					cm.sendNext("你的理想是想成为 #r魔法师#k吗?");
				else {
					cm.sendOk("可惜你没有当#r魔法师#k的条件呀!需要最小智力20等级8")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 
					&& (cm.getJob() == net.sf.odinms.client.MapleJob.MAGICIAN.getId())) {
					if (cm.getQuestStatus(100006) >=
						net.sf.odinms.client.MapleQuestStatus.Status.STARTED) {
						legacyComplete(100008);
						if (cm.getQuestStatus(100008) ==
						 net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
							status = 20;
							cm.sendNext("看来你已经完成的非常好了. 希望你能再以后德道路上走德更远.");
						} else {
							cm.sendOk("去见魔法密林附近的 #r二转教官#k 吧.")
							cm.dispose();
						}
					} else {
						status = 10;
						cm.sendNext("你已经达到了二转的条件.");
					}
				} else if ((cm.getLevel()>=70 && Math.floor(cm.getJob()/100)==2 && cm.getJob()%10==0)) {
					legacyComplete(100101);
					if ((cm.getQuestStatus(100101) == MapleQuestStatus.Status.COMPLETED)) {
						cm.sendOk("好的，现在把这个带给#b鲁碧#k。");
					} else {
						cm.sendOk("嘿, " + cm.getChar().getName() + "! 我需要#b黑珠#k. 去找到次元之门吧.");
						legacyStart(100101);
					}
					cm.dispose();
				} else {
					cm.sendOk("你的选择是明智的.");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("这是一个非常神圣德决定.不可以反悔德.");
		} else if (status == 2) {
			cm.sendYesNo("你确定想成为一名 #r魔法师#k吗?");
		} else if (status == 3) {
            if(cm.getJob()!=0 || cm.getLevel()<8 || cm.getChar().getStat().getInt()<20){advDone=true;cm.dispose();return;}
            if(!cm.canHold(1372005,1)){advDone=true;cm.sendOk("请先为转职奖励留出背包空间。");cm.dispose();return;}
            advDone=true;

			if ((cm.getJob() == net.sf.odinms.client.MapleJob.BEGINNER.getId()))
				cm.changeJob(net.sf.odinms.client.MapleJob.MAGICIAN.getId());
			cm.gainItem(1372005, 1);
			cm.sendOk("转职成功,猪你开心喔.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("一转后你可以成为下面三种 #r火/毒法师 #k, #r冰/雷法师#k 或着 #r牧师#k.");
		} else if (status == 12) {
			cm.sendAcceptDecline("但是首先我得考验下你德能力哦. 你准备好了吗?");
		} else if (status == 13) {
			if (cm.haveItem(4031009)) {
				cm.sendOk("遇到问题，请联系管理员。");
			} else {
				legacyStart(100006);
				cm.sendOk("把这封介绍信带给魔法密林附近的 #b二转教官#k . 他可以告诉你如何转职.");
			}
		} else if (status == 21) {
			cm.sendSimple("你想成为什么?#b\r\n#L0#火/毒法师#l\r\n#L1#冰/雷法师#l\r\n#L2#牧师#l#k");
		} else if (status == 22) {
            if(!isFinite(selection)||Math.floor(selection)!=selection||selection<0||selection>=3){advDone=true;cm.dispose();return;}
			var jobName;
			if (selection == 0) {
				jobName = "火/毒法师";
				job = net.sf.odinms.client.MapleJob.FP_WIZARD.getId();
			} else if (selection == 1) {
				jobName = "冰/雷法师";
				job = net.sf.odinms.client.MapleJob.IL_WIZARD.getId();
			} else {
				jobName = "牧师";
				job = net.sf.odinms.client.MapleJob.CLERIC.getId();
			}
			cm.sendYesNo("你确定要成为 #r" + jobName + "#k吗?");
		} else if (status == 23) {
            if(cm.getJob()!=200||cm.getLevel()<30||cm.getQuestStatus(100008)!=2||typeof job!="number"||Math.floor(job/100)!=2){advDone=true;cm.dispose();return;}
            advDone=true;
			cm.changeJob(job);
			cm.sendOk("转职成功.猪你开心,嘎嘎.");
		}
	}
}	

function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    qOrigAction(mode, type, selection);
}

/* AUTO-QUEST-BEGIN */
/* CMS client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[2080, 1, "法师之路", "想要成为和我一样的法师吗？"], [2120, 0, "妖精森林的使命1", "你喜欢到新地方旅游吗？大部分冒险者都有着很强烈的好奇心…我想给你提一个建议，想听吗？对你没什么损失。"], [2120, 1, "妖精森林的使命1", "看你已经准备好去#m240000000#了。什么都没准备直接向#m240000000#出发是不智的行为，但既然你愿意当我的使者，我给你几种旅行时所需要的物品吧。"], [2121, 0, "妖精森林的使命2", "把这个东西传给塔塔曼吧。听说他在#m240000000#里保护很重要的某东西，可能因为那样才向我要这个物品的。"], [2132, 0, "新手法师的第一次修炼", "看吧 年轻的法师。 要想成为一名真正的法师，还有很多的困难在等着你哩。 虽然你的职业是法师，但你现在需要学习的东西还很多，凭借自己的力量去狩猎也还有困难。。。 不是吗? 怎么样? 就让我#p1032001#帮助你来修炼吧?\\r\\n#L0# #b我们开始修炼吧。#l  \\n\\n#L1#凭借自己的力量能够完成。 #I"], [2132, 1, "新手法师的第一次修炼", "呵呵~ 捕捉到#o0210100# 8只了。 比想象的要快嘛！很好，真的很好。。。"], [2133, 0, "新手法师的第二次修炼", "实力比以前增强了啊。。。 你自己可能还没感觉到，但我 #p1032001#却看得一清二楚。 但是不足之处还很多, 就让我 #p1032001#再帮助你一次，如何? 要接受修炼任务吗?"], [2133, 1, "新手法师的第二次修炼", "捕捉到#o0210100# 20只了? 哈哈, 好啊。 一只也没少。 很不错。 照这样的速度实力很快会增强的。"], [2134, 0, "新手法师的第三次修炼", "完成两次修炼任务感觉怎么样。。。 这期间你的实力是更上一层楼了。 只要这样勤奋地修炼，肯定能再达到一个更高的层次的。 …但目前你还只是一名初级法师, 请所接受我 #p1032001#的帮助吧。 "], [2134, 1, "新手法师的第三次修炼", "捕捉到 #o0210100# 35只了。 你的成长真让人刮目相看啊。。。 呵呵。 "], [2135, 0, "新手法师的最后阶段的修炼", "这一阶段的修炼有帮助吗? 看得出你已经是一名象样的的法师了。。。 那么, 我要再测验一下你的实力。 哦,不要吃惊。 这并不困难。。。"], [2135, 1, "新手法师的最后阶段的修炼", "成功捕捉到#o1110101# 10只了，真了不起。 像你这样成长迅速的法师还真不多见。 现在你已经具备了成为高阶法师的潜力了。。。"], [2222, 1, "冤魂森林", "……嗯？有什么事情吗？为什么脸色这么差……有什么问题吗？艾温……？艾温又有什么事情呢……？"], [2227, 0, "消灭浮士德", "有关那个怪物的情报都搜集到了吗？和我说说潘喜是怎么说的吧？……嗯？浮士德是里弗制造的……？什么意思？你仔细地我说明一下！"], [2227, 1, "消灭浮士德", "你好像把浮士德清除了啊。太好了……这样的话，我的心也能稍微安定一些了。真是谢谢你。"], [3023, 1, "魔法密林的贤者", ""], [3024, 0, "汉斯的拜托", "你的情况我已经从勇士部落的#b#p1022000##k那里听说过了。我们不需要见面也心灵对话。一路上辛苦了。不过听说你…正在找#b#t4031056##k...？当然我这里也有一张地图碎片，这件事我差不多都要遗忘了…"], [3024, 1, "汉斯的拜托", ""], [3025, 0, "射手村的贤者", "你果然成功了，有了这个我就可以恢复力量。那么我按照约定给你找#b#t4031056##k所需要的线索。不过你应该先确认背包的其他窗口里有没有空间。"], [3524, 0, "追随遗忘的记忆 ", ""], [3709, 1, "得到汉斯的助言1", "你找我有什么事？ \\r\\n#L0# #b我带来了村长塔塔曼的一封信。#k"], [3710, 0, "得到汉斯的助言2", "啊哈。找到了，找到了。原来树木变成赤色是因为保护森林的力量削弱的原因。不知道为什么会这样，为了救急需要能迅速增强力量的咒语。还要麻烦你一趟。"], [3943, 1, "巴一岚的推荐书！", "是谁啊？有东西要给我？让我看看"], [4712, 0, "汉斯的智慧碎块(1日)", "冒险家，你来啦？我已经恭候你多时了。我们5大职业转职教官都已经知道你的来意了，我们也准备好对你考验的题目了。我这边授予你的任务是：打倒在外面的怪物，并且收集来30个智慧碎块。怎么样？有没有信心完成？"], [4712, 1, "汉斯的智慧碎块(1日)", "怎么样啊？冒险家，任务完成了么？"], [4722, 0, "汉斯的智慧碎块(7日)", "冒险家，你来啦？我已经恭候你多时了。我们5大职业转职教官都已经知道你的来意了，我们也准备好对你考验的题目了。我这边授予你的任务是：打倒在外面的怪物，并且收集来30个智慧碎块。怎么样？有没有信心完成？"], [4722, 1, "汉斯的智慧碎块(7日)", "怎么样啊？冒险家，任务完成了么？"], [6161, 1, "某魔法师的故事", "哦，带书过来了，谢谢。虽然在#m101000000#研究魔法，但有时候会很郁闷。这里即使有很多资料，但这些书不足以让我们提升更高境界… 因此找到了这本书。 \\n\\r#L0# #b这到底是什么书？#k"], [6162, 0, "疯子天才", "呼… 你也读过这本书,应该知道… 这本书记载的是关于天才魔法师的故事。"], [6163, 1, "邪摩斯", "找过#p2022003#吗？他有没有清醒？看你的表情，好像还是没有清醒是吧。"], [6164, 0, "汉斯的道歉", "能不能再去找他，传达我的道歉？虽然只是一句话，但还是想让他听一下…"], [6260, 1, "冰封的寒冰书", "关于魔法的知识，都可以在这里找到。只要是你想知道的，都可以问的… 什么? #b#p2081200##k派你到这里了？那应该有什么特别的事情?你想知道的是关于这本书的？"], [6261, 0, "奇妙的文章", "我已经解开了书中的魔法，来看看。出现了以下的文章。\\r\\n#b只有能吸进寒冰气息的人，才可以忍受寒冷的风暴。#k"], [6270, 1, "燃烧的火焰书", "关于魔法的知识，都可以在这里找到。只要是你想知道的，都可以问的… 什么? #b#p2081200##k派你到这里了？那应该有什么特别的事情?你想知道的是关于这本书的？"], [6271, 0, "奇妙的文章", "我已经解开了书中的魔法，来看看。出现了以下的文章。\\r\\n#b只有能吸进地狱火焰的人，才可以在体内燃起熊熊火焰。#k0"], [9301, 1, "向'汉斯'拜年", "我是魔法森林本地专门为魔法师们提供各种帮助的#b#p1032001##k。很多人都来找我帮忙，我可是个大忙人。你来找我有什么事吗？\\r\\n#b#L0# #b我是专程来给您拜年的。"], [9302, 0, "向'赫丽娜'拜年", "谢谢你这么大老远的还专程来给我拜年。拿着这个，把它带给射手村的 #b#p1012100##k。已经好久都没有他的消息了。我想他见到你一定会很高兴的。"], [9401, 1, "汉斯的第一份礼物", "你好,我就是准备3周年纪念礼物的魔法密林大魔法师#b#p1032001##k。把从#b#p9010000##k那里获得的#b#t04161002##k交给我,就能得到礼物。"], [9402, 1, "汉斯的第二份礼物", "你好,我就是准备3周年纪念礼物的魔法密林大魔法师#b#p1032001##k。把从#b#p9010000##k那里获得的#b#t04161003##k交给我,就能得到礼物。"], [9403, 1, "汉斯的第三份礼物", "你好,我就是准备3周年纪念礼物的魔法密林大魔法师#b#p1032001##k。把从#b#p9010000##k那里获得的#b#t04161004##k交给我,就能得到礼物。"], [9404, 1, "汉斯的第四份礼物", "你好,我就是准备3周年纪念礼物的魔法密林大魔法师#b#p1032001##k。把从#b#p9010000##k那里获得的#b#t04161005##k交给我,就能得到礼物。"], [9405, 1, "汉斯的第五件礼物", "你好,我就是准备3周年纪念礼物的魔法密林大魔法师#b#p1032001##k。把从#b#p9010000##k那里获得的#b#t04161006##k交给我,就能得到礼物。"], [9406, 1, "汉斯的第六件礼物", "你好,我就是准备3周年纪念礼物的魔法密林大魔法师#b#p1032001##k。把从#b#p9010000##k那里获得的#b#t04161007##k交给我,就能得到礼物。"], [9407, 1, "汉斯的第七件礼物", "你好,我就是准备3周年纪念礼物的魔法密林大魔法师#b#p1032001##k。把从#b#p9010000##k那里获得的#b#t04161008##k交给我,就能得到礼物。"], [9408, 1, "汉斯的第八份礼物", "你好,我就是准备3周年纪念礼物的魔法密林大魔法师#b#p1032001##k。把从#b#p9010000##k那里获得的#b#t04161009##k交给我,就能得到礼物。"], [9409, 1, "汉斯的第九份礼物", "你好,我就是准备3周年纪念礼物的魔法密林大魔法师#b#p1032001##k。把从#b#p9010000##k那里获得的#b#t04161010##k交给我,就能得到礼物。"], [9410, 1, "汉斯最后的礼物", "你好,我就是准备3周年纪念礼物的魔法密林大魔法师#b#p1032001##k。把从#b#p9010000##k那里获得的#b#t04161012##k交给我,就能得到礼物。"], [9411, 0, "汉斯的特别礼物", "哦。你在这里？你一定是个真诚的人，你已经来找我十天了。我有一份特别的礼物给你。你愿意接受我为你准备的礼物吗？"], [9411, 1, "汉斯的特别礼物", "我为您准备了#b#04031019##k作为一份特别的礼物。请愉快地接受。"], [9801, 1, "箱子里的枫叶", "#m101000000#来了。只要是对魔法感兴趣的话无论是谁我们都欢迎。你怀里的那个箱子蕴藏着魔法，怎么感觉有点异常……嗯？为了了解这个箱子#p1002101#才把你送来的吗？稍等一下，让我看一下箱子。"], [9802, 0, "失去主人的枫叶", "关于#b枫叶#k的话当然知道了。这不是很久之前他随身带着的枫叶吗？他消失了以后我还以为枫叶也一起不见了。看来#p1002101#一直带着真是万幸啊。……但是都蔫成这样了……这可是件大事啊。"]];
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
// Recovered item flow from 079 original instructor scripts and CMS item/map resources.
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
