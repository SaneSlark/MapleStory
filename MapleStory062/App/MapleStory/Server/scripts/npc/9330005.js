// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":4007,"name":"完美盒子","startNpc":9330005,"endNpc":9330005},{"id":9498,"name":"杨叔叔的请求","startNpc":9310010,"endNpc":9330005},{"id":9499,"name":"孙妍珠台湾介绍","startNpc":9330005,"endNpc":9330004}];
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
