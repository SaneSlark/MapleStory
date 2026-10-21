/*
    NX Cash Selling NPC
    By V1ral from www.ancient-ms.net
    Put it as any NPC you have free.
    Change prices and ammounts to your liking
*/
function start() {
    cm.sendSimple ("你想要兑换一些点卷?\r\n#r#L0##e10,000 点 - 100,000,000 冒险币#n#l\r\n#k#L1##e30,000 点 - 250,000,000 冒险币#n#l#k");
}

function action(mode, type, selection) {
    cm.dispose();
    switch(selection){
        case 0: 
            if(cm.getMeso() >= 100000000){
                cm.sendOk("谢谢, 你获得了10,000点卷.");
                cm.gainNX(10000);
                cm.gainMeso(-100000000);
                cm.dispose();
            }else{
                cm.sendOk("你没有100,000,000冒险币.");
                cm.dispose();
            }
            break;
        case 1: 
            if(cm.getMeso() >= 250000000){
                cm.sendOk("谢谢, 你获得了30,000点卷.");
                cm.gainNX(30000);
                cm.gainMeso(-250000000);
                cm.dispose();
            }else{
                cm.sendOk("你没有250,000,000冒险币.");
                cm.dispose();
            }
            break;
    }
}
