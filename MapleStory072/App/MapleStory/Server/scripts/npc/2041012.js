// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3415, 0, "定时表", ["您好，我是在这里执行秘密任务的地球防御总部部属，叫做#b#p2041012##k。最近有重要的任务，所以过着没法合眼的日子，但是…能帮我一些忙吗?"], "在地球本部附近遇到了[冒险勇者 粉狼]。她说因为她每天睡得太多，正在担心。她又问我能不能替她收集怪物#b闹钟啾啾#k爆的20个#b小桌表#k 。嗯。这样的话我就要去玩具城钟塔下面啊。"], [3415, 1, "定时表", ["啊！这不是#b#t4000114##k嘛！竟然全部收集来了，真是了不起。好！只要有这些，早晨就可以早点起床了？不管怎么说，你帮了我的忙，应该给点酬劳才行。首先请先检查一下道具栏中有没有空格。"], "在地球本部附近遇到了[冒险勇者 粉狼]。她说因为她每天睡得太多，正在担心。她又问我能不能替她收集怪物#b闹钟啾啾#k爆的20个#b小桌表#k 。嗯。这样的话我就要去玩具城钟塔下面啊。"], [3416, 0, "定时表的配合", ["啊…是上次为了赖床而吃苦的我收集#t4000114#的那位呀，真是谢谢你。不过那些闹钟没过多久全坏了…所以能不能再帮我一次忙啊？"], "在地球本部附近又遇到了[冒险勇者 粉狼]。她说她的小桌表都坏了。为修理和制作更好的表需要#b2个特殊电池, 10个齿轮, 10个小桌表#k。这些在玩具城时间塔里应该可以得到的吧？"], [3416, 1, "定时表的配合", ["哼…真的全部收集到了，真是了不起，你真不是一般人啊！只要有这些材料，就可以制作出绝对不会坏掉的超强闹钟。你这么辛苦地帮我，真是谢谢你。分给你一些我很喜欢的救命粮食作为报酬吧！"], "在地球本部附近又遇到了[冒险勇者 粉狼]。她说她的小桌表都坏了。为修理和制作更好的表需要#b2个特殊电池, 10个齿轮, 10个小桌表#k。这些在玩具城时间塔里应该可以得到的吧？"], [3417, 0, "懒蛋", ["啊哈！正在等你呢，来的正好。正在用你上次帮我收集来的材料制作超强闹钟，这可不容易呀！这段期间又有想拜托你的事了…最后一次，能再帮我吗？"], "在地球本部附近又遇到了[冒险勇者 粉狼]。她说她把以前我收集给她的东西送给了地球本部的#b士兵 克斌#k了。拜托我替她拿他做的#b超级定时表#k来。有这个表她就能早点起床吧？"], [3418, 1, "完成的定时表", ["啊…！没想到给我做了这么大的闹钟呀…这家伙比想象中还有天份哦。只要有这个闹钟，早上就可以改掉赖床的习惯了！非常感谢你帮我这么多忙，分给你一些总部发放的东西作为酬劳吧。"], "从#b士兵 克斌#k收到了[冒险勇者 粉狼]拜托我的#b超级定时表#k。那我把这个表给她，就可以完成任务吧？"]], greeting="你好，我是为了抵御外界侵入而执行秘密任务的#b#p2041012##k。最近为了执行重要任务忙忙碌碌的。这里很危险，请躲避。", stage=0, choices=[], picked=null, page=0, closed=false;
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
