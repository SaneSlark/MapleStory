importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);


var status = 0;
var display;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            cm.sendNext("啊哈, 伟大的#b#h ##k! 我可以帮你把\r\n#r装备栏第一格#k的物品增加1次砸卷次数哦!.");
        } else if (status == 1) {
            cm.sendNext("增加1次砸卷次数需要#b200#k点能力点哦\r\n请确认你是否有,并确定#r装备栏第一格#k物品是你要修改的装备");
        } else if (status == 2) {
            if(cm.getChar().getVip() >= 0) {
            cm.sendYesNo("确定要继续吗?");
 }else {
                 cm.sendOk("我是专为贵宾服务的，你不是贵宾，所以什么都看不到...")
                }
       } else if (status == 3) {
                        if(cm.getChar().getLevel() < 180) {
                                cm.sendOk("很抱歉，您的等级不足180级!");
                                cm.dispose();
               } else if (cm.getChar().getRemainingAp() < 200) {
                cm.sendOk("抱歉,你还没有足够的能力点!");
                cm.dispose();
            }else{
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                var statup = new java.util.ArrayList();
                cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 200);
                statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
                
                    item.setUpgradeSlots((item.getUpgradeSlots() + 1));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "编辑：Coffee");
                    
                    cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
                
                
                cm.dispose();
            }

        }
    }
}
