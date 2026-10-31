// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2071, 0, "陌生女人的拜托", ["啊。。。 这里为什么这么冷？你好。。。请问，闹拉先生去哪里了？今天到我拆绷带的日子了，但不知道医生去哪里。我想快点确认手术成功不成功，你要是有时间，会帮我吗？"], "在废弃都市的闹拉医院见到了#b#p1052105##k．她想知道手术的结果，要打开绷带，但她现在没有镜子．所以她拜托我打猎野猪后收集#b20个#t4031155##k来. \n\n#t4031155#  #b#c4031155##k / 20"], [2072, 0, "陌生女人的真相", ["啊。。。有点损坏了，但还可以用。。。", "很谢谢你帮我。我要快点出去，这里太冷。", "啊！！这怎么回事。。。为什么我照镜子看不到自己？难道。。。我已经死了？不会！不会！求求你能不能帮我再一次？"], "在闹拉医院见到的那女人原来是幽灵!! 她不知道她已经死了，还在医院等医生…她为了复活拜托我收集#b100个#t4000008##k来…但是有了这些东西她真的能复活吗?\n\n#t4000008#  #b#c4000008##k / 100"], [2072, 1, "陌生女人的真相", ["啊！你都收集齐了。。。真感谢你这么辛苦的帮我，但是我才知道，虽然有这个道符，我仍然不能复活，呜呜呜。", "最近我才知道了就算使用了道符，我仍然不能复活，还会变成僵尸。。。但我绝不会忘记你的帮助。谢谢。"], "在闹拉医院见到的那女人原来是幽灵!! 她不知道她已经死了，还在医院等医生…她为了复活拜托我收集#b100个#t4000008##k来…但是有了这些东西她真的能复活吗?\n\n#t4000008#  #b#c4000008##k / 100"]], greeting="这里…太冷…", stage=0, choices=[], picked=null, page=0, closed=false;
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
