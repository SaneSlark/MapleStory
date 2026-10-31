// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3602, 0, "兄弟俩的稻米搬运2", ["是谁啊？听说村里来了外地人，你就是那位外地来的人吧？正好，请你帮我一个忙。我和哥哥住在这个村庄，一起种田。不久前有了收成，两家平分了稻米。可是事后想了想，侍奉父母的哥哥应该多分得一些才对啊。可是他肯定不会收的，你可以帮我悄悄把一个#t4031229#放在哥哥家前面的稻米堆里吗？"], "七南说作为长子的哥哥家应该需要更多的稻米，便从自家的稻米堆中取出一个#t4031229#交给我，托我去放在七诚哥哥家院子里的稻米堆中。"], [3604, 0, "兄弟俩的稻米搬运4", ["没有被哥哥发现吧？可是不知为什么稻米堆好像没有减少呢。你不觉得吗？请再往哥哥家跑一趟吧。"], "七南觉得稻米堆好像没有减少，托我再将#t4031229#拿给哥哥。"], [3605, 1, "兄弟情深", ["欢迎欢迎，其实我也发觉到了。因为稻米一直没有减少，正觉得奇怪，刚刚接到了哥哥的联络。真不知该怎么感谢你啊。"], "在帮七诚和七南悄悄搬运稻米时被七诚发现了。七诚说这让他们兄弟俩的感情更加深厚了，非常感激我。他说七南现在大概也已发现这件事，要我去弟弟那里看看。"], [3613, 1, "七南的荞麦蒟蒻", ["真的弄来了啊？既然弄来了老虎脚印，那就给您荞麦蒟蒻吧，很好吃哦。"], "因为听说童话村的七南做的荞麦蒟蒻最好吃，就去找到了他，他说只要我能拿给他小虎的石板脚印4个和1000金币，就帮我做出荞麦蒟蒻。\n\n#t4000170# #b#c4000170##k/4"], [3624, 0, "友爱的两兄弟童话书", ["是您啊，这段时间过得还好吗？看起来变得更强了哦？哈哈！今天来到这里是因为什么事情啊？看您的表情好像有事情要问我哦？", "把我交给您的童话书弄丢了吗？虽然可以再给您一本，不过不能白白送给您哦。那本书里含有兄弟之间宝贵友情的教训，如果您能为我们兄弟的友情再努力一次，我就把书送给您。"], "赫丽奥斯塔图书馆的管理员威兹托我为他带来#b#t4031237##k。以前帮助七诚、七南兄弟之后有收到过这样东西，可是现在却找不到了。找到七南并说明了情况后，他说只要给哥哥带去#b#t4000095# 5个#k就会再给我童话书。\n\n#t4000095# #b#c4000095##k/5"], [3647, 1, "回魂", ["(七南呆呆地看着天空。用九尾狐的尾巴碰一碰鼻子吧。)", "哎呦！", "哦……　是感冒吗？嗯？你是谁？怎么会在这里？什么？我被狐狸迷惑了？"], "我把解救被九尾狐夺去魂魄的七南的方法告诉了七诚，他起初很高兴，但很快又叹气了。因为以他之力，无法夺取九尾狐的尾巴…… 替七诚击退#r九尾狐#k并拿回#b九尾狐的尾巴#k吧！  \n\n九尾狐 #r#a36471##k \n#i4031793##t4031793#  #b#c4031793##k/1"]], greeting="您好~我叫七南。", stage=0, choices=[], picked=null, page=0, closed=false;
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
