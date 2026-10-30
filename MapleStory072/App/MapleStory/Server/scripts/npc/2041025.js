// Existing 5,000,000-meso D-piece shop and exit destinations retained.
var closed=false;
function start(){if(cm.getMapId()!=220080001){closed=true;cm.dispose();return;}cm.sendSimple("#L1#购买#bD片#k（5,000,000金币）#l\r\n#L2#回到玩具城#l\r\n#L3#离开后重新挑战#l");}
function action(mode,type,selection){
    if(closed)return;closed=true;
    if(mode!=1 || cm.getMapId()!=220080001){cm.dispose();return;}
    if(selection==1){
        if(cm.getMeso()<5000000)cm.sendOk("需要5,000,000金币。");
        else if(!cm.canHold(4031179,1))cm.sendOk("请先在背包中留出位置。");
        else{cm.gainItem(4031179,1);cm.gainMeso(-5000000);}
    }else if(selection==2 || selection==3){
        var origin=cm.getPlayer().getMap();cm.warp(selection==2?220000000:220080000,0);
        if(origin.getCharactersSize()==0 && origin.getAllMonstersThreadsafe().size()==0)origin.resetReactors();
    }
    cm.dispose();
}
