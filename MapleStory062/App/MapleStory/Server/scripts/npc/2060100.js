//carta
function start(){
var quast = net.sf.odinms.server.quest.MapleQuest.getInstance(6301);
if(cm.getChar().getQuest(quast).getStatus().equals(net.sf.odinms.client.MapleQuestStatus.Status.STARTED)){
//4000175
if (cm.haveItem(4000175))
cm.warp(923000000)
else
cm.sendOk("要想加入细缝,就必须完成我教给你的任务.");
}else{
cm.sendOk("我不喜欢你们人类.");
}
cm.dispose();
}