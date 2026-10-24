// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":4000,"name":"我打败了小时候折磨“#p9000009#”的怪物并查看了宝箱。他感谢我打败了怪物，并把宝箱里的一件宝物送给了我。","startNpc":9330016,"endNpc":9330016},{"id":4001,"name":"亚种爱好2","startNpc":9330016,"endNpc":9330016},{"id":9512,"name":"夜市厨师阿琼","startNpc":9330003,"endNpc":9330016},{"id":9513,"name":"阿宗厨师的要求","startNpc":9330016,"endNpc":9010000},{"id":9514,"name":"阿宗厨师的美味春卷","startNpc":9010000,"endNpc":9330016}];
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
