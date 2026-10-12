importPackage(net.sf.odinms.client);

var status;
var questions;
var answers;
var correctAnswer;
var questionNum;

function start() {
	status = -1;
	questions = new Array("以下哪个物品不是火狸猫掉落的？","哪个NPC负责在废弃都市和江户村之间运送旅客？","蘑菇神社出售的哪种物品可以提升你的攻击力？","以下哪个物品不是群众演员们掉落的？","以下哪个物品是不存在的？？","昭和村蔬菜店老板叫什么名字？","以下哪个物品是存在的？","蘑菇神社最强的BOSS叫什么名字？","以下哪个物品的职业或等级描述有误？","以下哪种面条不是蘑菇神社的罗伯出售的？","以下哪个NPC没有站在昭和电影院门前？")
	answers = new Array(new Array("狸猫柴火","坚实的角","红砖"),new Array("佩利","斯皮尼尔","波利"),new Array("章鱼烧","炒面","天妇罗"),new Array("临时演员A的徽章","临时演员B的束腰","临时演员C的项链"),new Array("冷冻金枪鱼","扇子","苍蝇拍"),new Array("萨米","卡米","乌米"),new Array("云狐之牙","幽灵花束","黑云狐之尾"),new Array("黑乌鸦","蓝蘑菇王","姬神"),new Array("竹枪 - 战士专用武器","皮可皮可锤 - 单手剑","神秘手杖 - 51级装备"),new Array("蘑菇拉面（猪骨）","蘑菇拉面（盐味）","蘑菇味噌拉面"),new Array("斯凯","芙拉诺","辛太"));
	correctAnswer = new Array(1,1,0,1,2,2,2,0,0,2,2);
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	}		
	else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0 && mode == 1) {
			if ((cm.getQuestStatus(8012) == MapleQuestStatus.Status.STARTED) && !cm.haveItem(4031064)){ //quest in progress
				cm.sendYesNo("都带来了吗？你准备好回答我所有的问题了吗？");
			}
			else { //quest not started or already completed
				cm.sendOk("喵喵~~喵~~~~~~~~!");
				cm.dispose();
			}
		}
		else if (status == 1 && mode == 1) {
			var hasChicken = true;
			
			var count = 0;
			var iter = cm.getChar().getInventory(MapleInventoryType.USE).listById(2020001).iterator();
			while (iter.hasNext()) {
				count += iter.next().getQuantity();
			}
			if (count < 300)
				hasChicken = false;
			
			if (!hasChicken) {
				cm.sendOk("什么？不行！300个！三百个！一个都不能少。你想多给我也不介意，但至少要300个。可不是谁都能像你一样吃得这么饱……");
				cm.dispose();
			}
			else {
				cm.gainItem(2020001, -300)
				cm.sendNext("干得不错！等一下……嘿，看！我这儿有吃的！大家随便吃。好了，现在该我来考你几个问题了。相信你也清楚，只要答错一题就前功尽弃。要么全对，要么出局！");
			}
		}
		else if (status == 7 && mode == 1) { //2-6 are the questions
			if (selection != correctAnswer.pop()){
				cm.sendNext("唔……反正人类总是会犯错的！想再挑战一次的话，就给我带300个炸鸡来。")
				cm.dispose();
			}
			else {
				cm.sendNext("可恶，你居然全部答对了。我虽然不太喜欢人类，但我最讨厌不守信用，所以，说好的橙色弹珠给你。")
			}
		}
		else if (status == 8 && mode == 1) { //gain marble
			cm.gainItem(4031064, 1);
			cm.sendOk("我们的交易到此结束，非常感谢！你可以走了！");
			cm.dispose();
		}
		else if (status >= 2 && status <= 6 && mode == 1) {//questions
			var cont = true;
			if (status > 2) {
				if (selection != correctAnswer.pop()){
					cm.sendNext("唔……反正人类总是会犯错的！想再挑战一次的话，就给我带300个炸鸡来。")
					cm.dispose();
					cont = false;
				}
			}
			
			if (cont) {
				questionNum = Math.floor(Math.random() * questions.length);
				if (questionNum != (questions.length - 1)){
					var temp;
					temp = questions[questionNum];
					questions[questionNum] = questions[questions.length - 1];
					questions[questions.length - 1] = temp;
					temp = answers[questionNum];
					answers[questionNum] = answers[questions.length - 1];
					answers[questions.length - 1] = temp;
					temp = correctAnswer[questionNum];
					correctAnswer[questionNum] = correctAnswer[questions.length - 1];
					correctAnswer[questions.length - 1] = temp;
				}
				
				var question = questions.pop();
				var answer = answers.pop();
				var prompt = "第" + (status - 1) + "题：" + question;
				
				for (var i = 0; i < answer.length; i++)
				{
					prompt += "\r\n#b#L" + i + "#" + answer[i] + "#l#k"
				}
				
				cm.sendSimple(prompt);
			}
		}
	}
}