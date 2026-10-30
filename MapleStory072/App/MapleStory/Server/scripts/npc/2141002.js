// CMS072 map return and PinkBeanBattle playerExit contract.
var closed=false,asked=false;
function start(){if(cm.getMapId()!=270050100){closed=true;cm.dispose();return;}asked=true;cm.sendYesNo("要离开品克缤战场吗？");}
function action(mode,type,selection){
    if(closed)return;closed=true;
    if(mode!=1 || !asked || cm.getMapId()!=270050100){cm.dispose();return;}
    var player=cm.getPlayer(),eim=player.getEventInstance();
    if(eim!=null){if(String(eim.getEventManager().getName())!="PinkBeanBattle"){cm.dispose();return;}eim.removePlayer(player);if(player.getEventInstance()==eim){cm.dispose();return;}}
    if(cm.getMapId()==270050100)cm.warp(270050300,0);
    cm.dispose();
}
