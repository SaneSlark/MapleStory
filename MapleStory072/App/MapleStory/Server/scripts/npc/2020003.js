// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3000, 0, "查里中士", ["喂！立正！哦...抱歉，我常常对我的队员这样说，已经习惯了。如果你不是很忙，可不可以答应我的请求呢？我来介绍一下自己吧！我是阿尔法部队的#b#p2020003##k，率领小分队执行一个重要的任务，但是飞机在途中发生故障，只能跳伞。现在我们失散了。", "我们说好了在这里集合，但是现在一个队员都没找到，我已经等了几天还是没有消息。所以我想请你帮忙一起找，他们一定在沃斯利亚大陆某个地方。你愿意吗？当然我不会让你白干的。"], "在冰峰雪域村落里碰到了用降落伞的伞兵：珀斯上尉。他需要帮助他找三名部下然后问他们任务履行得如何。 要寻找的三名部下是：#b查里中士、伊吉上等兵、巴伯下士#k，他们可能在神秘岛…  要按阶级高低见面， 太麻烦吧？"], [3003, 1, "到珀斯上尉回去", ["我们阿尔法部队的队员们你都见过吧！别的队员是不是都在努力执行任务啊？那快把我们的消息告诉#b#p2020003##k吧。", "哦…...你终于找到了他们3个吧！没想到你这么快就完成了。但是…...你却不是按照军衔的高低见他们的吧？中士最高，然后是下士，最后是上等兵，所以应该是按照#b#p2010000#, #p2030001#, #p2030002##k的顺序。可是你已经见过了，没办法了。", "我们的队员给你#b#t4031049##k了吗？其实我们是为了找这些文件才来到这儿的。我不能告诉你这东西会用在什么地方，因为这是绝密。如果他们完成了任务，应该有三部分。他们交给你了吗？让我看一下。"], "在冰峰雪域见到了#b珀斯上尉#k。他拜托我去找他的手下们。他们是#b查里中士，巴伯下士，伊吉上等兵#k。但必须按照高阶级见他们。我已经都找到了3个人。那我要回去见珀斯上尉"], [3102, 1, "珀斯上尉的秘密", ["嗯。 所有的材料都收集齐全了。 这样到去总部前的营养就足够了。谢谢。那么我就告诉你如何克服#m211000000#寒冷的秘密吧?"], "#p2020003#原本是很惧怕寒冷的。他能够在最寒冷的 #m211000000#生存，似乎是因为他身上的某件物品的缘故… 如果想要知道他的秘密，就要帮助#p2020003#收集回本部时所需粮食的原料。\n\n#i4000088# #t4000088#  #b#c4000088##k / 50 \n#i2022001# #t2022001#  #b#c2022001##k / 10  \n#i2010000# #t2010000#  #b#c2010000##k / 10 \n#i2010002# #t2010002#  #b#c2010002##k / 10"]], greeting="因为突然发生的事故，手下们都散开了。家伙。。。都平安才好。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
