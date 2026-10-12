/*
-- MrCoffee JavaScript --
        NPC脚本 
-------------------------
   MrCoffee MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

function act() {
    rm.mapMessage(5, "伴随着洞穴强烈的震动,洞穴深处,黑暗龙王出现了.");
    rm.changeMusic("Bgm14/HonTale");
    rm.spawnMonster(8810026,71,260);
    rm.createMapMonitor(2,240050400,"sp","8810010,8810011,8810012,8810013,8810014,8810015,8810016,8810017",0,8810018);
    rm.createMapMonitor(2,240050400,"sp","8810002,8810004,8810005,8810006,8810007,8810008,8810009",1,8810003);
    rm.getReactor().getMap().addMapTimer(12 * 60 * 60, 240000000);
}