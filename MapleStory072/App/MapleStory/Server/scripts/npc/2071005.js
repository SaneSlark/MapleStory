// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3601, 0, "兄弟俩的稻米搬运1", ["你好啊，第一次见面，应该是外地来的吧。我和生活在这个村庄的弟弟一起种田生活，不久前有了收成。可是有件事让我挂心，虽然把收成的#t4031229#和弟弟平分了，事后想想弟弟的子女比我还要多...", "很想给弟弟分更多#t4031229#，可是他一定不会收的。你可以帮我个忙，把一个#t4031229#悄悄放在弟弟家前面的稻米堆里吗？我的弟弟七南就住在村子的最东边。"], "住在童话村的七诚和七南是两兄弟。七诚说弟弟七南的粮食好像不够，托我把自家的一堆稻米悄悄拿到弟弟家前面的稻米堆中。"], [3603, 0, "兄弟俩的稻米搬运3", ["没有被弟弟发现吧？可是不知为什么稻米堆好像没有减少呢。你不觉得吗？请再往七南家跑一趟吧。"], "七诚觉得稻米堆好像没有减少，托我再将#t4031229#拿给弟弟。"], [3605, 0, "兄弟情深", ["啊！那个稻米是怎么回事？不是让你放到弟弟家的吗，怎么又拿回来了呢？什么？！是弟弟拜托你的？啊... 弟弟考虑的真多，也许…因为那样稻米才会一直没有减少吧。", "为了我们兄弟，让你辛苦了。因为这件事情我们兄弟的感情也更加深厚了。现在弟弟也应该发现了吧，那就麻烦你最后再去一趟我弟弟七南家看看吧。弟弟也一定想感谢你呢。"], "在帮七诚和七南悄悄搬运稻米时被七诚发现了。七诚说这让他们兄弟俩的感情更加深厚了，非常感激我。他说七南现在大概也已发现这件事，要我去弟弟那里看看。"], [3612, 1, "七诚的猪肉串", ["真的弄来了啊？既然弄来了捣米棒，那就请收下这猪肉串吧。"], "因为听说童话村的七诚做的猪肉串最好吃，就去找到了他，他说只要我能拿给他月妙的臼锤5个和1000金币，就给我好吃的猪肉串。\n\n#t4000169# #b#c4000169##k/5"], [3624, 1, "友爱的两兄弟童话书", ["从七南那里听说了，您要帮我们找老鼠陷阱吗？突然出现了好多老鼠，正伤脑筋呢。老鼠陷阱拿来了吗？"], "赫丽奥斯塔图书馆的管理员威兹托我为他带来#b#t4031237##k。以前帮助七诚、七南兄弟之后有收到过这样东西，可是现在却找不到了。找到七南并说明了情况后，他说只要给哥哥带去#b#t4000095# 5个#k就会再给我童话书。\n\n#t4000095# #b#c4000095##k/5"], [3642, 1, "七诚的请求", ["有头绪吗？嗯……这个？从三尾狐那儿拿到的衣角？狐狸山坡周边太危险了应该没人去才对啊，到底是谁的衣角呢……"], "去找七诚问问七南所说的狐狸吧。他讲了一些关于生活在乌山的三尾狐。如七诚所说，也许抓到三尾狐之后可以找到一些线索，去抓#r 三尾狐#k吧。 \n\n#t4031790# #b#c4031790##k/1\n\n"], [3642, 0, "七诚的请求", ["七南怎么样了？希望他快点好起来……什么？说着狐狸？狐狸……难道七南被乌山的三尾狐袭击过？想起来了！前不久，七南到乌山砍过柴……", "不过还没听说有人因为三尾狐变成这样的传闻啊。想不通。如果方便，您能否去一趟乌山查个清楚呢？或许能有点线索……"], "去找七诚问问七南所说的狐狸吧。他讲了一些关于生活在乌山的三尾狐。如七诚所说，也许抓到三尾狐之后可以找到一些线索，去抓#r 三尾狐#k吧。 \n\n#t4031790# #b#c4031790##k/1\n\n"], [3647, 0, "回魂", ["您来了！去过山神那儿了吗? 了解到七南为什么会变成这样了吗？啊……原来是被九尾狐袭击所致的啊……所以啊！像最近狐狸嚎叫地厉害，早就叮嘱他不要上乌山……他就是不听！那有没有治的方法……", "啊,幸亏连治疗的方法也一起讨到了。什么？要弄到九尾狐的尾巴？怎么能从九尾狐那种妖怪身上弄尾巴呢……冒险家……您能帮我弄九尾狐的尾巴吗？ "], "我把解救被九尾狐夺去魂魄的七南的方法告诉了七诚，他起初很高兴，但很快又叹气了。因为以他之力，无法夺取九尾狐的尾巴…… 替七诚击退#r九尾狐#k并拿回#b九尾狐的尾巴#k吧！  \n\n九尾狐 #r#a36471##k \n#i4031793##t4031793#  #b#c4031793##k/1"]], greeting="喔喔…你是外地人啊？很高兴认识你喔！", stage=0, choices=[], picked=null, page=0, closed=false;
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
