// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3513, 1, "冰冻的感情", ["哦？听说现在不接受普通访客，怎么会有人来呢？而且感情也被冻住了，看来已经和#o8220005#干过一架了……你找我有什么事吗？"], "守护神殿的冰之骑士#o8220005#为了防止因后悔而不能完成任务，把感情冰冻了起来。#p2140000#说好像是受到了他的影响，连你的#b感情好像也被冰冻了起来#k。感情被冰都的人无法感到后悔，因此无法通过后悔之路……那该怎么办呢？\n\n#p2140000#让我去见见可以制造出任何东西的#b#p2140002##k，说他说不定会有什么办法。"], [3514, 0, "出售情感的魔法术士", ["嗯。你是想融化冰冻的感情，对吧？我一看就知道。别担心！我这里有#b融化冰冻的感情的药#k。世界最强的#p2140002#大人是无所不能的。", "但是药钱稍微有点贵……不过以你的能力，#b100万金币#k应该没问题吧？你要买药吗？"], "见到了#p2140002#。他知道我的感情被冰冻之后，说想要给感情解冻的话，需要购买他出售的#b药#k。价格很贵，但是他说效果很好。只是需要注意会有副作用。"]], greeting="谁说月石、星石中蕴藏着光明？谁说钻石代表了永远？常见的石头，只能算是普通的提炼石。更贵重、更高贵的东西只有时间神殿里有……", stage=0, choices=[], picked=null, page=0, closed=false;
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
