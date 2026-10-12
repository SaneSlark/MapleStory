// Client resource names/maps; compatible repair dialogue, not original CMS072 dialogue.
var routes=[{"origin": 211000000, "destinations": [{"map": 211040200, "name": "冰雪峡谷Ⅱ", "cost": 45000, "beginner": 45000}]}, {"origin": 220000000, "destinations": [{"map": 220050300, "name": "时间通道", "cost": 45000, "beginner": 45000}]}, {"origin": 240000000, "destinations": [{"map": 240030000, "name": "龙林入口", "cost": 55000, "beginner": 55000}]}];
var taxiName="危险地区 快速出租车";
var state=0,origin=-1,choices=[],chosen=-1,fare=0;
function start(){
 state=0;origin=cm.getMapId();choices=[];chosen=-1;fare=0;
 for(var i=0;i<routes.length;i++)if(routes[i].origin==origin)choices=routes[i].destinations;
 if(choices.length==0){state=2;cm.sendOk("此处没有可用的出租车路线。");cm.dispose();return;}
 var text="你好，我是#b"+taxiName+"#k。请选择目的地：";
 var beginner=cm.getJob()==0;
 for(var j=0;j<choices.length;j++)text+="\r\n#L"+j+"#"+choices[j].name+"（"+(beginner?choices[j].beginner:choices[j].cost)+"金币）#l";
 cm.sendSimple(text);
}
function action(mode,type,selection){
 if(state==2)return;
 if(mode!=1){state=2;cm.dispose();return;}
 if(cm.getMapId()!=origin){state=2;cm.dispose();return;}
 if(state==0){
  if(selection<0||selection>=choices.length||selection!=Math.floor(selection)){state=2;cm.dispose();return;}
  chosen=selection;fare=cm.getJob()==0?choices[chosen].beginner:choices[chosen].cost;state=1;
  cm.sendYesNo("前往#b"+choices[chosen].name+"#k，需要"+fare+"金币，是否出发？");return;
 }
 state=2;
 if(chosen<0||cm.getMeso()<fare){cm.sendOk("金币不足。");cm.dispose();return;}
 var target=cm.getMap(choices[chosen].map);
 if(target==null||target.getPortal(0)==null){cm.sendOk("目的地暂时无法到达。");cm.dispose();return;}
 cm.gainMeso(-fare);cm.warp(choices[chosen].map,0);cm.dispose();
}
