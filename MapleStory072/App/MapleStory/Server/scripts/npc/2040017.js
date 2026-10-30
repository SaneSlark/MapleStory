// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3435, 0, "打退外星章鱼枪", ["这个鲁斯韦尔草原常常有外星人出现。所以我们地球本部对这里实施军管。现在战斗也时有发生。对一般人来说，这里是很危险的。", "我已经从我们的队员那里听说过你的消息。果然看起来很强。对。。。这次跟我们冒险勇者一起去做任务吧。怎么样？当然报酬是不会少的。"], "在地球本部附近遇到了冒险勇者 绿虎. 他已经听到了我的消息.他劝我跟他们一起做冒险勇者的任务.我要首先完成冒险勇者 绿虎的任务.那是打退100个外星章鱼枪的任务\n\n打退外星章鱼枪 : #b#a34351##k"], [3435, 1, "打退外星章鱼枪", ["你回来了。任务解决得这么快！怪不得~ 希望以后也能跟你一起工作~ 现在给你报酬吧。"], "在地球本部附近遇到了冒险勇者 绿虎. 他已经听到了我的消息.他劝我跟他们一起做冒险勇者的任务.我要首先完成冒险勇者 绿虎的任务.那是打退100个外星章鱼枪的任务\n\n打退外星章鱼枪 : #b#a34351##k"], [3436, 1, "打退外星章鱼坦克", ["你回来了。打退#b#o4230120##k的任务不是比较困难了？看看。。。确实是#b100个#t4000121##k。有这些物品本部就会相信你帮我解决了任务。这是我给你的报酬。请收下。"], "在地球本部附近在见到了冒险勇者 绿虎.他拜托我这次打退比以前更强的外星章鱼坦克. 我要打退它们后收集100个外星章鱼的头盔. \n\n#t4000121# #b#c4000121##k/100"], [3436, 0, "打退外星章鱼坦克", ["因为从本部又来了新的任务，所以现在很忙。我已经等你很久了。这次收到消息，来攻击地球本部的是比以前#o4230119#更危险的外星人。", "那是叫做#b#o4230120##k的外星人。它们不但比#o4230119#阶级高，而且更危险的。怎么样？比以前的任务会更困难些，你愿意帮我解决这次的任务吗？"], "在地球本部附近在见到了冒险勇者 绿虎.他拜托我这次打退比以前更强的外星章鱼坦克. 我要打退它们后收集100个外星章鱼的头盔. \n\n#t4000121# #b#c4000121##k/100"], [3437, 1, "打退外星章鱼坦克和外星章鱼激光棒", ["哎呀？你这么快就打退了#b200个#o4230120##k吗？而且这是。。。确实是#b150个#t4000122##k。其实我正在担心怎么才能解决这个任务呢。谢谢你。这是我珍藏的东西。我就送给你吧。"], "在地球本部附近再见到了冒险勇者 绿虎. 他最后拜托我这次再打退外星章鱼坦克, 同时收集外星章鱼激光棒的武器的任务.我要打退200个外星章鱼坦克.同时要收集150个光线枪.\n\n外星章鱼坦克 : #b#a34371##k"], [3437, 0, "打退外星章鱼坦克和外星章鱼激光棒", ["因为有你的帮助，本部交代给我的任务都已经完成了，我以为暂时能休息一段时间。但今天本部交代下来一个最麻烦的任务。你能不能在跟我做最后一次任务？"], "在地球本部附近再见到了冒险勇者 绿虎. 他最后拜托我这次再打退外星章鱼坦克, 同时收集外星章鱼激光棒的武器的任务.我要打退200个外星章鱼坦克.同时要收集150个光线枪.\n\n外星章鱼坦克 : #b#a34371##k"]], greeting="我是地球防御本部派来执行重要任务的。这里很危险，一般人不要出入。", stage=0, choices=[], picked=null, page=0, closed=false;
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
