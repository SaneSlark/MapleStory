function start() {
    qfresh = true;
    if (qQuestAction(1, 0, 0)) return;
	cm.sendOk ("岁月如梭,人生就是梦");
	cm.dispose();
}

function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
}

/* AUTO-QUEST-BEGIN */
/* CMS client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[10000, 0, "奇怪的提议?!", "工作人员#b#h0##k！请回答，完毕。\\r\\n#L0##b嗯？工作人员？你不是想成为偶像明星的佳佳吗？#l"], [10000, 1, "奇怪的提议?!", "我就知道你一定会接受我的提议的。"], [10001, 0, "和特殊工作人员O的协同作战", "我收到了特殊工作人员O的协助请求，你能去一趟吗？特殊工作人员O在工作人员中也是能力很强、神出鬼没的人物。第一天可能在尼哈沙漠出现，第二天却到了天空之城，第三天又在勇士部落出现。如果你愿意的话，我想推荐你执行这次的任务。因为#b特殊工作人员O和我非常要好。"], [10007, 0, "工作人员C的谍报活动", "本部向你下达了指令。你现在就要查看吗？"], [10021, 0, "你是真正的特殊工作人员！", "啊！#b#h0# 工作人员！#k看你身上的衣服，你好像在很认真地执行特殊工作人员的任务。但是你不觉得现在有什么部分有些不足吗？"], [10021, 1, "你是真正的特殊工作人员！", ""], [10023, 0, "遥远而艰辛的工作人员之路", "我就知道你一定会回来找我的。该死的人气。呵呵呵！\\r\\n#b#L0#没错。佳佳长得很帅，歌也唱得好，舞也跳得不错，是冒险岛世界最好的工作人员。(呼，拿双鞋子这么麻烦……)#l#k"], [10023, 1, "遥远而艰辛的工作人员之路", "现在我已经没有多余的鞋子了。千万别弄丢了。"], [4717, 0, "获得优秀工作人员徽章", "根据可信的情报员的情报，帮助我打怪搜集优秀工作人员徽章，就可以获得工作人员披风。你要不要帮他？"], [4717, 1, "获得优秀工作人员徽章", "辛苦了。你已经完成任务了。任务执行的资料我会向本部报告。祝你今天工作愉快。"]];
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
