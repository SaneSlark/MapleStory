/*
	Author: Frisby
	NPC   : Cloy
	Use   : Pet Quest Entrance NPC.
	Quest : 100200
 */

importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.scripting.npc);

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("真可惜... \r 我想你应该可以做到.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getQuestStatus(100200) == MapleQuestStatus.Status.COMPLETED) {
                cm.sendNext("我平时卖些宠物食品. 我朋友德福斯卖的宠物物品或许你会需要.");
                status = 2;
            } else {
                cm.sendYesNo("嘿 ! 你是否想增加#r宠物#k的好感, 来对地方了. 不过需要博得你的宠物喜欢才行. 你确定要进来?");
            }
        } else if (status == 1) {
            cm.sendSimple("太好了,如果想要离开告诉我就行,我会带你出去. \r\n#L0##b我要去!#l \r\n#L1#我想回去#l");
        } else if (status == 2) {
            if (selection == 0) {
                cm.warp(109010110, 0);	
                cm.startQuest(100200);
                cm.sendOk("在箱子中找到宝石,与我交换!");
                cm.dispose();		
            } else if (selection == 1) {
                cm.sendOk("我们都有失败的时侯.");
                cm.dispose();
            }
        } else if (status == 3) {
            var items = new Array (5000000, 5000001, 5000002, 5000003, 5000004, 5000005, 5000006, 5000007, 5000008, 5000009, 5000010, 5000011, 5000012, 5000013, 5000014, 5000015, 5000017,/* 5000018,*/ 5000020,/* 5000021,*/ 5000022, 5000023, 5000024, 5000025,/* 5000026,*/ 5000029, 5000034, 5000036, 5000037, 5000039, 5000041, 5000044, 5000045);
            var selStr = "那么，你想选哪一只？记住，我出售的每只宠物都要 #b50,000,000 金币#k。这些小家伙可不好抓！";
            for (var i = 0; i < items.length; i++){
                selStr += "\r\n#b#L" + i + "# #v" + items[i] + "# #t" + items[i] + "##l#k";
            }
            cm.sendSimple(selStr);
        } else if (status == 4) {
            if (cm.getMeso() < 50000000) {
                cm.sendOk("你没有足够的钱.");
                cm.dispose();
            } else {
                cm.gainMeso(-50000000);
                PetGiver.gainPet(cm.getC(), items[selection], MapleItemInformationProvider.getInstance().getName(items[selection]), 1, 0, 100);
                cm.dispose();
            }
        }
    }
}
