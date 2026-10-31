// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3403, 1, "金博士的托付 : 阿海", ["啊哈！你拿着我的#b#t4031101##k！看样子是见过在野地某个地方执行其它战略的#b#p2050006##k吧？不管怎么说，靠我自己的力量抵抗外星人实在是件吃力的事，真是万幸，我来看看是不是能修理好。"], "在地球本部附近见到阿海后交给他设计图和20个太空食品。阿海说他修好了阿亮的光线枪，我去找阿亮的时候顺便把他的光线枪也拿给他。那么我还要去找阿亮啊。"], [3404, 0, "金博士的托付 : 阿亮", ["我们3个轮流看守#b#t4031100##k，辛苦了。现在就剩下给#b#p2050001##k报告了。刚才给你的#b#t2030011##k是可以瞬间移动到地球防御总部司令室的道具，使用那个道具可以更快速到此区域进行报告的动作。再见！"], "在地球本部附近见到了阿亮。然后交给他设计图和光线枪。他很感激地说要回地球本部去报告金博士所有的事情。阿亮给我的移动小盒肯定是很有用的东西吧。"], [3411, 0, "白外星人司令的标志", ["你好？我们不是初次见面的吧？你是以前拿来金博士的设计图的那个人吧？呼呼。。。我的记忆力果然很不错。但问题就是很不好找路。为什么我常常迷路呢？", "你能不能再帮我一次？我这次接到的任务就是打退#b#o4240000##k的。但我找不到他们在哪里。你可不可以帮我打退它们后收集#b5个#t4000125##k？拜托你。"], "在地球本部附近又遇到了阿亮. 阿亮正在进行跟踪白外星人司令的任务.但他常常迷路,找不到白外星人司令.我要帮阿亮打退白外星人司令后收集5个白外星人司令的标志.\n\n#t4000125# #b#c4000125##k/5"], [3411, 1, "白外星人司令的标志", ["果然是你啊！我相信你。这个确实是#b5个#t4000125##k。好的，你为了我辛苦了。我就送你礼物。这些是地球本部给我的，我就给你一些。"], "在地球本部附近又遇到了阿亮. 阿亮正在进行跟踪白外星人司令的任务.但他常常迷路,找不到白外星人司令.我要帮阿亮打退白外星人司令后收集5个白外星人司令的标志.\n\n#t4000125# #b#c4000125##k/5"]], greeting="我是在这里执行任务的地球防御本部的#b#p2050007##k。看起来你象冒险者，虽然你是我们一伙，也不能告诉你我所做的任务。", stage=0, choices=[], picked=null, page=0, closed=false;
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
