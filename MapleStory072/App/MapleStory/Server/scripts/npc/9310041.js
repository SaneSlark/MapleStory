// CMS072 client-backed ordinary quest entry. Native checks/actions own all rewards.
var npcId=9310041, maps=[702050000], entries=[[8530, 0, "拜山门", ["施主想要进少林寺参观啊，最近山路上多了许多怪物和剪径的强人，如果你能清除他们并带来我要的东西，就让你进#b大雄宝殿#k。"], "#b#p9310041##k说最近山路上的怪物和强盗变多了，伤害了很多香客和旅游者。希望我能帮忙清理一下，带给他：\n#r#t4000393# 50#k个,#r#t4000394# 40#k个,#r#t4000395# 30#k个,#r#t4000396# 20#k个,#r#t4000397# 10#k个，就可以让我进#b#m702100000##k参观。 \n\n#t4000393#  #b#c4000393##k / 50\n#t4000394#  #b#c4000394##k / 40\n#t4000395#  #b#c4000395##k / 30\n#t4000396#  #b#c4000396##k / 20\n#t4000397#  #b#c4000397##k / 10", ["你答应了，太好了，施主真乃善人也。只要带来#b#t4000393#50个、#t4000394#40个、#t4000395#30个、#t4000396#20个、#t4000397#10个#k。我就做主许你进入#m702100000#参观。"], {}, []], [8530, 1, "拜山门", ["啊，太好了。消灭了不少怪物和强盗吧，那么我就让你进少林参观吧。"], "#b#p9310041##k说最近山路上的怪物和强盗变多了，伤害了很多香客和旅游者。希望我能帮忙清理一下，带给他：\n#r#t4000393# 50#k个,#r#t4000394# 40#k个,#r#t4000395# 30#k个,#r#t4000396# 20#k个,#r#t4000397# 10#k个，就可以让我进#b#m702100000##k参观。 \n\n#t4000393#  #b#c4000393##k / 50\n#t4000394#  #b#c4000394##k / 40\n#t4000395#  #b#c4000395##k / 30\n#t4000396#  #b#c4000396##k / 20\n#t4000397#  #b#c4000397##k / 10", [], {}, []], [8541, 1, "佛珠2", ["果然是灭魔佛珠啊，贫僧稍待便送与方丈。多谢施主，一些小小的礼物，请施主收下。"], "#b#p9310051##k告诉我，最近妖怪突然增加，已经找回的那8颗佛珠就是在那些妖怪身上发现的。所以剩下的100个应该也是某些妖怪藏起来了。希望我找到100颗玉佛珠并交给山门的#b#p9310041#。\n\n#t4000403# #b#c4000403##k/100", [], {}, []]], greeting="少林乃传承千年的佛门净土，请各位施主小心参观";
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
