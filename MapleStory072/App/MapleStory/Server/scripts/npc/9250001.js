// CMS072 client-backed ordinary quest entry. Native checks/actions own all rewards.
var npcId=9250001, maps=[500010100], entries=[[4208, 0, "给蛇宠物的营养餐1", ["哎呀。。怎么办才好？最近我的心肝宝贝宠物蛇的健康不太好。你看看它的眼睛，无精打采的，呆呆的，好可怜。我很担心。就因为最近天气太热了，宝贝才生了病，", "所以你能帮我去找找能治宝贝病的营养餐好吗？什么？为什么我自己不去？最近天气太热，还很危险我一个女人怎么去呢？"], "去找找给#b#p9250001##k宠物蛇的营养餐。\n\n#t4000252# #b#c4000252#/50#k \n#t4000253# #b#c4000253#/50#k", ["我知道你行！就帮我找宝贝能吃一星期的营养餐#b#t4000252##k和 #b#t4000253##k#b各50 个#k。"], {}, []], [4208, 1, "给蛇宠物的营养餐1", ["哇~带来这么多~！在这么短的时间里你能拿来这么多，真的很感谢~"], "去找找给#b#p9250001##k宠物蛇的营养餐。\n\n#t4000252# #b#c4000252#/50#k \n#t4000253# #b#c4000253#/50#k", ["吃了你带来的营养餐，我的宝贝蛇很块就会好起来的，谢谢！"], {}, []], [4209, 0, "给蛇宠物的营养餐2", ["哎呀！你不是上次帮助我找回营养餐的人吗？正好你来了，我的宝贝蛇吃了你上次拿来的已经好多了。", "可是还没痊愈，你再帮帮我好吗？你看我可怜的宝贝。"], "去找找给#b#p9250001##k宠物蛇的营养餐。\n\n#t4000252# #b#c4000252#/50#k", ["我就知道你心地最善良~这回你找来 #b#t4000252# 50只#k好吗？"], {}, []], [4209, 1, "给蛇宠物的营养餐2", ["啊呀~这么快就带回来了鸡肉？我宝贝蛇最喜欢吃了。"], "去找找给#b#p9250001##k宠物蛇的营养餐。\n\n#t4000252# #b#c4000252#/50#k", ["吃了你带来的营养餐，我的宝贝蛇很快就会好起来的，谢谢！"], {}, []]], greeting="我的宠物蛇多可爱呀是不？帮我一个忙好吗？";
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
