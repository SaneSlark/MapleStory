// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[6014, 1, "拉玛人的敏锐的鉴定手艺", ["哦……让我看看……你……你做好的怪……怪物结……结晶。嗯……很好……虽……虽然有……有些地方做……做得有……有点粗糙，但对新……新手来说已……已经做得很……很好了。看……看到这里的小……小突起了吗？虽……虽然有不……不少瑕疵，但是整……整体的光泽度很……很不错。"], "拉玛人是威尔斯的同事，也是著名的怪物结晶制作大师。人虽然很亲切，但却有点让人郁闷。他看到我学会锻造技术之后，因为不知道该制作什么东西而彷徨，于是告诉了我制造怪物结晶的方法。让我尝试亲手制作怪物结晶……\n\n#i4260000# #t4260000# #b#c4260000# / 1#k"], [6014, 0, "拉玛人的敏锐的鉴定手艺", ["喂……喂……那个……年轻人……能……能过来一下吗？对，就是……你。我看你好像已经……成为了威尔斯的弟子。从你的表情来……来看，好像完……完全不知道该……该怎么办的样……样子。要……要我告诉你……物品制……作中最……最基本的制……制作怪……怪物结晶的方……方法吗？好……你觉……觉得怎么样？"], "拉玛人是威尔斯的同事，也是著名的怪物结晶制作大师。人虽然很亲切，但却有点让人郁闷。他看到我学会锻造技术之后，因为不知道该制作什么东西而彷徨，于是告诉了我制造怪物结晶的方法。让我尝试亲手制作怪物结晶……\n\n#i4260000# #t4260000# #b#c4260000# / 1#k"]], greeting="嗯……嗯……让我看看……", stage=0, choices=[], picked=null, page=0, closed=false;
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
