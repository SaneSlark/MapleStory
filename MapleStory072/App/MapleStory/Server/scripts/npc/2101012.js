// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3921, 1, "沙子图团员的请求?! 1", ["……你是？噢噢！是上次那位想忙沙子图团的那位啊！呼呼呼…… 找到#t4000329#了吗？看来是找齐了。呼呼呼……"], "#p2101012#说自己是沙子图团员，需要我帮他找必要的材料，去盗窃王妃的宝物。用#b#t4000329##k制绳子，赶紧去抓#r#o2100102##k吧。\n\n#i4000329# #t4000329#  #b#c4000329##k/30"], [3922, 1, "沙子图团员的请求?! 2", ["噢噢～ 找到#t4000330#了。这些可以制尖锐的毒针。非常感谢。作为沙子图团员，我感谢你。呼呼呼……"], "#p2101012#说盗取王妃宝物时需要毒针，希望可以找到材料#b#t4000330##k。为了沙子图团，赶紧去办吧。 \n\n#i4000330# #t4000330#  #b#c4000330##k/50"], [3922, 0, "沙子图团员的请求?! 2", ["嘘，声音低点。你是上次找来#t4000329#的那位啊…… 上次谢谢你。因为你帮忙，制作的绳子很有用。呼呼呼……", "但是想抢夺王妃的宝物还缺装备。王妃的宝物由运输队守卫，想击退他们的话，需要毒针。你可以帮忙找来材料吗？这都是为了沙子图团。"], "#p2101012#说盗取王妃宝物时需要毒针，希望可以找到材料#b#t4000330##k。为了沙子图团，赶紧去办吧。 \n\n#i4000330# #t4000330#  #b#c4000330##k/50"], [3923, 1, "沙子图团员的请求?! 3", ["快来吧！拿到#t4031578#了吗？噢噢，果然～ 这就是王妃新买的戒子啊，呼呼呼…… 可以卖不少钱了。"], "#p2101012#说这次一定要盗取王妃的宝物，要去#b宫殿#k。不能让王妃发现，得避开王妃和宫殿内的警卫，利用#b宫内的隐蔽的入口#k，小心翼翼地拿来王妃装饰柜中的#b戒子#k。不过之前为什么要做毒针和绳子呢？看起来没什么用哦？\n\n#i4031578# #t4031578#  #b#c4031578##k/1"], [3923, 0, "沙子图团员的请求?! 3", ["噢，原来是沙子图团坚定的支持者啊。我正在等你呢。这次是需要偷王妃的宝物…… 你肯定会帮忙吧？"], "#p2101012#说这次一定要盗取王妃的宝物，要去#b宫殿#k。不能让王妃发现，得避开王妃和宫殿内的警卫，利用#b宫内的隐蔽的入口#k，小心翼翼地拿来王妃装饰柜中的#b戒子#k。不过之前为什么要做毒针和绳子呢？看起来没什么用哦？\n\n#i4031578# #t4031578#  #b#c4031578##k/1"], [3924, 0, "西琳的证词", ["可恶！把好不容易收集的宝物给偷走了…… 绝不轻饶！噢，你来的正好。你偷来的宝物被人偷走了。还没放进洞里，藏在岩石后面的…… 谁是犯人？我倒是在怀疑一个人…… 你想知道吗？"], "#p2101012#说把盗取的宝物藏到了岩石后头，结果被谁给偷走了。据他描述盗走宝物的人是舞姬#p2101000#。去找#b#p2101000##k吧。"]], greeting="怎样才能抢夺王妃的宝物……", stage=0, choices=[], picked=null, page=0, closed=false;
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
