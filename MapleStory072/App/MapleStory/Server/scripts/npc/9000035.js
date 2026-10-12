var status = 0;
var wui = 0;
var jobName;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
if(selection==5){cm.sendOk("该耳环不在本客户端中，未扣兑换物品。");cm.dispose();return;}

    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	cm.sendSimple ("#e#h #，请选择：#n#d" +
                 "#k\r\n#L81##r低转生商店" +
                 "#k\r\n#L80##r高转生商店#l" +
				 "#k\r\n#L82##r角色资料#k");

            } else if (selection == 80) {
                cm.sendSimple ("请选择购买项目。\r\n（#r#e请确认背包有足够空位！#k#e）#d"+
                 "#k\r\n#L0##b特殊职业#k——（#r250次转生和13337只鸡#k）" +
                 "#k\r\n#L1##b3K属性耳环#k——（#r45次转生和1000只鸡#k）" +
                 "#k\r\n#L2##b5K属性耳环#k——（#r75次转生和5000只鸡#k）" +
                 "#k\r\n\r\n#L3##r成为新手");

            } else if (selection == 0) {
                if (cm.getPlayer().getReborns() > 249 && cm.haveItem(4000252, 13337)) {
                    cm.gainItem (4000252, -13337);
                    cm.changeJobById(900);
                    cm.reloadChar();
                    cm.sendOk ("特殊管理员职业购买成功！");
                    cm.dispose();
                } else {
                    cm.sendOk ("#r#e你的#v4000252#或转生次数不足！");
                    cm.dispose();
                    }
            } else if (selection == 1) {
                if (cm.getPlayer().getReborns() > 29 && !cm.haveItem(1032034) && cm.haveItem(4000252, 1000)) {
         cm.gainItem (1032036);
         cm.gainItem (4000252, -1000);
        cm.editEquipById(cm.getPlayer(), 1, 1032036, "str", 3000);
        cm.editEquipById(cm.getPlayer(), 1, 1032036, "dex", 3000);
        cm.editEquipById(cm.getPlayer(), 1, 1032036, "luk", 3000);
        cm.editEquipById(cm.getPlayer(), 1, 1032036, "int", 3000);
        cm.reloadChar();
        cm.dispose();
         } else {
        cm.sendOk ("你的转生次数不足、已拥有该物品，或没有1000个#v4000252#。");
        cm.dispose();
}
            } else if (selection == 2) {
                if (cm.getPlayer().getReborns() > 74 && !cm.haveItem(1032034) && cm.haveItem(4000252, 5000)) {
         cm.gainItem (4000252, -5000);
         cm.gainItem (1032036);
        cm.editEquipById(cm.getPlayer(), 1, 1032036, "str", 5000);
        cm.editEquipById(cm.getPlayer(), 1, 1032036, "dex", 5000);
        cm.editEquipById(cm.getPlayer(), 1, 1032036, "luk", 5000);
        cm.editEquipById(cm.getPlayer(), 1, 1032036, "int", 5000);
        cm.reloadChar();
        cm.dispose();
         } else {
        cm.sendOk ("你的转生次数不足、已拥有该物品，或没有5000个#v4000252#。");
        cm.dispose();
}
            } else if (selection == 81) {
                cm.sendSimple ("请选择购买项目。\r\n（#r#e请确认背包有足够空位！#e#k）#d" +
                 "#k\r\n#L4##b500属性戒指#k——（#r15次转生和500只鸡#k）" +
                 "");
            } else if (selection == 4) {
                if (cm.getPlayer().getReborns() > 14 && !cm.haveItem(1032038) && cm.haveItem(4000252, 500)) {
         cm.gainItem (4000252, -500);
         cm.gainItem (1032038);
        cm.editEquipById(cm.getPlayer(), 1, 1032038, "str", 500);
        cm.editEquipById(cm.getPlayer(), 1, 1032038, "dex", 500);
        cm.editEquipById(cm.getPlayer(), 1, 1032038, "luk", 500);
        cm.editEquipById(cm.getPlayer(), 1, 1032038, "int", 500);
        cm.reloadChar();
        cm.dispose();
         } else {
        cm.sendOk ("你的转生次数不足、已拥有该物品，或没有500个#v4000252#。");
        cm.dispose();
}
            } else if (selection == 5) {
                if (cm.getPlayer().getReborns() > 24 && !cm.haveItem(1032039) && cm.haveItem(4000252, 1000)) {
         cm.gainItem (4000252, -1000);
         cm.gainItem (1032039);
        cm.editEquipById(cm.getPlayer(), 1, 1032039, "str", 1000);
        cm.editEquipById(cm.getPlayer(), 1, 1032039, "dex", 1000);
        cm.editEquipById(cm.getPlayer(), 1, 1032039, "luk", 1000);
        cm.editEquipById(cm.getPlayer(), 1, 1032039, "int", 1000);
        cm.reloadChar();
        cm.dispose();
         } else {
        cm.sendOk ("你的转生次数不足、已拥有该物品，或没有1000个#v4000252#。");
        cm.dispose();
}

	} else if (selection == 82) {
		cm.sendOk("#e角色资料#n\r\n角色名称：#e#r#h ##k#n\r\n转生次数：#e#r" +cm.getPlayer().getReborns() + "#n#k\r\n等级：#e#r" +cm.getPlayer().getLevel()+"#n#k");
		cm.dispose();
		
            } else if (selection == 3) {
           if(cm.getJobId() == 900) {
                    cm.changeJobById(000);
                    cm.sendOk ("职业：新手（#r已获得#k）。");
                    cm.dispose();
                  } else {
                    cm.sendOk ("职业：普通管理员（#r尚未获得#k）。");
                    cm.dispose();
}
}
}
}