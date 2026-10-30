// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3067, 1, "雪犬的营养零食", ["波浪这么大，我正在担心你呢。啊，那不是海豹肉吗？哇，都弄来了啊。真了不起，那些海豹很凶的，应该不好对付…真的是很了不起哦。"], "在冰雪覆盖的鲸鱼岛见到了与一群雪犬生活在一起的#p2060000#。从#p2060000#那里接到委托，要收集用来喂食雪犬营养丰富的#b#t4000157# 50个#k。\n\n#t4000157#  #b#c4000157##k / 50"], [3067, 0, "雪犬的营养零食", ["你好，我叫#p2060000#。竟然会来到这么偏僻的孤岛上，是旅行者吗？这里是漂浮在大海上的孤岛，很少有人会来这里的。我独自在这里养着雪犬，和它们一起生活。它们是我的朋友，也是我的家人。第一次见面就拜托你虽然感到很过意不去，但你能帮我一个忙吗？"], "在冰雪覆盖的鲸鱼岛见到了与一群雪犬生活在一起的#p2060000#。从#p2060000#那里接到委托，要收集用来喂食雪犬营养丰富的#b#t4000157# 50个#k。\n\n#t4000157#  #b#c4000157##k / 50"], [3085, 1, "妙斯的料理", ["哇！这么香的味道！一定是#p2060006#做出那个料理来了吧？没错吧？"], "用我带去的材料，#p2060006#做出了非常可口的料理。虽然放在箱子里看不到，但闻起来就能知道肯定是非常好吃的料理。#p2060006#提醒说这要趁热吃，必须在变凉之前将食物带给#b#p2060000##k。#r1小时#k内能够送给#b#p2060000##k吗？"]], greeting="你好~ 雪犬很可爱吧.", stage=0, choices=[], picked=null, page=0, closed=false;
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
