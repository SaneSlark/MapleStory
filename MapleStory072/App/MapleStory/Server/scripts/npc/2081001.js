// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3701, 0, "库摩的任务", ["初次见面?我叫#p2081001#。哎呦!刚见过?这是我照顾的蛋，快孵出来了才会经常这样晃动。", "龙宝宝出生是好事，可晃动的太厉害怕它掉下去。有个坚固的孵化巢就好了。帮我做个孵化巢可以吗?"], "在#m240000000#见到 #p2081001#。 #p2081001#说自己孵化的蛋即将成功，但由于风的原因，蛋有掉落的危机，他委托我帮他建造一个孵化巢。我需要收集建造孵化巢所需的48个 #b#t4000236# 和 28个#b#t4000237# \n\n#t4000236#  #b#c4000236##k / 48\n#t4000237#  #b#c4000237##k / 28"], [3701, 1, "库摩的任务", ["好久不见了~怎么浑身是伤?看来收集橡木甲虫角很不容易?谢谢你帮我收集了这些角。"], "在#m240000000#见到 #p2081001#。 #p2081001#说自己孵化的蛋即将成功，但由于风的原因，蛋有掉落的危机，他委托我帮他建造一个孵化巢。我需要收集建造孵化巢所需的48个 #b#t4000236# 和 28个#b#t4000237# \n\n#t4000236#  #b#c4000236##k / 48\n#t4000237#  #b#c4000237##k / 28"], [3705, 0, "英雄的痕迹", ["咦？你好？你好像不是这里的人。最近经常能遇到来冒险的人~以前要在米纳尔森林遇到人很是稀罕。偶尔能遇到来这里的人。。", "在我还很小的时候就遇到过一个人。当时我被怪物所追赶，有个人突然冒出来救了我。他是在森林里野营的人。我很喜欢和他相处，时不时去找他玩。", "没过多久，他突然留下了要去龙林的字条就消失了踪影。今天遇到你我突然想起了他，不知道他怎么样了。你不也是冒险者吗？你能帮我打听他的下落吗？"], "在神木村的 #b#p2081001##k正在打听很久以前，从怪物手里救了他命的一位骑士的下落。他的名字叫 #b#p2081007##k... 跟#b#p2081001##k约定好去龙林寻找恩人的下落."], [6240, 1, "火花鸟", ["啊! 找到了#t4001113#!比别的蛋还要热。可能因为是火鸟蛋的原因？太幸运了，现在可以孵化了。"], "#b#p2081001##k听说了传说中的火花鸟,　熔岩洞里有可能有那只鸟的鸟巢,叫我去找找看。 发现#b#m921100200##k的地方叫艰苦洞穴…到底在哪里呢? 去找找看吧。 \n\n#t4001113# #b#c4001113#/1#k"], [6241, 0, "火凤凰", ["啊，来了？好消息。我知道了如何孵化#t4001113#的方法。幸亏不是很复杂，你知道天空之巢?那就简单多了。在天空之巢的最高点放上蛋后等孵化就可以了。如果不忙的话，你就帮我孵化这个蛋吧？"], "#b#p2081001##k说要唤醒 #b#t4001113##k的话得把它带到天空之巢的鸟巢。。。 \n\n#o9300089# #r#a62411#"], [6241, 1, "火凤凰", ["哇!你成功孵化了#o9300089#!真幸运，既然能孵出来了，一定能健康成长的!", "什么? #o9300089#攻击你了？这倒没想到?#o9300089#很高傲，虽然年幼但超级强大，看到你就攻击你也许是正常的。反正你已经打败它了，#o9300089#会一直跟着你的。这就是它们的生存法则，这样更好了。"], "#b#p2081001##k说要唤醒 #b#t4001113##k的话得把它带到天空之巢的鸟巢。。。 \n\n#o9300089# #r#a62411#"]], greeting="蛋孵化前快点找材料来。", stage=0, choices=[], picked=null, page=0, closed=false;
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
