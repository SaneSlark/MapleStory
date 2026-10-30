// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3206, 1, "乃米的饭盒", ["哦，哦！就是这个，我女儿包的饭盒啊！要是没有这个，根本就没有办法工作。你帮我拿到这里，真是辛苦你了！由于你的帮忙，我今天才能专心努力工作了。作为回报，给你一些冒险币，虽然并没有多少。"], "玩具城的乃米拜托我带给她的父亲厂长卡胡她准备的餐盒。她说#b厂长卡胡#k可能在玩具厂的某个地方。"], [3210, 0, "工作没问题！", ["哎呀，这是谁呀！不就是我女儿托付带给我饭盒的年轻人吗？托你的福，可以吃上美食。你来的正好，有件事情想请你帮忙，不知你是否愿意帮我忙？"], "玩具城玩具厂的#b厂长卡胡#k拜托我，替他找在玩具塔工作的10个玩具工人的照片，而且一定按照顺序找工人。。。要去玩具塔。"], [3220, 1, "玩具工人10", ["看样子找到在玩具塔整修的10名玩具工人，并拍下他们工作的样子了嘛。小伙子们工作卖力吗？不管怎么说这是不容易的差事，辛苦你了。好，我就给你一个你需要的礼物，请不要拒绝，收下吧。", "这些都是玩具城的#b#p2040022##k，在制作武器时必须的道具。你想要什么样的道具，请你选择吧。"], "找最后的玩具工人后拍了照片。"]], greeting="你好吗？我是管理玩具厂的#b#p2040015##k。今天真忙~", stage=0, choices=[], picked=null, page=0, closed=false;
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
