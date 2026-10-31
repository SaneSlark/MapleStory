/*
Zakum Altar - Summons Zakum.
*/

function bossAct() {
    rm.changeMusic("Bgm06/FinalFight");
	rm.getMap().spawnZakum(-10, -215);
    rm.mapMessage("»ğÑæµÄÑÛµÄÁ¦Á¿ÕÙ»½³öÁËÔúÀ¥¡£");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}

function act(){
    var map=rm.getMap();if(map.getId()!=280030000)return;
    var eim=rm.getPlayer().getEventInstance();
    if(eim!=null && "ZakumBattle"!="" && String(eim.getEventManager().getName())!="ZakumBattle")return;
    if(eim!=null && String(eim.getProperty("bossSummoned"))=="true")return;
    var mobs=map.getAllMonstersThreadsafe().iterator();
    while(mobs.hasNext()){var id=mobs.next().getId();if(id>=8800000 && id<=8800010)return;}
    bossAct();
    if(eim!=null){eim.setProperty("bossSummoned","true");eim.setProperty("canEnter","false");}
}
