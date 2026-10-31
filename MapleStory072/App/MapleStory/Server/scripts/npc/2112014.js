// CMS client Quest Check/Say/Act relationships; no invented rewards.
function start() { qfresh=true; if (!qQuestAction(1,0,0)) { cm.sendOk("我正在继续研究炼金术。有什么事情的话，再来找我吧。"); cm.dispose(); } }
function action(mode,type,selection) { qQuestAction(mode,type,selection); }
/* AUTO-QUEST-BEGIN */
/* CMS client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[3363, 1, "法兰肯研究1", "啊……你是……很高兴见到你。我一直在等你来找我的研究室。多亏你我才能打起精神，连谢谢都没能和你说一声，让我觉得很过意不去。真是太谢谢你了。有什么我可以帮忙的吗？只要是我犹泰做得到的，不管什么事情我都可以帮你。\\r\\n#b#L0# 有个叫琦尼的孩子想了解你的法兰肯洛伊德。#l"], [3364, 0, "法兰肯研究2", "抱歉让你久等了！来，这是#b法兰肯洛伊德的设计图#k！这应该会对琦尼研究法兰肯洛伊德有很多帮助。你能帮我把法兰肯洛伊德的设计图交给琦尼吗？"], [3365, 1, "犹泰的委托", "这段时间谢谢你帮助我进行研究。这对我的研究帮助很大。真的，好像总是要你帮忙，真是对不起……"], [3365, 0, "犹泰的委托", "你问我为什么现在还呆在这种地下研究室里？这个嘛……虽然我把偷的东西都还了回去，也获得了协会会长们的原谅，但是我没有站出来的勇气。之前一直发疯似的想要制造出新的东西，现在我想在这里静静地从事研究，顺便整理一下过去的研究。"], [3366, 1, "制作试剂", "试剂配好了啊……真了不起。应该是挺不容易的事，做得挺不错。有了这个我就不用为接下去的实验中要用到的试剂担心了。"], [3366, 0, "制作试剂", "我想拜托你的事情是制作试剂。制作试剂需要精确的计算，但是那一部分我已经计算过了，你只要留意速度就行了。怎么样？你能帮我吗？"], [3367, 1, "整理研究文件", "哦哦！书房里的研究文件全都找到了啊！真是谢谢你。书房里堆得乱七八糟的，一定挺不容易找的吧……辛苦了。"], [3367, 0, "整理研究文件", "我要拜托你的事情是整理研究文件。这段时间以来，研究用的文件都随便散放在各个地方，我完全没办法整理出来。你只要帮我把过去的文件都找出来就行了。怎么样？你能帮我吗？"], [3368, 1, "去除研究妨碍物", "啊……看来你把妨碍研究的家伙全都清除了啊。我就知道像你这么强壮的冒险家应该没有问题。真是谢谢你。"], [3368, 0, "去除研究妨碍物", "我要拜托你的事情是清除怪物。你问我实验室里为什么会有怪物？这个么……都是过去做实验的时候制造出来的怪物，操纵用的炼成阵坏了……我想请你帮我清除#r研究妨碍物#k，怎么样？可以吗？"], [3382, 1, "犹泰的报答", ""], [3382, 0, "犹泰的报答", "好久不见。对了，#m261000000#没出什么事吧？我一直呆在家里看书，完全不知道外面发生了什么……嗯……？干嘛突然问起我的研究啊？……！你手里拿着的难道是#t4001159#和#t4001160#吗……？"]];
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
