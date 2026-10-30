// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3430, 1, "收集100个外星章鱼枪的触角", ["你回来了。你收集齐了我说过的#b100个#t4000120##k吗？好！现在可以正式进行解毒药研究了。那我给你报酬。"], "在地球本部见到了卫生员 莱斯. 她拜托我收集为制作解读药需要的材料.需要的材料是#b100个外星章鱼枪的触角。不知道用外星人的触角怎么能做解毒药。"], [3430, 0, "收集100个外星章鱼枪的触角", ["我们很忙，你看来也没有什么特别事. 那我拜托你几件事情。这事有点麻烦，像你这样经验丰富的冒险者才能完成。当然报酬不少，你不用担心。"], "在地球本部见到了卫生员 莱斯. 她拜托我收集为制作解读药需要的材料.需要的材料是#b100个外星章鱼枪的触角。不知道用外星人的触角怎么能做解毒药。"], [3431, 1, "收集200个外星章鱼枪的触角", ["你回来了！我拜托你的#b200个#t4000120##k都收集齐了？好！这样我就可以进行解毒药的研究了。我送你个礼物。这虽然不很贵重，但对你肯定很有用。"], "卫生员 莱斯说研究还需要更多的材料。我要收集200个外星章鱼枪的触角来给她。"], [3431, 0, "收集200个外星章鱼枪的触角", ["你回来了。正好你上次收集来的材料都用完了。我正在尝试各种方式想要抽出触须。但毕竟不是我们地球的生物，果然很困难。那么你能不能再帮我去收集材料呢？"], "卫生员 莱斯说研究还需要更多的材料。我要收集200个外星章鱼枪的触角来给她。"], [3432, 1, "收集300个外星章鱼枪的触角", ["你回来了！我拜托你的#b300个#t4000120##k都收集齐了？好！这样我就可以进行解毒药的研究了。我送你个礼物。这虽然不很贵重，但对你肯定很有用。"], "卫生员 莱斯说研究还需要更多的材料。我要收集300个外星章鱼枪的触角来给她。"], [3432, 0, "收集300个外星章鱼枪的触角", ["你回来了。正好你上次收集来的材料都用完了。我正在尝试各种方式想要抽出触须。但毕竟不是我们地球的生物，果然很困难。那么你能不能再帮我去收集材料呢？"], "卫生员 莱斯说研究还需要更多的材料。我要收集300个外星章鱼枪的触角来给她。"], [3433, 1, "收集400个外星章鱼枪的触角", ["你回来了！我拜托你的#b400个#t4000120##k都收集齐了？好！这样我就可以进行解毒药的研究了。我送你个礼物。这虽然不很贵重，但对你肯定很有用。"], "卫生员 莱斯说研究还需要更多的材料。我要收集400个外星章鱼枪的触角来给她。"], [3433, 0, "收集400个外星章鱼枪的触角", ["你回来了。正好你上次收集来的材料都用完了。我正在尝试各种方式想要抽出触须。但毕竟不是我们地球的生物，果然很困难。那么你能不能再帮我去收集材料呢？"], "卫生员 莱斯说研究还需要更多的材料。我要收集400个外星章鱼枪的触角来给她。"], [3434, 1, "收集500个外星章鱼枪的触角", ["你回来了！我拜托你的#b500个#t4000120##k都收集齐了？好！这样我就可以进行解毒药的研究了。我送你个礼物。这虽然不很贵重，但对你肯定很有用。"], "卫生员 莱斯说研究还需要更多的材料。我要收集500个外星章鱼枪的触角来给她。"], [3434, 0, "收集500个外星章鱼枪的触角", ["你回来了。正好你上次收集来的材料都用完了。我正在尝试各种方式想要抽出触须。但毕竟不是我们地球的生物，果然很困难。那么你能不能再帮我去收集材料呢？"], "卫生员 莱斯说研究还需要更多的材料。我要收集500个外星章鱼枪的触角来给她。"]], greeting="在地球防御本部你要注意一举一动。你来找我有什么事？我是这里的卫生员叫#b#p2050010##k。不知道什么时候又有袭击，你要小心。", stage=0, choices=[], picked=null, page=0, closed=false;
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
