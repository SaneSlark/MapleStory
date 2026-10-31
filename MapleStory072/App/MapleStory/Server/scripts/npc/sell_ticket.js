/* Existing CMS ticket IDs and prices, with cancellation/funds/bag guards. */
var ticketCatalog={
 "1032007":[[4031045,10000,"天空之城"]],
 "2012000":[[4031047,5000,"魔法密林"],[4031074,6000,"玩具城"],[4031331,30000,"神木村"],[4031576,6000,"阿里安特"]],
 "2040000":[[4031045,8000,"天空之城"]],"2082000":[[4031045,8000,"天空之城"]],"2102002":[[4031045,6000,"天空之城"]]
};
var saleOptions=[],saleChoice=-1,saleStage="closed";
function start() {
    saleOptions=ticketCatalog[String(cm.getNpc())]||[];saleChoice=-1;saleStage="closed";
    if(saleOptions.length==0){cm.sendOk("这里不出售本航线船票。");cm.dispose();return;}
    if(saleOptions.length==1){saleChoice=0;confirmSale();return;}
    saleStage="select";var text="请选择目的地：\r\n";
    for(var i=0;i<saleOptions.length;i++)text+="#L"+i+"#"+saleOptions[i][2]+"（"+saleOptions[i][1]+"金币）#l\r\n";
    cm.sendSimple(text);
}
function confirmSale(){saleStage="confirm";cm.sendYesNo("购买一张开往#b"+saleOptions[saleChoice][2]+"#k的船票，需要#b"+saleOptions[saleChoice][1]+"金币#k。确定购买吗？");}
function action(mode,type,selection) {
    if(mode!=1){saleStage="closed";cm.dispose();return;}
    if(saleStage=="select"){
        if(selection<0||selection>=saleOptions.length||selection!=Math.floor(selection)){saleStage="closed";cm.dispose();return;}
        saleChoice=selection;confirmSale();return;
    }
    if(saleStage!="confirm")return;saleStage="closed";
    var ticket=saleOptions[saleChoice];
    if(cm.getMeso()<ticket[1]||!cm.canHold(ticket[0])){cm.sendOk("金币不足，或背包没有空间。本次不会扣除金币。");cm.dispose();return;}
    cm.gainMeso(-ticket[1]);cm.gainItem(ticket[0],1);cm.dispose();
}
