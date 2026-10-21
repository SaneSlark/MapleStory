/*
@    Author : Snow
@
@    NPC = NAME
@    Map =  MAP
@    NPC MapId = MAPID
@    Function = Rebirth Player
@
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
        cm.dispose();
    
    }else if (mode == 0){//No
        cm.sendOk("好的，等你确定想要#b重生#k的时候再来找我吧。");
        cm.dispose();

    }else{            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
       cm.sendNext("你好，如果你有我需要的所有材料，那么我将可以给你做⑩个#r喊中文喇叭#k！\r\n你需要以下物品才证明你很强大\r\n#v4000001#花蘑菇盖50个#v4000012#绿蘑菇盖50个\r\n 以及给我 #b10000金币#k.  ");
            }
        else if (status == 1) {
            if ((cm.haveItem(4000001, 50)) && (cm.haveItem(4000012, 50)) && (cm.getMeso() >= 10000)) {
            cm.sendYesNo("不错喔，看来你已经收集到制作转身币所需要的所有材料, 你现在就想让我给您制作10个 #b喊中文喇叭#k 吗?");
            }
            else if (!cm.haveItem(4000001, 50)) {
            cm.sendOk("你没有达到数量");
            cm.dispose();
            }
            else if (!cm.haveItem(4000012, 50)) {
            cm.sendOk("你没有达到数量");
            cm.dispose();
                        }
                      
            else if (!cm.getMeso() <= 10000) {
            cm.sendOk("很抱歉，你身上的金币不够支付本次制作的费用.");
            cm.dispose();
            }
            
        }
        else if (status == 2) {
       cm.gainMeso(-10000);
                        cm.gainItem(4000001, -50);
                        cm.gainItem(4000012, -50);                        
       cm.gainItem(5390001, 10);
                        cm.dispose();
            
}
}
}