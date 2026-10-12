var status = -1;

function action(mode, type, selection) {
    if (cm.isQuestActive(3929)) {
	cm.playerMessage("任务完成。");
	cm.forceCompleteQuest(3929);
    }
    cm.dispose();
}