// CMS072 client-backed ordinary quest entry. Native checks/actions own all rewards.
var npcId=9250000, maps=[500000000], entries=[[4200, 0, "芬拉的拜托", ["呜呜呜。。。世道太不公平了，让我长了这副苦瓜脸。镜子呀镜子~告诉我这世上还有比我更丑的人吗？呼~怎么会有呢。。。", "只要稍微让我漂亮点也不至于我生出了心病。没过多久就有庆祝晚会了我怎么办？你有时间吗？帮帮我好吗？"], "芬拉对自己的外貌非常没有自信垂头丧气，追求美丽的欲望从没有放弃过。去找在天空之城的#b#p2012012##k，看看他是否有能变漂亮的秘方。。。", ["真的？非常感谢。。听说在天空之城，有个美女叫#p2012012##k。从来没有人见过她的真面目。有人说她其实长得很丑陋，用化妆品遮盖着真面目。", "所以。。。你能去一趟天空之城，问问 #b#p2012012##k，她会有方法让我变得更漂亮的，帮帮我好吗？"], {}, []], [4204, 1, "给芬拉的魔法化妆品", ["哎呀~！！你终于回来了，还带来了#p2012012#的高级化妆品。你真棒！我也能变得漂亮了，真的很谢谢你重新给了我自信。"], "化妆品终于到手了，赶紧拿给 #b#p9250000##k。 \n\n#t04031392# #b#c04031392#/1#k", ["再次表示我的感谢，下次再路过请来看看我变得有多漂亮吧！再见~"], {}, []], [4205, 0, "芬拉的晚会服和皮鞋", ["啊。。。是你。很高兴又见到你了。你问我为什么这样垂头丧气嘛？没过多久村里有个庆祝晚会，可是我没有晚会服和皮鞋。你看我的衣服破旧不堪，怎么能见人。。。呜呜~我没有可以穿的衣服。。。", "不好意思，为了让我变得更漂亮你已经帮了我很多，我还是这样子。。。你还能再帮我一次吗？我真的很想参加晚会，帮我借来晚会服和皮鞋好吗？"], "过几天村里有一个盛大的庆祝晚会， #p9250000#没有晚会服。去找村里的长老 #b#p9250014##k借一件晚会服和皮鞋给 #p9250000#。", ["真的？你愿意帮助我对吗？谢谢。。。那你知道从哪里能借到晚会服和皮鞋吗？", "#b#p9250014##k长老的夫人针线手艺不一般，可是听说最近她不轻易帮别人缝制衣服了。。", "你去了说不定能行，去找#b#p9250014##k长老拜托他，借回晚会服和皮鞋吧。"], {}, []], [4207, 1, "完成晚会服和皮鞋", ["哇~！我不是在做梦吧。这么漂亮！我不知道怎么表示我的感激，这是小小心意。。。"], "#p9250014#的老婆完成了一件非常漂亮的晚会服。可是还没有能配上的皮鞋，漂亮的皮鞋被#r鳄鱼#k们抢走了。去夺回皮鞋和晚会服一起拿给#b#p9250000##k。 \n\n#t4031382# #b#c4031382 #/1#k \n#t4031405# #b#c4031405#/1#k", ["没有你我都不知道怎么办，现在我心潮澎湃，就等着穿上参加晚会了，谢谢！"], {}, []]], greeting="眼睛也歪，鼻子也歪~我怎么这么难看呢？";
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
