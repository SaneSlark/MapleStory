// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3401, 1, "金博士的托付 : 新型机器人设计图", ["哼…原来这就是#b#p2050001##k用几个月时间，辛苦完成的新机器人#b#t4031100##k。哼…这里还设置有用瞳孔检查内容的保安装置，还是地球防御总部最高权威呀？那现在开始检查内容吧…"], "在地球本部司令室见到了金博士。他拜托我替他拿新型机器人的设计图给阿哲，阿海，阿亮看。首先我要去找#b在机库的阿哲#k。"], [3402, 0, "金博士的托付 : 阿哲", ["哦哦哦！这非常惊人！竟然能设计出如此先进的机器人…！比想象中更出色！！那现在把#b#t4031100##k，找到地球防御总部外部野地的#b#p2050006##k，让他看看吧。那小子看了之后，会大吃一惊的。", "哎呀…#b#p2050006##k家伙…因为执行特殊任务，到外面已经一段时间了，预估干粮也差不多吃完了，所以请收集击倒路上的外星人#b#o4230116##k后，就可以获得#b#t4000117##k 20个，会有好处的，那拜托了~！"], "在地球本部的机库里见到了阿哲后给他看金博士的#b新型机器人设计图#k。阿哲说还要把这个设计图给阿海看看。但阿海现在本部外面进行任务。所以要见他还需要#b20个太空食品#k。太空食品从外星人那里能得到嘛。\n\n#t4000117# #b#c4000117##k/20"], [3409, 0, "都滚斯本部的位置", ["哼...大事不好了…听说受到外星人侵略的人之中，有人不顾他们自身的安全去投靠外星人…如果这是真的，将是一件很严重的事，想拜托你这样优秀的人才，可以再帮我们一次吗？"], "在地球本部机库又见到了阿哲。他拜托我找都滚斯本部的位置。那是信仰外星人的人们建造的秘密本部。我要在地球本部附近找到都滚斯本部后，在那里找一个箱子。然后拿#b都滚斯报告书#k拿给阿哲。"], [3409, 1, "都滚斯本部的位置", ["天啊…真的找到#b道棍斯秘密基地#k了。以前只是怀疑而已，那些人投靠外星人，还提供信息，这是真的，大事不妙啊…不管怎么说，已经找到基地，还帮我们拿来#b报告书#k，实在感激不尽。给您一些钱和耳环作为报答吧。"], "在地球本部机库又见到了阿哲。他拜托我找都滚斯本部的位置。那是信仰外星人的人们建造的秘密本部。我要在地球本部附近找到都滚斯本部后，在那里找一个箱子。然后拿#b都滚斯报告书#k拿给阿哲。"]], greeting="呼~也不知道这是多久一次的休息了。连续好多天半夜三更出队了。外星人这些家伙每次都在半夜来捣乱。好好享受一下这得来不易的时间。不能放松警戒！", stage=0, choices=[], picked=null, page=0, closed=false;
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
