// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3645, 1, "黄色鬼怪的希望", ["嘿嘿！好香啊！弄来猪肉串了！好棒好棒！那我就告诉你九尾狐的事儿！"], "黄色鬼怪说帮忙找他喜欢的#b猪肉串#k #b1个#k就可以提供九尾狐的信息。去那个村庄找一下猪肉串吧。\n\n#i2022050##t2022050#  #b#c2022050##k/1"], [3645, 0, "黄色鬼怪的希望", ["害怕。怕黑夜。更怕巨大的响声。打雷的声音是世界上最可怕的声音。还没找到雷雨交加的那个晚上丢失的鬼怪棒？嗯？人类怎么在这儿？", "别喊！人类喊叫声音也烦的可怕！特别是女人的声音！太……太可怕了！嗯？知不知道九尾狐？当然知道了……你想知道有关#r九尾狐#k的事儿？"], "黄色鬼怪说帮忙找他喜欢的#b猪肉串#k #b1个#k就可以提供九尾狐的信息。去那个村庄找一下猪肉串吧。\n\n#i2022050##t2022050#  #b#c2022050##k/1"]], greeting="嗯嗯～ 好饿啊，直接吃掉人类？", stage=0, choices=[], picked=null, page=0, closed=false;
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
