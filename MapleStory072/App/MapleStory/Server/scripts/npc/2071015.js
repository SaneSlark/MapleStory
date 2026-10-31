// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3646, 1, "绿色鬼怪的希望", ["哇啊～荞麦蒟蒻看起来好好吃哦！嫩嫩的还很劲道，味道太棒了！好！我就告诉你九尾狐的事儿吧。"], "绿色鬼怪说帮忙找他喜欢的#b荞麦蒟蒻#k #b1个#k就可以提供九尾狐的信息。去那个村庄找一下荞麦蒟蒻吧。 \n\n#i2022051##t2022051#  #b#c2022051##k/1"], [3646, 0, "绿色鬼怪的希望", ["噢噢！为什么会有人类在这里！难道是来和我摔跤的？！如果是摔跤，随时欢迎！特别是在清风明月的夜里摔跤是最好的！那么，来一盘吧！嗯……？和九尾狐摔跤？", "什么？不是来摔跤的？这这！我以为就是来和我摔跤呢！也是……　你的身体太单薄了，不适合和我摔跤。那你来这儿干嘛？什么？想了解九尾狐？"], "绿色鬼怪说帮忙找他喜欢的#b荞麦蒟蒻#k #b1个#k就可以提供九尾狐的信息。去那个村庄找一下荞麦蒟蒻吧。 \n\n#i2022051##t2022051#  #b#c2022051##k/1"]], greeting="去老虎谷吗，去月亮谷吗？哪儿有会摔跤的人呢～", stage=0, choices=[], picked=null, page=0, closed=false;
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
