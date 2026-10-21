var status = -1;
function start (){
    action(1,0,0);
}

function action(Mode,Type,Selection){
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