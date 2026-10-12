/*
 *No credits for screwing the mechanics (grammar/punctuation) up so badly
 *Quest Pet NPC
 */

var status = 0;

function start() {
    qfresh = true;
    status = -1;
    action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("我看你不需要.");
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.haveItem(4031921,1)) {
                cm.sendOk("我已经给你纸条了!!");
                cm.dispose();
            } else 
                cm.sendNext("我必须把纸条拿给我弟弟!");
        } else if (status == 1)
            cm.sendNextPrev("我想你能帮助我!");
        else if (status == 2)
            cm.sendYesNo("听着.我希望你能尽快把纸条送到我弟弟那边,你会帮我这个忙么? #h #?")
        else if (status == 3) {
            cm.sendOk("非常感谢,我已经在这里等了一整夜,这是我的信,接下来就交给你!");
            cm.gainItem(4031921, 1);
            cm.dispose();
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
var qdata=[[4646, 0, "证明身为训练师的能力", "你想要成为像我一样优秀的训练师吗？像我这种等级的训练师，是可以轻而易举地带领多只宠物喔！如何？你也想要带领多只宠物，对吧？"], [4646, 1, "证明身为训练师的能力", "能力证明的工作，还顺利吗？"], [4647, 0, "训练师的秘方", "若你真的有心想要学习带领多只宠物的技能的话，就去想办法把宠物点心拿给我吧！"], [4647, 1, "训练师的秘方", ""], [4660, 0, "训练伶俐的宠物（宠物召唤）", "啊哈。您有一只这么伶俐的宠物啊。你来找我是需要对它进行训练吗？经过我的训练，可以将很远地方的宠物召唤到自己的身边。你觉得怎么样？"], [4660, 1, "训练伶俐的宠物（宠物召唤）", "饮料拿来了吗？呵呵，一想到能喝上好喝的饮料，我的心情不知不觉就好起来了。好吧，让我们来开始训练吧？？"], [4661, 0, "训练伶俐的宠物（自言自语）", "啊哈。您有一只这么伶俐的宠物啊。你来找我是需要对它进行训练吗？训练对宠物来说非常重要。当然经过我的手训练的宠物会更加特别。有时候会自言自语。你愿意委托我进行训练吗？"], [4661, 1, "训练伶俐的宠物（自言自语）", "饮料拿来了吗？呵呵，一想到能喝上好喝的饮料，我的心情不知不觉就好起来了。好吧，让我们来开始训练吧？？"]];
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
