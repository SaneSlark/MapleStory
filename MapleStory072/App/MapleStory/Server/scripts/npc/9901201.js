var status = -1;
var nitems = Array("200万金币", "10000点券", "#v2340000#祝福卷轴 (等级70以上)", "#v2049100#混沌卷轴60% (等级70以上)", "#v5220000#快乐百宝券 × 25", "#v5050000#洗能力点卷轴 × 5", "#v5050000#洗能力点卷轴 × 26", "#v5062000#神奇魔方 × 4", "#v5062000#神奇魔方 × 21", "#v2022179#玛瑙苹果 × 4", "#v2022179#玛瑙苹果 × 21", "#v5062001#高级神奇魔方 × 2", "#v2530000#幸运日卷轴（等级70以上）", "#v2531000#保护卷轴（等级70以上）");
var np = Array(1, 1, 5, 2, 1, 1, 5, 1, 5, 1, 5, 9, 5, 10);
var ditems = Array("#v5211067#1.2倍经验卡（1天）", "#v5211068#1.5倍经验卡（1天）", "#v5360000#双倍掉宝率卡（1天）", "#v4030004#俄罗斯方块");
var dp = Array(4, 8, 3, 4, 4, 3);
var mitems = Array("#v4080100#记忆大考验", "#v4080000#绿水灵/蘑菇五目石", "#v4080001#绿水灵/三眼章五子棋", "#v4080002#绿水灵/猪猪五子棋", "#v4080003#三眼章鱼/蘑菇五子棋", "#v4080004#猪猪/三眼章鱼五子棋", "#v4080005#猪猪/蘑菇五子棋", "#v4080006#吹泡泡双鱼/玩具粉熊五子棋套", "#v4080007#吹泡泡双鱼/绿蜘蛛五子棋套", "#v4080008#玩具粉熊/绿蜘蛛五子棋套", "#v4080009#玩具熊猫/吹泡泡双鱼五子棋套", "#v4080010#玩具熊猫/玩具粉熊五子棋套", "#v4080011#玩具熊猫/绿蜘蛛五子棋套");
var mp = Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
var mhair = Array(33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33150, 33160, 33170, 33180, 33190, 33210, 33220, 33240, 33250, 33270, 33280, 33290, 33350, 33360, 33370, 33380, 33390, 33400, 33440, 33450, 33460, 33500, 33510, 33520, 33580, 33590);
var fhair = Array(34000, 34010, 34020, 34030, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34180, 34190, 34210, 34220, 34250, 34260, 34270, 34310, 34320, 34330, 34340, 34360, 34400, 34410, 34420, 34450, 34470, 34480, 34490, 34540);
var hairnew;
var itemowner = "Vesper";

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
if(mode!=1){cm.dispose();return;}
if((status==1 && selection>=7 && selection<=13) || (status==2 && [0,1].indexOf(selection)>=0)){cm.sendOk("该兑换物品不在本客户端中，未扣积分。");cm.dispose();return;}
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        cm.sendSimple("你好，我负责#r#e投票积分兑换#n#k。每次投票可以获得积分，你目前有#e#r" + cm.getPlayer().getVPoints() + "#n#k投票积分，可以兑换以下物品：\r\n\r\n#b#L0#兑换普通物品#l\r\n#L1#兑换特殊物品#l"/* + "\r\n#L2#Trade for Royal Hair(35 vote points)#l\r\n#L3#Trade for Minigame Item#l*/ + "\r\n#L4#重置全部能力值（20投票积分，不重置体力或魔法力）#l#k");
    } else if (status == 1) {
        status += selection;
        var selStr;
        var it;
        var ip;
        if (selection == 0) {
            selStr = "#r普通物品#k，以下是可以兑换的项目：\r\n\r\n";
            it = nitems;
            ip = np;
        } else if (selection == 1) {
            selStr = "#r特殊物品#k，以下是可以兑换的项目：\r\n\r\n";
            it = ditems;
            ip = dp;
        } else if (selection == 2) {
            hairnew = Array();
            if (cm.getPlayerStat("GENDER") == 0) {
                for (var i = 0; i < mhair.length; i++) {
                    if (mhair[i] == 30010 || mhair[i] == 30070 || mhair[i] == 30080 || mhair[i] == 30090 || mhair[i] == 33140 || mhair[i] == 33240 || mhair[i] == 33180) {
                        hairnew.push(mhair[i]);
                    } else {
                        hairnew.push(mhair[i] + parseInt(cm.getPlayerStat("HAIR") % 10));
                    }
                }
            } else {
                for (var i = 0; i < fhair.length; i++) {
                    if (fhair[i] == 34160) {
                        hairnew.push(fhair[i]);
                    } else {
                        hairnew.push(fhair[i] + parseInt(cm.getPlayerStat("HAIR") % 10));
                    }
                }
            }
            cm.sendStyle("请选择你喜欢的发型。", hairnew);
            return;
        } else if (selection == 3) {
            selStr = "#r小游戏物品#k，以下是可以兑换的项目：\r\n\r\n";
            it = mitems;
            ip = mp;
        } else if (selection == 4) {
            cm.sendYesNo("选择后无法撤销！确定要#e重置全部能力值吗？（不重置体力和魔法力）#k");
            return;
        } else {
            cm.dispose();
            return;
        }
        for (var i = 0; i < it.length; i++) {
            if((selection==0 && i>=7) || (selection==1 && i<2)) continue;
            selStr += "#b#L" + i + "#Trade " + ip[i] + "积分兑换" + it[i] + "#l#k\r\n";
        }
        cm.sendSimple(selStr);
    } else if (status == 2) { //normal item
        if (cm.getPlayer().getVPoints() < np[selection]) {
            cm.sendOk("你的投票积分不足，目前只有" + cm.getPlayer().getVPoints());
        } else {
            var passed = false;
            switch(selection) {
                case 0:
                    if (cm.getPlayer().getMeso() > (2145483647)) { //integer.max_value - 2m
                        cm.sendOk("你的金币已接近上限。");
                    } else {
                        cm.gainMeso(2000000);
                        passed = true;
                    }
                    break;
                case 1:
                    if (cm.getPlayer().getCSPoints(1) > (2147473647)) {
                        cm.sendOk("你的点券已接近上限。");
                    } else {
                        cm.getPlayer().modifyCSPoints(1, 10000, false);
                        passed = true;
                    }
                    break;
                case 2:
                    if (cm.getPlayer().getLevel() < 70) {
                        cm.sendOk("需要达到70级才能获得这个物品。");
                    } else if (!cm.canHold(2340000)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItem(2340000, 1);
                        passed = true;
                    }
                    break;
                case 3:
                    if (cm.getPlayer().getLevel() < 70) {
                        cm.sendOk("需要达到70级才能获得这个物品。");
                    } else if (!cm.canHold(2049100, 5)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItem(2049100, 5);
                        passed = true;
                    }
                    break;
                case 4:
                    if (!cm.canHold(5220000, 25)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItem(5220000, 25);
                        passed = true;
                    }
                    break;
                case 5:
                    if (!cm.canHold(5050000, 5)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItem(5050000, 5);
                        passed = true;
                    }
                    break;
                case 6:
                    if (!cm.canHold(5050000, 26)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItem(5050000, 26);
                        passed = true;
                    }
                    break;
                case 7:
                    if (!cm.canHold(5062000, 4)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItem(5062000, 4);
                        passed = true;
                    }
                    break;
                case 8:
                    if (!cm.canHold(5062000, 21)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItem(5062000, 21);
                        passed = true;
                    }
                    break;
                case 9:
                    if (cm.getPlayer().getLevel() < 70) {
                        cm.sendOk("需要达到70级才能获得这个物品。");
                    } else if (!cm.canHold(2022179, 4)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItem(2022179, 4);
                        passed = true;
                    }
                    break;
                case 10:
                    if (cm.getPlayer().getLevel() < 70) {
                        cm.sendOk("需要达到70级才能获得这个物品。");
                    } else if (!cm.canHold(2022179, 21)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItem(2022179, 21);
                        passed = true;
                    }
                    break;
                case 11:
                    if (cm.getPlayer().getLevel() < 70) {
                        cm.sendOk("需要达到70级才能获得这个物品。");
                    } else if (!cm.canHold(5062001, 2)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItem(5062001, 2);
                        passed = true;
                    }
                    break;
                case 12:
                    if (cm.getPlayer().getLevel() < 70) {
                        cm.sendOk("需要达到70级才能获得这个物品。");
                    } else if (!cm.canHold(2530000, 1)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItem(2530000, 1);
                        passed = true;
                    }
                    break;
                case 13:
                    if (cm.getPlayer().getLevel() < 70) {
                        cm.sendOk("需要达到70级才能获得这个物品。");
                    } else if (!cm.canHold(2531000, 1)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItem(2531000, 1);
                        passed = true;
                    }
                    break;
						
            }
            if (passed) {
                cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - np[selection]);
                cm.sendOk("购买完成，谢谢！");
            }
        }
        cm.dispose();
    } else if (status == 3) { // donators item
        if (cm.getPlayer().getVPoints() < dp[selection]) {
            cm.sendOk("你的投票积分不足，目前只有" + cm.getPlayer().getVPoints());
        } else {
            var passed = false;
            switch(selection) {
                case 0:
                    if (!cm.canHold(cm.isGMS() ? 5211067 : 5211074)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItemPeriod(cm.isGMS() ? 5211067 : 5211074, 1, 1, itemowner);
                        passed = true;
                    }
                    break;
                case 1:
                    if (!cm.canHold(cm.isGMS() ? 5211068 : 5211077)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItemPeriod(cm.isGMS() ? 5211068 : 5211077, 1, 1, itemowner);
                        passed = true;
                    }
                    break;
                case 2:
                    if (!cm.canHold(5360000)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItemPeriod(5360000, 1, 1, itemowner);
                        passed = true;
                    }
                    break;
                case 3:
                    if (!cm.canHold(4030004)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItemPeriod(4030004, 1, 1, itemowner);
                        passed = true;
                    }
                    break;
						
            }
            if (passed) {
                cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - dp[selection]);
                cm.sendOk("购买完成，谢谢！");
            }
        }
        cm.dispose();
    } else if (status == 4) {
        if (cm.getPlayer().getVPoints() < 20) {
            cm.sendOk("你的投票积分不足，目前只有" + cm.getPlayer().getVPoints());
        } else {
            cm.setHair(hairnew[selection]);
            cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - 20);
            cm.sendOk("购买完成，谢谢！");
        }
        cm.dispose();
    } else if (status == 5) { // donators item
        if (cm.getPlayer().getVPoints() < mp[selection]) {
            cm.sendOk("你的投票积分不足，目前只有" + cm.getPlayer().getVPoints());
        } else {
            var passed = false;
            switch(selection) {
                case 0:
                    if (!cm.canHold(4080100)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItem(4080100, 1);
                        passed = true;
                    }
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    if (!cm.canHold(4079999 + selection)) {
                        cm.sendOk("你的物品数量过多，请先整理背包。");
                    } else {
                        cm.gainItem(4079999 + selection, 1);
                        passed = true;
                    }
                    break;
						
            }
            if (passed) {
                cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - mp[selection]);
                cm.sendOk("购买完成，谢谢！");
            }
        }
        cm.dispose();
    } else if (status == 6) {
        if (cm.getPlayer().getVPoints() < 35) {
            cm.sendOk("你的投票积分不足，目前只有" + cm.getPlayer().getVPoints());
        } else {
            cm.getPlayer().resetStatsByJob(false);
            cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - 35);
            cm.sendOk("购买完成，谢谢！");
        }
        cm.dispose();
    }

}