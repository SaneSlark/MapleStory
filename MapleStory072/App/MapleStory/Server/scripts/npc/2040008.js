// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3214, 1, "玩具工人 4", ["玩具工人 4"], "找第四个玩具工人后拍了照片。"], [3215, 0, "玩具工人5", ["这活是怎么样，做也做不完啊。因为最近玩具塔多了很多怪物，经常破坏这里的各个地方。啊！你是说受玩具厂#b#p2040015##k的委托，来找我的吗？原来是这样，你说要拍照回去，好呀~~ 请拍出我努力工作的样子吧。"], "找第五个玩具工人后拍了照片。"], [3221, 1, "打鼓兔子", ["你打退#o3230400#后我们玩具塔保修工作进行的更顺利了。你原来比看起来更强啊。好！你这么帮我，我就给你礼物。这不是很多钱，但这是我的答礼，请收下。"], "在玩具塔又见到了玩具工人5。他拜托我打退玩具塔60层附近满多的打鼓兔子，收集#b100个玩具鼓#k。\n\n#t4000127# #b#c4000127##k/100"], [3221, 0, "打鼓兔子", ["玩具工厂没问题吗？包括我在内的很多工人都派到玩具塔做工作。所以有点担心工厂的事情。工厂的事情重要，但是塔的保修工作也很重要。真希望我的身体是两个。", "所以。。。我想拜托你一件事情。这附近有很多#b#o3230400##k。它们原来是很温顺的。但最近突然变成很凶暴了。", "我也不知道它们为什么攻击我们，但现在我们要打退它们。所以你能为我减少#b#o3230400##k的数量吗？"], "在玩具塔又见到了玩具工人5。他拜托我打退玩具塔60层附近满多的打鼓兔子，收集#b100个玩具鼓#k。\n\n#t4000127# #b#c4000127##k/100"], [3222, 1, "打鼓兔子的恢复", ["我听说了你打退#o3230400#的时候已经将它们中的一部分恢复了原样。真谢谢。请你收下这个吧。"], "在玩具塔再见到了玩具工人5。他说为了恢复打鼓兔子需要从它们那里抢回有黑暗能力的水晶。 我要去打退打鼓兔子，收集#b1000个玩具鼓#k来。\n\n#t4000127# #b#c4000127##k/1000"], [3222, 0, "打鼓兔子的恢复", ["你好，又见到你了。塔的保修工作进行很顺利。哈哈。。。要是你见过#b#p2050008##k，肯定听说过。。。为了把变的凶暴的#b#o3230400##k恢复成原来温顺的样子。必需要把它们的力量抢过来。", "抢力量最好的办法是。。。像上次那样打退它们回收水晶。怎么样？你这次会帮我吗？"], "在玩具塔再见到了玩具工人5。他说为了恢复打鼓兔子需要从它们那里抢回有黑暗能力的水晶。 我要去打退打鼓兔子，收集#b1000个玩具鼓#k来。\n\n#t4000127# #b#c4000127##k/1000"]], greeting="我是在玩具城的时间塔工作的人。最近这里有很多地方损坏了，需要保修。怪物也越来越多，妨碍了，修复工作。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
