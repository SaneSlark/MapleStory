/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2091001
   覆盖任务: 3803, 3804, 3809, 3810, 3811, 3818, 3819, 3822, 3824, 3832, 3836, 3837, 3840, 3842, 3843, 3844, 9850, 10100
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

var qstatus = -1;
var qact = -1;
var qid = -1;
var qactive = false;
var qfresh = false;
function qQuestAction(mode, type, selection) {
    if (!qactive) {
        if (!qfresh || mode != 1) return false;
        qfresh = false;
    var opts = '';
    var n = 0;
    if (cm.getQuestStatus(3803) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "丢失的天书" + "#l"; n++; }
    if (cm.getQuestStatus(3804) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "猫元灵大扫除" + "#l"; n++; }
    if (cm.getQuestStatus(3809) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "神仙的条幅1" + "#l"; n++; }
    if (cm.getQuestStatus(3810) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "神仙的条幅2" + "#l"; n++; }
    if (cm.getQuestStatus(3819) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "制作熊掌汤2" + "#l"; n++; }
    if (cm.getQuestStatus(3824) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "向道功问好" + "#l"; n++; }
    if (cm.getQuestStatus(3832) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "道功的考试" + "#l"; n++; }
    if (cm.getQuestStatus(3836) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "诺功的弟子" + "#l"; n++; }
    if (cm.getQuestStatus(3837) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "道功的魔法" + "#l"; n++; }
    if (cm.getQuestStatus(3840) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "弱化喵怪仙人" + "#l"; n++; }
    if (cm.getQuestStatus(3842) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "道功的危机" + "#l"; n++; }
    if (cm.getQuestStatus(3844) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "击退喵怪仙人" + "#l"; n++; }
    if (cm.getQuestStatus(9850) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(10100) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(3803) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55)) { opts += "\r\n#L" + n + "#[接受] " + "丢失的天书" + "#l"; n++; }
    if ((cm.getQuestStatus(3804) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3803) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "猫元灵大扫除" + "#l"; n++; }
    if ((cm.getQuestStatus(3810) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3809) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "神仙的条幅2" + "#l"; n++; }
    if ((cm.getQuestStatus(3811) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3810) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "神仙的条幅3" + "#l"; n++; }
    if ((cm.getQuestStatus(3818) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55)) { opts += "\r\n#L" + n + "#[接受] " + "制作熊掌汤1" + "#l"; n++; }
    if ((cm.getQuestStatus(3822) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50)) { opts += "\r\n#L" + n + "#[接受] " + "道功的燕子" + "#l"; n++; }
    if ((cm.getQuestStatus(3837) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 71) && (cm.getQuestStatus(3836) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "道功的魔法" + "#l"; n++; }
    if ((cm.getQuestStatus(3840) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 77)) { opts += "\r\n#L" + n + "#[接受] " + "弱化喵怪仙人" + "#l"; n++; }
    if ((cm.getQuestStatus(3843) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 77) && (cm.getQuestStatus(3842) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "喵怪仙人的提问" + "#l"; n++; }
    if ((cm.getQuestStatus(3844) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 77) && (cm.getQuestStatus(3843) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "击退喵怪仙人" + "#l"; n++; }
    if (n == 0) return false;
    qact = -1;
    cm.sendSimple("有什么我能帮你的吗?\r\n" + opts);
    qactive = true;
    return true;
    }
    if (mode != 1) { cm.dispose(); return true; }
    qstatus++;
    if (qstatus == 0) {
        var qt = "";
        var qi = -1;
        qact = -1;
        qid = -1;
        if (cm.getQuestStatus(3803) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3803; } }
        if (cm.getQuestStatus(3804) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3804; } }
        if (cm.getQuestStatus(3809) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3809; } }
        if (cm.getQuestStatus(3810) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3810; } }
        if (cm.getQuestStatus(3819) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3819; } }
        if (cm.getQuestStatus(3824) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3824; } }
        if (cm.getQuestStatus(3832) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3832; } }
        if (cm.getQuestStatus(3836) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3836; } }
        if (cm.getQuestStatus(3837) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3837; } }
        if (cm.getQuestStatus(3840) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3840; } }
        if (cm.getQuestStatus(3842) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3842; } }
        if (cm.getQuestStatus(3844) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3844; } }
        if (cm.getQuestStatus(9850) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9850; } }
        if (cm.getQuestStatus(10100) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10100; } }
        if ((cm.getQuestStatus(3803) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55)) { qi++; if (selection == qi) { qact = 0; qid = 3803; } }
        if ((cm.getQuestStatus(3804) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3803) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3804; } }
        if ((cm.getQuestStatus(3810) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3809) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3810; } }
        if ((cm.getQuestStatus(3811) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3810) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3811; } }
        if ((cm.getQuestStatus(3818) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55)) { qi++; if (selection == qi) { qact = 0; qid = 3818; } }
        if ((cm.getQuestStatus(3822) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50)) { qi++; if (selection == qi) { qact = 0; qid = 3822; } }
        if ((cm.getQuestStatus(3837) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 71) && (cm.getQuestStatus(3836) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3837; } }
        if ((cm.getQuestStatus(3840) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 77)) { qi++; if (selection == qi) { qact = 0; qid = 3840; } }
        if ((cm.getQuestStatus(3843) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 77) && (cm.getQuestStatus(3842) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3843; } }
        if ((cm.getQuestStatus(3844) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 77) && (cm.getQuestStatus(3843) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3844; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3803) qt = "哦呵! #t4000299#全都搜集好了啊! 真厉害! 现在好像可以学奥妙的术法…呃? 怎么回事?";
        if (qid == 3804) qt = "顺利消灭#o6130209#搜集好了#t4031433#啊! 估计是个挺不容易的事情，真的很感谢你啊!这样就能减少不少乱用术法的妖魔鬼怪吧。";
        if (qid == 3809) qt = "我随时欢迎想要成为仙人的人。恩? 这不是 #t4031430#吗? 这可是很稀有的书啊。很早之前有过一本但不小心弄丢了。 什么? 你要给我这本书?";
        if (qid == 3810) qt = "哇， 找来#t4031432#了啊。 真厉害~  #o5120506#是个很早前因偷学道人的道术而很难对付的家伙啊。";
        if (qid == 3819) qt = "#t4031553#拿过来了。幸好啊，我都不想看棋盘了。非常感谢。那就熬药去吧…… 来，作为感谢，我要给您#t2022142#。是解头痛的药，会有需要的时候的。";
        if (qid == 3824) qt = "哦，你是上次帮我给#p2071006#传话的旅行者啊。怎么样？见过#p2071006#？或者听到了什么传言？恩？#p2071006#在#m222000000#？";
        if (qid == 3832) qt = "去对付#o5120506#和#o6130209#了吧…… 对付他们的感觉怎么样，虽不是人类，但练成道术的它们，是不是很难对付？";
        if (qid == 3836) qt = ".是想成为仙人的修炼者吗？嗯……？是诺功托你来的？肯德熊醒过来了？";
        if (qid == 3837) qt = "弄到了所有的材料……请稍等。先使用解除魔法的静化酒……";
        if (qid == 3840) qt = "从妙仙那儿收回猫咪娃娃了。谢谢。那么记录准备好的文章……";
        if (qid == 3842) qt = "来了……只要您能成功，可以大大削弱妖怪禅师的力量。嗯？那是什么？";
        if (qid == 3844) qt = "咳咳……回来了……解药……解药呢？啊！这就是……";
        if (qid == 9850) qt = "??? ???? ?? #b#p2091001##k? ???? ??? ? ???..???? ??? ?????.";
        if (qid == 10100) qt = "??? ????? ???? ?? ???? ??.";
        if (qid == 3803) qt = "为了成为仙人来找 #m250000000#的人啊… 怎么样? 从#m250000000#那里学了不少东西了吧? \r\n#b没有。仙人们的话太深奥了。";
        if (qid == 3804) qt = "帮我搜集#t4000299#的年轻人。你以前拿给我的 #t4000299# 很不寻常哦。看看纸张这边斑斓的猫的脚印。只把它们认为是野猫随便踩的脚印是不是想的太简单了?";
        if (qid == 3810) qt = "托你的福拿到了 #t4031430#。 但是你还有什么事要找我么? 恩? #p2071010#说要借 #t4031431#? 虽然可以借但是… 呼。要是能帮我做点事的话就借你 #t4031431#。";
        if (qid == 3811) qt = "哦。原来是以前的徒弟拜托过来的年轻人啊。真感谢你之前帮我带来 #t4031432#啊。 从别的徒弟那里搞定了 #b#t4031431##k，就拿走吧。";
        if (qid == 3818) qt = "实在是想不起这盘围棋的下一步该怎么走了。心闷头痛…… 是修炼不够吗？这个时候能喝到#t2022142#就好了。如果方便的话能不能到村子的药师#p2091002#那儿让他制一下#b#t2022142##k呢？";
        if (qid == 3822) qt = "你看起来像个长期在外旅行的旅行者啊。既然去过很多地方，也见过各个地方的很多人吧。既然你是个经验丰富的旅行者的话，可以拜托您一件事吗？";
        if (qid == 3837) qt = "肯德熊不只为了避开人才到村庄外边。品行刚正的它知道 自己闯下的祸有多严重，为了赎罪聚精会神的把所有时间都用在了苦行上。";
        if (qid == 3840) qt = "在外人看来，武陵是全世界没有烦恼的人们为了修炼成仙而修炼的地方……事实上，武陵也有烦恼。有人使宁静的武陵陷入到混乱当中…… #r妖怪禅师#k就是那个肇事者。";
        if (qid == 3843) qt = "哎，哎……应该跟你讲清楚妖怪禅师的真面目才对……呼呼呼……妖怪禅师，这个狡猾残忍的家伙。挑拨离间让人们互相失去信任，这是他的强项…… \r\n #b哇...怎么会这样...";
        if (qid == 3844) qt = "咳……解药拿到了吗？妖怪禅师不给解药？不给是肯定的！如果会轻易地给解药，当初就不会下毒了……咳咳！";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3803) cm.completeQuest(3803);
            if (qid == 3804) cm.completeQuest(3804);
            if (qid == 3809) cm.completeQuest(3809);
            if (qid == 3810) cm.completeQuest(3810);
            if (qid == 3819) cm.completeQuest(3819);
            if (qid == 3824) cm.completeQuest(3824);
            if (qid == 3832) cm.completeQuest(3832);
            if (qid == 3836) cm.completeQuest(3836);
            if (qid == 3837) cm.completeQuest(3837);
            if (qid == 3840) cm.completeQuest(3840);
            if (qid == 3842) cm.completeQuest(3842);
            if (qid == 3844) cm.completeQuest(3844);
            if (qid == 9850) cm.completeQuest(9850);
            if (qid == 10100) cm.completeQuest(10100);
        } else {
            if (qid == 3803) cm.startQuest(3803);
            if (qid == 3804) cm.startQuest(3804);
            if (qid == 3810) cm.startQuest(3810);
            if (qid == 3811) cm.startQuest(3811);
            if (qid == 3818) cm.startQuest(3818);
            if (qid == 3822) cm.startQuest(3822);
            if (qid == 3837) cm.startQuest(3837);
            if (qid == 3840) cm.startQuest(3840);
            if (qid == 3843) cm.startQuest(3843);
            if (qid == 3844) cm.startQuest(3844);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
