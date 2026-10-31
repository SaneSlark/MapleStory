// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2119, 0, "遗迹发掘队的公告", ["公告-\n\n最近因出现在遗迹坟墓地区里的骷髅军团，出现很多死伤者。正等待勇敢者的帮助。抓到#r#o5150001#200只，#o6230602#100只，#o7130103#40只#k后，请向发掘队员#b#p9040002##k报告。", "\n向#p9040002#报告时，请提供以下物品。\n\n#i4000206##b肋骨60个\n#i4000207#骨盆40个\n#i4000208#马头骨20个#k"], "#m101030104#内的公告牌内容如下： 在遗迹的古墓地带，发掘队受到骷髅军团的攻击，伤亡惨重。去消灭#r骷髅士兵200只，骷髅士官100只，骷髅指挥官40只#k后，并将战利品#b肋骨 60个，骨盆40个，马头骨20个#k拿给发掘队员#b杉峰#k吧。\n\n#o5150001#  #r#a21193##k\n#o6230602#  #r#a21191##k\n#o7130103#  #r#a21192##k\n\n#t4000206#  #b#c4000206##k/60\n#t4000207#  #b#c4000207##k/40\n#t4000208#  #b#c4000208##k/20"]], greeting="没有经过遗迹发掘队许可，布告栏上乱贴非法广告者将被处300万金币的罚金。", stage=0, choices=[], picked=null, page=0, closed=false;
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
