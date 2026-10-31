// CMS carnival revive: returnMap and team portals checked against this map.
function enter(pi) {
    if (pi.getMapId() != 980000502) return false;
    var party = pi.getPlayer().getCarnivalParty();
    if (party == null) { pi.warp(980000010, 0); return true; }
    var team = party.getTeam();
    if (team != 0 && team != 1) return false;
    pi.warp(980000501, team == 0 ? "red_revive" : "blue_revive");
    return true;
}
