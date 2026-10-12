/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2111007
   覆盖任务: 3300, 3301, 3302, 3303, 3304, 3316, 3317, 3377, 3381, 9416, 9879
   ============================================================ */
importPackage(net.sf.odinms.client);

var status = -1;

function start() {
    status = -1;
    qfresh = true;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    cm.sendOk("……");
    cm.dispose();
}


/* CMS072 client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[3300, 0, "和后街小贩的交易", "嗯……是我没见过的陌生面孔。你一定不是这里的人……看起来不像是炼金术士。是冒险家吗……嗯。一看就知道。虽然实力还可以，不过应该是经常会碰到危险的那类人。不是吗？\\r\\n#b#L0#你是怎么知道的？#l"], [3300, 1, "和后街小贩的交易", "10000金币都带来了吗？带来了的话，我就告诉你有关#b#m261000000##k的情报……"], [3301, 0, "蒙特鸠协会会长的考试", "纯粹的研究学问的学者的村庄？真好笑。不过也没有像玛加提亚这样为了各自的目的而分成多个势力相互争斗的。真正追求学问的人早就已经消失了……不过，这对后街小贩来说倒是件好事。\\r\\n#b#L0#对立很严重吗？#l"], [3301, 1, "蒙特鸠协会会长的考试", ""], [3302, 0, "蒙特鸠披风", "哦，你来的真好。我这个全心全意为顾客服务的#p2111007#，已经帮你搞到了你要的东西。来，只要有了这个，#p2111000#的考试就不是问题了。你快拿着。"], [3303, 0, "卡帕莱特协会会长的考试", "纯粹的研究学问的学者的村庄？真好笑。不过也没有像玛加提亚这样为了各自的目的而分成多个势力相互争斗的。真正追求学问的人早就已经消失了……不过，这对后街小贩来说倒是件好事。\\r\\n#b#L0#对立很严重吗？#l"], [3303, 1, "卡帕莱特协会会长的考试", ""], [3304, 0, "卡帕莱特披风", "呵呵……你来的正好。之前跟你说过，我从认识的炼金术士那里拿到了一份研究报告书。这是用宝石换来的报告书，所以一定要小心保管……虽然比起这个，卡帕莱特更重视会长的面试……"], [3316, 1, "后街小贩的情报", "……有什么需要的就和我说。物品？情报？还是人？什么东西我都能帮你搞到……嗯？失踪的炼金术士#p2111002#……吗？嗯……对了。他失踪之前不久经常来找我#p2111007#。但是，你为什么要关于#p2111002#的情报？要知道什么情报？"], [3317, 0, "德朗博士的朋友", "#p2111002#好像是做了某种危险的实验。他在家的四周砌了围墙，不让任何人靠近。之前他家的周围到处都是陷阱，不过现在都被炼金术士们撤掉了。但是比这更重要的情报应该是这个。你想听听吗？"], [3377, 0, "后街小贩的菜单", "……你想要什么？情报？东西？还是……比这更隐秘的东西？不管是什么，只要你说句话。没有我后街小贩搞不到的东西。只要你做好了付钱的准备，不管想买多少都行，嗯……？美味食物的#b菜单#k？"], [3377, 1, "后街小贩的菜单", "金币都准备好了吗？那我就把菜单给你。"], [3381, 0, "未确定的集团", "交易重要的是信用。不管买方要什么东西，只要帮他把东西弄到就行，对其他东西绝不关心。这是后街小贩的美德……不过偶尔也得做点出个的事。就像这次一样……你问我是什么事吗？"]];
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
