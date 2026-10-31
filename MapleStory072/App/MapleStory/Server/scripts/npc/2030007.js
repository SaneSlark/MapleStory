// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3036, 1, "寻找尼克的痕迹", ["寻找尼克的痕迹"], "受阿尔卡斯特的委托，又找到了当时找古代的书籍时被帮助的猎手斯卡得。 以前被废矿的怪物夺去妻子后他的孩子尼克为打退怪物进入废矿去了可是现在还没有消息…在废矿内部岩浆洞窟内可能有#b尼克遗物戒指#k需要找到……加上承诺儿子要收集100个#b猎犬的尖牙#k…！好像是一段相当艰难的旅程。"], [3037, 0, "尼克的戒指", ["#b#p2030007##k的下面有空隙，里面有个闪耀的东西。你能伸手取那东西给我吗？"], "岩浆洞窟内部在石像碎片下面 找到了好象是尼克的#b戒指#k。在戒指上面写着什么人的名字……斯卡得可能知道吧…\n\n#t4000079# #b#c4000079##k/100\n#t4031060# #b#c4031060##k/1"]], greeting="你好，有什么事吗？", stage=0, choices=[], picked=null, page=0, closed=false;
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
