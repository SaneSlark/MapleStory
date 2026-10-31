// CMS Zakum jump quest stage 2; 079 Lira implementation, checked against client map/item resources.
var status=-1,done=false;
function start(){status=-1;action(1,0,0);}
function action(mode,type,selection){
 if(done)return;
 if(mode!=1){done=true;cm.dispose();return;}
 status++;
 if(status==0)cm.sendYesNo("恭喜完成第二阶段！领取#b#t4031062##k后返回扎昆入口吗？");
 else {
  done=true;
  if(cm.getMapId()!=280020001){cm.dispose();return;}
  if(!cm.canHold(4031062,1)){cm.sendOk("请先空出其他栏的一格。");cm.dispose();return;}
  var record=cm.getQuestRecord(100202);
  cm.gainItem(4031062,1);
  if(cm.getQuestStatus(100202)!=2 && String(record.getCustomData())!="1"){
   record.setCustomData("1");cm.gainExp(10000);
  }
  cm.warp(211042300,0);cm.dispose();
 }
}
