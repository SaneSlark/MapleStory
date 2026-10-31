/*
	Jano
	Right/Male Side
 */

function start() {
    qfresh = true;
    if (qQuestAction(1, 0, 0)) return;
    cm.warp (670010200, 4);
    cm.changeMusic("Bgm14/Ariant");
    cm.dispose();
}
function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
}

/* AUTO-QUEST-BEGIN */
/* CMS client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[3928, 0, "拥有弓的男子", "……什么事？如果是没话找话绝不轻饶你…… 什么？想成为沙子图团员？嗯…… 你是看了墙上的图之后来找我的吧？ 是#p2101000#让你来的吧…… 但是，不能完全相信她的眼光。"], [3928, 1, "拥有弓的男子", "嗯…… 拿来粮食了？让我看看…… 一，二，三……噢，果然把所有东西都带过来了。"], [3929, 0, "携詹的考验", "找粮食做得不错，但任务还没结束。这些粮食不是为了沙子图团，而是为了阿里安特的人们准备的。需要把粮食分给大家。怎么样？如果你不是王妃的奸细，当然可以做对不对？"], [3929, 1, "携詹的考验", "好。果然把所有粮食都送到了。很好。你肯定不是王妃的奸细。"], [3930, 0, "携詹的沙子图团", "成为沙子图团员需要很多条件。其中最重要的是没有私欲。沙子图团会偷王妃贵重的宝物，但不是为了自己，而是为了#m260000000#的人们。"], [3930, 1, "携詹的沙子图团", "拿来10000金币了。放弃了那么多想买的东西，为了#m260000000#交了出来…… 值得赞扬。"]];
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
