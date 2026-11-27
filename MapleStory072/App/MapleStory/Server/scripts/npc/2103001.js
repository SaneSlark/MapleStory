// CMS072 3927: the wall records progress; 2101000 owns native completion.
var closed=false;
function start(){action(1,0,0);}
function action(mode,type,selection){
    if(closed)return;closed=true;
    if(mode!=1||cm.getMapId()!=260000200||cm.getQuestStatus(3927)!=1){cm.dispose();return;}
    cm.updateInfoQuest(3927,"1");
    cm.sendOk("铁锤和短剑，弓和弓箭……请回去向舞姬报告你在墙上读到的提示。");
    cm.dispose();
}
