// User-authorized resale at twice historical reference purchase prices; not official CMS dynamic pricing.
var state=0, item=-1, origin=-1;
var goods=[3994090,3994091,3994092,3994093,3994094];
var prices=[850,1900,1700,24000,20000];
var price=0;
function start(){state=0;item=-1;price=0;origin=cm.getMapId();cm.sendSimple("嘿……如果有东西要卖的话，就拿来给我吧。\r\n#L0#出售市场商品#l\r\n#L1#查看收购价格#l");}
function action(mode,type,selection){
 if(state==3)return;
 if(mode!=1){state=3;cm.dispose();return;}
 if(cm.getMapId()!=origin){state=3;cm.dispose();return;}
 if(state==0){
  if(selection==1){state=3;cm.sendOk("当前按购买参考价的2倍收购：\r\n香料850金币\r\n泰国纪念品1900金币\r\n烤鳗鱼1700金币\r\n鲨鱼标本24000金币\r\n乌鸦羽毛帽20000金币");cm.dispose();return;}
  if(selection!=0){state=3;cm.dispose();return;}
  state=1;var text="请选择要出售的商品：";for(var i=0;i<goods.length;i++)text+="\r\n#L"+i+"##t"+goods[i]+"#（"+prices[i]+"金币/件）#l";cm.sendSimple(text);return;
 }
 if(state==1){
  if(selection<0||selection>=goods.length||selection!=Math.floor(selection)){state=3;cm.dispose();return;}
  item=goods[selection];price=prices[selection];
  if(!cm.haveItem(item,1)){state=3;cm.sendOk("你没有这件商品。");cm.dispose();return;}
  state=2;cm.sendYesNo("出售一件#t"+item+"#，获得"+price+"金币，是否确认？");return;
 }
 state=3;
 if(!cm.haveItem(item,1)){cm.sendOk("你已经没有这件商品。");}
 else if(cm.getPlayer().getMeso()>2147483647-price){cm.sendOk("金币已接近上限，请先存入仓库。");}
 else{cm.gainItem(item,-1);cm.gainMeso(price);cm.sendOk("交易完成，下次再见。");}
 cm.dispose();
}
