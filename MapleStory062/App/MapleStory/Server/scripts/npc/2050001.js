/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2050001
   覆盖任务: 2170, 3400, 3401, 3404, 3405, 3406, 3407, 3408, 3452, 3453, 3454, 3457, 3458, 8077
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
    if (cm.getQuestStatus(2170) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "传达给金博士的信息" + "#l"; n++; }
    if (cm.getQuestStatus(3400) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "长老斯坦的信件" + "#l"; n++; }
    if (cm.getQuestStatus(3404) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "金博士的托付 : 阿亮" + "#l"; n++; }
    if (cm.getQuestStatus(3406) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "运送机器人配件" + "#l"; n++; }
    if (cm.getQuestStatus(3407) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "找机器人配件" + "#l"; n++; }
    if (cm.getQuestStatus(3408) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "打退外星人" + "#l"; n++; }
    if (cm.getQuestStatus(3452) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "机器章鱼是外星生物？" + "#l"; n++; }
    if (cm.getQuestStatus(3458) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "改革防卫墙的计划" + "#l"; n++; }
    if (cm.getQuestStatus(8077) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "现代科学之父" + "#l"; n++; }
    if (cm.getQuestStatus(3454) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "超声波解密机" + "#l"; n++; }
    if (cm.getQuestStatus(3457) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "震诺发威" + "#l"; n++; }
    if ((cm.getQuestStatus(3401) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3400) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "金博士的托付 : 新型机器人设计图" + "#l"; n++; }
    if ((cm.getQuestStatus(3405) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3404) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "重要机器人配件" + "#l"; n++; }
    if ((cm.getQuestStatus(3407) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3406) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "找机器人配件" + "#l"; n++; }
    if ((cm.getQuestStatus(3408) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 40) && (cm.getQuestStatus(3407) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "打退外星人" + "#l"; n++; }
    if ((cm.getQuestStatus(3452) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35)) { opts += "\r\n#L" + n + "#[接受] " + "机器章鱼是外星生物？" + "#l"; n++; }
    if ((cm.getQuestStatus(8077) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 85) && (cm.getQuestStatus(8076) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "现代科学之父" + "#l"; n++; }
    if ((cm.getQuestStatus(3453) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 65)) { opts += "\r\n#L" + n + "#[接受] " + "Arti99 ％黑巧克力icial Combatant J99 ％黑巧克力no" + "#l"; n++; }
    if ((cm.getQuestStatus(3454) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3454) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3453) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3456) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3457) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031927, 1)) && (cm.haveItem(4031928, 1))) { opts += "\r\n#L" + n + "#[接受] " + "超声波解密机" + "#l"; n++; }
    if ((cm.getQuestStatus(3457) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3456) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "震诺发威" + "#l"; n++; }
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
        if (cm.getQuestStatus(2170) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2170; } }
        if (cm.getQuestStatus(3400) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3400; } }
        if (cm.getQuestStatus(3404) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3404; } }
        if (cm.getQuestStatus(3406) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3406; } }
        if (cm.getQuestStatus(3407) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3407; } }
        if (cm.getQuestStatus(3408) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3408; } }
        if (cm.getQuestStatus(3452) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3452; } }
        if (cm.getQuestStatus(3458) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3458; } }
        if (cm.getQuestStatus(8077) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8077; } }
        if (cm.getQuestStatus(3454) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3454; } }
        if (cm.getQuestStatus(3457) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3457; } }
        if ((cm.getQuestStatus(3401) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3400) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3401; } }
        if ((cm.getQuestStatus(3405) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3404) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3405; } }
        if ((cm.getQuestStatus(3407) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3406) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3407; } }
        if ((cm.getQuestStatus(3408) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 40) && (cm.getQuestStatus(3407) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3408; } }
        if ((cm.getQuestStatus(3452) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35)) { qi++; if (selection == qi) { qact = 0; qid = 3452; } }
        if ((cm.getQuestStatus(8077) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 85) && (cm.getQuestStatus(8076) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 8077; } }
        if ((cm.getQuestStatus(3453) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 65)) { qi++; if (selection == qi) { qact = 0; qid = 3453; } }
        if ((cm.getQuestStatus(3454) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3454) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3453) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3456) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3457) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031927, 1)) && (cm.haveItem(4031928, 1))) { qi++; if (selection == qi) { qact = 0; qid = 3454; } }
        if ((cm.getQuestStatus(3457) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3456) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3457; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2170) qt = "代替天书爷爷来的？哦，多谢。请替我谢谢天书爷爷。";
        if (qid == 3400) qt = "嗯。。。都没问题了。。。哼。。。检查好这个系统的错误后修改程序。。。嗯？你找我有什么事？哼？为了给我送信特地从维多利亚岛来这里的？哼。。。是吗？看看。";
        if (qid == 3404) qt = "哼…看样子你已经见过#b#p2050005#、#p2050006#、#p2050007##k，把所有新机器人信息的#b#t4031100##k让他们看过了。他们都很高兴吧？呵呵…谢天谢地！但是我给的#b#t4031100##k好像弄丢了，没办法…不管怎么说，你为我们地球防御总部付出了努力，还是要给你酬劳。";
        if (qid == 3406) qt = "呵呵…就是这个！你帮我拿来的这3个零件箱子，都是制作新型机器人核心装置必须用到的材料。由于是秘密事项，就不跟你详细说明了…不管怎么说，来回玩具城一定很累了吧。来，给你#b#t2030012##k作为报酬。";
        if (qid == 3407) qt = "哼…竟然找回了3个机器人零件的箱子呀！途中应该受到很多外星人的阻扰，果然是个能干的人啊！藉此机会加入我们地球防御总部的成员如何…？ 呵呵…不管怎么说，辛苦了。既然这么辛苦了，就多给你几个弯曲胶囊，请一定要收下~！";
        if (qid == 3408) qt = "怎么可能…真的击退5个#b#o5120100##k了吗？尽管认为你不是一般人，但这还是超出我的想象啊！好…替我们军队守护了地球防御总部和玩具城，应该给你报酬才是呀。这一定会对你以后的旅行大有帮助，请不要拒绝，快收下吧！";
        if (qid == 3452) qt = "#m221000000#的#p2050001#说，有了一个新的研究课题！但听说。.若想要进行这项研究，势必要有别人的帮忙。.";
        if (qid == 3458) qt = "对不起, 这里是受限制的地区. 您最好到外面去，您的存在干扰到我的研究. \n哼... 这些是什么? 您干嘛拿给我? 哦, 是他托您的?";
        if (qid == 8077) qt = "怎么样？拿到螺旋桨了吗？";
        if (qid == 3454) qt = "啊, 您把所有的材料都带来了. 请稍等，我这就组装超声波解码器。";
        if (qid == 3457) qt = "欢迎您凯旋而归. 我因您而感到骄傲. 地球防御本部就是需要像您这样能保卫和平的勇士. 怎样, 有兴趣加入我们冒险勇者吗? 您可以有霓虹灯橙色诉讼。 ...但我感觉到，你的渴望是… 遥远的。";
        if (qid == 3401) qt = "哼…好了！终于制成机器人#b#t4031100##k！哈哈~！只要能够按照设计图制作出这样的机器人，再多的外星人也不能威胁到我们了吧！是呀…喂，你！看样子没有要做的事了，帮我做些简单的跑腿吧？";
        if (qid == 3405) qt = "哦…来的正好。多亏你的帮助，现在新型机器人的设计已经全部完成了，现在已经开始着手制作了。不过缺少了制作机器人的3个重要零件，我已经和在玩具城的#b#p2040003##k说过了，你去帮我拿来吧。拜托了！";
        if (qid == 3407) qt = "呵呵…来的正好。正好需要你的帮助，你就来了。是有关你上次从玩具城辛苦拿回来的零件箱子的事…要不要听一听？";
        if (qid == 3408) qt = "哦哦…发生了紧急状况。有了非常危险的家伙出没的消息，但是新型机器人还在开发中…真不知道该怎么办…！你！要是可以，能帮我们吗？由于是紧急状况，没有时间考虑，请你尽快答复！";
        if (qid == 3452) qt = "喔~这个是？哎呀！真有趣…满值得进行研究的。我看你是在旅行中的勇士吧？你有去过一个叫玩具塔的地方吗？? 有没有见过一个和章鱼长得很像的家伙？好像名字叫做#o3230302#吧！那个#b#o3230302##k…你有没有觉得它很可疑？";
        if (qid == 8077) qt = "有什么事吗？我正在忙着制造终极机器人，所以现在请不要打扰我。波特，请把这位客人带出去。";
        if (qid == 3453) qt = "一直对征服地球虎视眈眈的#p2050002#s 制造了一种叫#r#o6220001##k的新武器. 它的身体跟机器人一样硬, 而且也拥有葛雷人的精明. 及使是冒险勇者也会感到刺手.";
        if (qid == 3454) qt = "您跟#p2050002#对话了吗? …哦, 呀? 嘿, 我也预测到葛雷人是不会那么轻易地把关于敬畏的关键情报逗出来. 那么, 我们进行B计划.";
        if (qid == 3457) qt = "怎样，能够从外星人 葛雷 那取得线索吗? 哼, 就连拥有完美协调的社会制度和主权利的葛雷人都无法受控制震诺。。。 多谢您给我珍贵的情报.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2170) cm.completeQuest(2170);
            if (qid == 3400) cm.completeQuest(3400);
            if (qid == 3404) cm.completeQuest(3404);
            if (qid == 3406) cm.completeQuest(3406);
            if (qid == 3407) cm.completeQuest(3407);
            if (qid == 3408) cm.completeQuest(3408);
            if (qid == 3452) cm.completeQuest(3452);
            if (qid == 3458) cm.completeQuest(3458);
            if (qid == 8077) cm.completeQuest(8077);
            if (qid == 3454) cm.completeQuest(3454);
            if (qid == 3457) cm.completeQuest(3457);
        } else {
            if (qid == 3401) cm.startQuest(3401);
            if (qid == 3405) cm.startQuest(3405);
            if (qid == 3407) cm.startQuest(3407);
            if (qid == 3408) cm.startQuest(3408);
            if (qid == 3452) cm.startQuest(3452);
            if (qid == 8077) cm.startQuest(8077);
            if (qid == 3453) cm.startQuest(3453);
            if (qid == 3454) cm.startQuest(3454);
            if (qid == 3457) cm.startQuest(3457);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
