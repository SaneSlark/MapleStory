// CMS072 Alcaster supplies: preserve the existing quest gate, item list and prices.
var closed=false,stage=0,selected=-1,amount=0,origin=-1;
var item=[2050003,2050004,4006000,4006001],cost=[300,400,5000,5000];
var msg=["可以解除封印和诅咒状态","可以治愈所有异常状态","，蕴含魔力，可用于施展高级技能","，蕴含召唤之力，可用于施展高级技能"];
function finish(){closed=true;cm.dispose();}
function valid(){return cm.getNpc()==2020005&&cm.getMapId()==211000100&&cm.getMapId()==origin&&cm.getQuestStatus(3035)==2;}
function start(){
    if(closed)return;origin=cm.getMapId();
    if(!valid()){cm.sendNext("如果你决定帮我，作为回报，我会给你一样东西。");finish();return;}
    var menu="";
    for(var i=0;i<item.length;i++)menu+="\r\n#L"+i+"# #b#t"+item[i]+"# (价格: "+cost[i]+" 金币)#k#l";
    cm.sendSimple("多亏了你，#b#t4031056##k 已经被安全地封印了。当然，为此我也耗尽了这800年来积累的大约一半力量……不过我现在可以安心离去了。哦，对了……你是不是在找稀有的物品？为了感谢你的辛苦付出，我把我收藏的一些东西卖给你，而且只卖给你一个人。挑一个你想要的吧！"+menu);
}
function action(mode,type,selection){
    if(closed)return;
    if(mode!=1||!valid()){finish();return;}
    if(stage==0){
        if(selection!=Math.floor(selection)||selection<0||selection>=item.length){finish();return;}
        selected=selection;stage=1;
        cm.sendGetNumber("#b#t"+item[selected]+"##k 真的是你需要的东西吗？它"+msg[selected]+"。每个要 #b"+cost[selected]+" 金币#k。你想买多少个？",1,1,100);return;
    }
    if(stage==1){
        if(selection!=Math.floor(selection)||selection<1||selection>100){finish();return;}
        amount=selection;stage=2;
        cm.sendYesNo("你确定要买 #r"+amount+" 个 #t"+item[selected]+"##k 吗？每个要 "+cost[selected]+" 金币，总共需要 #r"+(cost[selected]*amount)+" 金币#k。");return;
    }
    if(stage!=2){finish();return;}
    closed=true;
    var total=cost[selected]*amount;
    if(cm.getMeso()<total||!cm.canHold(item[selected],amount)){cm.sendNext("金币不足，或背包没有容纳全部商品的空间，未扣金币。");cm.dispose();return;}
    if(!Packages.server.MapleInventoryManipulator.addById(cm.getClient(),item[selected],amount)){cm.sendOk("物品发放失败，未扣金币。");cm.dispose();return;}
    cm.gainMeso(-total);
    cm.sendNext("谢谢，如果要制造魔法物品，我会为你免费制作。虽然我年岁已高，不过我还是可以帮你的忙。");
    cm.dispose();
}
