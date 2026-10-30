// CMS072 client-bound exit; destinations verified against local map/event data.
var done=false;
function start(){done=false;if(cm.getPlayer().getMapId()!=920011200){cm.openNpc(cm.getNpc(),String(cm.getNpc()));return;}cm.sendYesNo("要离开这里吗？");}
function action(mode,type,selection){if(done)return;done=true;if(mode==1&&cm.getPlayer().getMapId()==920011200)cm.warp(200080101,0);cm.dispose();}
