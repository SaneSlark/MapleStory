// Native CMS072 quest handoffs; Check/Act retain prerequisites and rewards.
function start() { qfresh=true; if (!qQuestAction(1,0,0)) { cm.sendOk("请先查看任务栏中的任务说明。准备好后，再来找我吧。"); cm.dispose(); } }
function action(mode,type,selection) { qQuestAction(mode,type,selection); }
/* AUTO-QUEST-BEGIN */
/* CMS072 client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[6028, 1, "阿得拉８世的口信", "辛苦你了。这段时间我一直在观察你和吉欧。吉欧是很挑剔的人，但你却承受了下来，事情都完成得很好。谢谢你给我们工作室帮了这么多忙。这次的事情结束之后，你也应该走自己的路了。你是我认可的人，希望你不管到哪里都要对自己有信心。这段时间，真是辛苦你了。"], [6029, 0, "威尔斯的新技术", "你说什么！！\\r\\n#b#L0#我听说你开发出了新技术，所以才来找你。#l"], [6029, 1, "威尔斯的新技术", "很好！你好像已经上完了所有的课程！！我来问你几个问题。准备好了吗？！\\r\\n#b#L0#好了！准备好了。你问吧。#l"], [6030, 0, "卡森的炼金术课程", "基础炼金术课程由蒙特鸠协会的#b卡森#k代为进行！卡森就在村子西边的蒙特鸠协会的建筑里，很容易就能找到！\\n啊！我需要收#b10000金币#k的授课费！你要申请听课吗？"], [6031, 0, "秀兹的科学课程", "科学理论课程由和我关系很好的科学家#b秀兹#k代为进行！秀兹应该在冰峰山脉的通天塔里的研究室里！\\n啊！我需要收#b10000金币#k的授课费！你要申请听课吗？"], [6032, 0, "威尔斯的实习课程", "实习课程由我亲自讲授！我让你看看制作物品的过程。仔细看，好好学习！ \\n啊！我需要收#b10000金币#k的授课费！你要申请听课吗？"], [6032, 1, "威尔斯的实习课程", ""], [6033, 1, "威尔斯的第二次教导", ""], [6033, 0, "威尔斯的第二次教导", "喂，你！这算什么！我实在看不下去，所以才把你叫过来！这到底是怎么回事！！\\r\\n#b#L0#干嘛发这么大的脾气啊？#l"], [6034, 0, "威尔斯错过的东西", "这个放在这里，这个放在这里……嗯！？错了吗？#b(忙着在桌子上的文件中翻找。)#k\\n嗯……这个放在这里吗？#b(桌子上冒出了奇怪的烟。)#k啊！又失败了吗！\\n\\n#b(要和威尔斯说话吗)#k"], [6035, 1, "纸条的主人", "威尔斯！威尔斯！这是不是你的东西？喂，威尔斯！"], [6036, 0, "意外的结果", "别妨碍我！现在是非常重要的部分！\\n\\n#L0##b可是，威尔斯。这是你的吗？#l"], [6036, 1, "意外的结果", ""]];
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
