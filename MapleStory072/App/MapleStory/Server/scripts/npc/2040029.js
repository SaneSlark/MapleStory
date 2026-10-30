// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3231, 1, "被损伤的时间塔", ["被损伤的时间塔"], "玩具塔100楼玩具兵哦尔萨恩拜托我把上次得到的#b钟摆#k送给玩具城时间塔里的#b挂钟#k。他说挂钟用钟摆能修理时间塔。。。"], [3232, 0, "挂钟的拜托", ["哼。。。我是#b#p2040029##k。你找我有什么事情？嗯？#b#p2040002##k给#b#t4031094##k了？嗯。。。他拜托我去时间塔安装那个吗？然后让时间塔再启动？那不是什么难做的事。但其实我个人有一个问题。。。", "我知道在哪里安装。。。但是我最近太努力工作，现在我身体的发条已经几乎没有动力。你在这附近打闹钟啾啾#b#o4230113##k后拿一个#b#t4031098##k给我吧。那我会帮你。"], "我访问玩具城时间塔里的挂钟，想要给它钟摆。但是他说他处于很危险的情况，现在不能正常运行。所以他拜托我替他打退#b闹钟啾啾#k后拿#b万能表配件#k来。。。可能时间不那么多，我要快点去。"], [3232, 1, "挂钟的拜托", ["哦。。。你终于找到了#b#t4031098##k吧。太好了。。。有这个我也能再开始工作。。那你给我#b#t4031094##k吧。我把它安装到我的身体上。"], "我访问玩具城时间塔里的挂钟，想要给它钟摆。但是他说他处于很危险的情况，现在不能正常运行。所以他拜托我替他打退#b闹钟啾啾#k后拿#b万能表配件#k来。。。可能时间不那么多，我要快点去。"], [3233, 0, "运送完成", ["哟！我的力气回来了！好！我马上去安装配件！好。。。结束了。从现在玩具城时间塔会开始正常启动。那你快点回去告诉#b#p2040002##k这个好消息吧。我要在这里进行我的工作。再见！"], "获得#b万能表配件#k后给了挂钟。幸亏死机前给他了。"], [3234, 1, "时间塔的问题", ["你怎么来得这么晚? 我等你已经很久了。听说你已经都打退了100个#b#o3210207##k? 辛苦你了。你这么帮我，我就给你个谢礼。"], "在玩具城在碰到了挂钟。挂钟跟我说最近时间塔里计时啾啾的数量增加了，产生了不少问题。他这么说后拜托我打退100个计时啾啾的任务。\n\n#o3210207# #r#a32341#"], [3234, 0, "时间塔的问题", ["你到这里有什么事吗？对。。。因为以前你帮我，我现在做事做得都没问题。特别#t4031098#这个质量特别好。我不用担心以后很长时间再发生发条动力不足的问题。哈哈。", "我恢复了能力但现在还有别的问题。最近有些怪物在时间塔捣乱，但我们能力不足没办法打退它们。所以请你帮我打退它们吧。可以吗？"], "在玩具城在碰到了挂钟。挂钟跟我说最近时间塔里计时啾啾的数量增加了，产生了不少问题。他这么说后拜托我打退100个计时啾啾的任务。\n\n#o3210207# #r#a32341#"], [3235, 1, "工人表的电池", ["你回来了！看看。。。你真的收集#b200个#t4000111##k来了。太好了。你为我们这么辛苦，我给你礼物。请收下。"], "在玩具城的时间塔里又碰到了挂钟。他说他是旧式的钟表，没有电力也能运转。但是最近的表是用电池发动的，这几天的电池不多了，而不能走动的表又太多。这么说后他拜托我为他们收集#b200个便宜的电池#k。\n\n#t4000111# #b#c4000111##k/200"], [3235, 0, "工人表的电池", ["你是以前为我们打退了怪物的那个人吧。你在这里又有什么事？我们是有工作不得不在这里，但在这里危险的怪物满多，非常危险。你应该小心点。", "哼。。。看你能来到这里，你肯定是很强的人。正好我们正在找能帮助我们的冒险者。可能你也有自己的工作，但能不能抽空帮我们？"], "在玩具城的时间塔里又碰到了挂钟。他说他是旧式的钟表，没有电力也能运转。但是最近的表是用电池发动的，这几天的电池不多了，而不能走动的表又太多。这么说后他拜托我为他们收集#b200个便宜的电池#k。\n\n#t4000111# #b#c4000111##k/200"]], greeting="我是为了解决玩具城时间塔深处发生的问题，派来的#b#p2040029##k。可是怎么也看不出问题所在。", stage=0, choices=[], picked=null, page=0, closed=false;
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
