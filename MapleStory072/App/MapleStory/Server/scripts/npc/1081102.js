// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2160, 1, "帮助拉尔", ["击退乌龟50只了吗？您没受伤吗？啊啊！真是万幸啊……太感谢您了。"], "拉尔很害羞。她的赌注内容是击退#r乌龟 50只#k。看起来很文静的她，怎么会参加这种赌局呢…… 真是不可思议。我答应了拉尔的请求，决定帮助她完成任务，尽快结束这个赌局。\n\n#o4130101# #r#a21601##k"], [2160, 0, "帮助拉尔", ["那个……您就是当裁判的冒险家吗？很高兴见到您！虽然对比赛没有自信……什么？为什么没有自信？", "因为……比赛内容是击退乌龟 。那个太难了。又不像冒险家那么强。我只是平凡的少女。", "虽然……我很胆小，但是……这次比赛我不想输。冒险家……我知道不应该拜托您这种事……但是能不能帮我？"], "拉尔很害羞。她的赌注内容是击退#r乌龟 50只#k。看起来很文静的她，怎么会参加这种赌局呢…… 真是不可思议。我答应了拉尔的请求，决定帮助她完成任务，尽快结束这个赌局。\n\n#o4130101# #r#a21601##k"]], greeting="欢迎您来到佛罗里那海边!", stage=0, choices=[], picked=null, page=0, closed=false;
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
