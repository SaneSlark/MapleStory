// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3412, 0, "打退白外星人", ["我们日复一日的任务都是倾全力击退外星人，不过不知怎么了，这些家伙们的数量反而变多，真糟糕。我的力量并没有减弱…说不定有什么操纵他们的势力…不管怎么说，我有事想和你讨论，要不要听呢？"], "在地球本部附近遇到了[冒险勇者 熊猫]。他拜托我帮他打退#b30个白外星人卫兵#k。\n\n#o4230116# #r#a34121#"], [3412, 1, "打退白外星人", ["竟然击退30个那么凶残的#b#o4230116##k，平安归来，真是了不起呀！很意外喔~那些家伙是不是逼近离地球防御总部很近的地方了? 不管怎么说，既然已经帮了我的忙，应该给点报酬。不是什么特殊的礼物，请笑纳！"], "在地球本部附近遇到了[冒险勇者 熊猫]。他拜托我帮他打退#b30个白外星人卫兵#k。\n\n#o4230116# #r#a34121#"], [3413, 0, "打退白外星人司令", ["是上次帮我击退这个库蓝草原的#b#o4230116##k那个人啊，来的正好，刚好研究完如何操纵这些家伙的势力。比想象中用了更多的时间啊。现在又多了一个希望你帮忙的事，想不想听呀？"], "在地球本部附近又见到了[冒险勇者 熊猫]. 她拜托我打退白外星人中阶级最高的#b白外星人司令#k后收集他们带的#b3本笔记本#k来. 白外星人司令是很难找到的外星人阿…"], [3413, 1, "打退白外星人司令", ["哼…竟然收集了3个#b#t4031102##k，真了不起。我找他们的位置还用了好几天的时间呢…我还需要再努力呀。不管怎么说，你帮了我大忙，应该给点酬劳才行。没有多少钱，请收下吧！"], "在地球本部附近又见到了[冒险勇者 熊猫]. 她拜托我打退白外星人中阶级最高的#b白外星人司令#k后收集他们带的#b3本笔记本#k来. 白外星人司令是很难找到的外星人阿…"], [3414, 0, "白外星人之星的历史", ["是上次帮我击退库蓝草原的#b#o4230116##k，还帮我收集来#b#t4031102##k的那个人啊。刚好解读完了#t4031102#。了解到非常惊人的事实，真不知道该怎么办呢…能帮我吗？"], "在地球本部附近又遇到了[冒险勇者 熊猫]. 他说地球本部在解读笔记本后得到了一个重要的信息.原来白外星人生活的星球发生了很严重的污染.所以他们想要抢夺地球作为他们新的生存空间.为了了解他们那里的污染程度.他又拜托我收集#b白外星人卫兵,队长,长官,司令的细胞各一个"], [3414, 1, "白外星人之星的历史", ["哦哦哦…！就是这个！只要有这个样本，现在正在地球防御总部进行的研究就会更加活跃了！不过，没想到还会有比我更出色的人啊…我还需要更努力呀！不管怎么说，，你帮了我大忙，应该给点酬劳才行。", "来…请选择感兴趣的卷轴吧！成功的机率都是10%。"], "在地球本部附近又遇到了[冒险勇者 熊猫]. 他说地球本部在解读笔记本后得到了一个重要的信息.原来白外星人生活的星球发生了很严重的污染.所以他们想要抢夺地球作为他们新的生存空间.为了了解他们那里的污染程度.他又拜托我收集#b白外星人卫兵,队长,长官,司令的细胞各一个"]], greeting="你好！我是在这里执行抵御外星人的#b#p2040018##k。几天尤其猖狂。这里很危险你快去安全的地方吧。", stage=0, choices=[], picked=null, page=0, closed=false;
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
