// Valentine recipe and packaging services; no event center.
var closed=false;
function start(){cm.sendSimple("情人节厨师\r\n\r\n#b#L0#情人节制作任务#l\r\n#L1#购买包装材料#l#k");}
function action(mode,type,selection){if(closed)return;closed=true;if(mode!=1){cm.dispose();return;}if(selection==0){cm.openNpc(2041017,"seasonalRecipes072");return;}if(selection==1){cm.openNpc(2041017,"valentine_materials");return;}cm.dispose();}
