// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2073, 0, "卡米拉的玻璃珠", ["我有一个朋友叫#b#p1012107##k。我们从小一起成长的。几天后是#p1012107#的生日。所以我送他礼物，礼物是#b#t4031156##k。", "但是有了问题。最近好像农场的工作很忙，#p1012107#很长时间没来了村落，我不能送他礼物。我也想我自己去。。。但我很可怕尤塔农场的#o1210101#。如果你有空能不能替我送#p1012107#这个礼物？"], "在射手村见到了#p1012108#. #p1012108#拜托我替她把#b#t4031156##k带去给#b#p1012107##k.#m900000000#位于#m100030000#的附近…"], [2099, 0, "卡米拉遗失的信", ["该怎么办呢？我把重要的信给弄丢了，是树林里爱捣蛋的#r风独眼兽#k拿走了我的信。那封信是住在远方村庄的笔友寄给我的…该怎么办呢？请帮我把信找回来吧，呜呜…"], "卡米拉远方朋友的来信被森林里那些爱捣蛋的风独眼兽偷走了。答应了流着泪向我请求的卡米拉，帮她把信找回来。可是那些爱捣蛋的风独眼兽都藏到哪儿去了呢？\n\n#t4031239#  #b#c4031239##k / 1"], [2099, 1, "卡米拉遗失的信", ["把信找回来了啊！！哇，真是非常感激您！我还以为再也拿不回来了呢。"], "卡米拉远方朋友的来信被森林里那些爱捣蛋的风独眼兽偷走了。答应了流着泪向我请求的卡米拉，帮她把信找回来。可是那些爱捣蛋的风独眼兽都藏到哪儿去了呢？\n\n#t4031239#  #b#c4031239##k / 1"], [2100, 0, "前往童话村的两个方法", ["天啊…是个坏消息，朋友说以后可能无法再写信给我了。到底发生了什么事情呢？难道出了什么事吗？信里没有说理由…好担心啊。那个…对了，您喜欢到远方旅行吗？我想知道朋友到底发生了什么事情，您可以去一趟我朋友的村庄吗？"], "笔友寄给卡米拉的信中内容写着，以后可能无法再写信给她。卡米拉担心朋友发生了意外，请求我前往她朋友居住的地方，去探望那个朋友。"], [2101, 1, "由天空之路前往童话村", ["给您飞船的票..现在可以免费乘坐.请您旅途愉快。"], "接受卡米拉的请求，决定由天空之路前往童话村，去找卡米拉住在那里的笔友-小荳。卡米拉说要帮我准备几样旅途所需的物品，不知是什么呢？"], [2101, 0, "由天空之路前往童话村", ["您做好旅行的准备了吗？"], "接受卡米拉的请求，决定由天空之路前往童话村，去找卡米拉住在那里的笔友-小荳。卡米拉说要帮我准备几样旅途所需的物品，不知是什么呢？"], [2102, 1, "由海路前往童话村", ["这是魔法师卷轴和海豚出租车使用券，飞船是免费，所以没有准备票。"], "接受卡米拉的请求，决定由天空之路前往童话村，去找卡米拉住在那里的笔友-小荳。卡米拉说要帮我准备几样旅途所需的物品，不知是什么呢？"], [2102, 0, "由海路前往童话村", ["做好旅行的准备了吗？"], "接受卡米拉的请求，决定由天空之路前往童话村，去找卡米拉住在那里的笔友-小荳。卡米拉说要帮我准备几样旅途所需的物品，不知是什么呢？"]], greeting="你好。我叫卡米拉", stage=0, choices=[], picked=null, page=0, closed=false;
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
