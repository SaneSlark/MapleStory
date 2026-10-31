// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3219, 1, "玩具工人 9", ["玩具工人 9"], "找第九个玩具工人后拍了照片。"], [3220, 0, "玩具工人10", ["这活是怎么样，做也做不完啊。因为最近玩具塔多了很多怪物，经常破坏这里的各个地方。啊！你是说受玩具厂#b#p2040015##k的委托，来找我的吗？原来是这样，你说要拍照回去，好呀~~ 请拍出我努力工作的样子吧。"], "找最后的玩具工人后拍了照片。"], [3225, 1, "玩具塔保修2", ["哟~! 真没想到了你来得这么快. 那些怪物我们也不容易打退的!真了不起~!你这么快收集来了我们需要的材料,我一定给你报答.这恐怕是谁弄丢的,但你拿走吧!"], "在玩具塔再碰到了玩具工人10，他拜托我收集保修塔需要的30个黄色玩具圈和15个蓝色玩具圈的任务。可能打退黄积木怪和青积木怪后会得到的吧？\n\n#t4000101# #b#c4000101##k/30\n#t4000102# #b#c4000102##k/15"], [3225, 0, "玩具塔保修2", ["你到这里有什么事吗? 在玩具塔有很多危险的怪物, 如果不做注意不知道什么时候发生危险的情况.你说我为什么没关系? 我为了在这里保修塔的,所以没办法. 呼呼…如果可以的话，你不忙能不能抽空帮我个忙?"], "在玩具塔再碰到了玩具工人10，他拜托我收集保修塔需要的30个黄色玩具圈和15个蓝色玩具圈的任务。可能打退黄积木怪和青积木怪后会得到的吧？\n\n#t4000101# #b#c4000101##k/30\n#t4000102# #b#c4000102##k/15"], [3244, 0, "玩具工人的不满", ["啊~ 肚子好饿啊。 今天又没有便当吗？肚子饿得都咕噜咕噜地叫了。 每天都在这里辛苦工作，可连一顿好一点的午餐都吃不到。", "为什么会这样? 当然是因为那可恶的 #o3110102#群。 特别是 #b#o3210205##k，它不仅凶猛，胃口又大，每次都把从 #m220000000#送来给我的午餐吃的精光，我实在是忍无可忍了你能帮助我吗?"], "盘据在玩具塔的 #o3210205#群每天都会抢#p2040013#的午饭，让他们天天饿着肚子工作，瘦的不成人样. 愤怒的 #p2040013#委托我去捕捉 #b#o3210205# 20只#k并带 #b#t4000096# 5个#k给他们。\n\n#i4000096##t4000096# #b#c4000096#/5#k\n#o3210205# #r#a32441##k"], [3244, 1, "玩具工人的不满", ["哇~ 太感谢了。 你抓到这么多#o3210205#。 那么你手里拿的就是美味的南瓜吗？哇~ 谢谢。"], "盘据在玩具塔的 #o3210205#群每天都会抢#p2040013#的午饭，让他们天天饿着肚子工作，瘦的不成人样. 愤怒的 #p2040013#委托我去捕捉 #b#o3210205# 20只#k并带 #b#t4000096# 5个#k给他们。\n\n#i4000096##t4000096# #b#c4000096#/5#k\n#o3210205# #r#a32441##k"]], greeting="我是在玩具城的时间塔工作的人。最近这里有很多地方损坏了，需要保修。怪物也越来越多，妨碍了，修复工作。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
