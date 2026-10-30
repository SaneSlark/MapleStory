// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3444, 0, "束缚的枷锁", ["啊啊～我正忙着要赶去治疗受伤的灵魂，幽灵的数量越来越多，现在只好求助于我们幽灵猎人了…", "咦…不过…唔？或许我以前跟你说过？我见过很多人…或许我们以前也曾见过面？", "不管怎么说，那个死灵王…好像因为某种枷锁，他的灵魂正受到束缚。听说本来是个蛮可爱的熊木偶呢…", "看到他现在的样子简直就难以想象，是吧？解除束缚他的枷锁，让他找回原来的样子，可以吗？"], "经过玩具城的时间通道时，可在附近见到#p2041026#。他请求我将束缚住#o7130300#的枷锁解除掉，并收集回来。\n\n#t4000148# #b#c4000148#/20#k"], [3444, 1, "束缚的枷锁", ["啊…已经把#t4000148#收集齐了吗？需要至少20个以上才能进行分析，还记得吧？那就让我们看看吧？"], "经过玩具城的时间通道时，可在附近见到#p2041026#。他请求我将束缚住#o7130300#的枷锁解除掉，并收集回来。\n\n#t4000148# #b#c4000148#/20#k"], [3445, 1, "自由的灵魂", ["呵，确实让它们的灵魂获得自由了吗？完成我说的那些数量了吗？"], "经过玩具城下方的时间通道，可在附近见到#p2041026#。他请求我让#o6230500#得到自由，并将其灵魂带来。\n\n#t4000144# #b#c4000144#/100#k"], [3445, 0, "自由的灵魂", ["问我是谁吗？幽灵猎人 巴柏，就叫我巴柏吧。或许你见过在这里出现的怪物？", "你也应该看到了…小熊娃娃们被邪恶的力量操纵着。看到那些小熊娃娃的灵魂受到束缚被操纵的样子，我就…", "所以你想不想让它们的灵魂获得自由，并把那些灵魂带给我呢？"], "经过玩具城下方的时间通道，可在附近见到#p2041026#。他请求我让#o6230500#得到自由，并将其灵魂带来。\n\n#t4000144# #b#c4000144#/100#k"], [3446, 1, "灵魂收集器", ["呃？找回我的灵魂收集器了吗？是那个大海贼偷走的，没错吧？"], "幽灵猎人 巴柏一旦专心吃东西时，就会连自己的东西被别人拿走都不知道。所以，这次灵魂收集器遗失的时候根本也没有发现。就让我来帮助他找回灵魂收集器吧。\n\n#t4031193# #b#c4031193##k/1 \n #o8141000# 消灭 #r#a34461##k"], [3446, 0, "灵魂收集器", ["又是谁！为什么又趁我不注意的时候偷走我的东西？你能不能帮帮我？"], "幽灵猎人 巴柏一旦专心吃东西时，就会连自己的东西被别人拿走都不知道。所以，这次灵魂收集器遗失的时候根本也没有发现。就让我来帮助他找回灵魂收集器吧。\n\n#t4031193# #b#c4031193##k/1 \n #o8141000# 消灭 #r#a34461##k"]], greeting="哼… 精神集中!", stage=0, choices=[], picked=null, page=0, closed=false;
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
