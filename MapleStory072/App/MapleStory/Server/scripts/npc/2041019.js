// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3237, 1, "镂刻的修理配件", ["啊！又故障了！你终于回来了。我等你已经很久了。你拿来这么多机器修理需要的配件，我们工厂也可以开始生产过程了。你这么为我们工厂辛苦了，这是我给的你礼物。请收下。"], "在玩具城玩具工厂里见了修理工镂刻。镂刻跟我说最近因为怪物增加，有问题的机器也越来越多。他拜托我为他收集一些配件。那些配件是50个#b齿轮#k和30个#b螺丝钉#k。\n\n#t4003000# #b#c4003000##k/30\n#t4000115# #b#c4000115##k/50"], [3237, 0, "镂刻的修理配件", ["哟。。。又故障了。。。啊？你好。我是在这玩具工厂里修理机器的#b#p2041019##k。跟#b#p2041018#, #p2041020##k一起责任这个工厂。想象不了没有我的玩具工厂啊！", "但最近我们有问题。这里的工人也在解决这个事情，但还需要帮助。最近出现很多怪物，它们正在破坏工厂的机器。所以需要你的帮忙。你能不能抽空帮我个忙。"], "在玩具城玩具工厂里见了修理工镂刻。镂刻跟我说最近因为怪物增加，有问题的机器也越来越多。他拜托我为他收集一些配件。那些配件是50个#b齿轮#k和30个#b螺丝钉#k。\n\n#t4003000# #b#c4003000##k/30\n#t4000115# #b#c4000115##k/50"]], greeting="哎呀~又出故障了。。。才修理了没几天，谁干的好事？被我捉到了，饶不了他。", stage=0, choices=[], picked=null, page=0, closed=false;
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
