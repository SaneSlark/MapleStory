// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":4006,"name":"情人的魔法礼物","startNpc":9330003,"endNpc":9330003},{"id":9510,"name":"西文亭街景","startNpc":9330004,"endNpc":9330003},{"id":9511,"name":"周杰均的台湾景点","startNpc":9330003,"endNpc":9330003},{"id":9512,"name":"夜市厨师阿琼","startNpc":9330003,"endNpc":9330016}];
var recoveredMenu = null;
function start() {
    var reader = new java.util.Scanner(new java.io.File("scripts/npc/legacy.js"), "GBK");
    try {
        var factory = eval(String(reader.useDelimiter("(?!)").next()));
        recoveredMenu = factory(cm, recoveredDefs, null, null, "暂时没有可以接取或交付的任务。");
    } finally { reader.close(); }
    recoveredMenu.start();
}
function action(mode, type, selection) {
    if (recoveredMenu) recoveredMenu.action(mode, type, selection);
    else cm.dispose();
}
