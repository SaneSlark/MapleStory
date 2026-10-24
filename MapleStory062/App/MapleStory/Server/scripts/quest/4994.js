var activityHelper=Packages.net.sf.odinms.scripting.npc.LegacyActivityQuests;
var activityId=4994,activityStage=-1;
function start(mode,type,selection){
 if(mode!=1){qm.dispose();return;}
 if(activityStage++<0){
  if(!activityHelper.canStart(qm.getC(),4994,qm.getNpc())){qm.sendOk("请达到10级后再来找我吧。如果已经接取了任务，就先完成它。");qm.dispose();return;}
  qm.sendYesNo("我想知道，枫叶圣诞节和蓬戈说的另一种圣诞节，到底有什么不同。你愿意帮我问问枫叶老人和蓬戈吗？");return;
 }
 if(activityHelper.start(qm.getC(),4994,qm.getNpc()))qm.sendOk("谢谢你！先去听听枫叶老人和蓬戈对圣诞节的介绍，再回来告诉我吧。");
 else qm.sendOk("暂时无法接取，请确认任务条件和背包空位。");
 qm.dispose();
}

function end(mode,type,selection){
    if(mode!=1){qm.dispose();return;}
    if(activityHelper.blocked(activityId)){qm.sendOk("这个活动的专用互动流程尚未恢复，暂时不能交付。已接任务和道具会保留。");qm.dispose();return;}
    if(!activityHelper.canComplete(qm.getC(),activityId,qm.getNpc())){qm.sendOk("尚未满足交付条件，请核对任务物品和消灭数量。");qm.dispose();return;}
    activityStage++;
    if(activityStage==0){
        if(activityHelper.isQuiz(activityId))qm.sendSimple(activityHelper.dialogue(activityId,true));
        else qm.sendYesNo(activityHelper.dialogue(activityId,true));
        return;
    }
    if(activityStage==1&&!activityHelper.isQuiz(activityId)){
        var menu=String(activityHelper.choiceMenu(qm.getC(),activityId));
        if(menu.length>0){qm.sendSimple((activityId==10218?"请选择要永久保留的圣诞饰品：":"请选择一份任务奖励：")+menu);return;}
    }
    if(activityHelper.isQuiz(activityId)&&selection!=activityHelper.answer(activityId)){qm.sendOk("答案不正确，请重新与我对话后再试。");qm.dispose();return;}
    if(activityHelper.complete(qm.getC(),activityId,qm.getNpc(),activityHelper.isQuiz(activityId)||activityStage==2?selection:-1))qm.sendOk("任务完成，物品已收取，奖励已发放。");
    else qm.sendOk("无法交付。请检查任务道具、金币和奖励所需的背包空位。");
    qm.dispose();
}
