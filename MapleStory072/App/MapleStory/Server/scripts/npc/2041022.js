// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2074, 1, "找回冒险岛古书", ["哈哈哈。你找我这个玩具城的好男人有什么事？没有什么事就快走吧。嗯？你的书不是冒险岛古书吗？你怎么带着本书？稍等。你稍等。来这里吧。"], "射手村的#p1012109#拜托我找纪录冒险岛历史的 #t4031157#, #t4031158#, #t4031159#后给玩具城的#b#p2041022##k。#t4031157#可能在开往天空之城的船里有，#t4031158#在大魔法师汉斯的家里有，#t4031159#是玩具城的小恶魔抢走了。。。"], [2075, 0, "找回冒险岛古书2", ["你来啦，上次我来不及准备没给你#t4031160#。我现在要给你，可以吗？"], "我找三本冒险岛古书后给#p2041022#了。他给我#t4031160#说。我要再去见#b#p1012109##k。。。"], [3245, 1, "打倒玩具塔的蜘蛛", ["抓到#o2230103#和 #o2230104#了? 呵呵,好啊! 只要没有这些家伙，就能够顺利降落在玩具塔了。 辛苦了。 我会向陛下禀报你的功绩。"], "#p2041022#奉旨要到#m221000000#宣达国王的命令。 但他却在犹豫中... 要到#m221000000#就必须通过玩具塔, 但因为里面有蜘蛛，使他无法从玩具塔通过. 真是没办法。为了#p2041022#帮他打倒 #r#o2230103##k和 #r#o2230104##k #r各20只#k吧。   \n\n#o2230103# #r#a32451##k   \n#o2230104# #r#a32452##k "]], greeting="我是玩具城之王的忠臣，士官提甘。我们国王很信任我。哼哼。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
