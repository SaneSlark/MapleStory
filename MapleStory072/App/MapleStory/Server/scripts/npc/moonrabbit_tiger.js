var done = false, choice = -1;
function start() {
    cm.sendSimple("请种下六种迎月花种子，保护月妙，并由队长带来10个月妙的年糕。\r\n#L0#交付10个年糕，完成挑战#l\r\n#L1#离开挑战#l");
}
function action(mode, type, selection) {
    if (done) return;
    if (mode != 1) { done = true; cm.dispose(); return; }
    var eim = cm.getEventInstance();
    if (cm.getMapId() != 910010000 || eim == null) { done = true; cm.dispose(); return; }
    if (choice < 0) {
        if (selection != 0 && selection != 1) { done = true; cm.dispose(); return; }
        choice = selection;
        if (choice == 1) { cm.sendYesNo("确定要离开挑战吗？队长离开或人数不足3人时，挑战会结束。"); return; }
    }
    done = true;
    if (choice == 1) { cm.dispose(); eim.removePlayer(cm.getPlayer()); return; }
    if (!cm.isLeader()) cm.sendOk("请让队长交付年糕。");
    else if (eim.getProperty("phase") != "protect") cm.sendOk("请先种齐六种迎月花，让月妙出现。");
    else if (!cm.haveItem(4001101, 10)) cm.sendOk("请带来10个月妙的年糕。");
    else { cm.gainItem(4001101, -10); cm.dispose(); eim.finishPQ(); return; }
    cm.dispose();
}
