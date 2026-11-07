function start() {
    var destination = cm.getMap(980010000);
    var portal = destination == null ? null : destination.getPortal("sp");
    if (portal == null) {
        cm.sendOk("\u7ade\u6280\u573a\u6682\u65f6\u65e0\u6cd5\u8fdb\u5165\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002");
        cm.dispose();
        return;
    }
    cm.saveLocation("ARIANT_PQ");
    cm.getPlayer().changeMap(destination, portal);
    cm.dispose();
}
