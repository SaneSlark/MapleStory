// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":4002,"name":"' #p9000009# '他们说这次航行中捡到的宝箱无法打开......","startNpc":9330017,"endNpc":9330018},{"id":4003,"name":"#b#p9000009##k 据说在这次航行中捡到的宝箱中，有一个蓝色的宝箱无法打开。据说，需要一把神秘的钥匙才能打开这个宝箱。为了制作神秘钥匙，他让我去拿材料，说我需要#r#o6230600##k给的#b#t4000185# 100 #k。\\n\\n#t4000185# #b#c4000185##k / 100","startNpc":9330018,"endNpc":9330018},{"id":4004,"name":"#p9000009# 航行回来，看上去很疲惫，但因为航行中得到的宝箱，显得精神很好。","startNpc":9330018,"endNpc":2032001}];
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
