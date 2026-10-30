function bossAct072() {
    rm.changeMusic("Bgm14/HonTale");
    rm.spawnMonster(8810026, 71, 260);
    rm.mapMessage("洞穴开始震动，暗黑龙王被召唤出来了。");
	//rm.scheduleWarp(43200, 240000000);
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}
function act(){
    var map=rm.getMap();if(map.getId()!=240060200)return;
    var eim=rm.getPlayer().getEventInstance();
    if(eim!=null && "HorntailBattle"!="" && String(eim.getEventManager().getName())!="HorntailBattle")return;
    if(eim!=null && String(eim.getProperty("bossSummoned"))=="true")return;
    var mobs=map.getAllMonstersThreadsafe().iterator();
    while(mobs.hasNext()){var id=mobs.next().getId();if(id>=8810000 && id<=8810026)return;}
    bossAct072();
    if(eim!=null){eim.setProperty("bossSummoned","true");eim.setProperty("canEnter","false");}
}
