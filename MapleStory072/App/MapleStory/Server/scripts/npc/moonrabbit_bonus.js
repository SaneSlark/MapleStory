var done = false;
function start() { cm.sendYesNo("要离开这里吗？"); }
function action(mode, type, selection) {
    if (done) return;
    done = true; cm.dispose();
    if (mode != 1) return;
    if (cm.getMapId() == 910010200) cm.warp(910010400, 0);
    else cm.warp(100000200, 0);
}
