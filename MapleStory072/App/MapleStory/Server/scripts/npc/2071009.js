// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3632, 1, "沈师铭的请托", ["真的带来了#b#t4031279# 300个#k啊，打出生到现在头一次见到这么多米呢，真是感谢您啊，竟然二话不说就借给我这么多米... 这份恩情，我该怎么报答您呢？"], "在童话村见到了#b#p2071009##k。他非常疼爱他的独生女儿。可是，随着年龄不断增长，最近他的双眼看起东西变得模糊起来，真担心这样下去他会变成瞎子啊。他很想要一副'老花眼镜'，可是那副眼镜竟然需要#b#t4031279# 300个#k，所以只好托我帮忙。不过#t4031279#要在哪里才能得到呢？\n对了！沈师铭曾经说过#b赫丽奥斯塔#k里的#r#o3210208##k身上可以找到... \n\n#t4031279#  #b#c4031279##k / 300"], [3634, 1, "孝女沈清童话书", ["颜色真漂亮啊，小清一定会喜欢的。非常感谢您，请收下这个，这次可千万不要弄丢了啊。"], "赫丽奥斯塔的#b#p2040052##k托我为他带来#b#t4031280##k。以前给#p2071009#弄来#t4031279# 300个之后有得到过这样东西，可是现在却找不到了。找到#p2071009#说明了情况后，他说只要我帮他收集到用来制作沈清喜欢的花束材料#b#t4000165# 10个#k，就能给我童话书。\n\n#t4000165#  #b#c4000165##k / 10"]], greeting="最近我眼睛总是觉得很累…", stage=0, choices=[], picked=null, page=0, closed=false;
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
