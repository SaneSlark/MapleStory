// Tutorial skip flow; reference: HeavenMS scripts/npc/2007.js.
// The bundled client's tutoChatNPC portal opens this NPC.
var status = -1;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        cm.sendYesNo("要跳过新手教程，直接前往明珠港吗？");
    } else {
        cm.warp(104000000, 0);
        cm.dispose();
    }
}