// Packaging materials retained for Valentine recipes only.
var event=Packages.server.quest.CustomSeasonal072,stage=0,closed=false,selected=-1,origin=-1;
var products=[4031111,4031112,4031113,4031114,4031125];
function finish(){closed=true;cm.dispose();}
function valid(){return cm.getNpc()==2041017 && cm.getMapId()==origin && cm.getMap().containsNPC(2041017) && cm.getPlayer().getLevel()>=10;}
function start(){origin=cm.getMapId();if(!valid() || !event.enabled()){cm.sendOk("包装材料商店需10级起使用。");finish();return;}var text="情人节包装材料（冒险币／个）\r\n";for(var i=0;i<products.length;i++)text+="\r\n#L"+i+"##t"+products[i]+"#："+event.price(products[i])+"#l";cm.sendSimple(text);}
function action(mode,type,selection){if(closed)return;if(mode!=1 || !valid() || !event.enabled()){finish();return;}if(stage==0){if(selection<0 || selection>=products.length || selection!=Math.floor(selection)){finish();return;}selected=products[selection];stage=1;cm.sendGetNumber("购买#t"+selected+"#，单价"+event.price(selected)+"冒险币。请输入数量：",1,1,100);return;}closed=true;var success=event.buy(cm.getPlayer(),selected,selection);cm.sendOk(success?"购买成功。":"购买失败，请检查金币和背包空间。");cm.dispose();}
