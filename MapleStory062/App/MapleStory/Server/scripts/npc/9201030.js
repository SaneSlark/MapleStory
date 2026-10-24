function recoveredOriginalStart() {
	cm.sendOk ("心中无敌 无敌于天下");
	cm.dispose();
}
function recoveredOriginalAction(mode,type,selection){cm.dispose();}




// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":4486,"name":"烟囱大扫厨!","startNpc":9201030,"endNpc":1010100},{"id":4487,"name":"丽娜的清洁工具","startNpc":1010100,"endNpc":9201030},{"id":4995,"name":"枫叶圣诞的精神","startNpc":9201030,"endNpc":9201030},{"id":4997,"name":"欢乐枫叶圣诞","startNpc":9201030,"endNpc":9201030},{"id":9640,"name":"圣诞猫咪的礼物准备","startNpc":9201030,"endNpc":9201030},{"id":9641,"name":"给善良的猫的礼物","startNpc":9201030,"endNpc":9201030},{"id":9642,"name":"猫的圣诞节","startNpc":9201030,"endNpc":9201030}];
var recoveredMenu = null;
function start() {
    var reader = new java.util.Scanner(new java.io.File("scripts/npc/legacy.js"), "GBK");
    try {
        var factory = eval(String(reader.useDelimiter("(?!)").next()));
        recoveredMenu = factory(cm, recoveredDefs, recoveredOriginalStart, recoveredOriginalAction, "暂时没有可以接取或交付的任务。");
    } finally { reader.close(); }
    recoveredMenu.start();
}
function action(mode, type, selection) {
    if (recoveredMenu) recoveredMenu.action(mode, type, selection);
    else cm.dispose();
}
