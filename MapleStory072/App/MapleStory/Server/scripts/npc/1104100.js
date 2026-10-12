/* 
 * NPC :      Mihai
 * Map :      Timu's Forest
 */

function start() {
    cm.sendNext("哦……似乎发现了什么？那就只能战斗了，拿出#r黑色之翼#k应有的实力吧！");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.removeNpc(cm.getMapId(), 1104100);
	cm.spawnMob(9001009, 263, 88); // Transforming
    }
    cm.dispose();
}