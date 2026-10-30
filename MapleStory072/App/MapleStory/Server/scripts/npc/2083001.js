// Existing VIP requirement and destination retained.
var closed=false;
function start(){cm.sendYesNo("VIP玩家可以前往暗黑龙王洞穴入口，要前往吗？");}
function action(mode,type,selection){
    if(closed)return;closed=true;
    if(mode==1){if(cm.getPlayer().getVip()<1)cm.sendOk("需要VIP资格。");else cm.warp(240050400,0);}
    cm.dispose();
}
