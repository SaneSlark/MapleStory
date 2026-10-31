// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3800, 1, "诺功的教导1", ["嘿嘿。真的抓了#o5120503# 10只了嘛? 挺神奇的。"], "#p2091000#没作任何说明就要求去抓#r#o5120503# 10只#k.\n\n#o5120503# #r#a38001##k"], [3801, 1, "诺功的教导2", ["嘿。真的抓好了#o5120503#20只? 不赖嘛。"], "#p2091000#没作任何说明就要求抓 #r#o5120503# 20只#k.\n\n#o5120503# #r#a38011##k"], [3802, 1, "诺功的教导3", ["呼。真的抓了 #o5120503#40只? 真是有毅力的家伙啊。虽然很无聊，但是没有那种忍耐力的话没有成为仙人的资格。值得夸奖。"], "问了有关仙人的事,但#p2091000#表情木木地要求去打#r#o5120503# 40只#k. 10只, 20只… 现在居然要 40只?! 以为在训练警犬啊!虽然生气但已经努力到这个地步,绝对不能放弃. 按照#p2091000#的话去做吧.\n\n#o5120503# #r#a38021##k"], [3816, 0, "制作蛇尾汤1", ["来，一二三…… 没法数了。为什么训练过程中受伤的人这么多啊？也不是什么很难的修炼啊。有什么问题呢？恩…… 那边，你！能不能帮忙做些修炼场的事儿啊？"], "#p2091000#看到过很多修炼过程中受伤的修炼生，得带材料去#b#p2091002##k那儿拿药。材料是#b#t4000281# 10个#k，得先准备了。\n\n#t4000281#  #b#c4000281##k/10"], [3817, 1, "制作蛇尾汤2", ["拿来#t4031552#了吗？这个香味～ 熬好了的话，这是非常好的药啊。辛苦你了，你也喝一点吧。"], "从#p2091002#那儿收到了#b#t4031552##k。味道还可以？赶紧送给#b#p2091000##k吧。"], [3835, 1, "韩太守的所见", ["嗯？什么事？锻炼体力？嗯？村外看到的熊怎么啦？因为不止一两只，所以不太清楚。都是诺功的弟子……长得都差不多。长得有点怪？"], "在通天林韩太守被可怕的野生熊袭击了。在千钧一发之际，某人来拯救了无法动弹的韩太守…… 好像是第一次见到的熊。韩太守很想了解熊的情况，希望去问一下#b诺功#k。"], [3836, 0, "诺功的弟子", ["#b肯德熊#k……它是诺功中弟子中最聪明诚实的孩子。比谁都正义，路见不平会拔刀相助……让它沦落到在村子外面流浪都要怪妖怪禅师。", "肯德熊努力击退妖怪，却成为妖怪禅师的眼中钉。他施了魔法让它失去理智。肯德熊因为暂时放松警惕而失去了理智…… 攻击了村民和旅行者。", "心爱的弟子沦落到如此地步，却没法帮它。看着清醒时难过的肯德熊，唯一能帮它做的，就是不让它伤害其他人，把它赶出村庄。", "不过就是那个肯德熊帮了韩太守……是不是魔法在它身上削弱了？只要能解开妖怪禅师施的魔法，肯德熊就能重新回到武陵了……你再确认一下吧。"], "诺功有一个中了妖怪的魔法失去理性而攻击村庄居民的弟子。他的名字是#b肯德熊#k... 在诺功的弟子中他最聪明，现在在村庄外苦行，只等着妖怪的魔法变弱…… \n\n诺功说看他可以帮韩太守，肯德熊所受的魔力可能已经解除了，希望#b道功#k可以帮他确认一下。"], [3838, 0, "击倒肯德熊", ["道功说什么？是吗？是肯德熊的负罪感封锁着它？可怜的孩子……师父该怎么帮你啊……呼唔……", "只是被妖怪禅师操纵，攻击人类并不是肯德熊的意志所致。它觉得所有的错都在于它……那还不如不让它犯罪？", "所以……请你打败 #r肯德熊#k。如果遇到失去理性而变得残暴的肯德熊，请不要犹豫请立即阻止。只有那种粗暴的方法才能帮助肯德熊。"], "道功的魔法失败了……诺功显得更加沉重了，说为了肯德熊，如果以后见到失去理性的肯德熊，就直接击倒他。\n\n#o7220000# #r#a38381##k  "], [3838, 1, "击倒肯德熊", ["打倒肯德熊了吗？是吗……希望能减轻它的负罪感。", "倒是希望一次的皮肉之苦能让它觉得已经洗刷了罪孽，但那是不可能的。武陵仙人们之所以那么爱它，都是因为它非常正直。", "只有无数次的皮肉之苦才是肯德熊的赎罪之路，做为师父我会一直在旁关注它的。很心疼，但只有那样才能帮助肯德熊。"], "道功的魔法失败了……诺功显得更加沉重了，说为了肯德熊，如果以后见到失去理性的肯德熊，就直接击倒他。\n\n#o7220000# #r#a38381##k  "]], greeting="犹豫不决，半信半疑修炼最危险", stage=0, choices=[], picked=null, page=0, closed=false;
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
