/**
  Moony - 9201000.js
-- Original Author --------------------------------------------------------------------------------
	Jvlaple
-- Modified by -----------------------------------------------------------------------------------
	XoticMS.
---------------------------------------------------------------------------------------------------
**/

var status;
var ring =  new Array(2240000, 2240001, 2240002, 2240002);
var ringname =  new Array("月之钻戒", "星之钻戒", "黄金钻戒", "白银钻戒");
 
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else if (type == 0 && mode == 0)
        status--;
    else {
	if (type == 1 && mode == 0)
		cm.sendOk("哈，等你想好了再和我说吧 ?");
        cm.dispose();
        return;
    }
	
    var mqLvl = cm.getPlayer().getMarriageQuestLevel();
    if (status == 0) {
        if(cm.getLevel() >= 10) {
            if (mqLvl == 0)
                cm.sendNext("嗨, 我是 阿雷格, 我是制作婚礼专用订婚戒指的.");
            else if (mqLvl == 1) {
                var numberOfLoves = 0;
                for (var i = 4031367; i <= 4031372; i++)
                    numberOfLoves += cm.itemQuantity(i);
                if (numberOfLoves >= 4) {
                    cm.sendNext("哇，你完成的非常漂亮. 取得 #b爱情的证明#k了么? 让我看看...");
                } else {
                    cm.sendOk("喔，你没有4 种不同的 #b爱情的证明#k.");
                    cm.dispose();
                }
            } else if (mqLvl == 2) {
                var text = "嗨, 你回来啦! 真的要选择你的[专属]戒指了么 ?#b";
                for (var i = 0; i < ring.length; i++)
                    text += "\r\n#L"+i+"#"+ringname[i]+"#l";
                cm.sendSimple(text);
            } else { // already has ring ?
                cm.sendOk("我讨厌做戒指了...");
                cm.dispose();
            }
        } else {
            cm.sendOk("晕啊，你都还没到10级就想结婚了?...");
            cm.dispose();
        }
    } else if (status == 1) {
        if (mqLvl == 0)
            cm.sendYesNo("哈哈，看上去你想要结婚嘛! 想要制作一个订婚戒指么?");
        else if (mqLvl == 1)
            cm.sendNext("非常漂亮的获得了 #b爱情的证明#k! 很好，我们现在可以制作一个#b订婚戒指#k了.");
        else if (mqLvl == 2) {
            var reqItem = new Array(4011007, 4021009, 4011006, 4011004);
            var price = new Array(3000000, 2000000, 1000000, 500000);
            if (cm.haveItem(reqItem[selection]) && cm.haveItem(4021007) && cm.getMeso() >= price[selection]) {
                cm.gainItem(reqItem[selection], -1);
                cm.gainItem(4021007, -1);
                cm.gainMeso(-price[selection]);
                cm.gainItem(ring[selection], 1);
                cm.sendOk("你获得了一枚戒指!,玩的开心^_^!");
                cm.getPlayer().addMarriageQuestLevel();
            } else {
                cm.sendNext("你没有正确取得制作戒指的全部材料来制作一枚戒指, 我需要下列的其中之一:\r\n\r\n#e#d月之钻戒:#k\r\n#v4011007#月石 (1),#v4021007#钻石 (1), 3,000,000 金币\r\n#d星之钻戒:#k\r\n#v4021009#星石 (1),#v4021007#钻石 (1), 2,000,000 金币\r\n#d黄金钻戒 :#k\r\n#v4011006#黄金 (1),#v4021007#钻石 (1), 1,000,000 金币\r\n#d 白银钻戒:#k\r\n#v4011004#白银 (1),#v4021007#钻石 (1), 500,000 金币\r\n");
            }
            cm.dispose();
        }
    } else if (status == 2) {
        if (mqLvl == 0) {
            cm.getPlayer().addMarriageQuestLevel();
            cm.sendOk("很好, 第一步帮我取回四种不同颜色的 #b爱情的证明#k. 爱情的证明可以在各个城市的 #b幸福天堂Nana#k 处获得相关信息. 当然，她们会提供给你指示.");
            cm.dispose();
        }else if (mqLvl == 1) {
            cm.removeAll(4031367);
            cm.removeAll(4031368);
            cm.removeAll(4031369);
            cm.removeAll(4031370);
            cm.removeAll(4031371);
            cm.removeAll(4031372);
            cm.getPlayer().addMarriageQuestLevel();
            cm.sendNextPrev("你没有正确取得制作戒指的全部材料来制作一枚戒指, 我需要下列的其中之一:\r\n\r\n#e#d月之钻戒:#k\r\n#v4011007#月石 (1),#v4021007#钻石 (1), 3,000,000 金币\r\n#d星之钻戒:#k\r\n#v4021009#星石 (1),#v4021007#钻石 (1), 2,000,000 金币\r\n#d黄金钻戒 :#k\r\n#v4011006#黄金 (1),#v4021007#钻石 (1), 1,000,000 金币\r\n#d 白银钻戒:#k\r\n#v4011004#白银 (1),#v4021007#钻石 (1), 500,000 金币\r\n");
            cm.dispose();
        }
    }
}