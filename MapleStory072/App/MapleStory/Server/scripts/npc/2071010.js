// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3637, 1, "鉴定斧头", ["这里写着字呢。我看不清楚，你帮我看看。"], "山神告诉我从 #r#o2130100##k处拿回的 #b斧头#是否是樵夫的铁斧，我要从黑斧木妖的斧头中挑选一把交给山神。"], [3637, 0, "鉴定斧头", ["斧头拿来了。给我看看。靠近一点看才能看清楚是不是樵夫的铁斧。"], "山神告诉我从 #r#o2130100##k处拿回的 #b斧头#是否是樵夫的铁斧，我要从黑斧木妖的斧头中挑选一把交给山神。"], [3640, 1, "“金银斧”故事书", ["你带来黄金母矿和银母矿了。谢谢，可以修理斧头了..来，这是给你的童话书。对我来说寻找失物是件很容易的事。再见~"], "接受赫丽奥斯塔图书馆员怀兹的委托，为他带回“金银斧”故事书。这本书在完成“为樵夫寻斧”任务后得到过，但现在却遗失了。去问山神，他要我找到修理金斧头和银斧头所需的金矿石和银矿石各1块，然后他会为我找到故事书。\n\n#t4010006#  #b#c4010006##k / 1\n#t4010004#  #b#c4010004##k / 1"], [3640, 0, "“金银斧”故事书", ["你就是不久前帮我找回樵夫的斧头的年轻人吧。这次来找我有什么事?什么?把樵夫给你的童话书弄丢了?呼呼，不要急。我帮你找。但是你要答应我一件事。"], "接受赫丽奥斯塔图书馆员怀兹的委托，为他带回“金银斧”故事书。这本书在完成“为樵夫寻斧”任务后得到过，但现在却遗失了。去问山神，他要我找到修理金斧头和银斧头所需的金矿石和银矿石各1块，然后他会为我找到故事书。\n\n#t4010006#  #b#c4010006##k / 1\n#t4010004#  #b#c4010004##k / 1"], [3643, 1, "狐狸的威胁", ["嗯……搜集了有关九尾狐的情报了吧！哦哦，太好了。用 #b九尾狐的尾巴#k挠一挠鼻子魂魄就会回来？情报相当有价值啊。那么赶快去告诉七南或七诚吧!"], "拜访了山神，发现他穿着很破旧的衣服深思着什么事情。据他说，出现了修炼很久练成九尾狐的狐狸…… 七南好像也被九尾狐迷惑失魂了。不过以山神的道力也无法击退九尾狐，这可怎么办呢？山神说\n\n乌山的老居民#b鬼怪们#k也许知道一些事情。在山神考虑如何对付九尾狐时，我去找#b深山里的鬼怪之家#k，了解一下击退九尾狐的方法吧。"], [3643, 0, "狐狸的威胁", ["嗯……嗯……嗯？这儿还能遇见人……？你也丢了斧子吗？嗯？是否有被撕破衣服的可能？你怎么知道？前一阵还真被三尾狐袭击过……", "前不久乌山出现了非常厉害的妖怪。经过长时间修炼长着9个尾巴的狐狸，#r九尾狐#k。依仗着那家伙，三尾狐也狐假虎威，就把我山神的衣角偷走了……哼。", "九尾狐能勾走人的魂魄，所以得赶紧处置它，要不然后果不堪设想……什么？已经有人被勾走了魂魄？唉！真想马上处置九尾狐，不过凭我山神一个人的道力还无法对付它。怎么办？", "乌山的老居民#b鬼怪们#k应该知道怎么对付九尾狐……怎么样？你愿意去跟鬼怪们打听信息吗？当然，跟性情怪僻的鬼怪们打交道并不是件容易的事。"], "拜访了山神，发现他穿着很破旧的衣服深思着什么事情。据他说，出现了修炼很久练成九尾狐的狐狸…… 七南好像也被九尾狐迷惑失魂了。不过以山神的道力也无法击退九尾狐，这可怎么办呢？山神说\n\n乌山的老居民#b鬼怪们#k也许知道一些事情。在山神考虑如何对付九尾狐时，我去找#b深山里的鬼怪之家#k，了解一下击退九尾狐的方法吧。"], [3809, 0, "神仙的条幅1", ["你好? 你看起来像是冒险家，知不知道叫#b#m250000000##k的村呢? 要是知道那个村的话，有件事情想拜托你…"], "#p2071010#说他借读过的#b#t4031430:##k要还给在 #b#m250000000##k的精神修炼教官 #b#p2091001:##k并要求再借 #b#t4031431##k. 呵! 那么说 #p2071010#是初级神仙吗?"], [3811, 1, "神仙的条幅3", ["哦哦~ 这个就是 #t4031431#! 看样子去了#m250000000#了嘛。 去那里还帮我问候他老人家… 真的辛苦你了。作为补偿给你金斧…好象还不能给。最近金斧的市价变高了啊。呵呵。不好意思啊。"], "#p2091001#借出了 #b#t4031431:##k. 现在就去转交给 #b#p2071010##k吧."]], greeting="天啊… 怎么会有不喜欢金斧头和银斧头的人… ", stage=0, choices=[], picked=null, page=0, closed=false;
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
