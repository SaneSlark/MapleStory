// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3217, 1, "玩具工人 7", ["玩具工人 7"], "找第七个玩具工人后拍了照片。"], [3218, 0, "玩具工人8", ["这活是怎么样，做也做不完啊。因为最近玩具塔多了很多怪物，经常破坏这里的各个地方。啊！你是说受玩具厂#b#p2040015##k的委托，来找我的吗？原来是这样，你说要拍照回去，好呀~~ 请拍出我努力工作的样子吧。"], "找第八个玩具工人后拍了照片。"], [3224, 1, "玩具塔保修", ["你回来了啊。。。呼呼。。看看。你都打退了30个#b#o3230103##k。而且也收集25个#b#t4000100##k来了。你这么快解决我的困难。我很感谢。这是我为你准备的。请收下。"], "在玩具塔又碰到了玩具工人8。他说玩具塔还有需要保修的地方，但是因为周边怪物太多，工作特别困难。这么说后他拜托我打退#b30个吹泡泡鱼皇#k，同时收集#b25个玩具王冠#k。虽然显得很麻烦，但这次也去做吧。\n\n#o3230103# #r#a32241##k\n#t4000100# #b#c4000100##k/25"], [3224, 0, "玩具塔保修", ["嗯。。。这里是刚才修过的。怎么这么快就损伤了？啊？你是上次来过的吧？今天有什么事？如果你不忙请帮我个忙吧。可以吗？"], "在玩具塔又碰到了玩具工人8。他说玩具塔还有需要保修的地方，但是因为周边怪物太多，工作特别困难。这么说后他拜托我打退#b30个吹泡泡鱼皇#k，同时收集#b25个玩具王冠#k。虽然显得很麻烦，但这次也去做吧。\n\n#o3230103# #r#a32241##k\n#t4000100# #b#c4000100##k/25"]], greeting="我是在玩具城的时间塔工作的人。最近这里有很多地方损坏了，需要保修。怪物也越来越多，妨碍了，修复工作。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
