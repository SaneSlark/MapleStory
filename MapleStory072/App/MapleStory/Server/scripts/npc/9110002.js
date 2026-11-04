// CMS072 client-backed ordinary quest entry. Native checks/actions own all rewards.
var npcId=9110002, maps=[800000000], entries=[[4300, 0, "亚希子的苦恼", ["啊啊…… 再怎么清扫也还是很脏啊！啊，你好？很抱歉…… 让客人看到了这个模样……", "抱歉。实际上，最近神龛周边出现了很多#o9400000#。看到以樱花闻名的#m800000000#变得如此脏乱，我觉得很伤心。如果你有时间的话，可以帮我一起打扫#b#t4000064##k吗？"], "因为#o9400000#很难清扫，#p9110002#希望找#b#t4000064##k100个帮忙。因为不愿看到满地樱花的#m800000000#变得肮脏，我决定帮助她。那么，去收集#t4000064#吧……？\n\n#i4000064##t4000064# #b#c4000064#/100", ["可以帮我一起打扫……？ 您真是个善良的人啊！那么，帮我收集#b#t4000064##k100个。之后的事儿交给我就可以了。那么，拜托你了。"], {}, []], [4300, 1, "亚希子的苦恼", ["啊，收集完#t4000064#了啊！"], "因为#o9400000#很难清扫，#p9110002#希望找#b#t4000064##k100个帮忙。因为不愿看到满地樱花的#m800000000#变得肮脏，我决定帮助她。那么，去收集#t4000064#吧……？\n\n#i4000064##t4000064# #b#c4000064#/100", ["感谢你答应我的请求！打扫了#t4000064#，神龛多少变得干净一些了。非常感谢。"], {}, []], [4301, 0, "击退亚希子的火狸", ["你好？#m800000000#很美丽吧？不过最近#m800000000#也发生了令人头痛的事情。经常发生#b#o9400001##k袭击食品商店的事情。#m800000000#的另一个亮点是销售各类食品的商店…… 因为#o9400001#捣乱，居民们都很担心。", "您看起来很强…… 方便的话，可以帮居民击退#o9400001#吗？也为了#m800000000#的特色食品。"], "#m800000000#周边卖食物的商店因#b#o9400001##k都陷入了困境，我得帮帮他们。如果一个都吃不到，那就太可惜了～ 哪儿可以抓到#o9400001#呢？\n\n#o9400001# #r#a43011##k ", ["可以帮忙？！非常感谢！抓到#b#o9400001# 100只#k后告诉我一声。这样的话，可以降低村庄居民的损失。拜托你了。"], {}, []], [4301, 1, "击退亚希子的火狸", ["击退全部#o9400001#了。不是少数哦……"], "#m800000000#周边卖食物的商店因#b#o9400001##k都陷入了困境，我得帮帮他们。如果一个都吃不到，那就太可惜了～ 哪儿可以抓到#o9400001#呢？\n\n#o9400001# #r#a43011##k ", ["非常感谢。居民们不用再担心了！这是村庄居民做的食品，也算是酬谢。非常感谢。"], {}, []]], greeting="你好？天气真好~";
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
