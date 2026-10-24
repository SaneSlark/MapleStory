// CMS072 Quest.wz: 1008 requires 5 of each item; 1020 follows 1008.
var pending = -1, finishing = false, active = false;
function start() {
    pending = -1; finishing = false; active = false;
    var state = cm.getQuestStatus(1008);
    if (state == 0) {
        if (!Packages.server.quest.MapleQuest.getInstance(1008).canStart(cm.getPlayer(), cm.getNpc())) {
            cm.sendOk("你现在还不能接取这个任务，请先完成前面的任务。"); cm.dispose(); return;
        }
        pending = 1008;
        cm.sendYesNo("啊。。。大家太容易丢弃那些还能用的东西嘛。。。我看村里到处都有很多还能再用的物品。你可以收集那些物品后给我吗？\r\n我给你的报酬很丰厚哦。" + "\r\n\r\n" + "嗯。。。你来这里的时候看见过各处被扔掉的木制箱吗？看见了？就是破坏那些箱子后收集箱子里的垃圾的事情。破坏木制箱子会有#t4031162#, #t4031161#等东西。你收集各5个来吧。 \r\n\r\n#i4031161# #t4031161# #b5个#k\r\n#i4031162# #t4031162# #b5个#k");
    } else if (state == 1) {
        pending = 1008; finishing = true;
        cm.sendYesNo("嗯。。。你来这里的时候看见过各处被扔掉的木制箱吗？看见了？就是破坏那些箱子后收集箱子里的垃圾的事情。破坏木制箱子会有#t4031162#, #t4031161#等东西。你收集各5个来吧。 \r\n\r\n#i4031161# #t4031161# #b5个#k\r\n#i4031162# #t4031162# #b5个#k" + "\r\n\r\n请确认已经满足任务条件，再和我对话。");
    } else {
        var next = cm.getQuestStatus(1020);
        if (next == 2) { cm.sendOk("哎呀~你不就是前不久给我送来好多可再用的好东西的那位朋友吗？看起来你就快转职了？达到一定级别就可以选择职业了。。。你还不太清楚吗？\r\n#b达到级别8就可以转制为魔法师#k，可是#b战士，弓箭手，飞侠要达到级别10才可以转职#k。在彩虹岛这里不能转职，要到南港乘坐#r船#k去金银岛。。。"); cm.dispose(); return; }
        pending = 1020; finishing = next == 1;
        cm.sendYesNo("谢谢你帮忙收集可再用的物品。准备好领取休闲椅了吗？");
    }
    active = true;
}
function action(mode, type, selection) {
    if (!active) return;
    active = false;
    if (mode != 1) { cm.dispose(); return; }
    var q = Packages.server.quest.MapleQuest.getInstance(pending);
    if (finishing) {
        if (!q.canComplete(cm.getPlayer(), cm.getNpc())) {
            cm.sendOk(pending == 1008 ? "请收集#t4031161#和#t4031162#各5个后再来找我。" : "请确认已经满足任务条件，再和我对话。");
            cm.dispose(); return;
        }
        if (pending == 1020 && !cm.canHold(3010000, 1)) { cm.sendOk("设置栏空间不足，请留出一个空位后再来领奖。"); cm.dispose(); return; }
        cm.completeQuestInScript(pending);
    } else {
        if (q.canStart(cm.getPlayer(), cm.getNpc())) { cm.startQuestInScript(pending); cm.dispose(); }
        else cm.dispose();
    }
}
