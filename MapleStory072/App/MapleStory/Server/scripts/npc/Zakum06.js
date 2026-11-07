// Native Amon is shared by both jump stages and the Zakum altar.
var asked=false,done=false,origin=-1;
function start(){origin=cm.getMapId();if(origin==280030000){done=true;cm.dispose();cm.openNpc(2030010);return;}if(origin!=280020000&&origin!=280020001){done=true;cm.dispose();return;}asked=true;cm.sendYesNo("放弃这次跳跃试炼，返回阿杜比斯处吗？");}
function action(mode,type,selection){if(done)return;done=true;if(mode==1&&asked&&cm.getMapId()==origin){var p=cm.getPlayer(),s=String(p.getInfoQuest(7000));p.updateInfoQuest(7000,s.replace(/(^|;)z072trip=[^;]*/g,"$1z072trip=0"));cm.warp(211042300,0);}cm.dispose();}
