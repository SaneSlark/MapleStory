var done = false;
function start() {
    if (done) return; done = true;
    var eim = cm.getEventInstance();
    if (eim != null && eim.getEventManager().getName() == "KerningPQ") eim.getEventManager().getIv().invokeFunction("talk", eim, cm);
    else cm.sendOk("你不在本轮废弃都市组队任务中，请通过出口返回。");
    cm.dispose();
}
function action(mode, type, selection) { cm.dispose(); }
