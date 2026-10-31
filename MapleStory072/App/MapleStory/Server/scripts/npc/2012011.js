// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3012, 1, "住手的帮助", ["住手的帮助"], "她说现在怎么说也对她没用，但是如果有把黑水晶恢复原样需要的物品#b妖精之粉#k，斯皮罗纳的怒气也许可以小点。那物品是天空之城杂货店的#b妖精珂丽尔#k所有的."], [3013, 1, "妖精之粉", ["妖精之粉"], "#b妖精珂丽尔#k说如果我想得到#b妖精之粉#k应该收集#b100个星光精灵的星块，50个月光精灵的月块，30个日光精灵的日块#k来。这下可好我要是打精灵了吧…"], [3014, 0, "得到的妖精之粉", ["哟~ 你真的全收集来了。不容易啊，你真了不起！那小子可可真有眼光！既然你完成了任务，按照约定给你#b#t4031051##k。这是非常贵重的东西，你千万不要弄丢。"], "从#b妖精珂丽尔#k收到了#b妖精之粉#k。那么把这个物品给斯皮罗纳就可以了吧！"], [3042, 1, "转交神秘的材料", ["你有什么事情？啊。那是不是我朋友维英的东西吧? 嗯? 维英拜托你送给我那物品吗?"], "在魔法密林见到了妖精维英，她问我要不要前往全新的世界将自己锻炼的更强大，但妖精维英的目的其实是要我帮他将某样东西转交给住在天空之城的朋友─#b妖精珂丽尔#k。"], [3043, 1, "珂丽尔的忙", ["真是非常感谢。没想到这么快就收集齐了啊。一直以来都很忙，多亏您的帮助我可以顺利进行下去了。这是我的一点心意，请收下吧~ \n现在对这片新大陆也已经比较熟悉了吧！"], "忙碌的妖精珂丽尔请我帮他的忙。她要我在村庄各处收集空瓶子，以及可用在魔法道具的材料。\n\n #t4031198# #b#c4031198##k/20 \n #t4000073# #b#c4000073##k/200 \n #t4000058# #b#c4000058##k/50"], [3043, 0, "珂丽尔的忙", ["啊！真意外啊。一直想知道他的消息，没想到由您为我带来#b#t4031197##k。您是受到我朋友维英拜托的吧。维英一直没有将这个送给我，正在难过着呢～现在好啦。", "可是您竟然听维英说的不管三七二十一来到这里，这怎么行呢... 估计您对这里的地理环境都不怎么熟悉吧。如果有空的话能帮我个忙吗？还可以对这里的地理逐渐熟悉起来呢。"], "忙碌的妖精珂丽尔请我帮他的忙。她要我在村庄各处收集空瓶子，以及可用在魔法道具的材料。\n\n #t4031198# #b#c4031198##k/20 \n #t4000073# #b#c4000073##k/200 \n #t4000058# #b#c4000058##k/50"], [3091, 1, "海之风景：珂丽尔的建议", ["啊！真带来水世界相簿了？虽然没什么兴趣…但还是让我看看吧。"], "珂丽尔非常珍爱自己的翅膀，瞧不起其它冒险者。她不知道世界上还有许多她无法到达的神秘的地方。譬如莉萨所说的“水世界”，她就只闻其名而未能前往，为此她感到非常生气。为了珂丽尔，莉萨要向妙斯求购“水世界风景相簿”，妙斯又怎么说的呢？。。 很久没有下海了！！\n\n#i4031310# #t4031310#   #b#c4031310##k / 1"], [3100, 0, "运送粮食给斯皮罗纳", ["奇怪啊。 明明说好这时候来怎么还没来呢? 莫非有什么事耽搁了? 人类没有必要知道…话虽如此, 但那位婆婆也是人类，也许需要你的帮助 ，你问我她是谁？嗯，如果你愿意帮助我，我就告诉你。"], "据#p2012011#讲，在云彩公园的某处住着一位性格孤僻的老婆婆，她名叫 #p2032001#，与她的弟子住在一起. 他们经常在杂货店购买粮食，但这次不知为何却没有来.所以想让你帮#b#p2032001#的弟子#k送一些粮食...\n\n#i2010003# #t2010003#  #b#c2010003##k / 20  \n#i2010000# #t2010000#  #b#c2010000##k / 20 \n#i2010002# #t2010002#  #b#c2010002##k / 20"]], greeting="最近人类毫无介意的来找我们要求这个那个的。我们妖精并不是什么时候都答应他们的。。。", stage=0, choices=[], picked=null, page=0, closed=false;
function finish(){closed=true;cm.dispose();}
function start(){
    var menu="";
    for(var i=0;i<entries.length;i++){
        var d=entries[i],q=Packages.server.quest.MapleQuest.getInstance(d[0]);
        if((d[1]==0 && q.canStart(cm.getPlayer(),cm.getNpc())) || (d[1]==1 && cm.getQuestStatus(d[0])==1)){
            menu+="\r\n#L"+choices.length+"#"+(d[1]==0?"[接受] ":"[继续] ")+d[2]+"#l";
            choices.push(d);
        }
    }
    if(choices.length==0){cm.sendOk(greeting);finish();return;}
    cm.sendSimple(greeting+"\r\n"+menu);
}
function showPage(){
    var pages=picked[3];
    if(page<pages.length-1)cm.sendNext(pages[page]);
    else cm.sendYesNo(pages[page]);
}
function action(mode,type,selection){
    if(closed)return;
    if(mode!=1){finish();return;}
    if(stage==0){
        if(selection<0 || selection>=choices.length){finish();return;}
        picked=choices[selection];
        var q=Packages.server.quest.MapleQuest.getInstance(picked[0]);
        if(picked[1]==1 && !q.canComplete(cm.getPlayer(),cm.getNpc())){
            cm.sendOk(picked[4] || "任务条件尚未完成，请查看任务栏中的要求。");finish();return;
        }
        stage=1;page=0;showPage();return;
    }
    if(stage==1){
        if(page<picked[3].length-1){page++;showPage();return;}
        closed=true;
        var q=Packages.server.quest.MapleQuest.getInstance(picked[0]);
        if(picked[1]==0 && q.canStart(cm.getPlayer(),cm.getNpc())){cm.startClientNpcQuest(picked[0]);return;}
        if(picked[1]==1 && q.canComplete(cm.getPlayer(),cm.getNpc())){cm.completeClientNpcQuest(picked[0]);return;}
        cm.dispose();
    }
}
