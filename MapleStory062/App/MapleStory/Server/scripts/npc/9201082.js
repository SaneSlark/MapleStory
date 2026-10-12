/*
	NX Cash Selling NPC
	By V1ral from www.ancient-ms.net
	Put it as any NPC you have free.
	Change prices and ammounts to your liking
 */
function start() {
    cm.sendSimple ("你想要兑换一些点卷?\r\n#r#L0##e10,000 点 - 200,000,000 冒险币#n#l\r\n#k#L1##e25,000 点 - 400,000,000 冒险币#n#l#k");
}

function action(mode, type, selection) {
    cm.dispose();
    switch(selection){
        case 0: 
            if(cm.getMeso() >= 200000000){
                cm.sendOk("谢谢, 你获得了10,000点卷.");
                cm.gainNX(10000);
                cm.gainMeso(-200000000);
                cm.dispose();
            }else{
                cm.sendOk("你没有200,000,000冒险币.");
                cm.dispose();
            }
            break;
        case 1: 
            if(cm.getMeso() >= 400000000){
                cm.sendOk("谢谢, 你获得了25,000点卷.");
                cm.gainNX(25000);
                cm.gainMeso(-400000000);
                cm.dispose();
            }else{
                cm.sendOk("你没有400,000,000冒险币.");
                cm.dispose();
            }
            break;
    }
}