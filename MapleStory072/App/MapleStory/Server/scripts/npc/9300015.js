// CMS072 client-backed ordinary quest entry. Native checks/actions own all rewards.
var npcId=9300015, maps=[701000000], entries=[[8546, 0, "参鸡汤的材料", ["我就是大当家！什么？我那么有名吗？呵呵。。。参鸡汤是我的拿手好菜。可是我现在材料不够了。你去帮我弄鸡肉30个，百年人参2个，我就马上给你做好。"], "#t4000252#出在鸡身上，#t4031029#在#o9600007#出没的山上。。。\n\n#t4000252# #b#c4000252##k/30\n\n#t4031029# #b#c4031029##k/2\n", ["快去吧，一个都不能少。。。"], {}, []], [8546, 1, "参鸡汤的材料", ["参鸡汤的材料一个都不能少，人参和嫩鸡肉。。。"], "#t4000252#出在鸡身上，#t4031029#在#o9600007#出没的山上。。。\n\n#t4000252# #b#c4000252##k/30\n\n#t4031029# #b#c4031029##k/2\n", ["你还真行！我马上给你做好，等等啊~"], {}, []], [8547, 0, "参鸡汤做好了", ["快做好了，等等。。。好香啊~"], "做好#b参鸡汤#k主要是火候，慢慢熬。。。", ["明明女士一定会很喜欢的。。。 哈哈。。。"], {}, []], [8547, 1, "参鸡汤做好了", ["参鸡汤，火候要适中。。。"], "做好#b参鸡汤#k主要是火候，慢慢熬。。。", ["我的手艺天下闻名，小小参鸡汤算什么哈哈~"], {}, []]], greeting="来来来~排队排队！一个一个来，不要急。";
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
