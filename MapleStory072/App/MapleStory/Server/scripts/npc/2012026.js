// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3112, 1, "艾利杰的庭院", ["……如果你是善意的客人，我欢迎你。但如果不是请安静地离开。我不能饶恕任何玷污这圣殿的人……"], "斯皮罗纳说艾利杰的怒火消得差不多了，可以去找#b艾利杰谈谈#k了。据说去天空阶梯2，倒下的柱子后面的#b艾利杰庭院#k，就可以见到艾利杰……"], [3113, 1, "与艾利杰对话", ["击退了影子哦…… 非常感谢。"], "艾利杰说，它刚醒来时发现女神被绑架，一时冲动表达了很强烈的不满。不过及时发现了错误，现在正在反省。不过和这个艾利杰不同，它愤怒瞬间出现的它的#r分身#k却失去理性，还在攻击人们…… 艾利杰请求我击退#b天空阶梯2#k的#r艾利杰#k。\n\n#o8220000# #r#a31131##k"], [3113, 0, "与艾利杰对话", ["人类啊…… 我知道你为什么来找我艾利杰了。你是强大而有勇气的人，你是为了阻止我再伤害他人而来的吧。", "刚醒来时发现女神消失后，我过于愤怒，没能控制住自己…… 不过现在已经知错反省了。以后不会再伤害他人了。但是……", "当只有愤怒的感情支配我的时候，出现了一些#r分身#k们。它们有着和我一模一样的外观和力量，但它们是心中只有愤怒的影子…… 而且因为是影子无法抓住，就把他们关在了#b天空阶梯2#k中……", "再这样下去，他们肯定又会伤及无辜。强大而勇敢的人类，为了我，也为了其他人类，你可以帮我击退那些叫#r艾利杰#k的影子们吗？拜托了。"], "艾利杰说，它刚醒来时发现女神被绑架，一时冲动表达了很强烈的不满。不过及时发现了错误，现在正在反省。不过和这个艾利杰不同，它愤怒瞬间出现的它的#r分身#k却失去理性，还在攻击人们…… 艾利杰请求我击退#b天空阶梯2#k的#r艾利杰#k。\n\n#o8220000# #r#a31131##k"], [3114, 1, "艾利杰的长觉", ["......"], "艾利杰说女神被远古精灵释放之前想睡上一觉，希望我演奏下#b乐器#k让它入睡。演奏女神的竖琴…… 好像不太容易啊？"]], greeting="女神回来之前……", stage=0, choices=[], picked=null, page=0, closed=false;
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
