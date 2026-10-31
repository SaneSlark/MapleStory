// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2050, 1, "萨比特拉玛的减肥药", ["哦哦...就是这个！只有这个#b#t4031020##k才能做减肥药，这可是我花好长时间研究出来的啊！！！哈哈~ 以后也想减肥的话，就来找我。那时候，我可能做出了非常好的减肥药~", "啊！...我差点就忘了。你这么热心帮我，我应该报答你才是啊！收下这个卷轴吧。这是我哥以前给我做的，能提高盔甲的防御力。希望对你有帮助。还有，往后#p1032003#有可能让你免费进入的。再次谢谢你，再见！"], "在林中之城前面遇见了药商#b萨比特拉玛#k。他看起来是克利斯拉玛的兄弟。他说他发现了做药时必须的药草，拜托我去树林找#b粉红花束#k。在绿色草丛中有小粉红花。我找到后应该给他这些花。魔法密林附近的某个地方才有那些花，我要去魔法密林见#b赛恩#k。"], [2050, 0, "萨比特拉玛的减肥药", ["喂~~ 稍等一会儿。我是到处收集草药的人，现在在这附近找草药。最近很难发现草药，你知道草药多的地方吗？", "其实我发现了有好多草药的地方，离这儿也不太远... 不过路途比较坎坷，令人有点儿头疼。但是在那个地方的尽头肯定有好的草药... 怎么样？你可以替我去吗？"], "在林中之城前面遇见了药商#b萨比特拉玛#k。他看起来是克利斯拉玛的兄弟。他说他发现了做药时必须的药草，拜托我去树林找#b粉红花束#k。在绿色草丛中有小粉红花。我找到后应该给他这些花。魔法密林附近的某个地方才有那些花，我要去魔法密林见#b赛恩#k。"], [2051, 0, "萨比特拉玛的年轻药", ["哦哦...你是以前帮过我的那个冒险者吧！我用你那时候拿来的草药做了减肥药，赚了不少的钱。但是这次我想做别的药…...怎么样？你还可以帮我一次吗？"], "在林中之城宾馆前面又见到了#b萨比特拉玛#k。他说他发现了做药时必须的药草，拜托我去那树林找强效红参。是那种有#b两支根的红参#k...我记住了红参的样子。有那些药草的地方应该是在魔法密林附近#b赛恩#k的树林。"], [2051, 1, "萨比特拉玛的年轻药", ["哦哦...就是这个！只有这个#b#t\" + stealItem + \"##k才能做减肥药，这可是我花好长时间研究出来的呀！！！哈哈~ 以后也想减肥的话，就来找我。那时候，我可能可以做出非常好的减肥药呢~", "啊！...我差点忘了。你这么热心帮我，我应该报答你才是啊！这个#b#t4021009##k是我以前冒险的时候在幽深的山沟中发现的，也许会对你今后的冒险有帮助。我还增加了你的人气度。再次谢谢你，再见！"], "在林中之城宾馆前面又见到了#b萨比特拉玛#k。他说他发现了做药时必须的药草，拜托我去那树林找强效红参。是那种有#b两支根的红参#k...我记住了红参的样子。有那些药草的地方应该是在魔法密林附近#b赛恩#k的树林。"]], greeting="这丛林里有好多珍贵的药草。发现药草的时候最开心了。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
