// Native reactor seed, guarded per MV encounter.
function act(){
    if(rm.getMap().getId()!=674030200)return;
    var eim=rm.getPlayer().getEventInstance();
    if(eim==null||String(eim.getEventManager().getName())!="MV")return;
    if(String(eim.getProperty("bossSummoned072"))=="true"||String(eim.getProperty("bossCleared072"))=="true")return;
    if(rm.getMap().getMonsterById(9400748)!=null)return;
    eim.setProperty("bossSummoned072","true");
    try{rm.spawnMonster(9400748,1);}catch(error){eim.setProperty("bossSummoned072","false");throw error;}
}
