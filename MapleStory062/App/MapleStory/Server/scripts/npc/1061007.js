importPackage(net.sf.odinms.client);
var status = 0;

function start() {
    cm.sendYesNo("现在就要放弃么?真可惜.....");
}

function action(mode, type, selection) {
    if(mode == 1)
        cm.warp(105040300,0);
    cm.dispose();
} 