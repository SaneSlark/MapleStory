// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3402, 1, "金博士的托付 : 阿哲", ["哼…#b#t4000117##k！！！，我在执行任务中，干粮刚好吃完了，真是幸运啊。可以把那个#t4000117#给我吗？先填饱肚子，再检查#b#t4031100##k也不迟呀。"], "在地球本部的机库里见到了阿哲后给他看金博士的#b新型机器人设计图#k。阿哲说还要把这个设计图给阿海看看。但阿海现在本部外面进行任务。所以要见他还需要#b20个太空食品#k。太空食品从外星人那里能得到嘛。\n\n#t4000117# #b#c4000117##k/20"], [3403, 0, "金博士的托付 : 阿海", ["哎哟…现在好多了。不过确实是惊人的#b#t4031100##k？真想赶快给#b#p2050007##k看看…请去找在野地某处的小子吧。另外请顺便把刚给你的#b#t4031101##k也给他，因为坏了，所以需要给他修理。"], "在地球本部附近见到阿海后交给他设计图和20个太空食品。阿海说他修好了阿亮的光线枪，我去找阿亮的时候顺便把他的光线枪也拿给他。那么我还要去找阿亮啊。"], [3410, 0, "阿海的牙疼", ["哎呀!好痛啊。。。啊。你是曾经带金博士的设计图来的那个人吧？那时候我真感激你。现在你在这里有什么事？最近外星人的攻击越来越频繁，你一定更注意。哎哟~ 这个牙齿损伤得太厉害了。。。", "其实，我非常喜欢吃甜的东西。因此我的牙齿都损坏了。。。但是我现在有任务不能去医院。所以你帮我从地球本部拿1个#b#t2002011##k来吧。有了这个我会好一点。。。", "怎么能得到#b#t2002011##k呢？哼。。。可能在地球本部谁能做或者谁在卖吧？我也不太清楚。。。哎呀。。。太难受了。那么你尽快拿那个药来吧，我忍不住了！"], "在地球本部附近又见到了阿海。看起来他太喜欢吃甜的东西。所以他的蛀牙疼的厉害。他说他需要镇痛剂，在地球本部获取#b镇痛剂#k后要拿给他。"], [3410, 1, "阿海的牙疼", ["啊！你真的拿来了#b#t2002011##k？原来地球本部的#b#p2051000##k卖的吗？无论如何你为我拿来了这个药。我非常感谢你，我想给你一个小礼物。"], "在地球本部附近又见到了阿海。看起来他太喜欢吃甜的东西。所以他的蛀牙疼的厉害。他说他需要镇痛剂，在地球本部获取#b镇痛剂#k后要拿给他。"]], greeting="我是在这里执行任务的地球防御本部的#b#p2050006##k。看起来你象冒险者，虽然你是我们一伙，也不能告诉你我所做的任务。", stage=0, choices=[], picked=null, page=0, closed=false;
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
