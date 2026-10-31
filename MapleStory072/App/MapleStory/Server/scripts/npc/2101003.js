function start() {
    qfresh = true;
    if (qQuestAction(1, 0, 0)) return;
	cm.sendOk ("我的身材一向都是这么好,羡慕吧.");
	cm.dispose();
}


function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
}

/* AUTO-QUEST-BEGIN */
/* CMS client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[3931, 0, "拥有铁锤的男子", "你是谁？有什么事吗？什么？想加入沙子图团？你从哪儿听来的？不，这倒不重要。你真想成为沙子图团员吗？"], [3931, 1, "拥有铁锤的男子", "击退了#o2100105# 100只？真的吗？不敢相信啊？…… 嘿嘿，看来是真的哦？"], [3932, 0, "阿丁的考验", "啊啊～ 头痛啊。什么事？#o2100106#和 #o2100107# 一直在欺负居民们。王妃都不管居民的安危，只管收集那些奇怪的宝石，受苦的是那些居民。"], [3932, 1, "阿丁的考验", "什么？这么快就击退了#o2100106#和 #o2100107#？它们不是泛泛之辈啊…… 开玩笑吧？什么？这是#t4000326#和 #t4000327#...真的击退了它们？不可能！"], [3933, 0, "阿丁的沙子图团", ""], [3933, 1, "阿丁的沙子图团", "哈哈～ 好久没有过这么爽快的对练了。要对付贪心、会法术的王妃，需要强悍的人。依你这个实力，可以加入沙子图团。"]];
function qQuestAction(mode,type,selection) {
    if (!qactive) {
        if (!qfresh || mode!=1) return false;
        qfresh=false; qchoices=[];
        var menu="";
        for(var i=0;i<qdata.length;i++) {
            var d=qdata[i], state=cm.getQuestStatus(d[0]);
            var quest=Packages.server.quest.MapleQuest.getInstance(d[0]);
            if ((d[1]==0 && quest.canStart(cm.getPlayer(),cm.getNpc())) || (d[1]==1 && state==1)) {
                menu+="\r\n#L"+qchoices.length+"#"+(d[1]==0?"[接受] ":"[完成] ")+d[2]+"#l";
                qchoices.push(d);
            }
        }
        if(qchoices.length==0) return false;
        if(typeof qOrigAction=="function") menu+="\r\n#L"+qchoices.length+"#其他服务与对话#l";
        qactive=true; qstatus=0; cm.sendSimple(menu); return true;
    }
    if(mode!=1) { qactive=false; qfresh=false; cm.dispose(); return true; }
    if(qstatus==0) {
        if(selection==qchoices.length && typeof qOrigAction=="function") {qactive=false;return false;}
        if(selection<0 || selection>=qchoices.length) { cm.dispose(); return true; }
        qchosen=qchoices[selection]; qstatus=1;
        cm.sendYesNo(qchosen[3] || qchosen[2]); return true;
    }
    if(qstatus==1) {
        qstatus=2;
        var q=Packages.server.quest.MapleQuest.getInstance(qchosen[0]);
        if(qchosen[1]==0) {
            if(q.canStart(cm.getPlayer(),cm.getNpc())) { cm.startClientNpcQuest(qchosen[0]); return true; }
        } else {
            if(q.canComplete(cm.getPlayer(),null)) { cm.completeClientNpcQuest(qchosen[0]); return true; }
            else cm.sendOk("任务条件尚未完成，请查看任务栏中的物品和狩猎要求。");
        }
        cm.dispose(); return true;
    }
    cm.dispose(); return true;
}
/* AUTO-QUEST-END */
