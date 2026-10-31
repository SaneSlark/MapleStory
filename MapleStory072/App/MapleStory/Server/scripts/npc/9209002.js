// CMS merchant/item pairing; user-approved Hidden Street historical reference purchase price.
// This fixed reference price does not reconstruct CMS's original fluctuating market.
var state=0,choice=-1,origin=-1;
var item=3994090,price=425;
function start(){
 state=0;choice=-1;origin=cm.getMapId();
 cm.sendSimple("欢迎光临！\r\n#v"+item+"# #t"+item+"#\r\n售价："+price+"金币/件，有效期7天。\r\n阿得拉回购价为"+(price*2)+"金币/件。\r\n#L0#买入一件#l\r\n#L1#了解回售#l");
}
function action(mode,type,selection){
 if(state==2)return;
 if(mode!=1){state=2;cm.dispose();return;}
 if(cm.getMapId()!=origin){state=2;cm.dispose();return;}
 if(origin<680100000||origin>680100003){state=2;cm.sendOk("请到冒险岛周末集市交易。");cm.dispose();return;}
 if(state==0){
  if(selection!=0&&selection!=1){state=2;cm.dispose();return;}
  if(selection==1){state=2;cm.sendOk("可在城镇找到中介商人阿得拉出售这件商品。当前回购价为"+(price*2)+"金币/件。商品有效期为7天，请在到期前出售。");cm.dispose();return;}
  choice=selection;state=1;
  cm.sendYesNo("支付"+price+"金币买入一件#t"+item+"#，有效期7天。\r\n阿得拉当前按"+(price*2)+"金币回购，是否确认购买？");return;
 }
 state=2;
 if(choice==0){
  if(cm.getMeso()<price){cm.sendOk("金币不足。");}
  else if(!cm.canHold(item,1)){cm.sendOk("请先整理装饰栏，留出一个空位。");}
  else{cm.gainItem(item,1,7);cm.gainMeso(-price);cm.sendOk("购买成功。请在7天内向阿得拉出售。");}
 }
 cm.dispose();
}
