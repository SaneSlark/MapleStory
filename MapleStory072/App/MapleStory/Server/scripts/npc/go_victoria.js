// CMS072 Happyville return using this version's existing CHRISTMAS slot.
var done=false;
function start(){done=false;if(cm.getPlayer().getMapId()!=209000000){cm.openNpc(cm.getNpc(),String(cm.getNpc()));return;}cm.sendYesNo("要离开幸福村，返回来时的地方吗？");}
function action(mode,type,selection){
 if(done)return;done=true;
 if(mode!=1||cm.getPlayer().getMapId()!=209000000){cm.dispose();return;}
 var target=cm.getSavedLocation("CHRISTMAS");
 if(target<=0||target>=999999999||(target>=209000000&&target<209000100))target=100000000;
 cm.warp(target,0);cm.clearSavedLocation("CHRISTMAS");cm.dispose();
}
