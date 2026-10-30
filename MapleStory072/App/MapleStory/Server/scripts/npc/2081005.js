// Both original displayed fees are 10,000,000 mesos; no rate change.
var closed=false;
function start(){cm.sendSimple("#L1#购买100瓶超级药水（10,000,000金币）#l\r\n#L2#前往暗黑龙王洞穴入口（10,000,000金币）#l");}
function action(mode,type,selection){
    if(closed)return;closed=true;
    if(mode!=1 || (selection!=1 && selection!=2)){cm.dispose();return;}
    if(cm.getMeso()<10000000){cm.sendOk("需要10,000,000金币。");cm.dispose();return;}
    if(selection==1){if(!cm.canHold(2000005,100))cm.sendOk("请先在背包中留出位置。");else{cm.gainItem(2000005,100);cm.gainMeso(-10000000);}}
    else{cm.warp(240050400,0);if(cm.getMapId()==240050400)cm.gainMeso(-10000000);}
    cm.dispose();
}
