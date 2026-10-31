// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3644, 1, "蓝色鬼怪的希望", ["嘿嘿！弄到谷茶啦？让我瞧瞧～啊哈！这个香！是下面村庄绿豆家的谷茶吧！好耶好耶！那好我就告诉你九尾狐的事儿。", "九尾狐出没在乌山周边！特别是经常出没在#b月亮山坡#k，狐狸山坡再往深处走就能到了。那边有很多用月光积累道力的三尾狐，所以人类还是少去为妙！"], "蓝色鬼怪说帮忙找他喜欢的#b谷茶#k #b1个#k就可以提供九尾狐的信息。去那个村庄找一下谷茶吧。\n\n#i2022052##t2022052#  #b#c2022052##k/1 "], [3644, 0, "蓝色鬼怪的希望", ["啊嗯。鬼怪乌纱帽放哪儿了？总是记不住！健忘症越来越严重了！啊！对了！上次参加庆典活动被偷了！又忘了！得吓唬吓唬偷走乌纱帽的人类！咦？找回来的乌纱帽又放哪儿了呢？", "嗯？你是人类？人类怎么到这儿来了？要想偷走乌纱帽没门儿！因为我也忘了放在哪儿了……呼呼！什么？想知道 有关#r九尾狐#k的情报？嘿嘿～奇怪的人。真想知道关于九尾狐的事儿？"], "蓝色鬼怪说帮忙找他喜欢的#b谷茶#k #b1个#k就可以提供九尾狐的信息。去那个村庄找一下谷茶吧。\n\n#i2022052##t2022052#  #b#c2022052##k/1 "]], greeting="嗯嗯！最近有很多胆大包天的人。", stage=0, choices=[], picked=null, page=0, closed=false;
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
