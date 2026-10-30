// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3072, 1, "瓶子里的信件", ["水.. 您手里拿着的那个是水吗？水！啊…好清凉的水啊！快把水给我！"], "在水下世界附近的海水中捡到了随海流飘來的一个瓶子，里面装有遇难者的求助信。以瓶里的沙子为线索，找出了在无人岛上孤立无援的鲁宾逊。经历了长久的孤岛生活之后，鲁宾逊非常渴望喝到清涼的水，并拜托我为他找来。\n\n#t2022000#  #b#c2022000##k / 1"], [3073, 0, "鲁宾逊的ID卡", ["哈，现在觉得好多了。没想到一瓶清水会这么好喝，真的非常感谢您，您的恩情我永远也不会忘记的。您是我的救命恩人，看到我的信竟然真的找到了这里，拜托您了，请您一定要帮我。"], "在大海中一座无人岛上碰到的鲁宾逊说自己本来是地球本部的驾驶员，在与外星人的战斗中逃向大海方向時不幸遇到大风浪，所以独自一人漂流到无人岛上。他必须回到地球本部，但因为不知道这座岛到底是在什么位置，并且浑身是伤，所以无法回去。于是拜托我替他前往地球本部找到#b#p2051001##k，将他遇难的事情告诉他們，并派来救援队。地球本部在什么地方呢？"]], greeting="我来到这座岛屿有多久了呢？我都不晓得过了多少时间…", stage=0, choices=[], picked=null, page=0, closed=false;
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
