// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3004, 1, "《上古魔书》作者的后代", ["《上古魔书》作者的后代"], "在冰峰雪域见到了叫#b阿尔克斯特#k的学者。他说他最近在古籍中发现了他很感兴趣的内容。那就是关于在神秘岛某个地方隐藏的#b《上古魔书》#k的内容。《上古魔书》是在古代发生大战时出现的魔法书，但现在已经不知下落了……他还说那本书的作者的后代赫拉住在天空之城，所以我要去天空之城。"], [3006, 1, "赫拉去哪儿？", ["赫拉去哪儿？"], "杰德说赫拉消失的原因可能与被偷的#b母亲的遗物#k有关系。同时告诉我赫拉的保姆有关于它的信息。"], [3007, 0, "一个钥匙", ["你见过冰峰雪域的杰德先生吗？他也不知道吗？哼...你听说过我主人#b母亲的遗物#k吗？在一个漆黑的夜晚，有人偷走那件遗物。从那时候起，她就变的越来越奇怪了。但我也不知道谁偷去了那件遗物。", "你见过冰峰雪域的杰德先生吗？他也不知道吗？哼...你听说过我主人#b母亲的遗物#k吗？在一个漆黑的夜晚，有人偷走那件遗物。从那时候起，她就变的越来越奇怪了。但我也不知道谁偷去了那件遗物。"], "从珥玛那听到了赫拉离家出走前多次说过关于#b老太太#k的内容。但是要获得关于老太太的信息，再要去看杰德。"], [3046, 1, "奈洛的礼物", ["把所有材料都弄来了啊，辛苦了～ 请稍等会儿，马上就为您做出手镯。"], "她告诉了我说服艾利逊的方法，那就是帮艾利逊的猫咪制作礼物，所以决定制作星月手镯当作礼物给他。\n\n #t4000059# #b#c4000059##k/100 \n #t4000060# #b#c4000060##k/80"], [3046, 0, "奈洛的礼物", ["您正在寻找食人花汁吗？那个只有艾利逊才会做。", "艾利逊说要和自己的猫一起玩所以没空吗？嗯... 这么办怎么样？就是做一个送给猫的小礼物带过去。这样的话艾利逊也会因为感激为您制作食人花汁的～"], "她告诉了我说服艾利逊的方法，那就是帮艾利逊的猫咪制作礼物，所以决定制作星月手镯当作礼物给他。\n\n #t4000059# #b#c4000059##k/100 \n #t4000060# #b#c4000060##k/80"], [3048, 1, "珥玛香甜可口的食人花果汁", ["珥玛香甜可口的食人花果汁"], "听说珥玛可以做出好吃的食人花果汁。为此要收集一些材料... \n\n #t4031201# #b#c4031201##k/1 \n #t2022039# #b#c2022039##k/1 \n #t4000136# #b#c4000136##k/20"], [3048, 0, "珥玛香甜可口的食人花果汁", ["您好啊~ 原来是上次那位啊~ 得到#b食人花汁#k了啊！您看，我说过给奈洛礼物的话艾利逊就会为您做#b食人花汁#k的吧~ 现在要做#b食人花果汁#k了吗？"], "听说珥玛可以做出好吃的食人花果汁。为此要收集一些材料... \n\n #t4031201# #b#c4031201##k/1 \n #t2022039# #b#c2022039##k/1 \n #t4000136# #b#c4000136##k/20"], [3050, 0, "阿尔冯丝的微笑", ["喏！终于~ 经过一番辛苦把#b食人花果汁#k做出来了~ 快去找正在苦苦等你的#b阿尔冯丝小绿#k吧~", "送过去的时候小心一点，别把#b食人花果汁#k弄丢了～"], "帮阿尔冯丝小绿找到了他一直想要喝的食人花果汁。"], [3079, 1, "遗失的食人花果汁", ["给你，千万小心不要再弄丢了。我这里剩下的#b食人花果汁#k也已经没有多少了..."], "为了再得到遗失的食人花果汁，找到了珥玛。"], [3079, 0, "遗失的食人花果汁", ["我好不容易做好的#b食人花果汁#k，现在却弄丢了？"], "为了再得到遗失的食人花果汁，找到了珥玛。"], [3090, 0, "珥玛借走的喷雾器2", ["啊！在这里。不好意思，这么晚才还...请替我跟斯皮罗纳说声对不起。因为太忙了，所以忘记了。"], "我从珥玛那里拿回 #t4031308#， 时间所剩无几，快回到 #p2032001#家吧。\n\n#t4031308#  #b#c4031308##k / 1"]], greeting="主人突然离家出走已经好几个月了。虽然挺悠闲的，可是好几个月没开工资了。。。这样下去会不会连工资都没有，就换房主了？", stage=0, choices=[], picked=null, page=0, closed=false;
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
