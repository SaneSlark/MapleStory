var done = false;
function start() {
    done = false;
    cm.sendYesNo("我可以将你当前职业及其前置职业的普通技能加满。特殊技能仍需通过对应任务或玩法获得，是否确认？");
}
function action(mode, type, selection) {
    if (done) return;
    done = true;
    if (mode == 1) {
        var count = cm.maxClientJobSkills();
        cm.sendOk(count > 0 ? "当前职业及其前置职业的普通技能已加满。" : "你目前没有可以加满的普通职业技能。");
    }
    cm.dispose();
}
