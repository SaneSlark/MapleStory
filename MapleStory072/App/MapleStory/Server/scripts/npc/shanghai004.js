// CMS native binding 9310007. Compatibility wording; native forced return.
var done=false,origin=-1;
function start(){origin=cm.getMapId();if(origin!=701010322&&origin!=701010323&&origin!=701010324){done=true;cm.dispose();return;}cm.sendYesNo("要离开这里，返回乡村田野吗？");}
function action(mode,type,selection){if(done)return;done=true;if(mode==1&&cm.getMapId()==origin)cm.warp(701010320,0);cm.dispose();}
