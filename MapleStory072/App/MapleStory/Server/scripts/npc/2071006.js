// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3606, 1, "遗失的葫芦种子", ["啊！您手里的正是我丢掉的那个葫芦种子没错！终于找到了啊...! 非常感谢。可是，大事不好了... 我竟然忘记要把葫芦种子送给谁了。因为我有健忘症... 是兴夫还是乐夫呢…"], "在城隍庙附近发现了一只翅膀受伤的燕子。燕子告诉我他遗失了正在递送的宝贵葫芦种子，希望我能替牠找回那个葫芦种子。燕子说在遗失葫芦种子的地方看到过一群行为诡异的兔子，难道是那些兔子们拿走了葫芦种子吗？\n\n#t4031241#  #b#c4031241##k / 1"], [3606, 0, "遗失的葫芦种子", ["哎呀... 我的翅膀断掉了，要找到葫芦种子呀... 求求您帮我…"], "在城隍庙附近发现了一只翅膀受伤的燕子。燕子告诉我他遗失了正在递送的宝贵葫芦种子，希望我能替牠找回那个葫芦种子。燕子说在遗失葫芦种子的地方看到过一群行为诡异的兔子，难道是那些兔子们拿走了葫芦种子吗？\n\n#t4031241#  #b#c4031241##k / 1"], [3609, 0, "燕子遗失的葫芦种子", ["有什么事吗？什么？把葫芦种子弄丢了？怎么可以把那个弄丢了呢！我再给您一个葫芦种子的话，这次就一定能把葫芦种子拿给主人吗？"], "把燕子交给我的葫芦种子弄丢了，再去找一次燕子吧。燕子说牠再去弄来葫芦种子，要我等一下再找牠。"], [3626, 1, "兴夫乐夫童话书(兴夫)", ["您好，听说您把我交给您的葫芦种子拿给兴夫了？看来那是属于兴夫的葫芦种子哦。听兴夫说您正在寻找童话书？我这里也有一本，只要把您身上的那美味的#t4000168#送给我，我就把童话书送给您。"], "赫丽奥斯塔图书馆的管理员威兹托我为他带来#b#t4031235##k。以前帮助兴夫之后有收到过这样东西，可是现在却找不到了。找到兴夫说明了情况后，他说只要给那只翅膀受过伤的燕子带去#b#t4000168# 10个#k就能得到童话书。\n\n#t4000168# #b#c4000168##k/10"], [3822, 1, "道功的燕子", ["翅膀的伤一直不好。还能飞起来吗？还有任务呢…… 任务是什么来着？恩？你好？有什么事情吗？#p2091001#先生让您问好？……#p2091001# ……这个名字好熟悉啊……"], "#p2091001#说以前养过的#b#p2071006##k不再出现在#m250000000#，有点担心，因为以前#p2071006#无论任务多重都会来问好的。#p2071006#？感觉有一些印象？去找#p2071006#，传达#p2091001#的话吧。"], [3823, 1, "燕子的记忆", ["啊，这个就是那个水果…… 对，好像叫#t2022116#，谢谢您"], "给#p2071006#说了关于 #m250000000#的事，他说有些印象但不是很清晰，吃#b粉红色的有香味的水果 #k可能会想起来。粉红色的有香味的水果，是不是#b#m250000000##k的蟠桃呢？为了找到#p2071006#的记忆，去找#t2022116#吧。\n\n#t2022116#  #b#c2022116##k/1"], [3824, 0, "向道功问好", ["拿来#t2022116#的好心人！很高兴见到你！托你的福，我已经想起了#m250000000#的事情。#p2091001#教我下棋的记忆……观看#p2091000#道术的记忆……偷吃#p2091002#给#p2091001#的礼物#t2022143#的记忆…… 都想起来了！非常感谢！", "我还没报答#p2091001#先生授予的恩惠，而且因为翅膀受伤，没法去问好。真是觉得很抱歉。如果你有机会再去#b#m250000000##k的话，麻烦你代我向#b#p2091001##k问好，告诉他只要我翅膀好了，一定会去见他的。可以吗？"], "#p2071006#说找到了关于#b#m250000000##k和#b#p2091001##k的所有记忆，受了#p2091001#的大恩，但因为受伤都没法给他问好。希望我可以代他问好……"], [3826, 1, "受宠爱的燕子", ["奥，是上次那位传达#m250000000#问候的那位啊～ 很高兴见到你！是在#m222000000#旅游吗？什么？#p2091001#拜托#p2091002#制药？哇！为了送药专程来了趟#m222000000#，真是太感谢您了！"], "#p2091002#说为了可爱的#p2071006#，他用心制药并把#b#t4031555##k给了我。现在只要把药送给#b#p2071006##k就可以了。"]], greeting="旅途上要多加小心喔！我的翅膀…入冬之前应该会好起来的吧…", stage=0, choices=[], picked=null, page=0, closed=false;
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
