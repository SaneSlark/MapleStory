// CMS exit; 062 crane flow adapted after checking target map and portal.
function enter(pi) {
    if (pi.getMapId() != 200090300) return false;
    var instance = pi.getPlayer().getEventInstance();
    if (instance != null && instance.getProperty("flightMap") != null) return false;
    pi.warp(200000141, "h001");
    return true;
}
