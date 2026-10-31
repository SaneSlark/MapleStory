// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2176, 1, "清理诺特勒斯号1", ["哎哟~！你还真是动作快啊！"], "去找能代替里德大婶陈旧的抹布的#b蝴蝶结#k吧。\n\n#i4000002##t4000002# #b#c4000002##k / 50"], [2177, 1, "清理诺特勒斯号2", ["哈哈哈哈哈哈~果然像电一样迅速啊。"], "因为长期停靠在岸上所以船上总有老鼠出没。里德大婶因为老鼠非常头疼，那就给她带#b50个老鼠陷阱#k吧。据说老鼠陷阱向住在玩具塔的白鼠那获得……\n\n#i4000095##t4000095# #b#c4000095##k / 50"]], greeting="干净的周边环境可以让人们的心情大快，所以打扫是件很重要的事。", stage=0, choices=[], picked=null, page=0, closed=false;
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
