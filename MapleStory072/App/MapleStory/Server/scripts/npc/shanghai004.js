// CMS072 native binding 9310007. Compatibility wording; native forced return.
var done072=false,origin072=-1;
function start(){origin072=cm.getMapId();if(origin072!=701010322&&origin072!=701010323&&origin072!=701010324){done072=true;cm.dispose();return;}cm.sendYesNo("要离开这里，返回乡村田野吗？");}
function action(mode,type,selection){if(done072)return;done072=true;if(mode==1&&cm.getMapId()==origin072)cm.warp(701010320,0);cm.dispose();}
