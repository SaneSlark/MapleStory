// CMS072 client-backed ordinary quest entry. Native checks/actions own all rewards.
var npcId=9250004, maps=[500020101], entries=[[4210, 0, "害怕蛇的吉特叔叔", ["你好吗？我叫吉特，是水上市场的武艺师傅。你想让我教你武艺吗？我不收徒弟了，已经太多了。", "说来话长，你好像是冒险家，我有件事想请你帮忙。在水上市场附近有蟒蛇出没，我希望你能消灭它们。。。前几天我的徒弟为了消灭蟒蛇去了沼泽还没回来。", "怎么样？你能帮我消灭掉它们吗？我会给你一份厚厚的奖赏。怎么样？"], "替吉特叔叔报复,伤害他徒弟的蟒蛇。\n\n#o9420002# #r#a42101##k \n#t4000248# #b#c4000248#/30#k", ["很好！我就知道你是一个勇敢的人，看上去你的技术也不错。那么就去消灭掉#r#o9420002##k #r50只#k作为证明拿回来 #b#t4000248# 30个#k。"], {}, []], [4210, 1, "害怕蛇的吉特叔叔", ["你顺利地完成了？以前我也拜托过很多人可是没有一个人像你这样勇敢。。。为了对你的勇气和技术表示感谢，我准备了小小的礼物给你。。。"], "替吉特叔叔报复,伤害他徒弟的蟒蛇。\n\n#o9420002# #r#a42101##k \n#t4000248# #b#c4000248#/30#k", ["这个本来是我想给徒弟的，现在没用了。就把它给你作为答谢吧，有机会再见！"], {}, []], [4215, 1, "加入水上市场维护队5", ["你来了，早就等着你呢。你想成为维护队成员，把许可证给我吧。"], "最后一名队员是#b#p9250004##k，听说他是一位有名的武艺师傅。。。", ["哎呀~！眼睛都花了，看不清楚。我的眼镜呢？我去找找眼镜，你过一会儿再来找我。"], {}, []], [4216, 0, "完成加入水上市场维护队", ["找不到眼镜，好不容易看清了许可证。我已经盖上了确认印章了，拿去吧。"], "终于得到了全部的确认印章了,去找队长#b#p9250012##k,我就可以加入维护队了.", ["拿好许可证，已经得到了5个印章了，去找队长#b#p9250012##k吧。"], {}, []]], greeting="来找我什么事？哦呵~";
var choices=[], picked=null, page=0, stage="menu", closed=false, started=false, origin=-1, rewardIndex=-1;
function finish(){closed=true;cm.dispose();}
function validPlace(){
    return cm.getNpc()==npcId && maps.indexOf(cm.getMapId())>=0 && (origin<0 || origin==cm.getMapId());
}
function ready(){
    var q=Packages.server.quest.MapleQuest.getInstance(picked[0]);
    return picked[1]==0 ? q.canStart(cm.getPlayer(),cm.getNpc()) : q.canComplete(cm.getPlayer(),cm.getNpc());
}
function start(){
    if(closed || started)return;
    started=true;
    if(!validPlace()){finish();return;}
    origin=cm.getMapId();
    var menu="";
    for(var i=0;i<entries.length;i++){
        var d=entries[i],q=Packages.server.quest.MapleQuest.getInstance(d[0]);
        if((d[1]==0 && q.canStart(cm.getPlayer(),cm.getNpc())) || (d[1]==1 && cm.getQuestStatus(d[0])==1)){
            menu+="\r\n#L"+choices.length+"#"+(d[1]==0?"[接受] ":"[继续] ")+d[2]+"#l";
            choices.push(d);
        }
    }
    if(choices.length==0){cm.sendOk(greeting+"\r\n\r\n当前没有可以交接的普通任务。");finish();return;}
    cm.sendSimple(greeting+"\r\n"+menu);
}
function showBefore(){
    var text=picked[3][page];
    if(picked[6][String(page)])cm.sendSimple(text);
    else if(page==picked[3].length-1)cm.sendYesNo(text);
    else cm.sendNext(text);
}
function commit(){
    if(!ready()){cm.sendOk(picked[4] || "任务条件尚未完成，请查看任务栏中的要求。");finish();return;}
    if(picked[7].length>0 && rewardIndex<0){
        stage="reward";
        var menu="请选择一件任务奖励：";
        for(var i=0;i<picked[7].length;i++)menu+="\r\n#L"+i+"##i"+picked[7][i][0]+"# #t"+picked[7][i][0]+"# × "+picked[7][i][1]+"#l";
        cm.sendSimple(menu);return;
    }
    closed=true;
    if(picked[7].length>0){
        // Native reward selection is zero based; client rewards here have no job/gender filters.
        var q=Packages.server.quest.MapleQuest.getInstance(picked[0]);
        var player=cm.getPlayer(),npc=cm.getNpc(),client=cm.getClient();
        cm.dispose();client.removeClickedNPC();
        q.complete(player,npc,java.lang.Integer.valueOf(rewardIndex),false);
    }else if(picked[1]==0)cm.startClientNpcQuest(picked[0]);
    else cm.completeClientNpcQuest(picked[0]);
}
function accepted(){
    if(picked[5].length==0){commit();return;}
    stage="after";page=0;cm.sendNext(picked[5][page]);
}
function action(mode,type,selection){
    if(closed)return;
    if(!validPlace() || mode!=1){finish();return;}
    if(stage=="menu"){
        if(selection<0 || selection>=choices.length || selection!=Math.floor(selection)){finish();return;}
        picked=choices[selection];
        if(!ready()){cm.sendOk(picked[4] || "任务条件尚未完成，请查看任务栏中的要求。");finish();return;}
        stage="before";page=0;showBefore();return;
    }
    if(stage=="before"){
        var answer=picked[6][String(page)];
        if(answer){
            if(answer.options.indexOf(selection)<0){finish();return;}
            if(selection!=answer.correct){
                if(answer.wrong.length>0)cm.sendOk(answer.wrong.join("\r\n"));
                finish();return;
            }
        }
        if(page<picked[3].length-1){page++;showBefore();return;}
        if(answer){stage="confirm";cm.sendYesNo(picked[2]);return;}
        accepted();return;
    }
    if(stage=="confirm"){accepted();return;}
    if(stage=="reward"){
        if(selection<0 || selection>=picked[7].length || selection!=Math.floor(selection)){finish();return;}
        rewardIndex=selection;commit();return;
    }
    if(stage=="after"){
        if(page<picked[5].length-1){page++;cm.sendNext(picked[5][page]);return;}
        commit();
    }
}
