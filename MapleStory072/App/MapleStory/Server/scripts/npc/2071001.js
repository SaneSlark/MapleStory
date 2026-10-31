// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3626, 0, "兴夫乐夫童话书(兴夫)", ["哎呀！见到您真高兴啊！这段时间过得好吗？原来还留在童话村啊？虽然家里还是有点寒酸，请进来休息一下再上路吧。", "上次多亏了您的帮助，我们家人现在不会再饿肚子了，再次向您表示我们的谢意。不过，今天来到这里是有什么事情吗？有什么困难吗？只要是您的要求，不管什么我都会答应的，请说。", "把我交给您的童话书弄丢了吗？不要担心，还能弄到的。我来告诉您方法吧。"], "赫丽奥斯塔图书馆的管理员威兹托我为他带来#b#t4031235##k。以前帮助兴夫之后有收到过这样东西，可是现在却找不到了。找到兴夫说明了情况后，他说只要给那只翅膀受过伤的燕子带去#b#t4000168# 10个#k就能得到童话书。\n\n#t4000168# #b#c4000168##k/10"]], greeting="呜…好饿哦~我得想办法找些可充饥的东西…", stage=0, choices=[], picked=null, page=0, closed=false;
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
