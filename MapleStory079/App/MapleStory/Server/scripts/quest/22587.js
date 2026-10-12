var status = -1;
//this quest is SECRET ORGANIZATION SUSPICION
function start(mode, type, selection) {
    qm.sendNext("Please talk to me again. I would like you to defeat 100  and , but only certain ones. Please talk to me again to go to the certain place.");
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    qm.dispose();
}