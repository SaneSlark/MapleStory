// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3428, 1, "运载船的位置", ["运载船的位置"], "我把#b波特博士的信件#k给机库的工程师#b卡伊#k了。虽然我很希望那信是情书。但实际上是有关失踪的运输船的。没有意思！卡伊拜托我在鲁斯韦尔草原找运输船，确认驾驶员是否还生存。"], [3429, 0, "驾驶员的生存", ["到处都找不到#b#p2051001##k说的驾驶员，但在运输船的驾驶舱发现了好像谁很匆忙地写下的信件。把这封信件送给地球本部机库的工程师#b#p2051001##k。"], "在鲁斯韦尔草原发现了损坏的运输船。但哪里也找不到驾驶员。我只发现了一封信。我要把这封信件给卡伊送去。"]], greeting="你好，有什么事吗？", stage=0, choices=[], picked=null, page=0, closed=false;
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
