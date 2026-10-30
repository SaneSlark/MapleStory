// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2063, 1, "明明女士的第二个担心", ["明明女士的第二个担心"], "我又见到了明明女士. 她这次拜托我收集节日大餐的材料.那是#b20个猪头,60个三眼章鱼触角, 一个胡小姐的特制酱油#k.为了得到特制酱油,我要去魔法密林附近找胡小姐."], [2064, 1, "胡小姐的拜托", ["胡小姐的拜托"], "在魔法密林附近见到了胡小姐。她要为母亲的生日准备项链。她说要是我给她一个石榴石，就会给我特制酱油。"], [2064, 0, "胡小姐的拜托", ["嗯。。。你到这里有什么事？啊。。。是我的特制酱油吗？是要做节日菜的时候用吗？但这是我母亲给我的，非常贵重的，我不会给别人。。。或者你接受我的委托，我就给你这个。怎么样？"], "在魔法密林附近见到了胡小姐。她要为母亲的生日准备项链。她说要是我给她一个石榴石，就会给我特制酱油。"], [2076, 0, "胡小姐的特制酱油", ["哎。。。这是冶炼好的#b#t4021000##k。有了这个我就把我母亲非常漂亮的项链给你吧。那我把我的特制酱油给你。请请你替我转告她我希望他们庆典圆满成功。"], "我在魔法密林附近的胡小姐那里收到了特制酱油。那我要把这个酱油和20个猪头，60个三眼章鱼触角给明明女士。\n\n猪头 : #c4000017#/20\n三眼章鱼触角 : #c4000006#/60\n胡小姐的特制酱油 : #c4031154#/1"], [3049, 1, "胡小姐的甜蜜果浆", ["把材料都找来了啊～辛苦了，稍等会儿就能做给你了。"], "胡小姐要我帮她收集制作甜蜜果浆所需的材料，她说只要帮她收集材料，就可以制作出香甜可口的果浆。\n\n #t4000029# #b#c4000029##k/60 \n #t2012002# #b#c2012002##k/30 \n #t4000017# #b#c4000017##k/10"], [3049, 0, "胡小姐的甜蜜果浆", ["需要#b甜蜜果浆#k吗？是珥玛叫您来这里的吧？\n奇怪我是怎么知道的吗？因为那种果浆我只有做给她而以啊。", "好的～我会再做给你的～可是需要的材料要您亲自去收集哦～"], "胡小姐要我帮她收集制作甜蜜果浆所需的材料，她说只要帮她收集材料，就可以制作出香甜可口的果浆。\n\n #t4000029# #b#c4000029##k/60 \n #t2012002# #b#c2012002##k/30 \n #t4000017# #b#c4000017##k/10"]], greeting="我姓胡。很喜欢做菜。", stage=0, choices=[], picked=null, page=0, closed=false;
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
