/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1002101
   覆盖任务: 1028, 1046, 2077, 2078, 2079, 2080, 2081, 2212, 8053, 8059, 9801, 9806, 9807, 9808
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


/* CMS client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[1028, 1, "迈向明珠港！", "快来#m104000000#吧。是第一次来金银岛吧？什么？受#p12000#的委托而来的？"], [2077, 0, "战士之路", "选择战士吗？看到我之后也想成为威风凛凛的战士吧？如果已经下定决心的话，就果断的按下接受吧。"], [2078, 0, "弓箭手之路", "听说过神箭手#b#p1012100##k的名声吗？以弓作为武器的弓箭手职业，在很远距离能以很高的命中率狩猎怪物。怎样？要走上#b弓箭手之路#k吗？"], [2079, 0, "飞侠之路", "是的。需要相当的敏捷(Dex)与幸运(Luk)的#b飞侠#k这个职业还是有着相当大的魅力。如何？要走上飞侠的路吗？"], [2080, 0, "法师之路", "大法师#p1032001#啊.. 我也只是远远的见过呢.. 那个.. 听说他经常在魔法密林顶端的魔法图书馆里..怎样？想要走上法师之路吗？"], [2081, 0, "有关转职的指导", "啊，这样长篇大论的进行说明可不像我.. 尽量简单的说，对于各个职业，达到#b10级#k之后可以成为#b战士, 弓箭手, 飞侠#k，达到#r8级#k之后可以选择成为#r法师#k。为了得到职业，对应每个不同的职业要去寻找不同村庄的某个人。"], [2081, 1, "有关转职的指导", "第一个问题刚才我也说过，#b战士, 弓箭手, 飞侠要在多少等级#k才能进行#b职业#k的选择？\\n\\n#L0##b8 等级#l\\n#L1#1 等级#l\\n#L2#10 等级#l"], [2212, 0, "成为海盗的途径", "哦~你是说想成为海盗？你心里已经下定决心，做好准备了？"], [9801, 0, "箱子里的枫叶", "这个好奇怪啊。到现在为止这样的事情一次都没有遇到过……你问是什么事情？都是因为#b#t4031606##k。\\n\\n #i4031606# #t4031606# \\n\\n 很久以前老师给我的这个枫叶因为有着特殊的魔法是永远都不会蔫的……看，现在居然渐渐蔫了，好奇怪啊。"], [9806, 1, "新的主人公", "啊，是之前来打听#t4031607#的事情的朋友啊。怎么了？箱子里的枫叶又鲜活了？……什么？#t4031607#消失了只有#t4031610#留了下来？这就是#t4031610#吗？这样……哈哈哈哈哈"], [9807, 1, "新的主人公", "啊，是之前来打听#t4031607#的事情的朋友啊。怎么了？箱子里的枫叶又鲜活了？……什么？#t4031607#消失了只有#t4031610#留了下来？这就是#t4031610#吗？这样……哈哈哈哈哈"], [9808, 1, "新的主人公", "啊，是之前来打听#t4031607#的事情的朋友啊。怎么了？箱子里的枫叶又鲜活了？……什么？#t4031607#消失了只有#t4031610#留了下来？这就是#t4031610#吗？这样……哈哈哈哈哈"]];
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
