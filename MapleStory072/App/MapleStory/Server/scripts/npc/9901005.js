/****
 * @author Diffusion a.k.a Ace
 * @purpose: ChickenMS Exchanger.
****/
var status = 0;
var choices = ["兑换：#v4000252#（#e#r666#n#k）换10亿金币！","兑换：10亿金币换#v4000252#（#e#r300#k#n）"];
var ServerName = "ChickenMS";
var done=false,origin=-1;
function start(){done=false;origin=cm.getMapId();var msg="#e你好，#h #，需要什么帮助？";for(var i=0;i<choices.length;i++)msg+="\r\n#L"+i+"#"+choices[i]+"#l";cm.sendSimple(msg);}
function action(mode,type,selection){
 if(done)return;done=true;
 if(mode!=1||cm.getMapId()!=origin||!isFinite(selection)||Math.floor(selection)!=selection||selection<0||selection>=choices.length){cm.dispose();return;}
 if(selection==0){
  if(cm.haveItem(4000252,666)&&cm.getMeso()<=1000000000){cm.gainItem(4000252,-666);cm.gainMeso(1000000000);cm.sendOk("金币兑换完成。");}
  else cm.sendOk("物品不足，或金币已超过10亿。");
 }else if(selection==1){
  if(cm.getMeso()<1000000000)cm.sendOk("金币不足。");
  else if(!cm.canHold(4000252,300))cm.sendOk("请先为兑换物品留出足够空间。");
  else {cm.gainMeso(-1000000000);cm.gainItem(4000252,300);cm.sendOk("物品兑换完成。");}
 }
 cm.dispose();
}
