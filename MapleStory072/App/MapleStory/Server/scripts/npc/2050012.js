// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3226, 1, "失去记忆的女孩子", ["失去记忆的女孩子"], "在玩具城村落遇到一个叫#b克林#k的女孩子。她说以前她失踪过10个月。但她不记得那段时间发生过什么事情了。之后她拜托我去找一个以前来过这里的穿黑衣服的人，了解一下她失踪那段时间发生的事情后告诉她。穿黑衣服的人啊。。。好象在玩具城和玩具塔都没看见过。"], [3227, 1, "穿黑衣服的人", ["在罗斯威尔草原#b#o4230119##k被消灭，聚集来了5个#b#t4031090##k。好，用我的技术，把这些碎片合成为完整的一个给你。还有外空人的人数减少，给你一些金币吧！"], "在地球本部的安全地带见到了#b工作员M#k。向他打听克林的事情后，听说了她的失踪与外星人有关。如果想找回她失去的记忆，打退#b外星章鱼枪#k后要收集#b5个记忆的片段#k。那我应该要去鲁斯韦尔草原吧。\n\n#t4031090# #b#c4031090##k/5"], [3227, 0, "穿黑衣服的人", ["在这里尽可能不要和我说话，这样会对你的安全有所帮助。因为不知道何时这个地球防御总部会有危险。呵...? 你是说受#b#p2041015##k之托来找我的吗？哦呵…是那样子的吗?…", "虽然我想说不认识那样的人，但现在即使不说透过眼神好像有那么一回事。好吧！我把我知道的都告诉你。在这之前，你能发誓不跟别人透露有关#b#p2041015##k及相关的事情吗？"], "在地球本部的安全地带见到了#b工作员M#k。向他打听克林的事情后，听说了她的失踪与外星人有关。如果想找回她失去的记忆，打退#b外星章鱼枪#k后要收集#b5个记忆的片段#k。那我应该要去鲁斯韦尔草原吧。\n\n#t4031090# #b#c4031090##k/5"], [3228, 0, "找回的记忆", ["好了。现在把记忆拿到叫#b#p2041015##k的人那吧，也许可以找回失去的记忆。找回的瞬间可能有一些冲击，但这是不能避免的。那我还有事，先告辞了。"], "在鲁斯韦尔草原打退#b外星章鱼枪#k后获得了#b5个记忆的片段#k。把这些东西给工作员M，他把五个记忆的片段做成了#b克林的记忆#k给我。那我只要把这个记忆送给克林就可以了。。。"]], greeting="嘘...！在这里要装不认识我。这里是地球防御本部最安全，又最受威胁的地带，找我没什么事的话就离开吧。再见！", stage=0, choices=[], picked=null, page=0, closed=false;
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
