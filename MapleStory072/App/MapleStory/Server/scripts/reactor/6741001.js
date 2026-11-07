// Native reactor seed, guarded per MV encounter.
function act(){
    if(rm.getMap().getId()!=674030200)return;
    var eim=rm.getPlayer().getEventInstance();
    if(eim==null||String(eim.getEventManager().getName())!="MV")return;
    if(String(eim.getProperty("bossSummoned"))=="true"||String(eim.getProperty("bossCleared"))=="true")return;
    if(rm.getMap().getMonsterById(9400748)!=null)return;
    eim.setProperty("bossSummoned","true");
    try{var mob=Packages.server.life.MapleLifeFactory.getMonster(9400748);eim.registerMonster(mob);rm.getMap().spawnMonsterOnGroundBelow(mob,rm.getReactor().getPosition());}catch(error){eim.setProperty("bossSummoned","false");throw error;}
}

// Serialize first summons across player-local script engines.
var nativeBossAct=act;
act=function(){var guarded=new Packages.org.mozilla.javascript.Synchronizer(nativeBossAct,rm.getMap());return guarded();};
