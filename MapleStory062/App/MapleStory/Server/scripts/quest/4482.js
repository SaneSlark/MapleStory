var activityHelper=Packages.net.sf.odinms.scripting.npc.LegacyActivityQuests;
var activityId=4482,activityStage=-1;
function start(mode,type,selection){
    if(mode!=1){qm.dispose();return;}
    if(activityHelper.blocked(activityId)){qm.sendOk("这个活动的专用互动流程尚未恢复，暂时不能接取。");qm.dispose();return;}
    if(activityStage++<0){qm.sendYesNo(activityHelper.dialogue(activityId,false));return;}
    if(!activityHelper.start(qm.getC(),activityId,qm.getNpc()))qm.sendOk("暂时无法接取，请检查前置任务、等级、职业、重复间隔和背包空位。");
    else qm.sendOk("任务已接受，请按任务栏要求完成，再找指定的居民交付。");
    qm.dispose();
}
var christmas=Packages.net.sf.odinms.scripting.npc.ChristmasQuests,knitInput=false;
function end(mode,type,selection){
 if(mode!=1){qm.dispose();return;}
 if(!christmas.canKnit(qm.getC())){qm.dispose();return;}
 if(knitInput){
  var ok=christmas.knit(qm.getC(),selection);
  qm.sendOk(ok?"纺织球已用上了，目前进度："+christmas.progress(qm.getC())+"/3000。":"请确认纺织球数量，制作进度不会超过3000。");qm.dispose();return;
 }
 if(christmas.ready(qm.getC(),4482)){
  if(activityStage++<0){qm.sendYesNo("圣诞袜做好了！现在把袜架交还给我，领取圣诞袜吧？");return;}
  if(!activityHelper.complete(qm.getC(),4482,qm.getNpc(),-1))qm.sendOk("请留出领取圣诞袜所需的背包空位。");
  qm.dispose();return;
 }
 if(!christmas.supplyFrame(qm.getC())){qm.sendOk("请先在其他栏留出一个空位，领取袜架。");qm.dispose();return;}
 var count=Math.min(christmas.balls(qm.getC()),Math.ceil((3000-christmas.progress(qm.getC()))/100));
 if(count<=0){qm.sendOk("目前进度："+christmas.progress(qm.getC())+"/3000。去雪人村收集合格纺织球，再来找我吧，每个能增加100点进度。");qm.dispose();return;}
 knitInput=true;qm.sendGetNumber("目前进度："+christmas.progress(qm.getC())+"/3000。这次用几个合格纺织球？",count,1,count);
}
