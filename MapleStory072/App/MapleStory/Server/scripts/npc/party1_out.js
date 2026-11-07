var done = false;
function start() { cm.sendYesNo("要离开这里，返回废弃都市吗？尚未通关时退出会结束本队挑战。"); }
function action(mode, type, selection) {
    if (done) return; done = true;
    if (mode != 1) { cm.dispose(); return; }
    var map = cm.getMapId(), eim = cm.getEventInstance(); cm.dispose();
    if (map == 103000890) cm.warp(103000000, 0);
    else if (map >= 103000800 && map <= 103000805) {
        if (eim != null && eim.getEventManager().getName() == "KerningPQ") eim.getEventManager().getIv().invokeFunction("playerExit", eim, cm.getPlayer());
        else cm.warp(103000000, 0);
    }
}
