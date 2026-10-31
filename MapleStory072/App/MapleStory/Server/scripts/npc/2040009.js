// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3215, 1, "玩具工人5", ["玩具工人5"], "找第五个玩具工人后拍了照片。"], [3216, 0, "玩具工人 6", ["这活是怎么样，做也做不完啊。因为最近玩具塔多了很多怪物，经常破坏这里的各个地方。啊！你是说受玩具厂#b#p2040015##k的委托，来找我的吗？原来是这样，你说要拍照回去，好呀~~ 请拍出我努力工作的样子吧。"], "找第六个玩具工人后拍了照片。"], [3223, 1, "玩具工人的装备", ["啊！就是这个！真感谢你！这次我会再进行工作。那我给你特别的答礼。这是维修塔的时候得到的。但我不知道在哪里用的。请收下。"], "在玩具塔又找了第六个玩具工人。他说他几天前在怪物满多的地方弄丢了贵重的装备，拜托我替他找他的装备。他猜可能#b吹泡泡双鱼#k拿走了。。。"], [3223, 0, "玩具工人的装备", ["哟~！你是上次受到#b#p2040015##k的拜托照了我的照片的那个人！厂长过得怎么样？其实我有小问题。如果你不忙。可不可以帮我？"], "在玩具塔又找了第六个玩具工人。他说他几天前在怪物满多的地方弄丢了贵重的装备，拜托我替他找他的装备。他猜可能#b吹泡泡双鱼#k拿走了。。。"]], greeting="我是在玩具城的时间塔工作的人。最近这里有很多地方损坏了，需要保修。怪物也越来越多，妨碍了，修复工作。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
