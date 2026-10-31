// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3229, 1, "玩具兵的胡桃", ["你终于回来了！对！就是这个。有#b#t4031093##k我就能高兴地工作了。谢谢你帮我，那我给你个小礼物。请收下。"], "玩具塔100楼的玩具兵得利巴拜托我收集20个#b好吃的胡桃#k给他。他说可能玩具塔的黑老鼠#b玩具黑鼠#k带着那东西。\n\n#t4031093# #b#c4031093##k/20"], [3229, 0, "玩具兵的胡桃", ["哼。。。我在这里守门的时间太长了。太无聊。 喂。看来你是个冒险者，你能不能帮我个忙？"], "玩具塔100楼的玩具兵得利巴拜托我收集20个#b好吃的胡桃#k给他。他说可能玩具塔的黑老鼠#b玩具黑鼠#k带着那东西。\n\n#t4031093# #b#c4031093##k/20"], [3230, 0, "娃娃之家", ["我已经跟#b#p2040002##k说好了。你有空再跟他说话吧。他肯定需要你的帮忙。"], "在玩具塔100楼与玩具兵哦尔萨恩碰面了。从哦尔萨恩那听说，某个怪物抢走了玩具城时间塔的钟摆后变成了娃娃之家的故事。一定要一个与别的娃娃之家略有不同的一个。"]], greeting="这里谁都不能进去。最近侵入到玩具城的怪物隐藏在里面。很危险！禁止无关者出入。我很忙就此！", stage=0, choices=[], picked=null, page=0, closed=false;
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
