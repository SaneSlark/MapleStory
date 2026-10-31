// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3447, 1, "邪恶力量的破坏", ["把暗黑泰可因都破坏掉了吗？"], "消灭帕普拉图斯之后从它身上出现了黑泰可因，为了破坏散发出邪恶力量的黑泰可因，来到了冰峰雪域深处的熔岩地下城。在这喷射出熔岩的地方，将它破坏掉吧。"], [3447, 0, "邪恶力量的破坏", ["灼热的熔岩正在喷发，周围好像相当炎热，一靠近熔岩立刻感到一股热浪扑面而来。把暗黑泰可因扔进这里应该就能破坏掉它吧。"], "消灭帕普拉图斯之后从它身上出现了黑泰可因，为了破坏散发出邪恶力量的黑泰可因，来到了冰峰雪域深处的熔岩地下城。在这喷射出熔岩的地方，将它破坏掉吧。"]], greeting="你好，有什么事吗？", stage=0, choices=[], picked=null, page=0, closed=false;
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
