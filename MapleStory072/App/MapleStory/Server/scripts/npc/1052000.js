// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2014, 0, "阿勒斯的拜托", ["嗯…喂!听我说。几天前因为实在受不了我爸爸，我就离家出走了。所以这样彷徨在这#m103000000#里。但是这样的生活也越来越无聊了...在家拿来的钱也都快花完了…现在想起来好像离家出走的错的。", "但我不能这样就回去... 麻烦你好好说服一下我爸爸好让我回家好吗？如果我就这样回家，肯定被爸爸打扁的。我知道你很忙,可你一定要帮帮我呀。"], "在废弃都市见到了叫阿勒斯的男孩子。他说几天前因为和严历的父亲闹别扭他离家出走了，此后就在废弃都市游荡。现在不但钱也都花光了，而且已经觉得无聊了... 但是现在回家可能父亲要打他…他拜托我说服射手村的长老(他父亲)同意他回家。他还说如果我成功说服他父亲，就拿着母亲的遗物-#b金表#k过来，他才可以相信。我不知道他为什么离家出走~！"], [2016, 1, "母亲的金表", ["啊！你真的说服我爸爸了？真是难以相信。我爸爸可是老顽固啊？你真了不起啊！！！ 啊。。。现在我终于可以结束流浪的生活了。太谢谢你了。", "啊...这#t4001003#肯定就是我妈妈的遗物...呼。。。应该妈妈健在的时候多尽点孝道，现在妈妈去世了后悔也没有用啊…对了,既然你帮了我的忙…虽然不是贵重的物品,请你一定要手下来！"], "他比我听说的更严格。但是他和阿勒斯之间的误会终于解决了。而且收到了阿勒斯母亲的#b金表#k。"]], greeting="离家出走已经过了一个多月了。。。也累了。想回家还下不定决心。", stage=0, choices=[], picked=null, page=0, closed=false;
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
