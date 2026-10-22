/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1022002
   覆盖任务: 2004, 2005, 2006, 2047, 2122, 2123, 2125, 2127, 2149, 3070, 3071, 6110, 9320, 9321, 9325, 9746, 9867, 10053, 10089
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
var qdata=[[2004, 1, "闪耀石头的材料", ""], [2005, 0, "变异蘑菇的血1", "想得到#b#t4031005##k？哈...像你这样小伙子恐怕不太可能。如果不是真正的强者，是不可能把#t4031005#弄到手的... 如果你真的想得到，就证明给我看你是个强者。"], [2005, 1, "变异蘑菇的血1", "呵...你看上去蛮挺文弱的，没想到有两下子嘛... 好。按照约定我给你#t4031005#...我是不会食言的。"], [2006, 0, "变异蘑菇的血2", "但是你要把#b#t4031005##k用在哪儿呢？？这可是做贵重的物品所需要的材料...你要给#p1022100#做什么样的东西呢？不过... 这跟我无关。"], [2047, 0, "英雄的战剑", "谁又打扰我?... 啊！你老是给我添麻烦。哈哈...没关系。像你这么强壮的人我也想跟你多聊聊。那次我给你的#t4031005#用在合适的事情上了吗？不过,那已经是过去的事了。"], [2047, 1, "英雄的战剑", "是...就是这把剑救了我的命！怎么样？你还给我吧！你还给我，我就给你很珍贵的物品。"], [2122, 0, "麦吉和秘密组织", "怎么办呢……我一直很担心……？\\r\\n#L0# #b是什么事情？#l"], [2122, 1, "麦吉和秘密组织", "终于回来啦。你的实力我认可了。"], [2123, 0, "特别指令", "我正在等你呢。奇怪的人给了我一张纸条，让我交给你。但是纸条被我不小心烧掉了。不过内容我还清楚地记得。你感兴趣吗？"], [2125, 0, "特别指令！", "我正在等你呢。奇怪的人给了我一张纸条，让我交给你。但是纸条被我不小心烧掉了。不过内容我还清楚地记得。你感兴趣吗？"], [2127, 0, "迈向沙漠……", "做好离开的准备了吗？第一次去，看上去好像有点紧张嘛。别担心。你应该能做得很好的。"], [2127, 1, "迈向沙漠……", ""], [2149, 0, "传闻的真相-麦吉", "…什么事儿?\\r\\n#b#L0#听说过鬼树吗？#l"], [2149, 1, "传闻的真相-麦吉", ""], [3070, 1, "邪摩斯的请托", ""], [3071, 0, "黑暗契约的秘密", "关于#b#t4031218##k？？你…是怎么知道的？像你这样的人怎么会知道这个啊…? \\n到底是谁告诉你的？？\\r\\n#L0#冰峰雪域附近有个人想要得到#b#t4031218##k，是他告诉我的。#l\\r\\n#L1# 在旅行途中偶然得知的，就像有备无患这句话的意思一样，如果对那样东西有所了解的话，在击退敌人的时候也许有用吧。#l"], [6110, 0, "麦吉的考验", "…你! 当年只是个平凡无奇的初级冒险家... 现在也成了不错的战士了。我认可你的能力了。那么，找我有什么事情? 已经有这么高的能力，其实也没什么事情需要我来帮你的吧。"], [6110, 1, "麦吉的考验", "你已经消灭了#r#o9300087# 200只#k。 是否感觉到自己的强大了？那样的话应该可以掌握突进技能了。"], [9320, 1, "被风吹走的故事", "请不要打扰我冥想……\\r\\n#L0# #b你还记得1000天前来到这里的冒险者吗？#k"], [9321, 0, "他的包", "啊！！是的！你不是说那个家伙来找我还不到五百天吗？那家伙当时丢了包……他说里面有很重要的东西，里面有他未来的计划……"], [9321, 1, "他的包", "你在找那个人的包吗？"], [9325, 0, "葛温的日记丢失", "有什么事？还没从日记里找到线索吗？\\r\\n#L0# #b其实……我把格温的日记弄丢了。#k"], [9325, 1, "葛温的日记丢失", "……但是……我会把它还给你。不要再抛弃他了，但要查出他在哪里并告诉我！！"]];
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
