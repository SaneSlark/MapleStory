var status = -1;
function recoveredOriginalStart(){
    action(1,0,0);
}

function recoveredOriginalAction(Mode,Type,Selection){
    if(Mode != 1){
        cm.dispose();
        return;
    }else
        status++;
    if(status == 0)
        cm.sendNext("多么美好的一天,小鸟在前面带路,风儿吹向我们....我能感觉到天空无尽的爱..你觉得呢? #r<3#k.");
    else if(status == 1)
        cm.sendYesNo("噢,嘿 #h #, 对不起.. 你想要一个装着巧克力的爱心包裹么? ");
    else if(status == 2)
        cm.sendNext("你只要给我些钱,我会帮你这个忙. :)\r\n\r\n我需要的东西是:\r\n\r\n1 #i4031111# #b#t4031111# \r\n1 #i4031112# #b#t4031112# \r\n1 #i4031109# #b#t4031109# \r\n1 #i4031110# #b#t4031110# \r\n 1000 金币");
    else if(status == 3){
        if(cm.haveItem(4031111) && cm.haveItem(4031112) && cm.haveItem(4031110) && cm.haveItem(4031109) && cm.getMeso() > 999){
            cm.sendOk("很好, 你已经得到 #i4140100#");
            cm.gainItem(4140100,1);
        }else
            cm.sendNext("双击就可以打开 <3");
        cm.dispose();
    }
}



// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":9340,"name":"白色情人节：草莓糖","startNpc":2041017,"endNpc":2041017},{"id":9341,"name":"白色情人节：糖果篮","startNpc":2041017,"endNpc":2041017}];
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
