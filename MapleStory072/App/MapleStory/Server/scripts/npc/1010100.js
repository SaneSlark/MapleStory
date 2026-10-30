// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2021, 0, "特制烤鳗鱼的秘密", ["#p1061004#让你来这里的吗？呼呼~ 不知道#p1061004#这个家伙，是不是又惹事生非了？他想吃#b高级烤鳗鱼#k？！很容易，你稍等。", "哎？烤鳗鱼的最重要的材料#b#t4000013##k和#b#t4000017##k不够了，没有这些材料怎么做菜呢？呵呵~  这就是秘密。你不要跟#p1061004#说。明白了吧？", "现在烤鳗鱼的材料不足。不好意思，你可不可以帮我收集材料呢？你能来拿#b50个#t4000013##k和#b5个#t4000017##k的话，我就能做#b高级烤鳗鱼#k。"], "为获得特制烤鳗鱼和新鲜的牛奶都需要不少材料。射手村的丽娜说为了做烤鳗鱼需要#b50个风独眼兽之尾和5个猪头#k。魔法密林的妖精罗雯说,如果我给她冶炼#b钻石#k的话，她也可以给我新鲜的牛奶。钻石？那么贵重的东西我在哪里能得到呢？"], [2021, 1, "特制烤鳗鱼的秘密", ["你都收集齐那些材料啦！我想只有你能收集完。好~ 稍等一会儿吧。我，丽娜马上做#b高级烤鳗鱼#k给你。", "好！做完了。#b高级烤鳗鱼#k出炉了。快点给#p1061004#吧，否则菜要凉了。这就是#p1061004#最喜欢吃的菜。"], "为获得特制烤鳗鱼和新鲜的牛奶都需要不少材料。射手村的丽娜说为了做烤鳗鱼需要#b50个风独眼兽之尾和5个猪头#k。魔法密林的妖精罗雯说,如果我给她冶炼#b钻石#k的话，她也可以给我新鲜的牛奶。钻石？那么贵重的东西我在哪里能得到呢？"], [2044, 1, "找回红色披风", ["找回红色披风"], "在射手村的公园里又见到了皮亚，她还穿着那件奇怪的衣服。她说这次她的朋友决定去冒险，所以她想为朋友准备拳套！但是为了做拳套需要#b15个银，50个龙皮，40个螺丝钉#k。。。 尤其她拜托我找回射手村的丽娜借去的#b红色披风#k。要是我拿给她这些东西，她肯定会好好报答。"], [2045, 1, "皮亚借的物品", ["皮亚借的物品"], "射手村的丽娜说那披风原来是因为皮亚没还给她借去的物品所以，她才保留了披风。如果我替皮亚还给她皮亚借过去的物品，她就给我披风...皮亚借去的物品是#b1个黑水晶，1个古代的卷轴，30个月牙牛魔王的角#k…\n\n#t4021008# #b#c4021008##k/1\n#t4000028# #b#c4000028##k/30\n#t4001005# #b#c4001005##k/1"], [2045, 0, "皮亚借的物品", ["你好~ 今天天气真好。什么？你要拿我从#p1012102#借的#b#t4031043##k来了吗？ 哼...有点儿问题。其实这不是我借来的,是#p1012102#先借去了我的一些贵重的东西，拿这个披风做抵押的。所以我不会给你这个披风。", "哼~ 如果这个东西对你那么重要的话，还有一个办法。要是你替#p1012102#还给我她借的物品，我也可以给你这#b#t4031043##k。怎么样？你想替她还东西吗? #p1012102#借的物品可是非常贵重的哦~"], "射手村的丽娜说那披风原来是因为皮亚没还给她借去的物品所以，她才保留了披风。如果我替皮亚还给她皮亚借过去的物品，她就给我披风...皮亚借去的物品是#b1个黑水晶，1个古代的卷轴，30个月牙牛魔王的角#k…\n\n#t4021008# #b#c4021008##k/1\n#t4000028# #b#c4000028##k/30\n#t4001005# #b#c4001005##k/1"], [2046, 0, "为朋友的礼物", ["哎呀！你真的收集完了！真了不起！按照约定，给你#b#t4031043##k。其实有点可惜，这个也是挺好做的，对我很有用了（现在不能取消。。。）啊，你快收下吧！"], "给丽娜#b1个黑水晶，1个古代的卷轴，30个月牙牛魔王的角#k后收到了皮亚的#b红色披风#k。除了这披风，还要收集#b15个银，50个龙皮，40个螺丝钉#k给皮亚。\n\n#t4000030# #b#c4000030##k/50\n#t4003000# #b#c4003000##k/40\n#t4011004# #b#c4011004##k/15\n#t4031043# #b#c4031043##k/1"]], greeting="这个村落是很久很久以前，周游世界的弓箭手们聚集而形成的。气候也暖和，很少有怪物出没，是一个好地方。去找在村落中心的#r#p1012100##k吧。你想转职成为弓箭手对吧。。。他会帮助你的。什么？你还不知道#r#p1012100##k是谁吗？他是在很久以前，在战火里拯救我们村落的英雄。现在这里非常和平宁静，再也没有战争了。是一位了不起的人。", stage=0, choices=[], picked=null, page=0, closed=false;
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
