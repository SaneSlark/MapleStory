// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3339, 1, "德朗博士的地下书库", ["(一本散落在地上的书。看上去好像没什么特别。但是不知道为什么感觉有些奇怪……？打开看看吗？)"], "跟她说想继续调查关于#p2111002#的事情之后，#p2111004#说只有你才值得相信，然后讲起了从未为人所知的关于#p2111002#的#b地下书库#k的事情。虽然那个地方积满了灰尘，什么东西都没有，但是或许能有什么线索……"], [3340, 1, "秘密书的钥匙", ["（小心翼翼地打开书，把#t4031744#放了进去,竟能与吊坠上雕刻的蔷薇纹样如此吻合，看样子是这本书的钥匙，错不了。）"], "和#p2111004#说起了在地下书库发现的书的事情。说#p2111002#的线索说不定就在书里面……于是向琵丽雅借用一下#t4031744#，她犹豫了一下，把它交给了我。那么，再去#b地下书库#k看看吧。"], [3341, 0, "德朗博士的秘密记事本", ["（重新翻开这本奇怪的书，那其中有一本小小的笔记本。这分明就是#b#t4161031##k……到底要不要带走呢？）"], "在奇怪的书里发现了一件东西。那就是#p2111002#的秘密记事本。看看里面写的是什么内容吧。看一下内容，找到谁是#b#p2111002#最信任的人#k之后，去找找那个人吧。"]], greeting="你好，有什么事吗？", stage=0, choices=[], picked=null, page=0, closed=false;
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
