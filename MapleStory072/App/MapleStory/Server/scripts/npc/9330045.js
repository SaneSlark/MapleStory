// CMS072 fishing supplies. Prices and timing remain this package's settings.
// Native fish-material rewards belong to quest 8682 at NPC 9300015.
var status=-1,closed=false;
var rules=Packages.server.FishingSettings072.get();
function periodText(days){return days==0?"永久":"有效期"+days+"天";}
function finish(text){closed=true;if(text)cm.sendOk(text);cm.dispose();}
function action(mode,type,selection){
    if(closed)return;
    if(!rules.enabled){finish("钓鱼当前未开放。");return;}
    if(mode!=1){finish();return;}
    status++;
    if(status==0){
        if(cm.getPlayer().getMapId()!=741000208&&cm.getLevel()<rules.entryMinLevel){finish("达到"+rules.entryMinLevel+"级后才可以进入钓鱼场。");return;}
        cm.sendSimple("你好，我是渔场管理人余夫。钓鱼需要有效的鱼竿、钓鱼用椅子和鱼饵。\r\n\r\n#L1#进入钓鱼场#l\r\n\r\n#L2##v3011000#钓鱼用椅子"+(rules.chairMinLevel>0?"（"+rules.chairMinLevel+"级起购）":"")+"："+rules.chairPrice+"点券，"+periodText(rules.chairDays)+"#l\r\n#L3##v5340001#高级鱼竿："+rules.rodPrice+"点券，"+periodText(rules.rodDays)+"#l\r\n#L4##v2300001#高级鱼饵"+rules.baitCount+"个："+rules.baitPrice+"点券#l\r\n\r\n#L8#鱼类兑换#l\r\n#L7#钓鱼说明#l");
        return;
    }
    if(status!=1){finish();return;}
    if(selection==1){cm.warp(741000208,0);finish();return;}
    if(selection==8){closed=true;cm.dispose();cm.openNpc(9330045,"fishing_exchange");return;}
    if(selection==7){
        finish("准备有效的#v5340000##t5340000#或#v5340001##t5340001#、#v3011000##t3011000#，并携带#v2300000##t2300000#或#v2300001##t2300001#，在钓鱼场坐下即可。\r\n\r\n普通鱼竿每"+rules.normalSeconds+"秒尝试一次，高级鱼竿每"+rules.advancedSeconds+"秒尝试一次；每次正常收获消耗1个鱼饵。站起、更换椅子或离开钓鱼场会停止钓鱼。");return;
    }
    if(selection!=2&&selection!=3&&selection!=4){finish();return;}
    var id=selection==2?3011000:selection==3?5340001:2300001;
    var quantity=selection==4?rules.baitCount:1;
    var price=selection==2?rules.chairPrice:selection==3?rules.rodPrice:rules.baitPrice;
    if(selection==2&&cm.getLevel()<rules.chairMinLevel){finish("购买钓鱼椅需要达到"+rules.chairMinLevel+"级。");return;}
    if(selection!=4&&cm.haveItem(id)){finish(selection==2?"你已经有一把钓鱼椅。每个角色只能有1个钓鱼椅。":"你已经有一把高级鱼竿了。");return;}
    if(!cm.canHold(id,quantity)||cm.getPlayer().getCSPoints(1)<price){finish("请检查是否有所需的点券或足够的背包空间。");return;}
    cm.getPlayer().modifyCSPoints(1,-price,true);
    if(selection==4)cm.gainItem(id,quantity);
    else cm.gainItemPeriod(id,1,selection==2?rules.chairDays:rules.rodDays);
    finish("购买成功，祝你快乐钓鱼！");
}
