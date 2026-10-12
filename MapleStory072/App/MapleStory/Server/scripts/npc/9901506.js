var status = -1;
var items;
var itemsp = Array(800, 500, 550, 2000, 800, 1000, 3000, 1000, 750, 1500);
var itemsu = Array(0, 2, 0, 0, 0, 0, 0, 0, 0, 0); // extra slots, not set.
var itemsq = Array(1, 1, 125, 1, 1, 1, 1, 1, 1, 1);
var itemse = Array(1, -1, -1, -1, -1, 7, 7, -1, -1, -1);
var extra_text = Array("2倍掉落", "褐色工地手套", "扭蛋券", "紫色冲浪板", "祝福卷轴", "实习管理员帽子（全属性+25）", "宠物自动拾取", "光环吊坠（永久）", "幸运日卷轴", "保护卷轴");
var acash = 40000;
var acashp = 500;
var sel = -1;
var itt = -1;
var previous_points;
var chairs;
var chairsp = Array(1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 800, 1000, 1000, 1000, 1500, 800, 800, 1200, 1000, 1000, 1500, 1000, 800, 800, 1000, 1000, 1200, 1200, 1500, 1000, 1000, 800, 1000, 1000, 1200, 1500);
var hairp = 1000;
var mhair;
var fhair;
var hairnew;
var keys = Array(16, 17, 18, 20, 21, 22, 36, 44, 45, 46, 47, 48);
var keynames = Array("Q", "W", "F", "T", "Y", "U", "J", "Z", "X", "C", "V", "B"); //just as reference
var skills;
var skillsnames = Array("驱散", "快速移动", "祝福", "瞬间移动", "神圣之火");
var skillsp = Array(1000, 1500, 1800, 1500, 2500);
var allskillsp = 5000;
var resetp = 1000;
var pendantp = 500;
var pendantp_perm = 1000;
var namep = 1000;
var buddyp = 100;
var ep = 500;
var slot = Array();
var inv;
var npcname = "积分兑换员";
var ownername = "Donor";

