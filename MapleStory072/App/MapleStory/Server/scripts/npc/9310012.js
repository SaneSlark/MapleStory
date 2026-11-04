// CMS072 client-backed ordinary quest entry. Native checks/actions own all rewards.
var npcId=9310012, maps=[701000000], entries=[[4104, 0, "摄影师赵先生的请求。", ["（嚓喀嚓咔）可以转个身吗～ 好！（咔嚓喀嚓）你是职业模特吗？身材真好。", "有什么事儿吗？哦～ 需要证件照？但是现在无法拍证件照。不久前去野外拍照的时候，把三脚架弄丢了。因为还有其他客人等着，您能不能帮忙找回那个三脚架呢？"], "据说去帮#b#p9310010##k农活的话，可以找到#b#p9310012##k丢失的物品……\n\n#t4031290# #b#c4031290#/1#k", ["一直往西走，有一个分岔路口，我是在那儿丢的。好象#b#p9310010##k帮我保管好了，去帮我拿一下#t4031290#吧。", "对了！帮#b#p9310010##k做一下农活吧。本来农活就很累，加上帮着守卫#b#t4031290##k，肯定有很多农活没干完。"], {}, []], [4104, 1, "摄影师赵先生的请求。", ["找回了我丢的东西了？好，那拍照吧。脸稍微转一下，茄子～ 真的很像职业模特哦。"], "据说去帮#b#p9310010##k农活的话，可以找到#b#p9310012##k丢失的物品……\n\n#t4031290# #b#c4031290#/1#k", ["那么，走好～ 需要拍照的话，随时来找我。请走好哦。"], {}, []]], greeting="这里是上海外滩。我会给你照一张很好的纪念照片！";
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
