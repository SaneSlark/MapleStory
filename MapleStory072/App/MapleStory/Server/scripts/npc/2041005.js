// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3206, 0, "乃米的饭盒", ["您好。今天又是个好天气呀。头一次见面，看样子正在到处旅行嘛？我是玩具城的#b#p2041005##k。如果有时间，可以帮我一个忙吗？我有急事。"], "玩具城的乃米拜托我带给她的父亲厂长卡胡她准备的餐盒。她说#b厂长卡胡#k可能在玩具厂的某个地方。"], [3207, 1, "乃米的做菜材料", ["你终于回来了。对~！就是这个干酪！有这个干酪我会做出帮爸爸的用来恢复的很好吃的干酪汤。你这么快完成了我的嘱托，我就给你奖励。这是我特别作的菜。你吃吧。"], "在玩具城村落看见了乃米。她说她为父亲要准备好吃的汤，还需要玩具塔#b玩具白鼠#k暴的#b10个好吃的干酪#k。她拜托我为她收集这些东西。 \n\n#t4031129# #b#c4031129##k/10"], [3207, 0, "乃米的做菜材料", ["今天也家务事这么多。。。啊？你好！你来我们家有什么事？啊，对！如果你有空，能不能帮我？我有为爸爸要做的事情，但家务事太多不能抽空。"], "在玩具城村落看见了乃米。她说她为父亲要准备好吃的汤，还需要玩具塔#b玩具白鼠#k暴的#b10个好吃的干酪#k。她拜托我为她收集这些东西。 \n\n#t4031129# #b#c4031129##k/10"], [3208, 1, "乃米的做菜材料2", ["哦！你来了~ 对！就是这个蛋！有这个一定能做出给爸爸的好吃的饭盒。哈哈~ 想象不了他多么喜欢。啊。你这次也解决了我的嘱托，我就给你礼物。这是到从很宝贵地放所带来的东西。我就给你。"], "在玩具城村落再次见到了乃米。乃米说这次为做父亲的餐盒需要鸟蛋，拜托我收集在玩具塔外边能看见的#b空军雀#k的#b15个小蛋#k。\n\n#t4000116# #b#c4000116##k/15"], [3208, 0, "乃米的做菜材料2", ["你好~ 今天玩具城的天气很舒畅。因为我住在没有天气低沉的玩具城，觉得很幸福。但是。。。你来这里怎么回事？没有什么事啊？哈哈~ 那么顺便来这里我拜托你一件事情，好不好？"], "在玩具城村落再次见到了乃米。乃米说这次为做父亲的餐盒需要鸟蛋，拜托我收集在玩具塔外边能看见的#b空军雀#k的#b15个小蛋#k。\n\n#t4000116# #b#c4000116##k/15"], [3209, 1, "乃米的问题", ["哎唷。。。谁有吃掉了我做的菜。。。啊？你这么快回来了？谢谢。这次我用你收集来的#t4000095#在家里做了设置。以后没有谁可以抢走我做的菜了。这是我给你的礼物。请收下。"], "在玩具城村落再次见到了乃米。乃米说最近她做了菜却不知道被谁吃掉了。她怀疑是老鼠。因为以前也有过这样的情况，所以她设计过玩具白鼠后用它设置了捕鼠夹，但现在那个玩具白鼠变成了怪物。。。收下乃米的拜托我要去打退玩具白鼠后收集#b45个捕鼠夹#k！\n\n#t4000095# #b#c4000095##k/45"], [3209, 0, "乃米的问题", ["哎哟。。。这怎么办。。啊！你又来了。这次有了别的问题。我每次这么拜托你很不好意思。但这也是我不能解决的事情，你会帮我吗？"], "在玩具城村落再次见到了乃米。乃米说最近她做了菜却不知道被谁吃掉了。她怀疑是老鼠。因为以前也有过这样的情况，所以她设计过玩具白鼠后用它设置了捕鼠夹，但现在那个玩具白鼠变成了怪物。。。收下乃米的拜托我要去打退玩具白鼠后收集#b45个捕鼠夹#k！\n\n#t4000095# #b#c4000095##k/45"]], greeting="哎呀~你好像是外乡人？我是这里玩具城的#b#p2041005##k。我爸爸是玩具工厂的厂长。你有时间吗？去工厂看看吧。", stage=0, choices=[], picked=null, page=0, closed=false;
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
