/*
-- MrCoffee JavaScript --
        NPC½Å±¾ 
-------------------------
   MrCoffee MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

function act() {
	rm.closeDoor(211042300); //activate the reactor at map 211042300 this map is where the door is 
    	rm.closePortal(211042300,"sp");//close the portal: portal name is sp  
	rm.changeMusic("Bgm06/FinalFight");
	rm.spawnMonster(8800000);
	rm.spawnMonster(8800003);
	rm.spawnMonster(8800004);
	rm.spawnMonster(8800005);
	rm.spawnMonster(8800006);
	rm.spawnMonster(8800007);
	rm.spawnMonster(8800008);
	rm.spawnMonster(8800009);
	rm.spawnMonster(8800010);
	rm.createMapMonitor(2,211042300,"sp","8800003,8800004,8800005,8800006,8800007,8800008,8800009,8800010",1,8800000);
	rm.getReactor().getMap().addMapTimer(1 * 60 * 60, 240000000);
}
