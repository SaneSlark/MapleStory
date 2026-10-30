// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2014, 1, "阿勒斯的拜托", ["阿勒斯的拜托"], "在废弃都市见到了叫阿勒斯的男孩子。他说几天前因为和严历的父亲闹别扭他离家出走了，此后就在废弃都市游荡。现在不但钱也都花光了，而且已经觉得无聊了... 但是现在回家可能父亲要打他…他拜托我说服射手村的长老(他父亲)同意他回家。他还说如果我成功说服他父亲，就拿着母亲的遗物-#b金表#k过来，他才可以相信。我不知道他为什么离家出走~！"], [2015, 0, "说服长老斯坦", ["想跟我说说话？我是这个村落的长老，没有时间跟你这样的小家伙聊天。实在想跟我聊聊，就帮我收集守护村落所需的物品吧。如果你给我收集#b#t4000007# #e50个#n#k和 #b#t4000002# #e100个#n#k，说不定到时候我有时间…"], "在射手村公园入口前面见到阿勒斯的父亲斯坦长老。第一次他好凶，我一句话也说不上。但我收集来为维修村落需要的#b50个火独眼兽之尾和100个猪猪的蝴蝶结#k。\n\n#t4000007# #b#c4000007##k/50\n#t4000002# #b#c4000002##k/100"], [2016, 0, "母亲的金表", ["这只表很贵重，千万不要弄丢啊。我想#p1052000#肯定在#m103000000#？他在什么地方我还是能够猜得到阿。那拜托你了，千万保重自己啊。"], "他比我听说的更严格。但是他和阿勒斯之间的误会终于解决了。而且收到了阿勒斯母亲的#b金表#k。"], [3400, 0, "长老斯坦的信件", ["哦。。。我正好要找个像你这样的年轻人。其实我们村的居民拣到了一封看起来非常危险的信。我想把这封信件快点给原来的主人。所以我想拜托你把这封信件送回去。"], "射手村的长老斯坦给我一封信件，拜托我去地球本部把信送给金博士.听说要去地球本部我先要去天空之城,然后要去玩具城…"]], greeting="这个可恶的臭小子。。。！那家伙。。。连我的话都不听离家出走了。气死我了。。。！回来了也不让他进家门一步。。。！坏家伙！！！看你还敢回来。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
