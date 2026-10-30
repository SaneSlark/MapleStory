// Native client binding. Boss settlement delegates the actual bound exit portal.
var done072=false,origin072=-1;
function start(){
    origin072=cm.getMapId();
    if(origin072!=930000600){done072=true;cm.openNpc(cm.getNpc(),"2133001");return;}
    cm.sendYesNo("是否结算挑战并离开？需要先击败石头人的所有战斗阶段，并在背包中留出空位。");
}
function action(mode,type,selection){
    if(done072)return;done072=true;
    var portal=cm.getMapId()==origin072&&origin072==930000600?cm.getMap().getPortal("out00"):null;
    cm.dispose();
    if(mode==1&&portal!=null&&String(portal.getScriptName())=="party6_out")Packages.scripting.PortalScriptManager.getInstance().executePortalScript(portal,cm.getClient());
}
