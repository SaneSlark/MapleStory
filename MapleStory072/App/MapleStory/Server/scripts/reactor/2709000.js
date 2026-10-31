/*
	Reactor: 		PinkBeenPower
	Map(s): 		Twilight of the gods
	Description:		Summons Pink Bean
*/

function bossAct() {
 /*   rm.killMob(8820020);
    rm.killMob(8820021);
    rm.killMob(8820022);
    rm.killMob(8820023);*/
	//rm.scheduleWarp(3600, 270050300);
    rm.killAllMob();
    rm.spawnMonster(8820008);
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}
function act(){
    var map=rm.getMap();if(map.getId()!=270050100)return;
    var eim=rm.getPlayer().getEventInstance();
    if(eim!=null && "PinkBeanBattle"!="" && String(eim.getEventManager().getName())!="PinkBeanBattle")return;
    if(eim!=null && String(eim.getProperty("bossSummoned"))=="true")return;
    var mobs=map.getAllMonstersThreadsafe().iterator();
    while(mobs.hasNext()){var id=mobs.next().getId();if(id>=8820000 && id<=8820018)return;}
    bossAct();
    if(eim!=null){eim.setProperty("bossSummoned","true");eim.setProperty("canEnter","false");}
}
