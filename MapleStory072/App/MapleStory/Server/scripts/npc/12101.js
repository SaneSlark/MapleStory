// CMS072 Quest.wz/Say.img original Chinese quiz text; normal quest checks and Act rewards.
var quizData=[{"id": 1009, "intro": "你好？对这里这样的生活还不熟悉吧？\r\n我要给你几个有关冒险岛的问题。你回答对问题，我就给你奖励。\r\n怎么样？你想挑战这次冒险问答吗？", "question": "打开背包的快捷键是什么？ \r\n\r\n#L0##bI键#l\r\n#L1#K键#l\r\n#L2#S键#l\r\n#L3#E键#k#l", "correct": 0, "yes": "对！！打开背包的快捷键是#rI键#k。", "wrong": {"1": "K键是打开技能窗的快捷键。以后你有了职业可以使用技能。你想不起来背包的快捷键吗？", "2": "不是~ 不是~ S是确认能力值的快捷键。你好好想想。", "3": "嗯？E是打开装备窗的快捷键！所以不是E键。"}, "options": [0, 1, 2, 3]}, {"id": 1010, "intro": "好~ 那你准备好回答下个问题了，就来跟我说。", "question": "只要双击装备类道具，就可以将道具装备在身上吗？\r\n\r\n#L0##b是#l\r\n#L1#不是#k#l", "correct": 0, "yes": "对。只要双击就可以装备。如果不能使用，请你确认一下道具有没有限制。", "wrong": {"1": "你直接确认吧。按下E键后双击现在装备的道具，然后打开背包再次双击该道具吧。"}, "options": [0, 1]}, {"id": 1011, "intro": "我给你提的冒险岛问答并不困难。虽然答错了，但请注意听清我说的，还是可以通过的。\r\n你准备好回答第三个问题就跟我说吧。", "question": "打开角色装备窗使用的快捷键是什么？\r\n\r\n#L0##bE键#l\r\n#L1#S键#l\r\n#L2#I键#k#l", "correct": 0, "yes": "对！你想确认你现在的装备，按下E键就可以。", "wrong": {"1": "确认自己的能力值的快捷键是S. 好好记住。", "2": "按下I键可以打开背包。"}, "options": [0, 1, 2]}, {"id": 1012, "intro": "恭喜~ 已经是第四个问题。 我一共准备了7个问题。那你准备好就跟我说。", "question": "要拣取地上的道具要按什么快捷键？\r\n\r\n#L0##bX键#l\r\n#L1#S键#l\r\n#L2#I键#l\r\n#L3#Z键#k#l", "correct": 3, "yes": "对。要拣取道具，应该按下Z键。数字0键也可以。\r\nX键是坐椅子的。以后你去金银岛试一试吧。坐椅子的时候你的恢复速度会更快。", "wrong": {"0": "不过在彩虹岛没有椅子，所以以后你去金银岛。坐一次确认恢复速度怎么样吧。", "1": "增加1级能力值也会增加。你按下S键可以确认你的能力值", "2": "I是打开背包的快捷键。你能确认你拣到的什么东西。"}, "options": [0, 1, 2, 3]}, {"id": 1013, "intro": "你快到一转时期了。不知道你要选什么职业。\r\n好~ 你准备好回答第五个问题就跟我说吧。", "question": "战士，弓箭手，飞侠为了做一转需要的等级是10。那魔法师是多少？\r\n\r\n#L0##b10级#l#l\r\n#L1#8级#k#l", "correct": 1, "yes": "对了！要转职战士，弓箭手，飞侠，等级必须10级以上。但魔法师在8级就可以做一转。想当魔法师的话，去魔法密林找汉斯吧。他会告诉你魔法师之路", "wrong": {"0": "战士，弓箭手，飞侠的一转时期是10级，但魔法师不同。"}, "options": [0, 1]}, {"id": 1014, "intro": "你冒险岛问答做得很好。你每次升级的时候有没有好好分配能力值？你应该好好使用你的能力就会变得更强。你准备好回答第六个问题，就跟我说吧。", "question": "每次升级的时候会提高角色的能力。那每次升级的时候增加的能力值多少？\r\n\r\n#L0##b2点#l\r\n#L1#10点#l\r\n#L2#5点#k#l", "correct": 2, "yes": "对。升级的时候增加5点能力值。你按下#bS键#k可以确认你现在的能力。你要经常确认你的能力，认真分配能力值。", "wrong": {"0": "比2点多~ 你升级的时候按下S键确认下。", "1": "比10点少~ 你升级的时候按下S键确认下。"}, "options": [0, 1, 2]}, {"id": 1015, "intro": "终于到最后一个问题了！你准备好跟我说吧。", "question": "这是最后一个问题。如果你要转职，就要去金银岛。在彩虹岛可以乘船去金银岛的地方是哪里？\r\n\r\n#L0##b南港#l\r\n#L1#彩虹村#l\r\n#L2#无法去#k#l", "correct": 0, "yes": "对。你在南港可以乘船去金银岛。", "wrong": {"1": "彩虹村不是港口。在彩虹岛只有一个港口，去那里你才可以去金银岛。", "2": "你一旦离开这里去别的岛，就不能再回来了。。。"}, "options": [0, 1, 2]}];
var quiz=null,phase=-1,active=false;
function start(){
 active=false;quiz=null;phase=-1;
 for(var i=0;i<quizData.length;i++){
  var d=quizData[i],state=cm.getQuestStatus(d.id);
  if(state==2)continue;
  var q=Packages.server.quest.MapleQuest.getInstance(d.id);
  if(state==1){quiz=d;phase=1;active=true;cm.sendSimple(d.question);return;}
  if(q.canStart(cm.getPlayer(),cm.getNpc())){quiz=d;phase=0;active=true;cm.sendYesNo(d.intro);return;}
  break;
 }
 cm.sendOk("你已经完成了全部7道冒险岛问答。祝你冒险愉快！");cm.dispose();
}
function action(mode,type,selection){
 if(!active)return;
 if(mode!=1){active=false;cm.dispose();return;}
 var q=Packages.server.quest.MapleQuest.getInstance(quiz.id);
 if(phase==0){
  if(!q.canStart(cm.getPlayer(),cm.getNpc())){active=false;cm.dispose();return;}
  cm.startQuestInScript(quiz.id);
  if(cm.getQuestStatus(quiz.id)!=1){active=false;cm.dispose();return;}
  phase=1;cm.sendSimple(quiz.question);return;
 }
 if(phase==1){
  var valid=false;for(var i=0;i<quiz.options.length;i++)if(selection==quiz.options[i])valid=true;
  if(!valid){active=false;cm.dispose();return;}
  if(selection!=quiz.correct){active=false;cm.sendOk(quiz.wrong[String(selection)]);cm.dispose();return;}
  phase=2;cm.sendNext(quiz.yes);return;
 }
 if(phase==2){
  active=false;
  if(q.canComplete(cm.getPlayer(),cm.getNpc()))cm.completeClientNpcQuest(quiz.id);
  else cm.dispose();
 }
}
