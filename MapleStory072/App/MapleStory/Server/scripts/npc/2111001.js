/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2111001
   覆盖任务: 3304, 3306, 3315, 3316, 3348, 3354, 3355, 3356, 3357, 9879
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
var qdata=[[3304, 1, "卡帕莱特披风", "你来是想加入卡帕莱特吗？不知道你来之前是否对卡帕莱特有所了解。卡帕莱特虽然是研究炼金术的学派之一……但是不仅仅研究通过魔法制造新的物质，还进行生命和机械融合的相关研究。你真的想加入卡帕莱特吗？\\r\\n#b#L0#我想加入卡帕莱特。#l"], [3306, 0, "重新获取卡帕莱特披风", ""], [3306, 1, "重新获取卡帕莱特披风", "既然你把材料都拿来了，我会给你重新发放卡帕莱特披风……但是你要注意。卡帕莱特披风是证明卡帕莱特身份的重要的东西，而且附有特殊的魔法。以后绝对不能弄丢。重新制作只能每3天制作一次。"], [3315, 0, "麦麦德的考试", "你是……不久之前刚拿到#t1102136#的年轻炼金术士啊……有什么事吗？是研究的过程中需要帮助吗？嗯？失踪的炼金术士？失踪的炼金术士……的话……是#r#p2111002##k吧。关于他的事情，你知道得越少越好。他曾经做过非常危险的研究……\\r\\n#b#L0#即使知道危险也要追根究底不正是卡帕莱特的炼金术士应有的精神吗？#l"], [3315, 1, "麦麦德的考试", "#o7110301#已经都除掉了啊……我不是对你没有怀疑……不过至少证明了你不是蒙特鸠的人。这就足够了。反正想继续保密已经不可能了……那我就委托你去对#p2111002#进行调查吧。"], [3316, 0, "后街小贩的情报", "我并不完全信任你。不过正因为如此，我才能把这件事情托付给你。让你从和蒙特鸠和卡帕莱特任何一方都无关的第三者的视角来审视#p2111002#，对他希望的是什么，他的希望是正当的，还是错误的……作一个判断。"], [3348, 0, "为了卡帕莱特", "我一直都在等你。等你发现所有的真相……看来你很想知道手上那本#t4161033#的内容……好吧……说不定你真能挖掘出所有关于#p2111002#的、关于#m261000000#的所有真相。"], [3348, 1, "为了卡帕莱特", "来，快把#t4161033#给我……"], [3354, 1, "德朗博士的药", "……你为什么会来这里……什么？你见到了#p2111002#的思念？他提到了有关#p2111005#的药的事情……？"], [3355, 0, "人造人A的记忆", "琦尼的药……他是这么说的吧。虽然不知道你见到的那个#p2111002#是不是真的思念……即使是真的，在#p2111002#的实验室里也没有发现什么药。根本没人知道。不过……"], [3356, 1, "德朗博士是谁", "快过来。你去见过#p2111003#了吗？他那里有#p2111005#的药吗？……这就是他拿着的药？快给我看看。"], [3357, 0, "德朗博士和人造人A", "……原来如此。果然是这样。呼……这个药确实是为#p2111005#配制的药。吃了这个药，#p2111005#的病应该就能完全好起来。可以想象#p2111002#配制出了药之后会是怎么样的表情。可怜的人……"]];
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
