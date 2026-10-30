// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3320, 1, "疯老头知道的事情", ["……您是谁啊？这里是个人研究室……您怎么能随便进来呢……"], "#p2111006#耸了耸肩，一脸头疼的表情，皱起了眉头。在接下去的一瞬间，自己所在的场所不知不觉发生了变化！看上去很熟悉，但是却有点不一样的地方，这到底是在哪里呢？还有，#r那个人#k是谁呢？"], [3353, 1, "德朗博士所希望的", ["啊……您是谁啊？好像是第一次见面……您不能随便到研究室里来……不过我现在心情很好，应该没什么关系。呵呵。"], "询问有关过去的#p2111002#的情况，疯老头一脸欢快地再次把我送到了#p2111002#面前。这一次的#p2111002#，好像是比之前看到的他又过了一段时间之后的#p2111002#……"]], greeting="果然这样才对么…", stage=0, choices=[], picked=null, page=0, closed=false;
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
