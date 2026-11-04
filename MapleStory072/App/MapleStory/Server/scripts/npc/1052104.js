var status = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 2) return;
    if (mode != 1) { cm.dispose(); return; }
    if (status == 0 && cm.isQuestActive(2215)) {
        status = 1;
        cm.forceCompleteQuest(2215);
        cm.sendNext("任务完成。");
        return;
    }
    status = 2;
    cm.dispose();
    cm.openShop(1052104);
}
