// CMS072 client-backed ordinary quest entry. Native checks/actions own all rewards.
var npcId=9310048, maps=[702070100], entries=[[8531, 0, "藏经阁的秘密1", ["施主已经是四转的强大冒险者啊，如此强劲的实力，是否能帮我少林一个忙呢？"], "#b#p9310048##k觉得少林出现大量怪物最大的秘密就在藏经阁。希望我消灭#b100只 #o9600020##k，并收集#r50个 #t4000407##k 回来给他分析。 \n\n #o9600020# #r#a85311##k \n #t4000407# #b#c4000407##k/50", ["根据我的观察，最近一段时间少林怪物肆虐的源头应该就是这藏经阁了。只是还不知道阁中到底发生了什么事情。你去消灭掉#b100只 #o9600020##K，再拿#b50个 #t4000407##k来给我，我好仔细研究一下。"], {}, []], [8531, 1, "藏经阁的秘密1", ["恩，数量正好，我收下了，等会再来找我，我会告诉你结果的。"], "#b#p9310048##k觉得少林出现大量怪物最大的秘密就在藏经阁。希望我消灭#b100只 #o9600020##k，并收集#r50个 #t4000407##k 回来给他分析。 \n\n #o9600020# #r#a85311##k \n #t4000407# #b#c4000407##k/50", [], {}, []], [8532, 0, "藏经阁的秘密2", ["啊，施主你来了。我已经分析了上次带来的#b#t4000407##k，很可惜，这种怪物还太差，无法得知详细情况。能再帮我一个忙吗？"], "#b#p9310048##k分析了#t4000407##k的构造以及其中蕴涵的气息，认为需要更强大的怪物身上的东西。希望我再去消灭 #r80个 #o9600024##k，并收集 #r50个#t4000402##k带给藏经阁的#b#p9310046#。 \n\n#t4000402# #b#c4000402##k/50\n#o9600024# #r#a85321#", ["这次需要的是#b50个 #t4000402##k，顺便再消灭#r80个 #o9600024##k吧。对了，三楼的#b#p9310046##k对这个比较有研究，你把#b#t4000402##k直接带给他就好了。"], {}, []], [8534, 1, "藏经阁的秘密4", ["哦，关键在心中啊，我明白了。施主找人一起到阁顶供奉着的达摩画像那里看看，应该就能找到真相了。"], "#b#p9310047#大师#k出关后告诉我关键在于控制机关人的机关。于是要我收集 #r30个 #t4000406#、30个 #t4000402#、30个 #t4000407##k，并交给#b#p9310048##k。\n\n#t4000406# #b#c4000406##k/30\n#t4000402# #b#c4000402##k/30\n#t4000407# #b#c4000407##k/30", [], {}, []]], greeting="少林乃传承千年的佛门净土，请各位施主小心参观";
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
