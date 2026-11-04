// CMS072 client-backed ordinary quest entry. Native checks/actions own all rewards.
var npcId=9250012, maps=[500000000], entries=[[4211, 0, "加入水上市场维护队1", ["呵呵~~我是维护水上市场和平的“水上市场维护队”的队长！如果有人想侵犯这里，我决不手软，以正义的名义惩治他们。哈哈哈！咦？你在这里做什么？你也想加入我们维护队吗？"], "哦~！很不错嘛！去找找志同道合的5名队员，拿给他们维护队的信，把确认印章拿回来。想要成为水上市场维护队的成员，没那么简单啊。第一位队员是 #b#p9250003##k。", ["哈！下定决心了很好。你要是真心想加入维护队就要通过我们的验证。你先去找维护队5名成员，拿回盖有他们确认印章的#b#t4031383##k！", "你先去找第一个成员#b#p9250003##k，然后他会告诉你下一位成员。好！出发吧。。。考验开始了！"], {}, []], [4216, 1, "完成加入水上市场维护队", ["干得很好！拿到了5个印章！"], "终于得到了全部的确认印章了,去找队长#b#p9250012##k,我就可以加入维护队了.", ["以后要做一个称职的水上市场维护队队员！祝贺你！！！"], {}, []], [4217, 0, "维护队的第一个任务", ["啊哈~欢迎我们新任的队员！给你第一个任务，去守护可爱的少女，不让怪物们伤害她。怎么样？能胜任吧？"], "我新手上任的第一个任务就是让我除掉扰乱水上市场的怪物们。\n\n#o2130103# #r#a42171##k \n#o9420000# #r#a42172##k", ["OK!很好！身为维护队队员，必须有挑战精神。你要做的是消灭掉打扰#p9250006#的怪物#r#o2130103# 50只#k和#r#o9420000# 50只#k。如果你完成了任务，#p9250006#会很高兴的。"], {}, []], [4217, 1, "维护队的第一个任务", ["你不愧是我们维护队的成员，这么漂亮的完成了任务。这是对你的奖赏！"], "我新手上任的第一个任务就是让我除掉扰乱水上市场的怪物们。\n\n#o2130103# #r#a42171##k \n#o9420000# #r#a42172##k", ["以后要更加努力，成为水上市场维护队的光荣的一员！哈哈哈！还有一个任务，你要是有兴趣再来找我。"], {}, []]], greeting="你好？有什么事吗？";
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
