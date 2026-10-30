// Native 2708000 consumes one 4001193; hand off to the existing seed chain.
function act(){
    if(rm.getMap().getId()!=270050100 || rm.getReactor().getState()!=1)return;
    var e=rm.getPlayer().getEventInstance();
    if(e==null || String(e.getEventManager().getName())!="PinkBeanBattle" || String(e.getProperty("bossSummoned"))=="true")return;
    var power=rm.getMap().getReactorById(2709000);
    if(power!=null)power.forceStartReactor(rm.getPlayer().getClient());
}
