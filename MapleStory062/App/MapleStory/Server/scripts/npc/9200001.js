var wui = 0;

function start() {
if (cm.getMeso() >= 500000000) {
    cm.sendYesNo ("#e我是#d 卖属性点 #k的! \n\r\n\r你只需要花费#r5亿金币#k就能增加#b10点属性#k! 物超所值!!!");
        } else {
            cm.sendOk("对不起，你的钱不够,你需要花费#r5亿金币#k就能增加#b10点属性#k! ");
cm.gainFame(0);
            cm.dispose();
}
}



function action(mode, type, selection) {
if (cm.getMeso() >= 500000000) {
    if (mode == 0 || wui == 1) {
        cm.dispose();
    } else {

    cm.gainMeso(-500000000);
        wui = 1;
        var statup = new java.util.ArrayList();
        var p = cm.c.getPlayer();
        var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();
                p.setStr(4);
                p.setDex(4);
                p.setInt(4);
                p.setLuk(4);
        p.setRemainingAp (totAp -6);
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
        p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
        cm.sendOk ("#e噢，你的属性又增加了，你真有钱！！！");
        cm.dispose(关闭)
    }
}
}

