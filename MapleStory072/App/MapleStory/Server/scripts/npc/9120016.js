// CMS072 client-backed ordinary quest entry. Native checks/actions own all rewards.
var npcId=9120016, maps=[801000300], entries=[[8003, 1, "阳子的请求2", ["…。不会是从阳子那里听说什么才来的吧？"], "听说住在昭和村里阳子最好的朋友--小岚正处于困境，请求帮助。去找小岚了解详细情况吧。", ["子也真是的…！ 之前见到她的时候，好像很忙的样子，走得非常匆忙…我还记得啊…"], {}, []], [8004, 0, "小岚的请求", [" 不管怎么样，既然都到这里来了，希望能听一下我说的事情。有一天，走在后街的时候，突然出现了可怕的人，偷走了我的手提包。虽然向派出所报了案，但还不知道有没有找到呢。帮我问一问派出所前面的目幕警官好吗？ 我现在工作很忙没有时间呢。"], "前几天小岚曾到派出所报案说手提包被抢了，请目幕警官帮忙把手提包找回来。她要我去问问目幕警官，有没有找到。哎~这个村子的人委托的事太多了~! 快烦死了~!", ["谢谢~。那么，拜托了。"], {}, []], [8005, 0, "小岚的手提包", [" 啊！ 还没找到啊？ 怎么办~~！ 不快点找到就麻烦啊。啊！ 对了~！ 你帮我找就可以了啊！ 会给你丰厚的报酬…对…在昭和后街被带着猫爪的人抓伤了。教训他们的话应该能找到。怎么样？ 能帮我找回来吗？"], "我只好替目幕警官帮小岚找回手提包。 听说好像是那些在后街闲逛的家伙们抢了她的手提包。", ["我会等你找回来。对我来说确实是很重要的物品。"], {}, []], [8005, 1, "小岚的手提包", ["我的手提包找到了？"], "我只好替目幕警官帮小岚找回手提包。 听说好像是那些在后街闲逛的家伙们抢了她的手提包。", [" 哇~！ 就是这个！ 真的谢谢你~。这是表达我谢意的物品，请收下吧。"], {}, []], [8029, 0, " 演员修炼", ["这次说不定能拍摄我主演的电影呢。不过，出了点问题…。能听一下我说的事情吗？"], "原来小岚的面试就是清除 #b#o9400110##k和 #b#o9400111##k喔??\n\n#o9400110##r#a80291##k\n#o9400111##r#a80292#", ["事实上… 这个电影是动作片，另一位主角受伤了。所以，正在找年轻，也会一些功夫动作的人选。", "你看起很年轻，似乎也会一点功夫，不想挑战跟我的对手戏吗？", " 但是，试镜还是需要的~。唉呀呀，不用那么紧张。击退#b#o9400110##k和 #b#o9400111##k各10名就可以了。 能演好混战的人，才是这次电影演出最重要的条件，用心做吧。"], {}, []], [8029, 1, " 演员修炼", ["哇~ 那么年轻就可以把敌人轻易的消灭了啊，果然有武打巨星的潜质啊。那就推荐你到黑泽导演那里，见一见总是好的。"], "原来小岚的面试就是清除 #b#o9400110##k和 #b#o9400111##k喔??\n\n#o9400110##r#a80291##k\n#o9400111##r#a80292#", [], {}, []]], greeting="这次我是主角喔！";
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
