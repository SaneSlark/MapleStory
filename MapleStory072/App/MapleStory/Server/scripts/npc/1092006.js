// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2184, 0, "黑巴克的忧虑", ["哈哈哈~那边的家伙！呼~小时候的小淑女如今都成为大美女啊……真是感动啊~感动！", "这样啊。所以不久之前船员们投票了，这个当选为最佳礼物作为送给凯琳的生日礼物。哈哈~我也是看着这家伙长大，还没见过她穿礼服的样子呢。所以就拜托我的老朋友明明女士，但是……布料不够！你能不能替我去找找看啊？"], "黑巴克说想把满是心意的漂亮礼服作为凯琳的生日礼物送给她。他将礼服的制作任务交给了生活在射手村的老朋友明明夫人，但是缺少雪白的布料。如果要缝制礼服的话，镶有蕾丝的桌布是最好的……收集40匹桌布去找明明夫人吧。\n\n#i4000035##t4000035#  #b#c4000035#/40#k"], [2185, 1, "为了凯琳准备的礼服", ["哈哈~终于来了。赶紧吧礼服给我看看。"], "漂亮精致的礼服完成了。真是漂亮呢？得赶紧带给#b黑巴克#k啊。"]], greeting="男人们的浪漫是大海！女人们的爱也是大海！", stage=0, choices=[], picked=null, page=0, closed=false;
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
