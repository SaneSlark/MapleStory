// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3423, 1, "新驾驶程序", ["新驾驶程序"], "在地球本部机库又遇到了卡伊。这次我要收集里面有战甲吹泡泡鱼操作程序的内存卡。那个内存卡在玩具塔的战甲吹泡泡鱼那里能得到，我要收集3个#b内存卡#k后给司令室的#b波特博士#k。然后我要把他给我的#b3个被解读的内存卡#k送给卡伊。但听说波特博士常犯迷糊？"], [3424, 1, "不会相信的波特", ["哼。。。机库的工程师#b#p2051001##k说我能解读#b#t4000124##k吗？虽然我会解读这个东西，但最近感冒得很厉害，所以不能保证成功。但，我试一试吧。哼。。。那么你给我#b3个#t4000124##k吧。"], "我把收集的内存卡给波特博士了"], [3424, 0, "不会相信的波特", ["哟。。。这次感冒太厉害，几个月还没治好呢！但是。。。机库的工程师#b#p2051001##k说她需要#b3个#t4031118##k呢。那么你先给我#b3个#t4000124##k吧。我就用那些东西来做#t4031118#给你。"], "我把收集的内存卡给波特博士了"], [3425, 1, "波特的错误", ["哦。。。你终于拿来#b#t4000124##k了。这么艰难的事情，你一定很辛苦了。虽然我感冒还没治好，我一定能帮你解读出来。你稍等一会儿。哼。。。比上次更复杂。。。"], "我收集3个内存卡后给了#b波特博士#k。但是。。。他弄错了其中一个。我不得不再去找战甲吹泡泡鱼的内存卡。"], [3425, 0, "波特的错误", ["哎呀。。。你给我的3个#t4000124#中我解读好了2个，但因为我感冒的缘故，最后的一个失败了。这怎么办？。。。你只能再次去玩具塔打退#b#o4130103##k，拿#b#t4000124##k来吧。"], "我收集3个内存卡后给了#b波特博士#k。但是。。。他弄错了其中一个。我不得不再去找战甲吹泡泡鱼的内存卡。"], [3426, 0, "优秀的助手", ["好！解读完了。你收好了吧？上次我解读了2个给你，现在还有一个，现在#b#p2051001##k说的那#b3个#t4031118##k你都拿到了吧？好。那么你快去把那些东西给她吧。再见。"], "我再次收集到战甲吹泡泡鱼的内存卡后给了#b波特博士#k。幸亏这次他解读成功了。那么我要把#b3个被解读的内存卡#k拿去给卡伊了。"], [3427, 0, "波特的信件", ["哎呀。。。你是不是#p2051001#的助手？对吧？哼。。。最近地球本部正在开发新型机器人。所以大家都很忙。而且最近外星人的攻击也更猛烈了。外星人他们很狡猾，你也小心吧。", "当#p2051001#的助手过得怎么样？他对你的不错吧。啊。。。没有什么特别的事情。。。啊。对! 你可不可以替我把这封信送给#p2051001#？我也想自己去，但现在我手头有很紧急的事情要做。。。"], "地球本部司令室的#b波特博士#k拜托我送给#b卡伊#k一封信。他说这封信件一定要在指定时间内送到。但我不知道里面的内容？是不是情书？"], [6212, 0, "波特的长效电池", ["喂，你好，在找什么呢?", "…是要给秀兹的长效电池？好像是记得我说过给他的，好像又不是，反正记不清了…最近因为帕普拉图斯忙得不可开交。正在研究如何让帕普拉图斯工作忙死了。如果你能给我帕普拉图斯的象征，我说不定就给你长效电池。"], "#p2012017#说把#b#t4031478##k给了#b#p2050013##k需要的话去找他。但是#p2050013#说对#t4031478#一点印象都没有,　只有找#b#t4001084##k给他才能想起来。 …这个人太狡猾了。\n\n#t4001084#  #b#c4001084# / 1#k"], [6212, 1, "波特的长效电池", ["哦哦，这就是帕普拉图斯的象征，谢谢！ …啊? 长效电池？啊，当然当然，一定给你。就在这里。"], "#p2012017#说把#b#t4031478##k给了#b#p2050013##k需要的话去找他。但是#p2050013#说对#t4031478#一点印象都没有,　只有找#b#t4001084##k给他才能想起来。 …这个人太狡猾了。\n\n#t4001084#  #b#c4001084# / 1#k"]], greeting="你好。我是在司令部帮助#b#p2050001##k研究新型机器人的#b#p2050013##k。(咳咳~)研究新型机器人的事情进展的很顺利，就是我这感冒不见好。(咳咳~) 没什么特别的事，我就继续我的研究了。我可不敢偷懒。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
