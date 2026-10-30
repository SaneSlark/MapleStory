// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3629, 1, "成为日月的兄妹", ["太阳快要下山了，拜托您的东西都找到了吗？"], "#b#p2071008##k是与母亲和妹妹一起住在童话村的少年，似乎正在焦急地寻找着什么东西。询问之后才得知，原来是前天晚上乌山的老虎趁母亲不在家时来到了村里，威胁要吃掉少年和他的妹妹。所以兄妹两人必须在老虎来到之前先逃跑，但他们需要#b#t4031268# 20个#k。另外不知为什么还需要#r#o2230106##k掉出的#b#t4031269# 1个#k，少年希望我能帮助他们。\n\n#t4031268#  #b#c4031268##k / 20\n#t4031269#  #b#c4031269##k / 1"], [3631, 0, "成为日月的兄妹童话书", ["啊，您是帮助我的那个人。一到晚上老虎就会来这里了，您最好也躲到安全的地方呀。可是为什么来这里呢？有什么话要对我说吗？"], "赫丽奥斯塔图书馆的管理员威兹托我为他带来#b#t4031270##k。以前帮助少年之后有得到过这样东西，可是现在却找不到了。找到少年说明了情况后，他说只要给肚子饿的妹妹买来#b#t2020001# 5个#k，就能给我童话书。\n\n#t2020001#  #b#c2020001##k / 5"], [3631, 1, "成为日月的兄妹童话书", ["谢谢您，妹妹肯定会非常高兴的"], "赫丽奥斯塔图书馆的管理员威兹托我为他带来#b#t4031270##k。以前帮助少年之后有得到过这样东西，可是现在却找不到了。找到少年说明了情况后，他说只要给肚子饿的妹妹买来#b#t2020001# 5个#k，就能给我童话书。\n\n#t2020001#  #b#c2020001##k / 5"]], greeting="我的名字叫小日，跟妈妈和妹妹小月生活在一起。", stage=0, choices=[], picked=null, page=0, closed=false;
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
