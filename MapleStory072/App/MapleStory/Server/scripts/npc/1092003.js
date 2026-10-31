// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2165, 1, "王子的请托", ["谢谢你。觉得力量又回来了。咿呀！"], "听说诺特勒斯号下层的走廊上有一只受伤的海豚。看起来伤口并不深……但是海豚怎么会在没有水的地方出现呢？\n\n#i2000006##t2000006#  #b#c2000006# / 1#k"], [2165, 0, "王子的请托", ["那……那个……如果不忙的话能帮帮忙吗？啊，~求求你"], "听说诺特勒斯号下层的走廊上有一只受伤的海豚。看起来伤口并不深……但是海豚怎么会在没有水的地方出现呢？\n\n#i2000006##t2000006#  #b#c2000006# / 1#k"], [2166, 1, "闪亮之石", ["哦……刚才感受到了闪亮之石的力量啊。怎么样？是不是觉得全身都注入了一股力量？"], "诺特勒斯号移动的力量据说就是神秘的闪亮之石……多么神奇？所谓的闪亮之石是什么呢？去#b诺特勒斯号#k的动力室看看吧。"], [2168, 1, "以吸食大海的精气生存的萤火2", ["啊~终于带回来了！现在诺特勒斯号又能明亮起来了。"], "从妙斯那里拿到了装满大海的精气的魔法之瓶。得趁着诺特勒斯号还没陷入黑暗之前，赶紧把这个带给#b谢拉王子#k！\n\n#i4031842##t4031842# #b#c4031842##k / 1"], [2169, 0, "硕大的珍珠", ["啊！是以前接受我委托的人啊。还是很抱歉，能不能再拜托你一次？"], "谢拉王子说很早之前他把#b动力室#k的#b珍珠贝壳#k打开了。现在他把#b硕大的珍珠#k带在身边，他请求我代替他把珍珠带给凯琳。为什么要把珍珠给凯琳呢？在去的路上，不能忘记谢拉王子曾经叮嘱要小心#b木拉特#k！ \n\n#i4031843##t4031843# #b#c4031843##k / 1"]], greeting="我是维尔族王子谢拉。", stage=0, choices=[], picked=null, page=0, closed=false;
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
