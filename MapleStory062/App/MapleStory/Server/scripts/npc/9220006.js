// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":5009,"name":"交换白色的礼物盒","startNpc":9220006,"endNpc":9220006},{"id":5010,"name":"交换红色的礼物盒","startNpc":9220006,"endNpc":9220006},{"id":5011,"name":"交换紫色的礼物盒","startNpc":9220006,"endNpc":9220006},{"id":5012,"name":"交换蓝色的礼物盒","startNpc":9220006,"endNpc":9220006}];
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
