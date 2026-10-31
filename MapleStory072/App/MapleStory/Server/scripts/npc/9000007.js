// White Scroll Maker By Sawyer of LynnStory
//Nana(H) (9201001)
importPackage(net.sf.odinms.client);
var status = 0;



function start() {
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}


function qOrigAction(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("嗷呜!?");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("战士们正在休息....小声点！战士的武器在一旁闪着光芒..#v1402037# #v1402036# .如果你想要的话..请拿来#b 力量水晶20个#k#v4005000#, #b #k#v1402035#, 以及 #b5E冒险B. .....");
			}
		else if (status == 1) {
			if ((cm.haveItem(4005000, 20)) && (cm.haveItem(1402035)) && (cm.getMeso() >= 500000000)) {
			cm.sendYesNo("不错喔，看来你已经收集到所需要的所有材料..现在就给你么?");
			}
			else if (!cm.haveItem(4005000, 20)) {
			cm.sendOk("你所收集的 力量水晶20个#k#v4005000#没有达到我所要求的数量.");
			cm.dispose();
			}
			else if (!cm.haveItem(1402035)) {
			cm.sendOk("你还没有#k#v1402035#");
			cm.dispose();
			}
			else if (!cm.getMeso() <= 500000000) {
			cm.sendOk("很抱歉，你身上的金币不够支付本次制作卷轴的费用.");
			cm.dispose();
			}
			
		}
		else if (status == 2) {
			cm.gainItem(4005000, -20);
			cm.gainItem(1402035, -1);
			cm.gainMeso(-500000000);
			cm.gainItem(1402037, 1);
			cm.gainItem(1402036, 1);			
}
}
}
function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    qOrigAction(mode, type, selection);
}

/* AUTO-QUEST-BEGIN */
/* CMS client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[];
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
