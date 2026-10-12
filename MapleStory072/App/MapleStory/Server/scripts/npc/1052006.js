importPackage(net.sf.odinms.client);

var status = 0;
var zones = 0;
var tickets = Array(4031036, 4031037, 4031038);
var names = Array("工地 B1", "工地 B2", "工地 B3");
var cost = Array(1000, 1000, 1000);
var selectedItem = -1;

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
			cm.sendOk("好的，下次再见。");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("你好，我是售票员！");
			if (!((cm.getQuestStatus(2057) == MapleQuestStatus.Status.NOT_STARTED))) {
			zones = 3;
			}
			else if (!((cm.getQuestStatus(2056) == MapleQuestStatus.Status.NOT_STARTED))) {
			zones = 2;
			}
			else if (!((cm.getQuestStatus(2055) == MapleQuestStatus.Status.NOT_STARTED))) {
			zones = 1;
			}
			else {
			zones = 0;
			}
		} else if (status == 1) {
			if (zones == 0) {
			cm.dispose();
			} else {
			var selStr = "想要买哪张票?#b";
			for (var i = 0; i < zones; i++) {
				selStr += "\r\n#L" + i + "#" + names[i] + " (" + cost[i] + " 金币)#l";
			}
			cm.sendSimple(selStr);
			}
		} else if (status == 2) {
			if (cm.getMeso() < cost[selection]) {
				cm.sendOk("您没有足够的钱.");
				cm.dispose();
			} else {
			selectedItem = selection;
			cm.gainMeso(-cost[selectedItem]);
			cm.gainItem(tickets[selectedItem],1);
			cm.dispose();
			}
		} 
	}
}	
function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    qOrigAction(mode, type, selection);
}

/* AUTO-QUEST-BEGIN */
/* CMS072 client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[2219, 0, "冬青的情报", ""]];
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
