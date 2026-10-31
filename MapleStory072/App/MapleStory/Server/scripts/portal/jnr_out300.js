// CMS compatibility: transfer the event roster, not an unrelated party.
function enter(pi) {
    var player = pi.getPlayer();
    var eim = player.getEventInstance();
    if (eim == null || player.getMapId() == 926110400) return false;
    var players = eim.getPlayers();
    var registered = false;
    for (var i = 0; i < players.size(); i++) {
        if (players.get(i).getId() == player.getId()) registered = true;
    }
    if (!registered) return false;
    var target = eim.getMapInstance(926110400);
    if (target == null) return false;
    var portal = target.getPortal(0);
    if (portal == null) return false;
    for (var i = 0; i < players.size(); i++) {
        var member = players.get(i);
        if (member.getEventInstance() == eim && member.getMapId() != 926110400) {
            member.changeMap(target, portal);
        }
    }
    return true;
}
