// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3438, 0, "无光水晶", ["最近我正在调查几个重要的事情，你肯定也去过玩具塔吧。其实原来玩具城和玩具塔都是没有怪物的。但是最近却发生了玩具城和玩具塔的娃娃变成怪物的事情。。", "谁也不知道原因是什么，而且情况越来越糟。还不清楚是否与外星人有关。所以我们先要调查清楚。但我在这里指挥与外星人的战斗，你看能不能帮我去调查一下这些事情？"], "在地球本部见到了马斯特 将军. 他告诉我在玩具塔可以获得无光水晶. 人家都以为那是没用的东西.但将军说那里有重要的秘密. 他拜托我收集20个无光水晶.那我去玩具塔打退打鼓兔子."], [3438, 1, "无光水晶", ["你回来了~~ 你都收集齐了那些东西吗？哦。。。你果然了得！好！我一定要给你礼物。你先收下这个道具。你下次来的时候我慢慢给你说明#b#t4031135##k的事实。"], "在地球本部见到了马斯特 将军. 他告诉我在玩具塔可以获得无光水晶. 人家都以为那是没用的东西.但将军说那里有重要的秘密. 他拜托我收集20个无光水晶.那我去玩具塔打退打鼓兔子."], [3439, 1, "力量的源泉", ["这么快就找到了，你真了不起。哦。。。是#b#t4031136##k吗？这个文件都是用外星人语言记录的。幸好我们已经有能翻译外星人语言的技术。哈哈。这是我给你的报酬。请收下。"], "在地球本部见到了马斯特 将军. 他研究以前我收集给他的水晶后知道了外星人知道某个事实. 这么说后他让我去找外星人 哥雷所在的那里找有什么东西.那我去他调查那附近."], [3439, 0, "力量的源泉", ["你又来了。我到现在还在研究你上次收集来的#b#t4031135##k。我在研究中发现了一个现象，但要证实我的想法，还需要外星人的一些东西。怎么样？你能再帮我一次吗？"], "在地球本部见到了马斯特 将军. 他研究以前我收集给他的水晶后知道了外星人知道某个事实. 这么说后他让我去找外星人 哥雷所在的那里找有什么东西.那我去他调查那附近."], [3440, 0, "打退黑暗之力", ["我已经在这里等你很久了。最近我们让专家再次研究了以前你给我的#b#t4031136##k。现在我们发现了新的情况。我们还需要你的帮助。怎么样？你愿意帮助我们吗？"], "在地球本部再见到了马斯特 将军. 他还没找到了完善的解决方案. 所以还拜托我了一件事情.我要去玩具塔打退打鼓兔子后要收集30个无光水晶和10个黑暗水晶的母矿."], [3440, 1, "打退黑暗之力", ["嗯。。。好！有这么多材料我们能够研究下去了。你帮我们大忙了，我要给你报酬。嗯？什么？现在没有什么需要的？哈哈。那没办法，就把这个给你吧！"], "在地球本部再见到了马斯特 将军. 他还没找到了完善的解决方案. 所以还拜托我了一件事情.我要去玩具塔打退打鼓兔子后要收集30个无光水晶和10个黑暗水晶的母矿."]], greeting="正好你来了。外星人随时都有可能再次进行攻击，不要放松警惕。对了。。。在本部有些人好像需要帮助，你去看看吧。", stage=0, choices=[], picked=null, page=0, closed=false;
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
