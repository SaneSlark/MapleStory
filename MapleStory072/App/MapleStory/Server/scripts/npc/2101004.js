/* 
	Tigun
	Palace Guard
*/

function start() {
    qfresh = true;
    if (qQuestAction(1, 0, 0)) return;
	cm.sendNext("这是没有太大的＃ bpalace ＃ k ，但会尽到我们能获得一个更美好的宫殿建！任何人的允许说话国王和王后，但是不要指望他们会对你友善。嗯...也许国王阿卜杜拉八，如果你追上他，他不懒，不付费，注意情绪.");
    cm.dispose();
}
function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
}

/* AUTO-QUEST-BEGIN */
/* CMS072 client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[3901, 0, "宫殿警卫 提干", "你在干嘛？为什么在宫殿前晃悠？这里不是一般人随便进出的地方！ 是#m260000000#的苏丹所在的地方！什么？想进宫殿里头？我怎么能相信你这样外来的探险家，让你进去呢？绝对不行！但是……"], [3901, 1, "宫殿警卫 提干", "嘻嘻嘻，好。你果然对苏丹忠诚。很值得信任哦？我给你#t4031582#吧。有这个之后，你就可以去宫殿的任何一个地方了。要感谢我哦。"], [3939, 0, "提干的头发", "什么事？一般人不能随便进出宫殿…… 特别是闲杂人等。不是闲杂人？那为什么在这边摇晃？什么？给你一根头发？为什么？要用在什么地方？"], [3939, 1, "提干的头发", "我不知道你想把它用在什么地方。但既然交换了，就成交了。不能再反悔了，我绝不会把锂矿石还给你，知道吗？是你要说换的，不能反悔哦。"]];
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
