// CMS072 Check 3900: drink at the oasis, then report to 2101005.
var closed=false;
function start(){action(1,0,0);}
function action(mode,type,selection){
    if(closed)return;closed=true;
    if(mode!=1||cm.getMapId()!=260000300||cm.getQuestStatus(3900)!=1){cm.dispose();return;}
    cm.updateInfoQuest(3900,"5");
    cm.sendOk("你喝下了绿洲里的水。请回去向文化学者报告。");
    cm.dispose();
}
