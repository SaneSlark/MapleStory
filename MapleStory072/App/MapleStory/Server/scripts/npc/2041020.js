// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3238, 1, "机械工 麦戈的文件", ["你终于回来了。啊啊！那就是我弄丢的#b#t4031130##。！终于找回来了。我几乎放弃了。太好了。你这么帮我，我这就给你礼物。请收下。"], "在玩具工厂见到了机械工 麦戈. 他说木马骑兵抢走了他的文件, 拜托我找回他的文件. 但要找该木马骑兵要进去秘密空间…"], [3238, 0, "机械工 麦戈的文件", ["哼。。。这怎么办。我弄丢了修理机器用的东西。没有这个东西我无法工作。你能不能帮我？"], "在玩具工厂见到了机械工 麦戈. 他说木马骑兵抢走了他的文件, 拜托我找回他的文件. 但要找该木马骑兵要进去秘密空间…"]], greeting="今天也是好天气。我是在玩具工厂工作的#b#p2041020##k。我的任务是设计制作玩具的机械的设计图。", stage=0, choices=[], picked=null, page=0, closed=false;
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
