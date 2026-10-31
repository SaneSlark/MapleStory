// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3702, 0, "亚可的任务", ["擦的亮一点~看，亮的都可以照我到的脸了。好像是蛋发出的光。你看是不是发光了?我希望龙宝宝出生时有一个干净漂亮的巢~所以每天都在认真打扫呢。", "虽然干净，可总觉得缺少什么。用美丽的鸟羽毛装饰一下会很漂亮…，对了..去帮我收集一些装饰巢的美丽的羽毛可以吗?"], "#m240000000# 的 #p2081003#希望将蛋装饰得漂漂亮亮的， 他想要编织一个美丽的蛋巢，并委托我为他收集编织蛋巢所需的50个#b#t4000238# 和30个#b#t4000239#.\n\n#t4000238#  #b#c4000238##k / 50\n#t4000239#  #b#c4000239##k / 30"], [3702, 1, "亚可的任务", ["哇哇~收集了这么多的羽毛?真漂亮啊。羽毛好像在闪闪发亮呢。非常感谢。这样可以把巢装饰的更漂亮了。"], "#m240000000# 的 #p2081003#希望将蛋装饰得漂漂亮亮的， 他想要编织一个美丽的蛋巢，并委托我为他收集编织蛋巢所需的50个#b#t4000238# 和30个#b#t4000239#.\n\n#t4000238#  #b#c4000238##k / 50\n#t4000239#  #b#c4000239##k / 30"], [3708, 0, "赤木", ["你是刚从森林里回来的吗？那你一定看到了在龙林岔路口边的树木都变成赤色了吧。。。真的很奇怪。树木好像都着了魔。其他的刺猬族还不知道这件怪事，请找到村长转告他这件事。"], "#p2081003#在米纳尔森林,通向龙林的路口处发现树都 #b变成了赤色#k. 这件事其他人还不知道，他希望能转告村长."], [6242, 0, "冰鸟", ["传说中的冰鸟…传说中的冰鸟…传说中的鸟…这怎么办？这怎么办？…啊?你什么时候来的？", "不知道是谁，但能不能找下#b#t4001114##k？冰凤凰是什么？什么，你连冰凤凰也不知道？那不是传说中的冰之鸟?这也不知道，冰冷的西边天空的星星，永不睡觉的灵之鸟。拥有比冰还寒的蓝色羽毛，那个冰听说是永不融化。什么，不可能有这样的鸟？", "听说在冰封雪域的冰的峡谷看到这个鸟的巢穴。哦不，说不定是真的，如果在冰的峡谷底下的话，即使孵出来了，飞起来也很难，希望你快把那个蛋救出来。"], "#b#p2081003##k说起了传说中的冰鸟的故事,　并建议去冰封雪域的尖锐绝壁。 \n\n#t4001114# #b#c4001114#/1#k"], [6242, 1, "冰鸟", ["哇! 得到#t4001114#了!真的很凉!不愧是冰凤凰的蛋!"], "#b#p2081003##k说起了传说中的冰鸟的故事,　并建议去冰封雪域的尖锐绝壁。 \n\n#t4001114# #b#c4001114#/1#k"], [6243, 0, "冰凤凰", ["那地方要容易展开翅膀…需要适当的风力…而且要宽阔… 什么?你什么时候来的？", "找到了孵化冰凤凰的好地方，就是天空之巢，在那里的最高地点，应该可以孵化冰凤凰了。什么太高了？为了孵化传说中的冰凤凰，至少要到那种地点的。", "好，赶紧去孵化#r#o9300090##k，唔?为什么让你去？不是你得到了蛋吗，一起把蛋孵完算了，不是吗？"], "#p2081003#说天空之巢的最高的地方容易唤醒冰凤凰。好,　就去那边看看吧。 \n\n#o9300090# #r#a62431#"], [6243, 1, "冰凤凰", ["什么! 这是#o9300090#! 这么尖的嘴角!哇!这么冰冷的羽毛~ 像冰一样冷静的眼神!真厉害! …什么?你什么时候来的？", "谢谢你，多亏了你，已经孵化了#o9300090#。这家伙以后我替你照看… 哈?这家伙居然完全被你征服了?", "它居然攻击你？啊哈，果然如此。这些家伙就是太高傲了，看不起一般的人类。只有你打败了它才会认同你并跟着你。早知道我也跟你一起去了? 居然能养#o9300090#，太羡慕你了。"], "#p2081003#说天空之巢的最高的地方容易唤醒冰凤凰。好,　就去那边看看吧。 \n\n#o9300090# #r#a62431#"]], greeting="快快 ~ 快快 ~ 不知道会不会很快就孵出来…", stage=0, choices=[], picked=null, page=0, closed=false;
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
