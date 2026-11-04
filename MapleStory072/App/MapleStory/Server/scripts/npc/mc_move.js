var done=false;
function start(){
    var result=cm.getPlayer().getOneInfo(1301,"mcResult");
    cm.sendOk(result=="vic"?"恭喜获胜！点击确定返回大厅。":result=="draw"?"本场平局。点击确定返回大厅。":result=="lose"?"本场挑战结束，再接再厉！点击确定返回大厅。":"点击确定返回嘉年华大厅。");
}
function action(mode,type,selection){if(done)return;done=true;var p=cm.getPlayer(),party=p.getCarnivalParty();if(party!=null)party.removeMember(p);p.resetCP();p.updateOneInfo(1301,"mcResult","");cm.dispose();cm.warp(980000000,0);}
