// CMS NPC/map/item relations; original079 Kyrin flow, corrected cancellation and item checks.
var status=-1,done=false,route=-1,choice=-1,advOrigin=-1;
function start(){advOrigin=cm.getMapId();status=-1;done=false;qfresh=true;action(1,0,0);}
function action(mode,type,selection){if(done)return;if(qQuestAction(mode,type,selection))return;qOrigAction(mode,type,selection);}
function qOrigAction(mode,type,selection){
 if(done)return;
 if(cm.getMapId()!=advOrigin){done=true;cm.dispose();return;}
 if(mode!=1){done=true;cm.dispose();return;}
 status++;
 if(status==0){
  var job=cm.getJob(),level=cm.getLevel();
  if(cm.getMapId()==912010200){route=4;cm.sendYesNo("要返回诺特勒斯号航海室吗？");}
  else if(job==0 && level>=10 && cm.getChar().getStat().getDex()>=20){route=0;cm.sendYesNo("你确定要成为海盗吗？需要等级10、敏捷20。");}
  else if(job==500 && level>=30){
   route=cm.haveItem(4031012,1)?2:1;
   cm.sendSimple("请选择海盗的二转方向：\r\n#L0#拳手#l\r\n#L1#火枪手#l");
  }else if(level>=70 && (job==510 || job==520)){
   route=3;cm.sendYesNo(cm.haveItem(4031059,1)?"用黑符换取力气项链，返回长老公馆吗？":"进入异次元空间，接受凯琳分身的考验吗？");
  }else {done=true;cm.sendOk("海盗一转需要等级10、敏捷20；二转需要等级30并通过考验；三转考验需要等级70。");cm.dispose();}
 }else if(status==1 && (route==1 || route==2)){
  if(selection!=0 && selection!=1){done=true;cm.dispose();return;}
  choice=selection;cm.sendYesNo(route==1?"进入考验地图，收集15个结晶后交给地图中的凯琳吗？":"提交英雄证书，完成二转吗？");
 }else{
  done=true;
  if(route==0){
   if(cm.getJob()!=0 || cm.getLevel()<10 || cm.getChar().getStat().getDex()<20){cm.dispose();return;}
   if(cm.getInventory(1).getNumFreeSlot()<2 || !cm.canHold(1482014,1)||!cm.canHold(1492014,1)||!cm.canHold(2330000,1800)){cm.sendOk("请空出装备栏和消耗栏。");cm.dispose();return;}
   cm.changeJob(500);cm.gainItem(1482014,1);cm.gainItem(1492014,1);cm.gainItem(2330000,1800);cm.sendOk("海盗转职完成。");
  }else if(route==1 && cm.getJob()==500 && cm.getLevel()>=30){cm.warp(choice==0?108000502:108000500,0);}
  else if(route==2 && cm.getJob()==500 && cm.getLevel()>=30 && cm.haveItem(4031012,1)){
   cm.gainItem(4031012,-1);cm.changeJob(choice==0?510:520);cm.sendOk("二转完成。");
  }else if(route==3 && cm.getLevel()>=70 && (cm.getJob()==510 || cm.getJob()==520)){
   if(cm.haveItem(4031059,1)){
    if(!cm.canHold(4031057,1)){cm.sendOk("请空出其他栏。");cm.dispose();return;}
    cm.gainItem(4031059,-1);cm.gainItem(4031057,1);cm.warp(211000001,0);
   }else{cm.warp(108010501,0);if(cm.getMap(108010501).getNumMonsters()==0)cm.spawnMobOnMap(9001004,1,299,20,108010501);}
  }else if(route==4){cm.warp(120000101,0);}
  cm.dispose();
 }
}
/* AUTO-QUEST-BEGIN */
/* CMS client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[2164, 1, "赫丽娜的礼物", "恩？"], [2191, 0, "成为拳手的途径", "已经到了等级30了。为了当上拳手而来找我的吗？那么你还真是找对人了。"], [2191, 1, "成为拳手的途径", "很好，15个都集齐了。"], [2192, 0, "成为火枪手的途径", "已经升到30级了啊。为了成为枪手而来找我的吗？那你还真是找对人了。"], [2192, 1, "成为火枪手的途径", "很好，15个都集齐了。"], [2193, 0, "新手海盗的第一个修炼", "还没有习惯海盗这个职业吧？没有经验的话这是很当然的事情。经验是很重要的东西。不过一个人积累经验也很困难。我稍微帮你一下？\\r\\n#L0##b要开始修炼了。#k#l \\n#L1##b 用自己的力量可以进行。#k#l"], [2193, 1, "新手海盗的第一个修炼", "制服了11头猪了啊。很好~不过满足于这种程度的话就不能再变强了。现在已经迈出了成为海盗的第一步了。"], [2194, 0, "新手海盗的第二个修炼", "你觉得比以前稍微强大一些了吗？不过这样还不够。修炼是没有休止的。怎么样？如果你愿意的话我会帮助你修炼的。"], [2194, 1, "新手海盗的第二个修炼", "已经制服了26头猪了啊。很爽吧？不过你不会只满足于这个程度吧？跟冒险岛里很多怪兽和英雄相比你还差得很远。"], [2195, 0, "新手海盗的第三个修炼", "你好~听说你又强大了，所以来找你，你不觉得这是因为受我的修炼的恩惠的结果吗？哈哈~好了，那么你会接受下一次的修炼吧？"], [2195, 1, "新手海盗的第三个修炼", "已经成功制服了43头猪了。这么难的修炼都顺利通过了~真是不简单！"], [2196, 0, "新手海盗的第四个修炼", "谢谢你一直跟着我修炼，看到你真正的海盗的样子我真是很高兴。不过为了见证你真的已经成为了一名海盗，还需要通过最后一次考试。"], [2196, 1, "新手海盗的第四个修炼", "真的成功打猎了10个 #r绿蘑菇 #k啊！我就知道你会成功的。"], [2212, 1, "成为海盗的途径", "是想成为海盗所以你才找来这里的吗？"], [3527, 0, "追随遗忘的记忆    ", ""], [3947, 1, "巴一岚的推荐书！！！！", "是谁啊？有东西要给我？让我看看"], [4715, 0, "凯琳的自由碎块(1日)", "冒险家，你来啦？我已经恭候你多时了。我们5大职业转职教官都已经知道你的来意了，我们也准备好对你考验的题目了。我这边授予你的任务是：打倒在外面的怪物，并且收集来30个自由碎块。怎么样？有没有信心完成？"], [4715, 1, "凯琳的自由碎块(1日)", "怎么样啊？冒险家，任务完成了么？"], [4725, 0, "凯琳的自由碎块(7日)", "冒险家，你来啦？我已经恭候你多时了。我们5大职业转职教官都已经知道你的来意了，我们也准备好对你考验的题目了。我这边授予你的任务是：打倒在外面的怪物，并且收集来30个自由碎块。怎么样？有没有信心完成？"], [4725, 1, "凯琳的自由碎块(7日)", "怎么样啊？冒险家，任务完成了么？"], [6012, 0, "凯琳的教学", "好久不见噢,听到你已经到达120级的消息特别联络了下你."], [6330, 0, "变强的方法", "好久不见了啊。这么久不见好像哪里变化了啊？还是个小毛孩子的时候就一直嚷嚷着要成为海盗，好像那还是前些日子的事情，你都当上冲锋队长了。怎么样啊？成为冲锋队长的感觉？"], [6330, 1, "变强的方法", "恭喜你啊，通过我的考试了。我现在教你新的技术“超级变身”。"], [6340, 0, "冷静的心", "看你这表情好像有很多烦恼呢。发生什么事了吗？是不是还没能用超级变身锻造出强健的身体啊？呼~不用担心。你训练得还不够所以才会这样。如果积极使用超级变身的话，就能发现在瞬间随心所欲的使用超级变身呢。"], [6340, 1, "冷静的心", "训练很成功嘛。怎么样？观察红海龟龙的感觉……很强吧？你只要再接受一些训练就能变得比他们更强。如果训练成功的话，作为礼物我会教你索命。"], [6350, 0, "像钢铁一样结实的身体", "看你这表情好像有多烦恼呢。发生什么事了吗？是不是还没能用超级变身锻造出强健的身体啊？呼~不用担心。你训练得还不够所以才会这样。如果积极使用超级变身的话，就能发现在瞬间随心所欲的使用超级变身呢。"], [6350, 1, "像钢铁一样结实的身体", "训练很成功嘛。怎么养？观察蓝海龟龙的感觉……很强吧？只要你再接受一些训练就能变得比他们更强。如果训练成功的话，作为礼物我会教你金手指。"], [6370, 0, "变强的方法", "好久不见了啊。这么久不见好像哪里变化了啊？还是个小毛孩子的时候就一直嚷嚷着要成为海盗，好像那还是前些日子的事情，你都当上船长了。怎么样啊？成为船长的感觉？"], [6370, 1, "变强的方法", "祝贺你通过了我的考试。下面我教你武装。"], [6380, 0, "观察大海贼", "你好像有什么心事啊。有什么事？嗯。到现在为止使用武装还很难吧？哈，别担心，因为你还没有熟悉武装的用法。有既简单有快速的训练，你想试试吗？"], [6390, 0, "观察大海贼王", "你好像有什么心事啊。有什么事？嗯。到现在为止使用武装还很难吧？哈，别担心，因为你还没有熟悉武装的用法。有既简单有快速的训练，你想试试吗？"], [6390, 1, "观察大海贼王", "成功完成了训练。怎么养？观察大海贼的感觉？乘船作战的样子难道不简单吗？你再接受一点训练的话，会比他更好。那么作为训练成功的礼物，教你武装秘笈。"], [9304, 0, "配送福袋", "好吧……作为你给我们拜年的答谢，这个就作为礼物送给你吧。带着这个回去见 #b#p9010000##k，肯定会有意外惊喜的。"], [9306, 1, "向凯琳问候", "我是在诺特勒斯号为很多海盗服务的#b#p1072008##k.找我的人总是很多，所以很忙。话说，找我有什么事情么？\\r\\n#b#L0# #b想祝你新年快乐！"]];
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
