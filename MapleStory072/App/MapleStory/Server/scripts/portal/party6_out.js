function enter(pi) {
    if(pi.getMapId()!=930000600)return false;
    var eim=pi.getPlayer().getEventInstance();
    if(eim==null){pi.warp(930000800,0);return true;}
    if(String(eim.getEventManager().getName())!="Ellin")return false;
    var key072="exitReward072_"+pi.getPlayer().getId();
    if(String(eim.getProperty(key072))=="true")return false;

	if (pi.canHold(4001198,1) && cleared072(pi) && (pi.getMap().getReactorByName("") == null || pi.getMap().getReactorByName("").getState() == 1)) {
		eim.setProperty(key072,"true");
        pi.warp(930000800,0);
		pi.gainExp_PQ(120, 1.0);
		pi.getPlayer().endPartyQuest(1206);
		pi.addTrait("will", 30);
		pi.gainNX(2000);
		pi.gainItem(4001198,1);
        return true;
	} else {
		pi.playerMessage(5, "请消灭石头人，并在背包中留出空位。");
	}
    return false;
}
function cleared072(pi){
    if(pi.getMap().getMonsterById(9300183)==null)return false;
    var it=pi.getMap().getAllMonstersThreadsafe().iterator();
    while(it.hasNext())if(it.next().getId()!=9300183)return false;
    return true;
}
