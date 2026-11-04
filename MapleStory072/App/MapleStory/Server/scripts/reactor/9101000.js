function act() {
    var eim = rm.getEventInstance();
    if (eim != null && rm.getMap().getId() == 910010000) eim.getEventManager().getIv().invokeFunction("summonRabbit", eim);
}
