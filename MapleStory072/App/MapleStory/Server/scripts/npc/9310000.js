// CMS072 resource-compatible Hong route; repair dialogue, not original client dialogue.
var done = false;
function start() {
    done = false;
    cm.sendYesNo("你要去东方的新大陆？我可以送你过去。前往#b上海外滩#k需要#e1000金币#n，要出发吗？");
}
function action(mode, type, selection) {
    if (done) return;
    done = true;
    if (mode != 1) { cm.dispose(); return; }
    if (cm.getMapId() != 102000000) { cm.dispose(); return; }
    if (cm.getMeso() < 1000) {
        cm.sendOk("您的金币不足1000，请准备好路费再来。");
    } else {
        cm.gainMeso(-1000);
        cm.warp(701000000, 0);
    }
    cm.dispose();
}
