function start(){qfresh=true;if(!qQuestAction(1,0,0)){cm.sendOk("呵呵。。。我要保存力量。。。");cm.dispose();}}
function action(mode,type,selection){qQuestAction(mode,type,selection);}

/* CMS072 client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[3070, 0, "邪摩斯的请托", "呼呼呼…能不能听我说一些事再走啊？…"], [3071, 1, "黑暗契约的秘密", "噢！你…了不起…怎么弄到#b#t4031218##k的？看来拜托你这件事是正确的… 呼呼，事情正按计划顺利进行… 呼呼"], [6103, 1, "邪摩斯的忠告", "哈哈哈… 象你这个样子去调查，估计再过几十年也得不到任何线索！弓手有时候真是愚昧。但我，邪摩斯什么都知道，我都知道… 盯着我干什么? 难道你也想知道? 来，给我看看那本书…!"], [6104, 0, "新的推测", "果然! 果然! 果然就是… 这就是那本书! 你不知道是吧? 你应该不知道到底谁知道这本书?\\n\\r#L0# #b你知道吗? #k"], [6162, 1, "疯子天才", "嘿嘿嘿… 天气真好，好啊，好极了… 阳光照得暖暖的… 哦不，在这监狱里怎么可能有阳光，监狱的地面是冰冷的，冷死了，但天气一定会非常好。"], [6163, 0, "邪摩斯", "好烦。烦啊… 这里面实在是太烦了，到底我还要在这里呆到什么时候… \\n\\r#L0# #b…你是否知道汉斯的事情？#k"], [6164, 1, "汉斯的道歉", "快点放开我吧… 不想呆下去了… 求你了… #p1032001#… #p2020009#…"], [6165, 0, "鲁碧的意图", "哈啊啊… 现在已经受不了，这里太难熬… #p2020009#… 噢不，伟大的#p2020009#，求你放开我吧…"], [6166, 1, "鲁碧和邪摩斯", "……."], [6167, 0, "天降落星", "……喂，你看起来像个魔法师，是吗?果然是魔法师。… 咔哈哈…"], [6167, 1, "天降落星", "……好…"], [6168, 0, "寒冰之剑", "……喂，你看起来像个魔法师，是吗?果然是魔法师。… 咔哈哈…"], [6168, 1, "寒冰之剑", "……好…"], [6169, 0, "圣光普照", "……喂，你看起来像个魔法师，是吗?果然是魔法师。… 咔哈哈…"], [6169, 1, "圣光普照", "……好…"]];
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
