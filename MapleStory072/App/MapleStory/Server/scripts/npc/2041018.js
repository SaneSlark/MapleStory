// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3236, 1, "玩具配合", ["啊！你终于回来了。看一看。。。确实是我拜托的那些材料。好的。。。我用这些材料给你做以前没看见过的东西~！你稍等一会儿。。。用这个螺丝钉配合这里。。。使用机械心脏。。。然后配合电池。。。"], "在玩具城玩具工厂里见到了#b工程师 汉斯#k。汉斯跟我说如果能收集一些材料就能做很有意思的东西。需要的物品是#b20个便宜的电池，20个机器心脏，30个齿轮#k。\n\n#t4000111# #b#c4000111##k/20\n#t4000112# #b#c4000112##k/20\n#t4000115# #b#c4000115##k/30"], [3236, 0, "玩具配合", ["你好。我是在这里玩具工厂工作的#b#p2041018##k。见到你很高兴。我的任务是检配老玩具的配件，开发新玩具。但是。。。看来你很结实，想不想担任一件有意思的事情？"], "在玩具城玩具工厂里见到了#b工程师 汉斯#k。汉斯跟我说如果能收集一些材料就能做很有意思的东西。需要的物品是#b20个便宜的电池，20个机器心脏，30个齿轮#k。\n\n#t4000111# #b#c4000111##k/20\n#t4000112# #b#c4000112##k/20\n#t4000115# #b#c4000115##k/30"]], greeting="只要有几种材料就能做出有趣的玩具。。。可是不知道会不会让我做。", stage=0, choices=[], picked=null, page=0, closed=false;
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
