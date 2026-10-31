/*
Papulatus Reactor: Performs the Papulatus commands
*/

function bossAct(){
try {
    rm.mapMessage(5, "´ÎÔªÁÑ·ìÒÑ±»Ê±¿ÕÁÑ·ìµÄËéÆ¬ÌîÂú¡£");
    rm.changeMusic("Bgm09/TimeAttack");
    rm.spawnMonster(8500000, -410, -400);
    rm.getMap(220080000).setReactorState();
} catch(e) {
    rm.mapMessage(5, "´íÎó£º" + e);
}
}
function act(){
    var map=rm.getMap();if(map.getId()!=220080001)return;
    var eim=rm.getPlayer().getEventInstance();
    if(eim!=null && ""!="" && String(eim.getEventManager().getName())!="")return;
    if(eim!=null && String(eim.getProperty("bossSummoned"))=="true")return;
    var mobs=map.getAllMonstersThreadsafe().iterator();
    while(mobs.hasNext()){var id=mobs.next().getId();if(id>=8500000 && id<=8500002)return;}
    bossAct();
    if(eim!=null){eim.setProperty("bossSummoned","true");eim.setProperty("canEnter","false");}
}
