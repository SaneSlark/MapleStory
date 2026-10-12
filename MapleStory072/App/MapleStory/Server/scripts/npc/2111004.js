/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2111004
   覆盖任务: 3322, 3323, 3325, 3326, 3328, 3335, 3339, 3340, 3349, 10098
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
var qdata=[[3322, 0, "琵丽雅的银坠饰", "您这是……有什么事情吗？您是来询问有关#p2111002#那个孩子的事情的吧？我不想再谈关于他的任何事情了！对他一点都不了解，就在那里说三道四的话……我不想听。\\r\\n#b#L0#我见到了#p2111002#。也和他说过话。#l"], [3322, 1, "琵丽雅的银坠饰", "这是……这上面雕刻的图案是雪原玫瑰。#p2111002#第一次送给我的花……雕刻着雪原玫瑰的银坠饰……以前#p2111002#说要送给我的……您能在#p2111002#的家里发现这个……看样子您真的和他见过面。"], [3323, 0, "琵丽雅的担忧", "啊啊……怎么办呢……这种时候要是他在就好了……怎么办才好呢……"], [3325, 1, "藏有月光的瓶子", "啊……您好。旅行者……见到#p2012018#了吗？啊，这就是给孩子配的药啊。还有信……很久没有和弟弟联系，觉得很对不起他。真是太好了……现在有了药，应该能松一口气了。"], [3326, 0, "琦尼的秘密", "啊，您是……前些时间为#p2111005#去配药的旅行者啊。真是谢谢您。不过……\\r\\n#b#L0##p2111005#怎么样了？#l"], [3328, 1, "妖精的藏有阳光的瓶子", "旅行者……您从#p2012018#那里回来了吗？啊……这就是#p2012018#配的药啊。真是辛苦您了……您帮了我这么多的忙，真是太感谢您了。"], [3335, 1, "雪原玫瑰", "……您有什么事情吗？这个……花？是#t4031695#啊……这是很名贵的花，您为什么要送给我啊……嗯？您说是#p2111003#的礼物？"], [3339, 0, "德朗博士的地下书库", "就算是#p2111002#真犯下了什么罪刑，我也不在乎。因为我对他的爱，不会因为他是个罪犯就有所改变。绝对不会……能帮我调查一下\\r\\n#b#L0# #p2111002#吗？#l"], [3340, 0, "秘密书的钥匙", "去地下书库看过了吗？我都好久没去了，那里肯定早就乱得不成样子了……您在那里难道没有发现什么吗？\\r\\n#b#L0#发现了一本奇怪的书。#l"], [3349, 0, "为了琵丽雅", "啊……终于来了。在#p2111002#的家里发现什么了吗？他到底想要的是什么……有没有发现什么线索啊？"], [3349, 1, "为了琵丽雅", "这个笔记本……是#p2111002#失踪前使用过的……笔记本？啊啊……真是太感谢了！只要有这个，就能明白#p2111002#的真实想法了？"]];
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
