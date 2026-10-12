var status = -1;

function action(mode, type, selection) {
    if (cm.isQuestActive(3923)) {
	cm.forceCompleteQuest(3923);
	cm.sendNext("任务完成。");
    }
    cm.dispose();
}