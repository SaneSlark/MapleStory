// CMS072 client-backed ordinary quest entry. Native checks/actions own all rewards.
var npcId=9250014, maps=[500020100], entries=[[4205, 1, "芬拉的晚会服和皮鞋", ["找我老婆有什么事情？啊。。。晚会服。可是我老婆最近闭门不出，不像以前喜欢出去交朋友。。。我怀疑是不是更年期的问题。。。", "反正，已经有好多人来请求都被拒绝了。。"], "过几天村里有一个盛大的庆祝晚会， #p9250000#没有晚会服。去找村里的长老 #b#p9250014##k借一件晚会服和皮鞋给 #p9250000#。", ["已经来了，我就去跟我老婆说说，过一会儿你再来。"], {}, []], [4206, 0, "长老的条件", ["我试着说服我老婆，可是最近她遇到了很不愉快的事情，说没心情做衣服。你能解决那件事的话，她说就给#p9250000#做件漂亮的晚会服。"], "长老说要是能消灭老婆最怕的癞蛤蟆，就答应缝制晚会服。 \n\n#o9420000# #r#a42061##k", ["我老婆前几天在散步的时候，被癞蛤蟆吓着了。最近茶不思饭不想的。你去捉回  #r#o9420000##k #r50只#k，我再跟老婆说说准备晚会服。"], {}, []], [4206, 1, "长老的条件", ["你真的很不错，像这样互补长短多好！我跟我老婆说了你为村里费了不少力，她很高兴就答应准备晚会服了！"], "长老说要是能消灭老婆最怕的癞蛤蟆，就答应缝制晚会服。 \n\n#o9420000# #r#a42061##k", ["晚会服还没准备好呢，你过一会儿再来。"], {}, []], [4207, 0, "完成晚会服和皮鞋", ["多亏你我老婆心情很好，很快就准备好了漂亮的晚会服了。你拿去吧！"], "#p9250014#的老婆完成了一件非常漂亮的晚会服。可是还没有能配上的皮鞋，漂亮的皮鞋被#r鳄鱼#k们抢走了。去夺回皮鞋和晚会服一起拿给#b#p9250000##k。 \n\n#t4031382# #b#c4031382 #/1#k \n#t4031405# #b#c4031405#/1#k", ["对了，还需要匹配的皮鞋对吧？做好的皮鞋小精灵们穿着的时候被附近的鳄鱼群抢走了。 你去#r鳄鱼#k那里找回皮鞋，和晚会服一起拿给 #b#p9250000##k吧。"], {}, []], [4214, 1, "加入水上市场维护队4", ["找我有什么事情？什么？你想加入维护队？好久没听到这样的好消息了。"], "#b#p9250013##k告诉我村里的长老#b#p9250014##k也是队员。听说长老住的地方在通过沼泽地带的孤立的一个地方，出发！！！", ["我正在冥想中，过一会儿再来跟我谈谈。"], {}, []], [4215, 0, "加入水上市场维护队5", ["冥想总是能让头脑清晰。你有时间也试试。对了，你说要成为维护队的成员？拿过来我给你盖章。"], "最后一名队员是#b#p9250004##k，听说他是一位有名的武艺师傅。。。", ["盖好了。最后一名成员是#b#p9250004##k。他经常在沼泽一带，以去看看吧。"], {}, []]], greeting="找我什么事？";
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
