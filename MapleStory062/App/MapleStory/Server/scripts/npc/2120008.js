/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2120008
   覆盖任务: 9944, 9945, 10068, 10069, 10070, 10071, 10072, 10073
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
    if (cm.getQuestStatus(9944) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "丢弃的娃娃" + "#l"; n++; }
    if (cm.getQuestStatus(9945) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "寻找娃娃" + "#l"; n++; }
    if (cm.getQuestStatus(10068) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5df4\u7279\u52d2\u7684\u9ebb\u70e6" + "#l"; n++; }
    if (cm.getQuestStatus(10069) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5e7d\u7075T\u662f\u8c01\uff1f" + "#l"; n++; }
    if (cm.getQuestStatus(10071) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u76ae\u6258\u7684\u9057\u61be" + "#l"; n++; }
    if (cm.getQuestStatus(10072) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5236\u4f5c \u76ae\u7279 \u5a03\u5a03" + "#l"; n++; }
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
        if (cm.getQuestStatus(9944) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9944; } }
        if (cm.getQuestStatus(9945) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9945; } }
        if (cm.getQuestStatus(10068) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10068; } }
        if (cm.getQuestStatus(10069) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10069; } }
        if (cm.getQuestStatus(10071) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10071; } }
        if (cm.getQuestStatus(10072) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10072; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9944) qt = "你好？见到你很高兴。我叫#p2120008#。嗯？你问我T是不是我名字？不是不是～怎么可能。但是名字我早就忘记了。现在只记得第一个字母了。所以没有办法，介绍的时候就只能说是T了。";
        if (qid == 9945) qt = "哇！#t2022256#耶！真是谢谢你！我很久都没见到#t2022256#了！……哦，对了！我也有东西要给你。来，这是#p2120005#的#t4031837#。我在烟囱的缝隙中找到了一个。#p2120004#做了很多这样的东西，非常容易找。";
        if (qid == 10068) qt = "\u4ec0\u4e48\uff1f\u6211\u9a9a\u6270\u8c01\u4e86\uff1f\u8fd9\u592a\u8352\u8c2c\u4e86\uff01\u6211\u53ea\u662f\u56db\u5904\u8be2\u95ee\u4eba\u4eec\u662f\u5426\u77e5\u9053\u6211\u662f\u8c01\u3002\u4eba\u4eec\u53ea\u662f\u5bb3\u6015\u5e76\u9003\u907f\u5b83\uff01";
        if (qid == 10069) qt = (qact == 1 ? "#b 幽灵T #k 是 #b 皮特 #k。这座豪宅发生了什么？" : "我不知道我是谁。我试着去问人，但他们看到我时都很害怕，所以我躲了起来，结果到了这个我不知道自己在哪里的地方。这里很黑，但没关系，因为人们不怕我。你介意给我一些可以帮助我找到自我的东西吗？当我四处走动时，人们会感到害怕，所以我想如果你给我这里的一件物品，我可能会记住它。");
        if (qid == 10071) qt = "\u539f\u6765\u5982\u6b64\uff0c\u7adf\u7136\u53d1\u751f\u8fc7\u8fd9\u6837\u7684\u4e8b\u3002\u5982\u679c\u6211\u80fd\u591a\u4e3a\u4e3b\u4eba\u60f3\u60f3\uff0c\u5c31\u4e0d\u4f1a\u90a3\u4e48\u505a\u4e86\u2026\u2026\u90fd\u662f\u6211\u7684\u9519\uff0c\u8fd9\u4e2a\u539f\u672c\u5e73\u9759\u7684\u5bb6\u5ead\u624d\u4f1a\u53d8\u6210\u8fd9\u6837\u3002\u4ed6\u4eec\u7adf\u7136\u627f\u53d7\u4e86\u6574\u6574100\u5e74\u7684\u8bc5\u5492\u2026\u2026";
        if (qid == 10072) qt = (qact == 1 ? "20 就足够了。请稍等。我一会儿就给你做。" : "我想我是唯一能让这个家庭感到舒适的人。但如果你采用这种外观，人们只会感到惊讶。我应该怎么办？ \r\n#b#L0# 只要你有一个和你长得一样的人偶，就可以去假面神社变身。");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9944) cm.completeQuest(9944);
            if (qid == 9945) cm.completeQuest(9945);
            if (qid == 10068) cm.completeQuest(10068);
            if (qid == 10069) cm.completeQuest(10069);
            if (qid == 10071) cm.completeQuest(10071);
            if (qid == 10072) cm.completeQuest(10072);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
