// Client NPC1072008 is in pirate test maps; 079 specifies15 crystals and hero certificate.
var status=-1,done=false,item=0;
function start(){status=-1;done=false;action(1,0,0);}
function action(mode,type,selection){
 if(done)return;
 if(mode!=1){done=true;cm.dispose();return;}
 status++;
 var map=cm.getMapId();item=map==108000500||map==108000501?4031857:map==108000502||map==108000503?4031856:0;
 if(cm.getJob()!=500 || cm.getLevel()<30 || item==0){done=true;cm.dispose();return;}
 if(status==0){
  cm.sendSimple("收集15个#t"+item+"#后可以领取英雄证书。\r\n#L0#提交结晶，完成考验#l\r\n#L1#放弃考验，返回航海室#l");
 }else{
  done=true;
  if(selection==1){cm.warp(120000101,0);cm.dispose();return;}
  if(selection!=0){cm.dispose();return;}
  if(!cm.haveItem(item,15)){cm.sendOk("结晶还不足15个，请继续狩猎。");cm.dispose();return;}
  if(!cm.canHold(4031012,1)){cm.sendOk("请先空出其他栏。");cm.dispose();return;}
  cm.gainItem(item,-15);cm.gainItem(4031012,1);cm.warp(120000101,0);cm.dispose();
 }
}
