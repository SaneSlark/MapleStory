// CMS072 map/event exit contract; no entry, reward or quest-condition changes.
var asked=false,closed=false;
function validMap(){return cm.getMapId()>=922010000 && cm.getMapId()<=922011100;}
function finish(){closed=true;cm.dispose();}
function start(){
    if(!validMap()){finish();return;}
    asked=true;cm.sendYesNo("要离开这里吗？放弃挑战会返回等候地图；从等候地图离开则返回玩具塔101层。");
}
function action(mode,type,selection){
    if(closed)return;
    if(mode!=1 || !asked || !validMap()){finish();return;}
    closed=true;
    var leavingLobby=cm.getMapId()==922010000;
    var origin=cm.getMapId();
    var player=cm.getPlayer(),eim=player.getEventInstance();
    if(eim!=null){
        var manager=eim.getEventManager();
        if(String(manager.getName())!="LudiPQ"){cm.sendOk("当前活动状态与这处出口不符，请通过所属活动的出口离开。");cm.dispose();return;}
        // Delegate removal/leader handling to the existing event, then warp only
        // if its callback did not move the player (Horntail playerExit only removes).
        eim.removePlayer(player);
        if(player.getEventInstance()==eim){cm.sendOk("活动退出尚未完成，请稍后重试。");cm.dispose();return;}
        if(eim.getPlayerCount()==0){eim.disposeIfPlayerBelow(0,0);manager.setProperty("state","0");}
    }
    if(cm.getMapId()==origin)cm.warp(leavingLobby?221024500:922010000,0);
    cm.dispose();
}
