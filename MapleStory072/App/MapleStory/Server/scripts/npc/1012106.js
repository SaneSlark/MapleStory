// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2062, 0, "明明女士的第一个担心", ["你好。我是#b#p1012106##k。嗯？你说我为什么这忙？其实我们村的节日快到了。要准备得东西太多，但没有人帮我。你会不会帮我？"], "在射手村见到了明明女士. 她拜托我帮她收集为村落庆典准备用的材料.\n\n#t4000037#  #b#c4000037##k / 50\n#t4000010#  #b#c4000010##k / 20\n#t4000002#  #b#c4000002##k / 100"], [2062, 1, "明明女士的第一个担心", ["哟。。。很感谢你为我收集了这么多东西。现在我才可以装饰我们村落。但我要做的还没结束。希望你以后有空再来帮我。"], "在射手村见到了明明女士. 她拜托我帮她收集为村落庆典准备用的材料.\n\n#t4000037#  #b#c4000037##k / 50\n#t4000010#  #b#c4000010##k / 20\n#t4000002#  #b#c4000002##k / 100"], [2063, 0, "明明女士的第二个担心", ["哎。。。你又来了。你收集来的装饰品已经被妥善处理。我们村落的节日快到了，但现在又有新的问题。怎么样？想听我说说吗？"], "我又见到了明明女士. 她这次拜托我收集节日大餐的材料.那是#b20个猪头,60个三眼章鱼触角, 一个胡小姐的特制酱油#k.为了得到特制酱油,我要去魔法密林附近找胡小姐."], [2076, 1, "胡小姐的特制酱油", ["你回来了。很辛苦吧？因为要做节日菜，我也很忙啊。看来你确实收集齐了#b20个#t4000017#,60个#t4000006#和一个#t4031154##k啊。我果然还是有眼力啊！"], "我在魔法密林附近的胡小姐那里收到了特制酱油。那我要把这个酱油和20个猪头，60个三眼章鱼触角给明明女士。\n\n猪头 : #c4000017#/20\n三眼章鱼触角 : #c4000006#/60\n胡小姐的特制酱油 : #c4031154#/1"], [2154, 0, "故事的主人公", ["正忙着准备庆典所以就简单说吧……什么？阿洛伊爷爷？是不是他又闯什么祸了？哎……虽说健康但经常出海且闯祸……", "他在哪儿就不清楚了。因为他喜欢到处冒险……不过最近有封来信，要不把信里的近况告诉您吧。"], "根据亚华的话，去找明明女士询问了关于蜗牛传说的作者阿洛伊的情况。明明女士说在她快乐的爷爷最近的信中提到了#b魔法密林的妖精维英#k，建议去找找维英。"], [2184, 1, "黑巴克的忧虑", ["已经从黑巴克那里听说了。呼~我最近都在准备庆典实在是很忙，如果不是老朋友的话就拒绝了……"], "黑巴克说想把满是心意的漂亮礼服作为凯琳的生日礼物送给她。他将礼服的制作任务交给了生活在射手村的老朋友明明夫人，但是缺少雪白的布料。如果要缝制礼服的话，镶有蕾丝的桌布是最好的……收集40匹桌布去找明明夫人吧。\n\n#i4000035##t4000035#  #b#c4000035#/40#k"], [2185, 0, "为了凯琳准备的礼服", ["喏~这个基本的框架事先都做好了，所以很快就能做完了。你能把这件礼服转交给黑巴克嘛？也转告他以后会大方的拿小费的。呵呵呵~"], "漂亮精致的礼服完成了。真是漂亮呢？得赶紧带给#b黑巴克#k啊。"]], greeting="村里的庆典活动就要开始了，可人手还是不够啊。这样我不得不求助于外来人。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
