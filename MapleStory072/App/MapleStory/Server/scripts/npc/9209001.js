// Client market maps and original Quest.wz explanations; preserve existing free entry.
var state=0,origin=-1;
var markets=[680100000,680100001,680100002];
function start(){state=0;origin=cm.getMapId();cm.sendSimple("每周周日举办的冒险岛周末集市～欢迎光临～\r\n#L0#前往冒险岛周末集市#l\r\n#L1#了解冒险岛周末集市#l");}
function action(mode,type,selection){
 if(state==2)return;
 if(mode!=1){state=2;cm.dispose();return;}
 if(cm.getMapId()!=origin){state=2;cm.dispose();return;}
 if(state==0){
  if(selection==1){state=2;cm.sendOk("在每周一次的冒险岛周末集市上购买的东西，可以通过中介商人回售。可以确认一下自己能购买的各种东西。\r\n\r\n另外，帮助养鸡场主人的女儿照看鸡蛋的话，可以获得不错的答谢哦！\r\n\r\n本包的养鸡成长与奖励功能尚未恢复。");cm.dispose();return;}
  if(selection!=0){state=2;cm.dispose();return;}
  state=1;cm.sendYesNo("要前往冒险岛周末集市吗？可通过集市出口返回出发地点。");return;
 }
 state=2;
 var map=markets[Math.floor(Math.random()*markets.length)];
 if(cm.getMap(map)==null){cm.sendOk("暂时无法前往集市，请稍后再试。");cm.dispose();return;}
 cm.saveLocation("EVENT");cm.warp(map,0);cm.dispose();
}
