// CMS072 3923: take one ring from the cabinet, then report to 2101012.
var closed=false;
function start(){action(1,0,0);}
function action(mode,type,selection){
    if(closed)return;closed=true;
    if(mode!=1||cm.getMapId()!=260000303||cm.getQuestStatus(3923)!=1){cm.dispose();return;}
    if(cm.haveItem(4031578,1)){cm.sendOk("你已经拿到了戒指，请回去向#p2101012#报告。");cm.dispose();return;}
    if(!cm.canHold(4031578,1)){cm.sendOk("请先在其他栏留出一个空位。");cm.dispose();return;}
    cm.gainItem(4031578,1);
    cm.sendOk("你从装饰柜中取出了#t4031578#。请带给#p2101012#。");
    cm.dispose();
}
