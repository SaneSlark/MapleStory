// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3001, 1, "巴伯下士", ["巴伯下士"], "在冰峰雪域见到了#b珀斯上尉#k。他拜托我去找他的手下们。他们是#b查里中士，巴伯下士，伊吉上等兵#k。但必须按照高阶级见他们。已经找到了查理中士，那我要去找巴伯下士"], [3002, 0, "伊吉上等兵", ["那你下次要见面的人是#p2030002#嘛。。。他也肯定找到了什么东西。那你快点去吧。再见！"], "在冰峰雪域见到了#b珀斯上尉#k。他拜托我去找他的手下们。他们是#b查里中士，巴伯下士，伊吉上等兵#k。但必须按照高阶级见他们。已经找到了前两个人，那我要去找伊吉上等兵。"], [3040, 1, "巴伯下士的拜托", ["巴伯下士的拜托"], "在离冰峰雪域村落很远的寒冰平原中见到了#b巴伯下士#k。他现正在执行任务，他需要给“珀斯上尉”报告：在周边调查中找到了古代文件碎片。那么找去#b查里中士、伊吉上等兵#k吧…"], [3040, 0, "巴伯下士的拜托", ["什么？真的是#b#p2020003##k让你来找我的？ 我一个人也找不到，就担心了。但果然#b#p2020003##k是没事了。他原来很强的人嘛！哈哈", "如果真实这样那太好了。他正在冰峰雪域执行任务是吧？好！我也不会落后的！啊…...我在调查这儿的时候发现了#b#t4031049##k的东西…...这个东西好像跟我们这次的任务有密切的关系。", "所以#b#p2020003##k也在等着这个东西。只要你给我#b2个冶炼的#t4011003##k，我就把这个交给你。要是你没有这个东西，你就不能证明见过我的，所以你只能拿走这个。你一定要交给#b#p2020003##k呀！"], "在离冰峰雪域村落很远的寒冰平原中见到了#b巴伯下士#k。他现正在执行任务，他需要给“珀斯上尉”报告：在周边调查中找到了古代文件碎片。那么找去#b查里中士、伊吉上等兵#k吧…"]], greeting="这里真的很冷！我是阿尔法部队联络网的队员叫#b#p2030001##k。在乘坐飞行器的途中遇到了事故，看不到别的队员正在担心。我想都会没事的。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
