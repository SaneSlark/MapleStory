function bossAct() {
    rm.changeMusic("Bgm14/HonTale");
    var e=rm.getPlayer().getEventInstance(),mob=Packages.server.life.MapleLifeFactory.getMonster(8810026);if(e!=null)e.registerMonster(mob);rm.getMap().spawnMonsterOnGroundBelow(mob,new java.awt.Point(71,260));
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
    if(eim!=null && (String(eim.getProperty("bossSummoned"))=="true"||String(eim.getProperty("head0"))!="clear"||String(eim.getProperty("head1"))!="clear"))return;
    var mobs=map.getAllMonstersThreadsafe().iterator();
    while(mobs.hasNext()){var id=mobs.next().getId();if(id>=8810000 && id<=8810026)return;}
    bossAct();
    if(eim!=null){eim.setProperty("bossSummoned","true");eim.setProperty("canEnter","false");}
}

// Serialize first summons across player-local script engines.
var nativeBossAct=act;
act=function(){var guarded=new Packages.org.mozilla.javascript.Synchronizer(nativeBossAct,rm.getMap());return guarded();};
