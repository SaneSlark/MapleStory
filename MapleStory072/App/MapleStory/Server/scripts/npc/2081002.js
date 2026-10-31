// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3700, 0, "依托的任务", ["你好?我叫#b#p2081002##k。我正在孵蛋呢。可是蛋太大了，我抱不好。如果用温暖的莱西毛球把蛋盖起来就好了..帮我找莱西毛球好吗?"], "#m240000000#的 #p2081002#为了孵蛋需要温暖的 #o7130500#的羽毛，因此他委托我为他寻找 #b#t4000226##k和 #b#t4000229##k的羽毛。\n\n#t4000226#  #b#c4000226##k / 55\n#t4000229#  #b#c4000229##k / 75"], [3700, 1, "依托的任务", ["哇~谢谢。看起来好温暖啊。蛋啊蛋!我马上帮你暖和起来。"], "#m240000000#的 #p2081002#为了孵蛋需要温暖的 #o7130500#的羽毛，因此他委托我为他寻找 #b#t4000226##k和 #b#t4000229##k的羽毛。\n\n#t4000226#  #b#c4000226##k / 55\n#t4000229#  #b#c4000229##k / 75"]], greeting="如果我的身体再大一点的话可以抱着让蛋更暖和...", stage=0, choices=[], picked=null, page=0, closed=false;
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
