/* Trainer Frod
	Pet Trainer
	located in Pet-Walking Road (100000202)
 */

importPackage(net.sf.odinms.server.maps);

var status = 0;
var trainerDone=false,trainerOrigin=-1;

function start() {
    trainerDone=false;trainerOrigin=cm.getMapId();
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(trainerDone)return;
    if(mode!=1||cm.getMapId()!=trainerOrigin){trainerDone=true;cm.dispose();return;}
    if (mode == -1) 
        cm.dispose();
    else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("下次见.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0)
            cm.sendNext("太棒了! 你做到了! 作为酬谢,你的宠物的亲密度又有提升!你的宠物需要每天锻炼.");
        else if (status == 1) {
            var pet=cm.getPlayer().getPet(0);
    if(pet==null||!pet.getSummoned()){trainerDone=true;cm.dispose();return;}
    trainerDone=true;
    cm.gainCloseness(3,0);
            cm.warp(100000202, 0);
            cm.dispose();
        }
    }
}