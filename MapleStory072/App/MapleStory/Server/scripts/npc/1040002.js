// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2104, 0, "潘喜的红色毛球", ["喵~ 看到我会说话是不是觉得很神奇啊？我的名字是#b#p1040002##k ~ 宠物如果和主人不是很亲密的话本来就不会说话的，不过我的主人是生活在这个树林里的妖精。", "所以我身上也有一些魔法能力，我可以按照自己的意志和别人说话，也能把自己的身体变得透明的~ 既然你为了找我特地来到这里，那就帮我寻找一下我遗失的东西吧，喵~"], "在魔法密林里见到了一只猫咪，牠说自己的名字叫做潘喜，是居住在魔法密林里的妖精所养的猫。不久前在森林里玩耍的时候把主人给牠的#b#t4031273##k弄丢了，那是牠最珍惜的东西，拜托我帮它找回来。从#r#o0210100##k身上找回#b#t4031273##k并且是与宠物一起去找的话，会给我一些奖励…\n\n#t4031273# #b#c4031273##k / 1"], [2104, 1, "潘喜的红色毛球", ["喵~ 真了不起~ 这就是我遗失的红色毛线球没错啦~ 真感谢你哦喵~"], "在魔法密林里见到了一只猫咪，牠说自己的名字叫做潘喜，是居住在魔法密林里的妖精所养的猫。不久前在森林里玩耍的时候把主人给牠的#b#t4031273##k弄丢了，那是牠最珍惜的东西，拜托我帮它找回来。从#r#o0210100##k身上找回#b#t4031273##k并且是与宠物一起去找的话，会给我一些奖励…\n\n#t4031273# #b#c4031273##k / 1"], [2223, 0, "他所呼唤的名字", ["有什么事吗？喵呜？是#p1032001#让你来的吗？#p1032001#是主人喜欢的人类！如果他忙到要猫咪帮忙的话，不管怎样我都会帮忙的喵～当然太难的事情不行！喵呜？你想知道黑色的猴子怪物的事情？", "不是说#o4230101#吧？那说的应该是#r#o5220002##k咯，喵呜？嗯……对于那些家伙，我也不太了解。那是些奇怪的家伙，没办法和他们说话喵。只是嘴里一直嘟囔着……艾温，喵呜。", "#o5220002#的背后挂着奇怪的人偶，那个人偶不断地散发着黑暗的力量喵。看起来浮士德#r好像是受到了人偶的操纵#k喵……喵……你想知道关于#o5220002#的事情吗？"], "#p1040002#知道黑色猴子怪物#r#o5220002##k的详细情况。#o5220002#好像和艾温有着某种联系……#p1040002#说如果想了解#o5220002#的详细情况的话，必须帮他从#r#o5300100##k那里搜集一些#b#t4031925##k来给他。\n\n#i4031925##t4031925#  #b#c4031925##k/10 #k"], [2223, 1, "他所呼唤的名字", ["喵呜。#t4031925#搜集到了吗？稍等一会喵。我来帮你找到被诅咒的森林的入口喵。"], "#p1040002#知道黑色猴子怪物#r#o5220002##k的详细情况。#o5220002#好像和艾温有着某种联系……#p1040002#说如果想了解#o5220002#的详细情况的话，必须帮他从#r#o5300100##k那里搜集一些#b#t4031925##k来给他。\n\n#i4031925##t4031925#  #b#c4031925##k/10 #k"], [2224, 0, "怨恨、怨念、冤魂", ["#b#m910100000##k的入口找到了！入口就在#b#m100040105##k喵！在那里有奇怪的#b幽灵#k在操纵#o5220002#，你快去那边看看吧，喵呜！"], "#p1040002#说#m910100000#的入口在#m100040105#。如果想见到潘喜所说的幽灵的话，就去#r#m910100000##k看看吧。但是幽灵好像只在特定的时间出现……据说是在#r下午5点到第二天早上7点之间#k，一定要注意掌握时间。"]], greeting="喵~喵~", stage=0, choices=[], picked=null, page=0, closed=false;
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
