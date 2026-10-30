// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2085, 1, "寻找妖精维英…", ["寻找妖精维英…"], "为了完成伊卡路斯想要飞向天空的梦想，所以要将魔法密林的妖精维英所制作的飞天药水转交给伊卡路斯。不知道药效如何…"], [2087, 0, "传达飞天药水", ["把这个这样搅一下…把那个和这个混在一起…喏~完成了，拿着。"], "魔法密林的#b妖精维英#k希望将好不容易制作完成的药水转交给伊卡路斯。只要有这个药，伊卡路斯就可以飞上天空了吗？好！那得赶快交给伊卡路斯…"], [2089, 0, "帮忙写作业", ["唔唔…喂，你！你有空吗？没有就算了…想要拜托你一件事情…噢，不，与其说是拜托，我想让你替我做一件事情，有兴趣吗？"], "在魔法密林遇到的维英似乎非常讨厌人类，说要请人帮忙写作业，可是态度怎么会那么差呢？需要帮他收集树枝30个、绿液球30个以及绿水灵珠10个。听说这些是制作药水的材料…话说回来，这是用在哪里的药水呢？\n\n#t4000003# #b#c4000003##k/30 \n#t4000004# #b#c4000004##k/30 \n#t4000010# #b#c4000010##k/10"], [2089, 1, "帮忙写作业", ["都弄来了啊！我得赶紧做完药水再完成别的作业了。喂，人类！多亏了你我才可以完成这些作业，这是我以前做过的药水，对我来说没什么用，就给你吧…"], "在魔法密林遇到的维英似乎非常讨厌人类，说要请人帮忙写作业，可是态度怎么会那么差呢？需要帮他收集树枝30个、绿液球30个以及绿水灵珠10个。听说这些是制作药水的材料…话说回来，这是用在哪里的药水呢？\n\n#t4000003# #b#c4000003##k/30 \n#t4000004# #b#c4000004##k/30 \n#t4000010# #b#c4000010##k/10"], [2154, 1, "故事的主人公", ["嗯？你……是人类？到这儿干嘛？什么？阿洛伊？"], "根据亚华的话，去找明明女士询问了关于蜗牛传说的作者阿洛伊的情况。明明女士说在她快乐的爷爷最近的信中提到了#b魔法密林的妖精维英#k，建议去找找维英。"], [2155, 1, "猎蜗牛", ["蜗牛壳全部拿来了吗?让我看看。一，二，三……好！一个都没落下全部拿来了。你问用在什么地方？因为伊卡路斯说练三只蜗牛技术的时候能用得着，所以我答应帮他弄到。做得不错！"], "妖精维英认识阿洛伊，也了解拥有#r#t2210006#的蜗牛，红蜗牛王#k。她说可以告诉我红蜗牛王的位置，不过得给她找#b蜗牛壳儿#k……\n\n#i4000019##t4000019# #b#c4000019#/10#k\n#i4000000##t4000000# #b#c4000000#/10#k\n#i4000016##t4000016# #b#c4000016#/10#k"], [2155, 0, "猎蜗牛", ["哼~原来你真正感兴趣的是红蜗牛王而不是阿洛伊，不能直接告诉你～要想得到有关 红蜗牛王的信息就得帮我做件事儿。"], "妖精维英认识阿洛伊，也了解拥有#r#t2210006#的蜗牛，红蜗牛王#k。她说可以告诉我红蜗牛王的位置，不过得给她找#b蜗牛壳儿#k……\n\n#i4000019##t4000019# #b#c4000019#/10#k\n#i4000000##t4000000# #b#c4000000#/10#k\n#i4000016##t4000016# #b#c4000016#/10#k"], [3042, 0, "转交神秘的材料", ["喂，那边的！是的，人类... 就是说你！看起来还比较强，想不想变得更强？有兴趣的话就听听我的话。"], "在魔法密林见到了妖精维英，她问我要不要前往全新的世界将自己锻炼的更强大，但妖精维英的目的其实是要我帮他将某样东西转交给住在天空之城的朋友─#b妖精珂丽尔#k。"]], greeting="。。。。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
