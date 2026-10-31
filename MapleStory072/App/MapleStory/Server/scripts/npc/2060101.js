// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3078, 0, "被堵住的深海道路", ["那里的人是谁？是探测队的成员吗？................呃.......原来不是…您是谁呢？怎么会来到深海的？我是探测队的队长邓恩。在这么人迹罕至的地方竟然还能见到其它人，真是难得啊。", "只有您一个人吗？能够独自一人来到这里的话... 或许您能帮助我也说不定，我需要您的帮助。可以听我说一下吗？"], "在#m230040400#之间的失事船里见到了#b#p2060101##k。他正在搜寻失去踪影的队员们。他们是为了调查在深海出现的异象而来到这深海里的。可是有一天其它的队员们都忽然都消失了，更糟糕的是前往深海海底的路被封住了，所以希望我能帮助他寻找队员们的踪迹。在深海四处搜寻一下#b线索之物#k吧。若队员们用过的东西还留在这里的话，会不会是在#b#m230040400##k四处游荡的#b鲨鱼#k们拿走了呢？去找到#b手电筒#k、#b相机#k或#b记事本#k之类物品拿给#b#p2060101##k吧。"], [3078, 1, "被堵住的深海道路", ["找到些什么了吗？我什么都没找到。啊，您手上那些东西好像是队员们身上的物品，可以让我看一下吗？"], "在#m230040400#之间的失事船里见到了#b#p2060101##k。他正在搜寻失去踪影的队员们。他们是为了调查在深海出现的异象而来到这深海里的。可是有一天其它的队员们都忽然都消失了，更糟糕的是前往深海海底的路被封住了，所以希望我能帮助他寻找队员们的踪迹。在深海四处搜寻一下#b线索之物#k吧。若队员们用过的东西还留在这里的话，会不会是在#b#m230040400##k四处游荡的#b鲨鱼#k们拿走了呢？去找到#b手电筒#k、#b相机#k或#b记事本#k之类物品拿给#b#p2060101##k吧。"], [6281, 0, "圣杯的去向", ["到这里有什么事情？来找#b#t4031454##k？#t4031454#的话…好像我在前几天的时候从深海捞出来的东西似的…我前几天在深海捞到了一个金色杯子，那个杯子发出来的光非常神秘。", "如果你需要的话，我会给你的。但是希望你接受我的一个请求…怎么样?"], "在深海途中遇见的#p2060101#说要是去搜集制作探索道具#b#o8150100##k所需的材料 #b#t4000180# 10个#k的话就把探索中得到的#b#t4031454##k给我。\n\n#t4000180#  #b#c4000180#/10#k"], [6281, 1, "圣杯的去向", ["终于回来了，谢谢。这是你想要的东西，对吗？"], "在深海途中遇见的#p2060101#说要是去搜集制作探索道具#b#o8150100##k所需的材料 #b#t4000180# 10个#k的话就把探索中得到的#b#t4031454##k给我。\n\n#t4000180#  #b#c4000180#/10#k"]], greeting="一定要调查深海里到底发生了什么事情…", stage=0, choices=[], picked=null, page=0, closed=false;
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
