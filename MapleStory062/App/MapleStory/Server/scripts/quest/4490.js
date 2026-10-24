var activityHelper=Packages.net.sf.odinms.scripting.npc.LegacyActivityQuests;
var activityId=4490,activityStage=-1;
function start(mode,type,selection){
    if(mode!=1){qm.dispose();return;}
    if(activityHelper.blocked(activityId)){qm.sendOk("这个活动的专用互动流程尚未恢复，暂时不能接取。");qm.dispose();return;}
    if(activityStage++<0){qm.sendYesNo(activityHelper.dialogue(activityId,false));return;}
    if(!activityHelper.start(qm.getC(),activityId,qm.getNpc()))qm.sendOk("暂时无法接取，请检查前置任务、等级、职业、重复间隔和背包空位。");
    else qm.sendOk("任务已接受，请按任务栏要求完成，再找指定的居民交付。");
    qm.dispose();
}
var christmas=Packages.net.sf.odinms.scripting.npc.ChristmasQuests,meetInput=false;
function end(mode,type,selection){
 if(mode!=1){qm.dispose();return;}
 if(!christmas.canMeet(qm.getC())){qm.dispose();return;}
 if(meetInput){
  var ok=christmas.meet(qm.getC(),qm.getText());
  qm.sendOk(ok?(christmas.ready(qm.getC(),4490)?"你们的帮助都确认了，再和我说话领取推荐信吧。":"已记下你的同伴，请对方也和我说话，输入你的名字确认帮助。"):"请找一位同频道、同地图且已接取此任务的同伴，双方分别输入对方的名字。");qm.dispose();return;
 }
 if(christmas.ready(qm.getC(),4490)){
  if(activityStage++<0){qm.sendYesNo("多亏了你们的帮助！现在领取推荐信吗？");return;}
  if(!activityHelper.complete(qm.getC(),4490,qm.getNpc(),-1))qm.sendOk("请留出领取推荐信所需的背包空位。");qm.dispose();return;
 }
 meetInput=true;qm.sendGetText("和另一位接取任务的冒险家一起帮我吧。请输入同伴的名字，双方都确认后就能领取推荐信，没有完成时限。");
}
