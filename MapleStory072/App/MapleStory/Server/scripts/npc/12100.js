function start(){qfresh=true;if(!qQuestAction(1,0,0)){cm.sendOk("请通过任务栏查看当前的新手任务。");cm.dispose();}}
function action(mode,type,selection){qQuestAction(mode,type,selection);}

/* CMS072 client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[1016, 0, "麦加的锻炼", "哟。。。看来你需要我的指导。哈哈~ 你不用担心。只是我看你还没熟悉这里。你初次来这里吧？怎么样？想不想受我的指导？"], [1016, 1, "麦加的锻炼", "怎么样？你锻炼了自己？我可不可以确认？"], [1017, 0, "麦加的最后锻炼", "你成长速度可真快。好啊！那我最后再对你进行一次强化锻炼。为了提高能力你必须要继续挑战更强大的怪物。这次我要让你打败比以前更强的怪物。怎么样？你可以吗？"], [1017, 1, "麦加的最后锻炼", "你都打退了花蘑菇啦？找它们是不是很难？好像在彩虹岛这里很难找它们。让我确认一下吧。"], [1019, 1, "叁的建议", "#p2005#说的就是你啊？找我有什么事？"], [1027, 0, "麦加的请求", "彩虹岛是菜鸟冒险者的乐园。怪兽也没那么强。但别想蒙混过关。要打好基础，才能不断提高实力。越是初级越要认真。\\r\\n#b#L0# 你看起来很强大啊。为什么呆在彩虹岛上呢？#l"]];
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
