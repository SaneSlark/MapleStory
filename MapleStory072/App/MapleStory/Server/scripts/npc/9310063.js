// CMS compatibility exit for the inactive summer-boating dock; not official event logic.
var active = false;
function start() {
    active = false;
    if (cm.getMapId() != 709000100) { cm.dispose(); return; }
    active = true;
    cm.sendYesNo("这里是东方神州竞舟活动的候船码头。夏日竞舟活动已经结束。\r\n\r\n要离开码头，返回#b上海外滩#k吗？也可以使用码头左侧的出口离开。");
}
function action(mode, type, selection) {
    if (!active) return;
    active = false;
    cm.dispose();
    if (mode == 1 && cm.getMapId() == 709000100) cm.warp(701000000, 0);
}
