// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2074, 0, "找回冒险岛古书", ["你好。我是这里射手村的长老的儿子#b#p1012109##k。阿勒斯是我弟弟。啊。。。最近我有个麻烦的事情，所以需要有责任感的人。你会不会帮我？"], "射手村的#p1012109#拜托我找纪录冒险岛历史的 #t4031157#, #t4031158#, #t4031159#后给玩具城的#b#p2041022##k。#t4031157#可能在开往天空之城的船里有，#t4031158#在大魔法师汉斯的家里有，#t4031159#是玩具城的小恶魔抢走了。。。"], [2075, 1, "找回冒险岛古书2", ["你回来了。冒险岛古书你安全传给他们了？哦。。。可能#p2041022#给你了#b#t4031160##k？"], "我找三本冒险岛古书后给#p2041022#了。他给我#t4031160#说。我要再去见#b#p1012109##k。。。"], [2153, 1, "古老的蜗牛", ["您好！看样子您好像是个冒险家？需要我帮忙吗？哦，皮亚好像拜托你把书还给冒险家。皮亚也真是的！又不是很远，可以自己做啊。 ", "谢谢把书还给我。冒险家，您对书感兴趣的话随时都可以告诉我。什么？知不知道蜗牛传说的作者？"], "皮亚找到的书是关于冒险岛上最#b古老的蜗牛#k和可以从它身上得到的#b#t2210006##k的内容。了解了蜗牛壳儿可以实现愿望之后，皮亚好像开始寻找相关的信息……书的主人亚华可能知道书的作者是谁，去找他吧。\n\n#i4161035##t4161035# #b#c4161035#/1#k"]], greeting="我非常喜欢射手村。我的目标是让这里变得更加和平安宁。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
