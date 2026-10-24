// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":9490,"name":"激动人心的世界旅行","startNpc":9010000,"endNpc":9110002},{"id":9491,"name":"美味团子","startNpc":9110002,"endNpc":9110002},{"id":9492,"name":"美味的鱼饼（串）","startNpc":9110002,"endNpc":9110002},{"id":9493,"name":"乌鸦狩猎","startNpc":9110002,"endNpc":9110002},{"id":9494,"name":"基诺科 的最后一个请求","startNpc":9110002,"endNpc":9310011}];
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
