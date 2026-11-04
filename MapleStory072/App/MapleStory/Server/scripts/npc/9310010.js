// CMS072 client-backed ordinary quest entry. Native checks/actions own all rewards.
var npcId=9310010, maps=[701010300], entries=[[4100, 0, "变得暴躁的家畜", ["哎呦，我的腰啊。本来做农活就很累，加上家畜变得暴躁，真是累啊。很担心白忙活一场。你有时间帮帮我吗？"], "击退暴躁的家畜之后，去找#b#p9310010##k。\n\n#t4000189# #b#c4000189#/100#k \n#t4000190# #b#c4000190#/100#k", ["谢谢。最近家畜变得很暴躁，跳出围栏毁掉了一些庄稼。你去击退那些毁掉庄稼的#r#o9600003##k和#r#o9600004##k，并带回#b#t4000189##k和#b#t4000190##k #b各100个#k作为证据吧。"], {}, []], [4100, 1, "变得暴躁的家畜", ["我托付的事情怎么样了？带了这么多羊毛和山羊角，看来你已经教训了那些毁掉我庄稼的家伙们。做得好，做得好。非常感谢。"], "击退暴躁的家畜之后，去找#b#p9310010##k。\n\n#t4000189# #b#c4000189#/100#k \n#t4000190# #b#c4000190#/100#k", ["很了不起的年轻人啊。有一件事，相信你做得话，应该不难。可以帮忙的话，来找我吧。"], {}, []], [4105, 0, "帮杨先生做农活", ["来这偏僻的乡下，有什么事吗？来找#b#p9310012##k的#b#t4031290##k？因为要保管那个东西，我的农活都耽误了。你帮我做些农活的话，我就把这个给你，你愿意帮我吗？"], "去帮#b#p9310010##k吧。\n\n#t4000193# #b#c4000193#/100#k", ["好的。希望你把牛带着的#b#t4000193##k收集过来。需要维修出故障的#b#t4000193##k。帮我收集#r#o9600007##k带着的#b#t4000193#100个#k吧。那就拜托你了。"], {}, []], [4105, 1, "帮杨先生做农活", ["哎呦～ 不像一般的年轻人，你很塌实啊。这么快就把东西收集过来了。"], "去帮#b#p9310010##k吧。\n\n#t4000193# #b#c4000193#/100#k", ["感谢你帮忙。我给你的#b#t4031290##k，不要丢了。拿给#k #b#p9310012##k吧。请走好。"], {}, []], [4106, 0, "丢失的照相机用三脚架", ["我知道你会回来找我的。是因为丢了我给你的#b#t4031290##k了吧？我都说了多少遍了…… 我在地里干活的时候发现了你丢的#b#t4031290##k。", "幸好我发现了，不然该出事了？如果你帮我个忙，我就吧#b#t4031290##k还给你，怎么样？"], "去帮#b#p9310010##k。\n\n#t4000192# #b#c4000192#/50#k", ["#b#t4000193##k已经修好了。但是#r#o9600006##k鼻子上的#b#t4000192##k好像坏了，老是掉链。帮我拿#r#o9600006##k的#b#t4000192##k #b50个#k吧。拜托你了。"], {}, []], [4106, 1, "丢失的照相机用三脚架", ["怎么样？农活很累吧？按照约定，我把丢失的东西给你。"], "去帮#b#p9310010##k。\n\n#t4000192# #b#c4000192#/50#k", ["这次千万不要丢了#b#t4031290##k，拿给#k #b#p9310012##k。请走好。"], {}, []]], greeting="这里是上海郊外的农村。";
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
