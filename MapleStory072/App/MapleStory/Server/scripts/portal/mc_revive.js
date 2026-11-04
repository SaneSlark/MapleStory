function enter(pi){
    var eim=pi.getPlayer().getEventInstance(),party=pi.getPlayer().getCarnivalParty();
    if(eim==null||party==null||eim.getProperty("phase")!="fight")return false;
    if(pi.getMapId()!=parseInt(eim.getProperty("base"))+2)return false;
    var map=eim.getMapInstance(3),portal=map.getPortal(party.getTeam()==0?"red_revive":"blue_revive");
    if(portal==null)return false;pi.getPlayer().changeMap(map,portal);return true;
}
