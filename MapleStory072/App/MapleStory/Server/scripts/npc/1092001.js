// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2187, 1, "破了个洞的诺特勒斯号", ["独角狮硬角拿来了吗？哈啊~真是太幸运了。快点给我。可以暂时先把这个洞堵住。"], "想堵住船上的破洞，就可以用独角狮硬角来修理。波尼的力气逐渐减弱，得尽快找到#b50个独角狮硬角#k。\n\n#i4000073##t4000073#  #b#c4000073#/50#k"], [2187, 0, "破了个洞的诺特勒斯号", ["手指快没劲了……已经坚持不下去了……我放手的话船就要沉下去了……谁来帮帮我啊。"], "想堵住船上的破洞，就可以用独角狮硬角来修理。波尼的力气逐渐减弱，得尽快找到#b50个独角狮硬角#k。\n\n#i4000073##t4000073#  #b#c4000073#/50#k"]], greeting="帮帮我吧。", stage=0, choices=[], picked=null, page=0, closed=false;
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
