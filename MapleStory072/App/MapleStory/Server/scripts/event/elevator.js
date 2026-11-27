var elevatorTask=null, elevatorCancelled=true;
function queueElevator(method,delay){if(!elevatorCancelled)elevatorTask=em.schedule(method,delay);}
function cancelSchedule(){
    elevatorCancelled=true;
    if(elevatorTask!=null)elevatorTask.cancel(false);
    elevatorTask=null;
    em.setProperty("isUp","false");em.setProperty("isDown","false");
}
/*
-- odinms JavaScript --
        NPC½Å±¾ 
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

importPackage(net.sf.odinms.scripting.reactor);
var elevator_s;
var elevator_m;
var returnMap;
var arrive;

function init() {
    cancelSchedule();elevatorCancelled=false;
	elevator_m = em.getChannelServer().getMapFactory().getMap(222020211);
	em.setProperty("isUp","false");
	em.setProperty("isDown","false");
	//em.getChannelServer().getMapFactory().getMap(222020200).setReactorState();
	onDown();
}

function onDown() {
    if(elevatorCancelled)return;
	em.getChannelServer().getMapFactory().getMap(222020100).resetReactors();
	arrive = em.getChannelServer().getMapFactory().getMap(222020100);
	returnMap = em.getChannelServer().getMapFactory().getMap(222020100);
	warpToD();
	elevator_s = em.getChannelServer().getMapFactory().getMap(222020110);
	elevator_m = em.getChannelServer().getMapFactory().getMap(222020111);
	em.setProperty("isDown","true");
	queueElevator("goingUp", 60000);
}

function goingUp() {
    if(elevatorCancelled)return;
	warpToM();
	em.setProperty("isDown","false");
	queueElevator("onUp", 50000);
	//em.getChannelServer().getMapFactory().getMap(222020100).setReactorState();
}

function onUp() {
    if(elevatorCancelled)return;
	em.getChannelServer().getMapFactory().getMap(222020200).resetReactors();
	arrive = em.getChannelServer().getMapFactory().getMap(222020200);
	returnMap = em.getChannelServer().getMapFactory().getMap(222020200);
	warpToD();
	elevator_s = em.getChannelServer().getMapFactory().getMap(222020210);
	elevator_m = em.getChannelServer().getMapFactory().getMap(222020211);
	em.setProperty("isUp","true");
	queueElevator("goingDown", 60000);
}

function goingDown() {
    if(elevatorCancelled)return;
	warpToM();
	em.setProperty("isUp","false");
	queueElevator("onDown", 50000);
	//em.getChannelServer().getMapFactory().getMap(222020200).setReactorState();
}

function warpToD() { 
	var temp1 = elevator_m.getCharacters().iterator(); 
   	     while(temp1.hasNext()) { 
                temp1.next().changeMap(arrive, arrive.getPortal(0)); 
        } 
} 


function warpToM() { 
var temp1 = elevator_s.getCharacters().iterator(); 
   	     while(temp1.hasNext()) { 
                temp1.next().changeMap(elevator_m, elevator_m.getPortal(0)); 
        } 
}
