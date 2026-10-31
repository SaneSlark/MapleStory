var finished = false, origin = -1;
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

var status = 0;
var newName;
var n = null;
var petUid = -1;

function start() {
    finished = false; origin = cm.getMapId(); n = null; petUid = -1;
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (finished || cm.getMapId() != origin || mode != 1) { finished = true; cm.dispose(); return; }

    if (status >= 1 && (n == null || cm.getPlayer().getPet(n) == null || cm.getPlayer().getPet(n).getUniqueId() != petUid)) { finished = true; cm.dispose(); return; }
    if (mode == -1) 
        cm.dispose();
    else {
        if (status <= 3 && mode == 0) {
            cm.sendOk("下次见.");
            cm.dispose();
            return;
        }
        if (mode == 1) 
            status++;
        else
            cm.dispose();
        if (status == 0) {
            if (cm.c.getPlayer().getPet(0) == null) {
                cm.sendOk("你没有宠物!");
                cm.dispose();
            } else if (cm.c.getPlayer().getPet(1) == null) 
                cm.sendSimple("想要更改你的宠物名? 请选择你想改名的宠物. \r\n\#b#L1#"+cm.c.getPlayer().getPet(0).getName()+"#l");
            else if (cm.c.getPlayer().getPet(2) == null)
                cm.sendSimple("想要更改你的宠物名吗? 请选择你想改名的宠物. \r\n\#b#L1#"+cm.c.getPlayer().getPet(0).getName()+"#l\r\n\#L2#"+cm.c.getPlayer().getPet(1).getName()+"#l");
            else
                cm.sendSimple("想要更改你的宠物名吗? 请选择你想改名的宠物. \r\n\#b#L1#"+cm.c.getPlayer().getPet(0).getName()+"#l\r\n\#L2#"+cm.c.getPlayer().getPet(1).getName()+"#l\r\n\#L3#"+cm.c.getPlayer().getPet(2).getName()+"#l\r\n#k");
        } else if (status == 1) {
            if (selection != Math.floor(selection) || selection < 1 || selection > 3 || cm.getPlayer().getPet(selection - 1) == null) { finished = true; cm.dispose(); return; }
            petUid = cm.getPlayer().getPet(selection - 1).getUniqueId();
            if (selection == 1) {
                n = 0;
                cm.sendYesNo("你确定要更改 #b"+cm.c.getPlayer().getPet(n).getName()+"#k 的名字吗?");
            } else if (selection == 2) {
                n = 1;
                cm.sendYesNo("你确定要更改 #b"+cm.c.getPlayer().getPet(n).getName()+"#k 的名字吗?");
            } else if (selection == 3) {
                n = 2;
                cm.sendYesNo("你确定要更改 #b"+cm.c.getPlayer().getPet(n).getName()+"#k 的名字吗?");
            } else 
                cm.sendOk("好的，欢迎再来。");
        } else if (status == 2) {
            if(cm.haveItem(5170000))
                cm.sendGetText("好的，请在下方输入你想给 #b"+cm.c.getPlayer().getPet(n).getName()+"#k 起的新名字。注意，改名后你的角色会重新加载。\r\n\ ");
            else {
                cm.sendOk("你需要一张宠物改名卡才能更改宠物的名字!");
                cm.dispose();
            }
        } else if (status == 3) {
            finished = true;
            var pet = cm.getPlayer().getPet(n);
            var cashItem = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.CASH).getItem(pet.getInventoryPosition());
            if (!cm.haveItem(5170000) || cashItem == null || cashItem.getUniqueId() != petUid) { cm.sendOk("请保持宠物出场，并准备好宠物改名卡。"); cm.dispose(); return; }
            newName = cm.getText();
            if (newName.length() < 3 && cm.c.getPlayer().gmLevel() == 0 || newName.length() > 12 && cm.c.getPlayer().gmLevel() == 0) {
                cm.sendOk("宠物的名字必须在 3 ~ 12 个字符之间..");
                cm.dispose();
            } else {
                cm.c.getPlayer().getPet(n).setName(newName);
                cm.c.getPlayer().getClient().getSession().write(Packages.tools.packet.PetPacket.updatePet(pet, cashItem, true));
                cm.c.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CSPacket.changePetName(cm.getPlayer(), newName, n));
                cm.gainItem(5170000,-1);
                cm.c.getPlayer().getPet(n).saveToDb();
                cm.sendOk("你的宠物信息已经保存好了!");
                cm.dispose();
            }
        }
    }
}