/* Existing CMS072 route/ticket IDs; charge one ticket only after successful boarding. */
var transportRoutes={
  "101000300":["Boats",4031045,101000301],"200000111":["Boats",4031047,200000112],
  "200000121":["Trains",4031074,200000122],"220000110":["Trains",4031045,220000111],
  "200000131":["Flight",4031331,200000132],"240000110":["Flight",4031045,240000111],
  "200000151":["Geenie",4031576,200000152],"260000100":["Geenie",4031045,260000110]
};
var boardingOrigin=-1, boardingRoute=null, boardingDone=false;
function start() {
    boardingDone=false;boardingOrigin=cm.getMapId();boardingRoute=transportRoutes[String(boardingOrigin)];
    if(boardingRoute==null) {cm.sendOk("这里不是本航线的检票地点。");cm.dispose();return;}
    var manager=cm.getEventManager(boardingRoute[0]);
    if(manager==null || manager.getInstance(boardingRoute[0])==null) {cm.sendOk("本航线尚未就绪，请稍后再来。");cm.dispose();return;}
    if(String(manager.getProperty("entry"))!="true") {cm.sendOk("本次航班已停止检票，请等候下一班。");cm.dispose();return;}
    cm.sendYesNo("请准备好对应船票。确认后检票进入候船室，现在登船吗？");
}
function action(mode,type,selection) {
    if(boardingDone)return;boardingDone=true;
    if(mode!=1 || boardingRoute==null) {cm.dispose();return;}
    var manager=cm.getEventManager(boardingRoute[0]);
    var instance=manager==null?null:manager.getInstance(boardingRoute[0]);
    if(cm.getMapId()!=boardingOrigin || cm.getChar().getEventInstance()!=null || instance==null || String(manager.getProperty("entry"))!="true") {
        cm.sendOk("本次航班已停止检票，或你正在其他活动中。船票不会被扣除。");cm.dispose();return;
    }
    if(!cm.haveItem(boardingRoute[1])) {cm.sendOk("没有对应船票，不能登船。请先向售票员购买船票。");cm.dispose();return;}
    var boarded=false;
    try {
        instance.registerPlayer(cm.getChar());
        boarded=cm.getMapId()==boardingRoute[2] && cm.getChar().getEventInstance()==instance;
        if(!boarded)throw new Error("Boarding failed");
        cm.gainItem(boardingRoute[1],-1);
    } catch(error) {
        instance.unregisterPlayer(cm.getChar());
        if(boarded)cm.warp(boardingOrigin,0);
        cm.sendOk("暂时无法登船，本次不会扣除船票。");
    }
    cm.dispose();
}
