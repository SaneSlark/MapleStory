// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3419, 0, "与白外星人的交易", ["你好！外星人会说地球的语言，你很吃惊吧？哈哈。。。我们外星人是为你们帮助而来的。所以你不用太紧张。看起来你已经去过地球本部吧？那你可不可以帮我一下？"], "在库尔兰草原遇见了#b外星人 哥雷#k. 他说原来希望战争的是地球本部.然后他拜托我帮他在地球本部机库收集几个东西给拿来.觉得有点不安. 但没有办法. 我要去地球本部机库收集#b3个秘密文件#k。"], [3419, 1, "与白外星人的交易", ["哦。。。你真的收集完了3个#t4031116#啊？好。。。你这么辛苦的帮助我们，我就给你谢礼。这是随时会召唤我们的召唤包。但你要小心，因为我的朋友们很危险！"], "在库尔兰草原遇见了#b外星人 哥雷#k. 他说原来希望战争的是地球本部.然后他拜托我帮他在地球本部机库收集几个东西给拿来.觉得有点不安. 但没有办法. 我要去地球本部机库收集#b3个秘密文件#k。"]], greeting="地球防御本部的这些笨蛋，今天也这样黑白不分的攻击善良的外星人。无奈。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
