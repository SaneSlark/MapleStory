// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3226, 0, "失去记忆的女孩子", ["您好，初次见面啊。到我家有什么事情吗? 其实最近由于发生了奇怪的事情，所以只要见到陌生人就很敏感。如果可以，能帮我个忙吗？"], "在玩具城村落遇到一个叫#b克林#k的女孩子。她说以前她失踪过10个月。但她不记得那段时间发生过什么事情了。之后她拜托我去找一个以前来过这里的穿黑衣服的人，了解一下她失踪那段时间发生的事情后告诉她。穿黑衣服的人啊。。。好象在玩具城和玩具塔都没看见过。"], [3228, 1, "找回的记忆", ["你终于回来了，你说什么...? 穿黑衣服的男子说我在失去记忆的10个月期间，是被外星人绑架！怎么可能，什么外星人？不可能啊？ 我无法相信他说的话。", "哦？不过你手里的是什么东西呀? 难道是我失去的记忆吗...? 竟然把记忆制作成跟物品一样的实物，这让我更无法相信了。但是，就当是被你骗吧，让我看看这个物品。不知是否真的是我所失去的记忆？让我来瞧瞧。"], "在鲁斯韦尔草原打退#b外星章鱼枪#k后获得了#b5个记忆的片段#k。把这些东西给工作员M，他把五个记忆的片段做成了#b克林的记忆#k给我。那我只要把这个记忆送给克林就可以了。。。"]], greeting="咦？我从来没见过你。。。你来我家有什么事？没什么特别的事情就离开吧。这里最近不太平，不喜欢陌生人。", stage=0, choices=[], picked=null, page=0, closed=false;
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
