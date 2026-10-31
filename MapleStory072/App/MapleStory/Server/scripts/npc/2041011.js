// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3420, 0, "赎罪的努力", ["哼。。。你是不是以前接受过#b#p2050002##k的拜托的那个人？怎么回事？听说这几天有些外星人骗善良的老百姓取得地球本部的重要信息。。。我真没想到发生这样的事情。", "如果地球本部知道这个事情，人们肯定会说你是外星人的奴隶。可是。。。你也不知道做错了哪些事情吧？怎么样，为了再次赢得到人们对你的信心，想不想完成我给你的任务？"], "在地球本部附近遇到了[冒险勇者 黄雄]. 她已经知道了我帮助过外星人的事情.如果我不想变成地球本部的公敌就需要赎罪的努力.我为了再次获得信任应该打退外星人.\n\n剩下的白外星人长官 : #b#a34201##k"], [3420, 1, "赎罪的努力", ["哦。。。你已经都打退了#b#o4230118##k。这个原来就不是容易的事情，看来你是非常愿意恢复人们对你的信心了。好的。。。我向上级报告说你是地球本部的朋友。还有小东西送你啊。"], "在地球本部附近遇到了[冒险勇者 黄雄]. 她已经知道了我帮助过外星人的事情.如果我不想变成地球本部的公敌就需要赎罪的努力.我为了再次获得信任应该打退外星人.\n\n剩下的白外星人长官 : #b#a34201##k"], [3421, 1, "收集陨石的碎片", ["你终于回来了。看看。。。这都是很好的#b#t4031117##k啊？这么好的陨石对研究有很大的帮助吧。你这么尽心帮助我们，真感谢你！这是我为了表示感谢送你的，收下吧，你不用客气的。"], "在地球本部附近再次遇到了[冒险勇者 黄雄]. 她拜托我去库尔兰草原调查陨石后收集#b6个陨石的碎片#k. 要是我能完成这个任务, 会得到更大的信任吧."], [3421, 0, "收集陨石的碎片", ["好久不见了。上级对我要求很多，我很忙啊。啊。。。！正好想拜托你一件事情。。。如果你有空帮帮我们地球本部吧。"], "在地球本部附近再次遇到了[冒险勇者 黄雄]. 她拜托我去库尔兰草原调查陨石后收集#b6个陨石的碎片#k. 要是我能完成这个任务, 会得到更大的信任吧."]], greeting="你好，我是在这里执行任务的#b#p2041011##k。你见没见过在这周围的外星人？他们用甜言蜜语勾引善良的市民上当，你要特别小心。", stage=0, choices=[], picked=null, page=0, closed=false;
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
