// CMS072 client-backed ordinary quest entry. Native checks/actions own all rewards.
var npcId=9330015, maps=[100000000, 101000000, 103000000, 120000200, 220000000, 222000000, 230000000, 240000000, 250000000, 261000000, 702000000, 800000000], entries=[[8571, 0, "\u5c48\u539f\u7684\u56f0\u5883", ["\u6211\u662f#b#p9330015##k\u7684\u7075\u9b42\u3002\u56e0\u6028\u6c14\u592a\u91cd\u800c\u65e0\u6cd5\u6295\u80ce\u8f6c\u4e16\uff0c\u98d8\u8361\u5728\u8fd9\u4eba\u4e16\u91cc\u3002\u542c\u8bf4\u6709\u4e00\u79cd\u795e\u79d8\u7684\u91d1\u4e39\u53ef\u4ee5\u6d88\u9664\u6028\u6c14\u89e3\u6551\u7075\u9b42\u3002\u4f60\u80fd\u5e2e\u6211\u627e\u5230\u91d1\u4e39\u5417\uff1f"], "\u53ea\u6709\u4fee\u70bc\u91d1\u4e39\u624d\u80fd\u89e3\u6551\u5c48\u539f\u7684\u7075\u9b42\uff0c#b#m230000003##k\u7684#b#p2060006##k\u77e5\u9053\u4fee\u70bc\u91d1\u4e39\u5728\u54ea\u91cc\u3002\u3002\u3002", ["\u4f60\u624d\u662f\u771f\u6b63\u52c7\u6562\u6b63\u4e49\u7684\u5192\u9669\u5bb6\u3002"], {}, []], [8574, 1, "\u89e3\u6551\u5c48\u539f", ["\u6211\u53ea\u9700\u8981#b#t4031952##k\u3002\u3002\u3002"], "\u53ea\u6709\u4fee\u70bc\u91d1\u4e39\u624d\u80fd\u89e3\u6551\u5c48\u539f\u7684\u7075\u9b42\u3002", ["\u54c7~ \u6211\u7ec8\u4e8e\u80fd\u6295\u80ce\u8f6c\u4e16\u4e86\u3002\u3002\u3002\u592a\u8c22\u8c22\u4f60\u4e86\uff01"], {}, [2040900]]], greeting="\u6211\u662f#b#p9330015##k\u7684\u7075\u9b42\u3002\u56e0\u6028\u6c14\u592a\u91cd\u800c\u65e0\u6cd5\u6295\u80ce\u8f6c\u4e16\uff0c\u98d8\u8361\u5728\u8fd9\u4eba\u4e16\u91cc\u3002\u542c\u8bf4\u6709\u4e00\u79cd\u795e\u79d8\u7684\u91d1\u4e39\u53ef\u4ee5\u6d88\u9664\u6028\u6c14\u89e3\u6551\u7075\u9b42\u3002\u4f60\u80fd\u5e2e\u6211\u627e\u5230\u91d1\u4e39\u5417\uff1f";
var choices=[], picked=null, page=0, stage="menu", closed=false, started=false, origin=-1, rewardIndex=-1;
function finish(){closed=true;cm.dispose();}
function validPlace(){
    return cm.getNpc()==npcId && cm.getMap().isTown() && (origin<0 || origin==cm.getMapId());
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
