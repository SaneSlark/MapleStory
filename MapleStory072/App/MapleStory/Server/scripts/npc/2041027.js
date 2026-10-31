// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3448, 0, "搜集狂麦森", ["散发出神秘光彩的珠子…我确实看到了那神秘的欧洛拉球！！很想收集，我真的很想收集，请替我找来那个珠子吧…"], "口齿不清的搜集狂麦森今天仍热衷于收集物品。他特别喜欢收集那些闪闪发光的东西，他说在扭曲的时间之路发现过欧洛拉球。到底谁会有这东西呢？\n\n#t4031189::# #b#c4031189#/1#k"], [3448, 1, "搜集狂麦森", ["那玄妙的光芒也许会让你深陷其中哦。带来了吗？快让我看看。"], "口齿不清的搜集狂麦森今天仍热衷于收集物品。他特别喜欢收集那些闪闪发光的东西，他说在扭曲的时间之路发现过欧洛拉球。到底谁会有这东西呢？\n\n#t4031189::# #b#c4031189#/1#k"], [3449, 1, "搜集狂麦森Ⅱ", ["带来了吗？真的带来了吗？在哪里？快让我看看。"], "搜集狂麦森看到欧洛拉球之后..想要看看那个珠子的原形。小丑的珠子好像被某种力量改变过.. \n\n#t4031195# #b#c4031195#/10#k\n#t4000129# #b#c4000129#/50#k"], [3449, 0, "搜集狂麦森Ⅱ", ["欧洛拉球已经成了我非常珍贵的收藏品之一。不过那个珠子原来的样子好像不是这样的，如果你能为我带来原来样貌的珠子，我就会给你非常不错的东西。"], "搜集狂麦森看到欧洛拉球之后..想要看看那个珠子的原形。小丑的珠子好像被某种力量改变过.. \n\n#t4031195# #b#c4031195#/10#k\n#t4000129# #b#c4000129#/50#k"]], greeting="想收集的太多!!", stage=0, choices=[], picked=null, page=0, closed=false;
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
