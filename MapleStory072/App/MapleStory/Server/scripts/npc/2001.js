// Client Quest.wz quests 1003/1004; normal quest APIs retain checks and rewards.
var status = -1, finished = false, step = 0, lines = [];
function start() {
    status = -1; finished = false; step = 0;
    var first = cm.getQuestStatus(1003), second = cm.getQuestStatus(1004);
    if (first == 1) { step = 2; lines = ["啊~饿死了。姐姐去哪里了~本来想跟姐姐说晚上想吃蘑菇汤呢…好饿喔~"]; }
    else if (first == 2 && second == 0) { step = 3; lines = ["啊~饿死了。姐姐去哪里了~本来想跟姐姐说晚上想吃蘑菇汤呢…好饿喔~"]; }
    else { lines = ["我， 饿死了…", "这个。。。能吃吗？", "居然都没有东西可以吃，呜呜呜呜~~", "我姊说要作香菇汤给我吃喔！啊~好饿啊！"]; }
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (finished) return;
    if (mode == -1 || (mode == 0 && status <= 0)) { finished = true; cm.dispose(); return; }
    status += mode == 1 ? 1 : -1;
    if (status < lines.length) {
        if (status == 0) cm.sendNext(lines[status]); else cm.sendNextPrev(lines[status]);
        return;
    }
    finished = true;
    if (step == 1 && cm.getQuestStatus(1003) == 0) cm.startQuest(1003);
    if (step == 2 && cm.getQuestStatus(1003) == 1) cm.completeQuest(1003);
    if ((step == 2 || step == 3) && cm.getQuestStatus(1003) == 2 && cm.getQuestStatus(1004) == 0) cm.startQuest(1004);
    if (step == 4 && cm.getQuestStatus(1004) == 1) cm.completeQuest(1004);
    cm.dispose();
}
