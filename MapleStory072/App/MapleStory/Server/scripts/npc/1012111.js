// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2088, 0, "研究蘑菇怪物的理由", ["年轻人~就是你！那里除了你之外还有谁啊！我是研究这个世界上的怪物和动物的科学家。有空的话可以帮我一下吗？"], "在射手村见到了研究怪物与动物的学者—布鲁斯，虽然他总是面带微笑，但过去经历过惨痛经验的他，为了获得女儿的消息，正针对蘑菇怪物进行研究。他希望我帮他收集研究用的材料…  \n\n#t4000011# #b#c4000011##k/10 \n#t4000001# #b#c4000001##k/40"], [2088, 1, "研究蘑菇怪物的理由", ["噢！都拿来了啊。谢谢，非常感谢~我得抓紧时间分析这些了…啊！看我这记性…差点忘记给你的酬劳了。"], "在射手村见到了研究怪物与动物的学者—布鲁斯，虽然他总是面带微笑，但过去经历过惨痛经验的他，为了获得女儿的消息，正针对蘑菇怪物进行研究。他希望我帮他收集研究用的材料…  \n\n#t4000011# #b#c4000011##k/10 \n#t4000001# #b#c4000001##k/40"], [2092, 0, "寻找女儿1", ["噢~ 是你啊！有个非常高兴得消息！非常高兴…如果有空的话想不想听我讲讲啊？而且可能还需要你的帮助~"], "在射手村见到了布鲁斯，在他那里听到了一个好消息。他好像找到了自己的女儿，可是她似乎丧失了之前的记忆，因此要我为她寻找小时候的玩具。"], [2093, 1, "寻找女儿2", ["噢！真的是…呜…呜…真的是我的女儿啊…竟然会是真的，好开心啊…实在是非常感谢你啊。", "我得女儿还活着，真是太好了。我得赶紧去见我得女儿。这是我送你的一些钱，希望能对你的旅行有所帮助。虽然不是很多，也请你好好使用吧~"], "伊安恢复记忆了！真是太好了~ 现在只剩下让布鲁斯和伊安父女相认了，首先要把伊安的信转交给布鲁斯。"]], greeting="我的名字叫布鲁斯。", stage=0, choices=[], picked=null, page=0, closed=false;
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
