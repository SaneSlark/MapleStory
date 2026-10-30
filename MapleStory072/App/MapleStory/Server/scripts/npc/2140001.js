// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3506, 1, "忘却的追忆", ["……你……已经空了。你内心的一部分记忆已经失去了，完全消失了。"], "时间鲸鱼 #o8220004#把记忆当作食物。#p2140000#说在和#o8220004#战斗的时候，你的记忆被它吃掉了，所以无法通过追忆之路。他让我去找旁观记忆的人——#b#p2140001##k，说也许可以找回失去的记忆。"], [3507, 0, "记忆旁观者", ["你丢失的记忆……是你还是小冒险家的时候的单纯的记忆。如果你想恢复记忆的话，就必须回到那个时候去……"], "按#p2140000#所说，找到了 #p2140001#。得知我丢失了记忆之后，他说我丢失的是非常单纯的记忆，要把它找回来，必须回到冒险开始的时点……"], [3507, 1, "记忆旁观者", ["现在你已经充满了温暖、美好的记忆……"], "按#p2140000#所说，找到了 #p2140001#。得知我丢失了记忆之后，他说我丢失的是非常单纯的记忆，要把它找回来，必须回到冒险开始的时点……"]], greeting="在沉睡着的女神的眼睛里看到了什么？看不见的东西就是不存在的东西……", stage=0, choices=[], picked=null, page=0, closed=false;
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
