var property = "1";
var select;

function start() {
    property = "1";
    cm.sendSimple("你好，勇士！我是#b金利奇#k，负责保管海伯里安的黄金。\r\n#L0#用火焰灵魂石兑换冰冻灵魂石#l\r\n#L1#用冰冻灵魂石购买特殊物品#l")
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    } else
    if (property == "1")
        switch (selection) {
            case 0:
                var fire = cm.itemQuantity(4031469);
                var icy = fire / 10;
                if (icy > 0) {
                    cm.gainItem(4031469, -fire);
                    cm.gainItem(4031470, icy);
                    cm.sendOk("兑换成功！");
                } else
                    cm.sendOk("请确认你拥有火焰灵魂石。");
                cm.dispose();
                break;
            case 1:
                cm.sendSimple(
                    "\r\n#L0##i1102207#金魂披风——特殊属性：9%攻击、9%魔法攻击、30%首领伤害#l" +
                    "\r\n#L1##i1122080#龙王项链——特殊属性：30%全属性#l" +
                    "\r\n#L2##i2041213#龙王红宝石——龙王项链专用卷轴#l" +
                    "\r\n#L3##i2022704#龙王祝福——15分钟内增加攻击力20、魔法攻击力30#l"
                    );
                property = "2";
                break;
            default:
                cm.dispose();
                return;
        }
    else if (property == "2") {
        select = selection;
        cm.sendYesNo("确定要购买" + (selection == 0 ? "#i1102207#金魂披风" : selection == 1 ? "#i1122080#龙王项链" : selection == 2 ? "#i2041213#龙王红宝石" : "#i2022704#龙王祝福") + "吗？\r\n需要支付" + (selection == 0 ? "100" : selection == 1 ? "50" : selection == 2 ? "30" : "10") + "个冰冻灵魂石。");
        property = "3";
    } else if (property == "3") {
        if (cm.itemQuantity(4031470) >=  (select == 0 ? 100 : select == 1 ? 50 : select == 2 ? 30 : 10)) {
            cm.gainItem(4031470, -(select == 0 ? 100 : select == 1 ? 50 : select == 2 ? 30 : 10))
            cm.dragonShoutReward(select);
            cm.sendOk("谢谢购买！\r\n黑魔法师似乎对这些灵魂石很感兴趣，也许能卖给他一些。");
        } else
            cm.sendOk("你的冰冻灵魂石不足，珍贵装备不能免费赠送！\r\n黑魔法师似乎对这些灵魂石很感兴趣，也许能卖给他一些。");
        cm.dispose();
    } else cm.dispose();
}