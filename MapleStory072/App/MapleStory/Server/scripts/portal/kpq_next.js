function enter(pi) {
    var player = pi.getPlayer(), eim = player.getEventInstance();
    if (eim == null || eim.getEventManager().getName() != "KerningPQ") return false;
    return eim.getEventManager().getIv().invokeFunction("next", eim, player);
}
