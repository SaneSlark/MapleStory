function start(){qfresh=true;if(!qQuestAction(1,0,0)){cm.sendOk("请通过任务栏查看当前的新手任务。");cm.dispose();}}
function action(mode,type,selection){qQuestAction(mode,type,selection);}

/* CMS client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[1005, 1, "传递信件", ""], [1006, 0, "长老的回信", "这确实是#p2103#的信件！哦哦。。。谢谢你呀。我正在为没收到这封信担心呢！来！这是我的#b回信#k，把这封#b回信#k交给#p2103#吧。"], [1022, 0, "路卡斯可爱的女儿", "恩……你看起来还像个菜鸟冒险家，但逛得很悠闲啊。我的女儿还小而且胆子小，不能像你那样…… \\r\\n#b#L0# 有女儿吗？#l"], [1027, 1, "麦加的请求", "恩…… 你是谁？是#p12100#派来的？#p12100#为什么派你来？\\r\\n#b#L0# #p12100#想加工资？#l\\r\\n#L1# 因为逛彩虹岛的菜鸟冒险家增多，#p12100#一个人做有些困难。#l\\r\\n#L2# #p12100#说想和#p12000#对练，让我传话。#l"]];
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
