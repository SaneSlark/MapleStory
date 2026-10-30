// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3205, 1, "迷路的兵", ["你看起来很忙的样子。但是我这里的确有对你有帮助的物品。只要帮我做点事情，我就会给你这个物品。要是改变心意的话，可以随时来找我。"], "在玩具塔93层见到了迷路的士兵。他说他为做守卫任务要去59楼，但怪物攻击他，不能去了。他拜托我替他收集#b30个旧运动眼镜，30个飞机推进器#k来。。。那么这次我来做？\n\n#t4000103# #b#c4000103##k/30\n#t4000123# #b#c4000123##k/30"], [3205, 0, "迷路的兵", ["这里是哪里呀？我是接受玩具塔 59层警备任务而来的，但是根本没有办法知道这里是哪里，更何况有这么多怪物挡路，根本没有办法去执行任务。如果可以的话，能否帮助我？"], "在玩具塔93层见到了迷路的士兵。他说他为做守卫任务要去59楼，但怪物攻击他，不能去了。他拜托我替他收集#b30个旧运动眼镜，30个飞机推进器#k来。。。那么这次我来做？\n\n#t4000103# #b#c4000103##k/30\n#t4000123# #b#c4000123##k/30"]], greeting="玩具塔很宽广吧。。。所以在这里生活，有时会迷路。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
