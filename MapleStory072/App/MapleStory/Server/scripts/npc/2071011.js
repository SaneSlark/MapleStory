// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3636, 1, "金银斧", ["恩？！你的斧头好像是我遗失的，能让我看看吗？", "对了！是我遗失的那个斧头。工作时不小心掉进了池塘里，山神答应帮我找回斧头，但我还是不放心…总之谢谢了。", "这给你。我拥有这书已经很久了。可是因为没时间阅读，落了许多灰尘。我想送给你作为帮我找回斧头的谢礼。"], "在#m222010002#见到了头上长瘤、气喘吁吁的 #b#p2071010##k先生。几天前，他被不知何人丢弃的斧头砍伤，一气之下将斧头丢在池塘旁边。不久，斧头的主人#b#p2071011##k前来寻找，并委托我帮他遗失的斧头。我为此询问 #p2071011#.\n山神说樵夫的铁斧被怪物拿走了，他要我拿回黑斧木妖所给的斧头，由他来鉴定是否为 #b#t4031315##k。"]], greeting="你带来刻着我名字的铁斧头了吗?", stage=0, choices=[], picked=null, page=0, closed=false;
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
