// Dialogue text: client String.wz/Npc.img; routing is a server compatibility repair.
var status = -1;
var finished = false;
var lines = ["按↑键，可以爬梯子或吊绳。", "双击我们，就可以开始对话。", "你是第一次探险吧？"];
function start() { status = -1; finished = false; action(1, 0, 0); }
function action(mode, type, selection) {
    if (finished) return;
    if (mode == -1 || (mode == 0 && status <= 0)) { finished = true; cm.dispose(); return; }
    status += mode == 1 ? 1 : -1;
    if (status < lines.length) {
        if (status == 0) cm.sendNext(lines[status]); else cm.sendNextPrev(lines[status]);
    } else {
        finished = true;
        var map = cm.getPlayer().getMapId();
        if (map == 0) cm.warp(3, 0);
        cm.dispose();
    }
}
