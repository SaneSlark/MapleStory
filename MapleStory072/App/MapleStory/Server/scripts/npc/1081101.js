// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2159, 1, "帮助露尔", ["哈哈！已经击退了红螃蟹？太棒了！真的太棒了！"], "和丽尔长得一模一样，但性格很直爽的露尔！她的赌注是击退#r红螃蟹 50只#k。露尔希望我帮助她赢得赌注…… 我得帮她完成赌注来尽快结束这个愚蠢的赌局。\n\n#o3230102# #r#a21591##k"], [2159, 0, "帮助露尔", ["哼！你就是丽尔说的那个冒险家？谢谢你当裁判……不过不能因为和丽尔熟就偏向丽尔。这次比赛决不能让步。", "就算是这样，比赛内容也太难了。怎么击退红螃蟹呢？如果不是像您这样的冒险家，根本弄不到那么多……咳……怎么办……", "你好像也没有其他的事儿……没有偏向丽尔 ……看来也不怎麽喜欢丽尔……反正不能一个人结束这场比赛……决定了!你帮我一起击退#r红螃蟹#k。"], "和丽尔长得一模一样，但性格很直爽的露尔！她的赌注是击退#r红螃蟹 50只#k。露尔希望我帮助她赢得赌注…… 我得帮她完成赌注来尽快结束这个愚蠢的赌局。\n\n#o3230102# #r#a21591##k"]], greeting="欢迎您来到佛罗里那海边!", stage=0, choices=[], picked=null, page=0, closed=false;
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
