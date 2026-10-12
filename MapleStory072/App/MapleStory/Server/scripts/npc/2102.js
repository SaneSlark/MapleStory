// Client Quest.wz quests 1003/1004; normal quest APIs retain checks and rewards.
var status = -1, finished = false, step = 0, lines = [];
function start() {
    status = -1; finished = false; step = 0;
    var first = cm.getQuestStatus(1003), second = cm.getQuestStatus(1004);
    if (first == 0) { step = 1; lines = ["妈呀…这不是旅行者吗！来的正是时候啊。哦…有件事想请你帮忙，可以帮我吗？在这里稍微往东边走，那里就有#b水世界景观的水族箱#k。", "珊就在那里，请帮我问问我的弟弟珊，今天晚上想吃什么？"]; }
    else if (first == 1) { step = 0; lines = ["还没有见到#p2001#吗?就在右边的水世界景观的水族箱前。"]; }
    else if (second == 1) { step = 4; lines = ["你是说想喝蘑菇汤。今天晚上就做这道汤了~ 谢谢你帮了我的忙。"]; }
    else { lines = ["今天晚餐要煮什么菜好呢？", "我可爱吗？", "#p2001#会在做什么呢？不晓得有没有到处乱跑…", "正打算为#p2001#煮香菇汤，不晓得有没有更新鲜的香菇呢…"]; }
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