function start() {
    action(1, 0, 0);
    if (cm.isGMS()) {
        fhair = Array(34000, 34010, 34020, 34030, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34180, 34190, 34210, 34220, 34250, 34260, 34270, 34310, 34320, 34330, 34340, 34360, 34400, 34410, 34420, 34450, 34470, 34480, 34490, 34540);
        mhair = Array(33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33150, 33160, 33170, 33180, 33190, 33210, 33220, 33240, 33250, 33270, 33280, 33290, 33350, 33360, 33370, 33380, 33390, 33400, 33440, 33450, 33460, 33500, 33510, 33520, 33580, 33590);
        chairs = Array(3010045, 3010014, 3010068, 3010009, 3010022, 3010023, 3010041, 3010142, 3010069, 3010071, 3010107, 3010119, 3010151, 3010155, 3010139, 3010171, 3010077, 3010173, 3010174, 3010175, 3010123, 3010168, 3010095, 3010099, 3010036, 3010112, 3010096, 3010131, 3010172, 3012010, 3012011, 3010180, 3010181, 3010188);
        items = Array(5360000, 1082149, 5220000, 1442057, 2340000, 1002959, 4030003, 1122121, 2530000, 2531000);
        skills = Array(9101000, 9101001, 9101003, 9101007, 9101008);
    } else {
        fhair = Array(34000, 34010, 34020, 34030, 34040, 34050, 34070, 34080, 34090, 34100, 34110, 34120, 34140, 34160, 34180, 34200, 34210, 34240, 34250, 34060, 34130, 34150, 34170, 34190, 34230, 34220, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34360, 34390, 34430, 34450, 34480, 34510);
        mhair = Array(33000, 33010, 33020, 33030, 33040, 33070, 33080, 33100, 33120, 33130, 33140, 33150, 33160, 33170, 33210, 33240, 33250, 33260, 33010, 33050, 33060, 33090, 33110, 33180, 33190, 33200, 33220, 33230, 33270, 33280, 33290, 33300, 33310, 33320, 33340, 33350, 33380, 33390, 33420, 33430, 33480, 33510, 33520);
        chairs = Array(3010045, 3010054, 3012002, 3010014, 3010068, 3010009, 3010022, 3010023, 3012003, 3010041, 3010142, 3010069, 3010071, 3010107, 3010119, 3010151, 3010155, 3010139, 3010171, 3010077, 3010173, 3010174, 3010175, 3010123, 3010168, 3010095, 3010099, 3010036, 3010144, 3010112, 3010096, 3010131, 3010172, 3012006);
        items = Array(5360017, 1082149, 5220000, 1442057, 2340000, 1002959, 4030003, 1122121, 2530000, 2531000);
        skills = Array(9001000, 9001001, 9001003, 9001007, 9001008);
    }
    inv = cm.getInventory(1);
    previous_points = cm.getPlayer().getPoints();
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        cm.sendSimple("你好，#r#h ##k！我叫#r" + npcname + "#k，负责#b积分兑换#k。请选择：\r\n#b#L0#什么是积分？#l\r\n#b#L1#用积分兑换物品#l\r\n#b#L3#给现有装备增加升级次数#l\r\n#L4#用积分兑换点券#l\r\n#b#L6#用积分兑换椅子#l\r\n#L7#皇家发型（" + hairp + "积分）#l\r\n#L8#重置全部能力值（" + resetp + "积分）#l\r\n#L9#用积分购买技能#l\r\n#L10#改名，费用" + namep + "积分#l\r\n#L11#好友上限增加到120，费用" + buddyp + "积分#l\r\n#L18#额外吊坠栏#l\r\n#L5#查看当前积分#l\r\n#L12#用冒险币兑换积分（100）#l\r\n#L13#用积分（100）兑换冒险币#l\r\n#L16#用红色幸运袋兑换积分（1000）#l\r\n#L17#用积分（1000）兑换红色幸运袋#l#k");
    } else if (status == 1) {
        sel = selection;
        if (selection == 0) {
            cm.sendNext("积分可以通过捐赠获得，并兑换装备、椅子和点券等物品。积攒积分也许还能获得更好的奖励。");
            status = -1;
        } else if (selection == 1) {
            var selStr = "以下物品可以用积分兑换：#b\r\n\r\n";
            for (var i = 0; i < items.length; i++) {
                selStr += "#L" + i + "##v" + items[i] + "#" + extra_text[i] + (itemsu[i] > 0 ? "（附带" + itemsu[i] + "额外升级次数）" : "") + " x " + itemsq[i] + " for #e" + itemsp[i] + "#n points#n" + (itemse[i] > 0 ? ("，有效期#r#e" + itemse[i] + "#n#bdays") : "") + "#l\r\n";
            }
            cm.sendSimple(selStr + "#k");
        } else if (selection == 3) {
            var bbb = false;
            var selStr = "只能#e给升级次数为0、并已使用两次金锤子的装备增加升级次数。每件装备最多增加10次，需要#b" + ep + "#k积分，以及#b" + (ep*2) + "#k积分，适用于已升级超过5次的物品。#n请选择背包中的装备（不包括已穿戴装备）：\r\n\r\n#b";
            for (var i = 0; i <= inv.getSlotLimit(); i++) {
                slot.push(i);
                var it = inv.getItem(i);
                if (it == null || it.getUpgradeSlots() > 0 || it.getViciousHammer() < 2 || it.getViciousHammer() > 6) {
                    continue;
                }
                var itemid = it.getItemId();
                //bwg - 7, with hammer is 9.
                //therefore, we should make the max slots (natural+7)
                if (cm.getNaturalStats(itemid, "tuc") <= 0 || itemid == 1122080 || cm.isCash(itemid)) {
                    continue;
                }
                bbb = true;
                selStr += "#L" + i + "##v" + itemid + "##t" + itemid + "##l\r\n";
            }
            if (!bbb) {
                cm.sendOk("没有符合条件的装备。只能#e增强升级次数为0、并已使用两次金锤子的装备#n，不包括现金装备。");
                cm.dispose();
                return;
            }
            cm.sendSimple(selStr + "#k");
        } else if (selection == 4) {
            cm.sendYesNo("你需要点券吗？我可以兑换#r#e" + (cm.isGMS() ? (acash/2) : acash) + "点券，需要" + acashp + "积分。#n#k是否兑换？");
        } else if (selection == 5) {
            cm.sendOk("你目前有#e" + cm.getPlayer().getPoints() + "#n points.");
            cm.dispose();
        } else if (selection == 6) {
            var selStr = "以下椅子可以用积分兑换：#b\r\n\r\n";
            for (var i = 0; i < chairs.length; i++) {
                selStr += "#L" + i + "##v" + chairs[i] + "##t" + chairs[i] + "#，需要#e" + chairsp[i] + "#n积分#n#l\r\n";
            }
            cm.sendSimple(selStr + "#k");
        } else if (selection == 7) {
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
        } else if (selection == 8) {
            cm.sendYesNo("此操作无法撤销，确定要#e重置全部能力值吗？#k");
        } else if (selection == 9) {
            var selStr = "以下技能可以用积分购买。#e购买过一次后，再次使用不扣积分。#n#b\r\n\r\n";
            for (var i = 0; i < skills.length; i++) {
                selStr += "#L" + i + "##s" + skills[i] + "#" + skillsnames[i] + " for #e" + skillsp[i] + "#n积分#n#l\r\n";
            }
            selStr += "#L" + skills.length + "##r以上全部技能#b，需要#e" + allskillsp + "#n积分#l\r\n";
            cm.sendSimple(selStr + "#k");
        } else if (selection == 10) {
            cm.sendGetText("请输入你想使用的新名称。");
        } else if (selection == 11) {
            if (cm.getBuddyCapacity() < 120 && cm.getPlayer().getPoints() >= buddyp) {
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - buddyp);
                cm.logDonator("购买了120好友上限，费用" + buddyp + ".", previous_points);
                cm.updateBuddyCapacity(120);
            } else {
                cm.sendOk("你的好友上限已是120，或积分不足。");
            }
            cm.dispose();
        } else if (selection == 12) {
            if (!cm.getPlayer().haveItem(5220013)) {
                cm.sendOk("至少需要1个冒险币。");
                cm.dispose();
            } else {
                cm.sendGetNumber("你想兑换多少个冒险币？（1个冒险币＝100积分）（当前冒险币：" + cm.getPlayer().itemQuantity(5220013) + "）（当前积分：" + cm.getPlayer().getPoints() + ")", cm.getPlayer().itemQuantity(5220013), 1, cm.getPlayer().itemQuantity(5220013));
            }
        } else if (selection == 13) {
            if (cm.getPlayer().getPoints() < 100) {
                cm.sendOk("兑换1个冒险币至少需要100积分。");
                cm.dispose();
            } else {
                cm.sendGetNumber("你想要多少个冒险币？（1个冒险币＝100积分）（当前积分：" + cm.getPlayer().getPoints() + "）（当前冒险币：" + cm.getPlayer().itemQuantity(5220013) + ")", cm.getPlayer().getPoints() / 100, 1, cm.getPlayer().getPoints() / 100);
            }
        } else if (selection == 16) {
            if (!cm.getPlayer().haveItem(3993003)) {
                cm.sendOk("至少需要1个红色幸运袋。");
                cm.dispose();
            } else {
                cm.sendGetNumber("你想兑换多少个红色幸运袋？（1个红色幸运袋＝1000积分）（当前数量：" + cm.getPlayer().itemQuantity(3993003) + "）（当前积分：" + cm.getPlayer().getPoints() + ")", cm.getPlayer().itemQuantity(3993003), 1, cm.getPlayer().itemQuantity(3993003));
            }
        } else if (selection == 17) {
            if (cm.getPlayer().getPoints() < 1000) {
                cm.sendOk("兑换1个红色幸运袋至少需要1000积分。");
                cm.dispose();
            } else {
                cm.sendGetNumber("你想要多少个红色幸运袋？（1个红色幸运袋＝1000积分）（当前积分：" + cm.getPlayer().getPoints() + "）（当前红色幸运袋：" + cm.getPlayer().itemQuantity(3993003) + ")", cm.getPlayer().getPoints() / 1000, 1, cm.getPlayer().getPoints() / 1000);
            }
        } else if (selection == 18) {
            cm.sendSimple("#b#L0#30天——" + pendantp + "积分#l\r\n#L1#90天——" + pendantp_perm + " points#l");
        }
    } else if (status == 2) {
        if (sel == 1) {
            var it = items[selection];
            var ip = itemsp[selection];
            var iu = itemsu[selection];
            var iq = itemsq[selection];
            var ie = itemse[selection];
            if (cm.getPlayer().getPoints() < ip) {
                cm.sendOk("你的积分不足，目前有" + cm.getPlayer().getPoints() + "，需要" + ip + ".");
            } else if (!cm.canHold(it, iq)) {
                cm.sendOk("请在背包中空出位置。");
            } else {
                if (iu > 0) {
                    cm.gainItem(it, iq, false, ie, iu, ownername);
                } else {
                    cm.gainItemPeriod(it, iq, ie, ownername);
                }
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - ip);
                cm.sendOk("物品兑换完成，欢迎下次再来！");
                cm.logDonator("购买了物品[" + it + "] x " + iq + " costing " + ip + "。[到期时间：" + ie + "][额外升级次数：" + iu + "] ", previous_points);
            }
            cm.dispose();
        } else if (sel == 3) {
            var statsSel = inv.getItem(slot[selection]);
            if (statsSel == null || statsSel.getUpgradeSlots() > 0 || statsSel.getViciousHammer() < 2) {
                cm.dispose();
                return;
            }
            var itemid = statsSel.getItemId();
            //bwg - 7, with hammer is 9.
            //therefore, we should make the max slots(natural+7)
            if (statsSel.getViciousHammer() > 6 || cm.getNaturalStats(itemid, "tuc") <= 0 || itemid == 1122080) {
                cm.dispose();
                return;
            }
            if (cm.isCash(itemid)) {
                cm.dispose();
                return;
            }
            var pointsToUse = ep;
            if (statsSel.getViciousHammer() >= 4) { //2 slots with normal, 3 slots afterwards with doubled price
                pointsToUse = ep*2;
            }
            if (cm.getPlayer().getPoints() < pointsToUse) {
                cm.sendOk("你的积分不足，目前有" + cm.getPlayer().getPoints() + "，需要" + pointsToUse + ".");
            } else {
                cm.replaceItem(selection, 1, statsSel, 1);
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - pointsToUse);
                cm.sendOk("物品兑换完成，欢迎下次再来！");
                cm.logDonator("为物品增加了1次升级次数[" + statsSel.getItemId() + "]，费用" + pointsToUse + "。[已使用升级次数：" + statsSel.getViciousHammer() + "]", previous_points);
            }
            cm.dispose();
        } else if (sel == 4) {
            if (cm.getPlayer().getPoints() < acashp) {
                cm.sendOk("你的积分不足，目前有" + cm.getPlayer().getPoints() + "，需要" + acashp + ".");
            } else if (cm.getPlayer().getCSPoints(1) > (java.lang.Integer.MAX_VALUE - acash)) {
                cm.sendOk("你的点券已接近上限。");
            } else {
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - acashp);
                cm.getPlayer().modifyCSPoints(1, acash, true);
                cm.sendOk("点券兑换完成，欢迎下次再来！");
                cm.logDonator("购买了点券[" + (cm.isGMS() ? (acash/2) : acash) + "]，费用" + acashp + ".", previous_points);
            }
            cm.dispose();
        } else if (sel == 6) {
            var it = chairs[selection];
            var cp = chairsp[selection];
            if (cm.getPlayer().getPoints() < cp) {
                cm.sendOk("你的积分不足，目前有" + cm.getPlayer().getPoints() + "，需要" + cp + ".");
            } else if (!cm.canHold(it)) {
                cm.sendOk("请在背包中空出位置。");
            } else {
                cm.gainItem(it, 1);
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - cp);
                cm.sendOk("椅子兑换完成，欢迎下次再来！");
                cm.logDonator("购买了椅子[" + it + "]，费用" + cp + ".", previous_points);
            }
            cm.dispose();
        } else if (sel == 7) {
            if (cm.getPlayer().getPoints() < hairp) {
                cm.sendOk("你的积分不足，目前只有" + cm.getPlayer().getPoints());
            } else {
                cm.setHair(hairnew[selection]);
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - hairp);
                cm.sendOk("购买完成，谢谢！");
                cm.logDonator("购买了发型[" + hairnew[selection] + "]，费用" + hairp + ".", previous_points);
            }
            cm.dispose();
        } else if (sel == 8) {
            if (cm.getPlayer().getPoints() < resetp) {
                cm.sendOk("你的积分不足，目前只有" + cm.getPlayer().getPoints());
            } else {
                cm.getPlayer().resetStatsByJob(false);
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - resetp);
                cm.sendOk("购买完成，谢谢！");
                cm.logDonator("购买了全部能力值重置，费用" + resetp + ".", previous_points);
            }
            cm.dispose();
        } else if (sel == 9) {
            if (selection == skills.length) {
                if (cm.getPlayer().getPoints() < allskillsp) {
                    cm.sendOk("你的积分不足，目前只有" + cm.getPlayer().getPoints());
                } else {
                    for (var i = 0; i < skills.length; i++) {
                        cm.teachSkill(skills[i], 1, 0);
                    }
                    cm.getPlayer().setPoints(cm.getPlayer().getPoints() - allskillsp);
                    cm.sendOk("购买完成！请再次点击我，将每个技能分配到按键。");
                    cm.logDonator("购买了全部技能，费用" + allskillsp + ".", previous_points);
                }
                cm.dispose();
                return;
            }
            itt = selection;
            var selStr = "请选择用于放置技能的按键：#b\r\n\r\n";
            for (var i = 0; i < keys.length; i++) {
                selStr += "#L" + i + "#" + keynames[i] + "#l\r\n";
            }
            cm.sendSimple(selStr + "#k");
        } else if (sel == 10) {
            if (cm.getPlayer().getPoints() >= namep && cm.isEligibleName(cm.getText())) {
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - namep);
                cm.logDonator("购买了改名服务，原名称为" + cm.getPlayer().getName() + " to " + cm.getText() + " costing " + namep + ".", previous_points);
                cm.getClient().getChannelServer().removePlayer(cm.getPlayer().getId(), cm.getPlayer().getName());
                cm.getPlayer().setName(cm.getText());
                cm.getClient().getSession().close();
            } else {
                cm.sendOk("你的积分不足，或" + cm.getText() + "不是有效名称");
            }
            cm.dispose();
        } else if (sel == 12) {
            if (selection >= 1 && selection <= cm.getPlayer().itemQuantity(5220013)) {
                if (cm.getPlayer().getPoints() > (2147483647 - (selection * 100))) {
                    cm.sendOk("你的积分已接近上限。");
                } else {
                    cm.gainItem(5220013, -selection);
                    cm.getPlayer().setPoints(cm.getPlayer().getPoints() + (selection * 100));
                    cm.sendOk("你失去了" + selection + "个冒险币，获得了" + (selection * 100) + "积分。当前积分：" + cm.getPlayer().getPoints());
                    cm.logDonator("兑换了" + selection + "个冒险币，获得积分" + (selection * 100) + ".", previous_points);
                }
            } 
            cm.dispose();
        } else if (sel == 13) {
            if (selection >= 1 && selection <= 100) {
                if (selection > (cm.getPlayer().getPoints() / 100)) {
                    cm.sendOk("最多只能获得" + (cm.getPlayer().getPoints() / 100) + "个冒险币，1个冒险币＝100积分。");
                } else if (!cm.canHold(5220013, selection)) {
                    cm.sendOk("请在现金栏中空出位置。");
                } else {
                    cm.gainItem(5220013, selection);
                    cm.getPlayer().setPoints(cm.getPlayer().getPoints() - (selection * 100));
                    cm.sendOk("你获得了" + selection + "个冒险币，消耗了" + (selection * 100) + "积分。当前积分：" + cm.getPlayer().getPoints());
                    cm.logDonator("获得了" + selection + "个冒险币，费用" + (selection * 100) + ".", previous_points);
                }
            }
            cm.dispose();
        } else if (sel == 16) {
            if (selection >= 1 && selection <= cm.getPlayer().itemQuantity(3993003)) {
                if (cm.getPlayer().getPoints() > (2147483647 - (selection * 1000))) {
                    cm.sendOk("你的积分已接近上限。");
                } else {
                    cm.gainItem(3993003, -selection);
                    cm.getPlayer().setPoints(cm.getPlayer().getPoints() + (selection * 1000));
                    cm.sendOk("你失去了" + selection + "，获得了" + (selection * 1000) + "积分。当前积分：" + cm.getPlayer().getPoints());
                    cm.logDonator("兑换了" + selection + "个红色幸运袋，获得积分" + (selection * 1000) + ".", previous_points);
                }
            } 
            cm.dispose();
        } else if (sel == 17) {
            if (selection >= 1) {
                if (selection > (cm.getPlayer().getPoints() / 1000)) {
                    cm.sendOk("最多只能获得" + (cm.getPlayer().getPoints() / 1000) + "，1个物品＝1000积分。");
                } else if (!cm.canHold(3993003, selection)) {
                    cm.sendOk("请先在装饰栏中空出位置。");
                } else {
                    cm.gainItem(3993003, selection);
                    cm.getPlayer().setPoints(cm.getPlayer().getPoints() - (selection * 1000));
                    cm.sendOk("你获得了" + selection + "，消耗了" + (selection * 1000) + "积分。当前积分：" + cm.getPlayer().getPoints());
                    cm.logDonator("获得了" + selection + "个红色幸运袋，费用" + (selection * 1000) + ".", previous_points);
                }
            }
            cm.dispose();
        } else if (sel == 18) {
            if (selection == 0) {
                if (cm.getPlayer().getPoints() < pendantp) {
                    cm.sendOk("你的积分不足。");
                } else {
                    var marr = cm.getQuestNoRecord(122700);
                    if (marr != null && marr.getCustomData() != null && parseInt(marr.getCustomData()) > cm.getCurrentTime()) {
                        cm.sendOk("你已经拥有额外吊坠栏。");
                    } else {
                        cm.getQuestRecord(122700).setCustomData("" + (cm.getCurrentTime() + (30 * 24 * 60 * 60 * 1000)));
                        cm.forceStartQuest(7830, "1");
                        cm.getPlayer().setPoints(cm.getPlayer().getPoints() - pendantp);
                        cm.sendOk("已获得额外吊坠栏，有效期30天。");
                        cm.sendPendant(true);
                        cm.getPlayer().fakeRelog();
                        cm.logDonator("获得了额外吊坠栏（30天），费用" + (pendantp) + ".", previous_points);
                    }
                }
            } else {
                if (cm.getPlayer().getPoints() < pendantp_perm) {
                    cm.sendOk("你的积分不足。");
                } else {
                    var marr = cm.getQuestNoRecord(122700);
                    if (marr != null && marr.getCustomData() != null && parseInt(marr.getCustomData()) > cm.getCurrentTime()) {
                        cm.sendOk("你已经拥有额外吊坠栏。");
                    } else {
                        cm.getQuestRecord(122700).setCustomData("" + (cm.getCurrentTime() + (90 * 24 * 60 * 60 * 1000)));
                        cm.forceStartQuest(7830, "1");
                        cm.getPlayer().setPoints(cm.getPlayer().getPoints() - pendantp_perm);
                        cm.sendOk("已获得额外吊坠栏，有效期90天。");
                        cm.sendPendant(true);
                        cm.getPlayer().fakeRelog();
                        cm.logDonator("获得了额外吊坠栏（90天），费用" + (pendantp) + ".", previous_points);
                    }
                }
            }
            cm.dispose();
        }
    } else if (status == 3) {
        if (sel == 9) {
            var hadSkill = true;
            if (cm.getPlayer().getSkillLevel(skills[itt]) <= 0) {
                hadSkill = false;
                if (cm.getPlayer().getPoints() < skillsp[itt]) {
                    cm.sendOk("你的积分不足，目前有" + cm.getPlayer().getPoints() + "，需要" + skillsp[itt] + ".");
                    cm.dispose();
                    return;
                } else {
                    cm.teachSkill(skills[itt], 1, 0);
                    cm.getPlayer().setPoints(cm.getPlayer().getPoints() - skillsp[itt]);
                }
            }
            cm.putKey(keys[selection], 1, skills[itt]);
            cm.sendOk("技能购买完成，欢迎下次再来！");
            cm.logDonator("购买了技能[" + skills[itt] + "]，费用" + skillsp[itt] + "，对应按键" + keynames[selection] + " (" + keys[selection] + "）。[已拥有技能：" + hadSkill + "] ", previous_points);
        }
        cm.dispose();

    }
}