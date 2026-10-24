/* Spiruna
	Orbis : Old Man's House (200050001)
	
	Refining NPC: 
	* Dark Crystal - Half Price compared to Vogen, but must complete quest 
*/

importPackage(net.sf.odinms.client);

var status = 0;
var selectedItem = -1;

function recoveredOriginalStart() {
	status = -1;
	action(1, 0, 0);
}

function recoveredOriginalAction(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		cm.dispose();
	if (status == 0 && mode == 1) {
		if (cm.getQuestStatus(3034).equals(MapleQuestStatus.Status.COMPLETED)) {
			var selStr = "你帮了我很大的忙... 如果你有#b黑暗水晶母矿#k,我可以帮你提炼,每个只收 #b500000 金币#k."
				
			cm.sendYesNo(selStr);
		}
		else
		{
			cm.sendOk("走开,没看到我在思考么?");
			cm.dispose();
		}
	}
	else if (status == 1 && mode == 1) {
		cm.sendGetNumber("好吧,那么你想要我去做什么?",1,1,100);
	}
	else if (status == 2 && mode == 1) {
		var complete = true;
		var itemID = 4005004;
		var matID = 4004004;
		var matQty = 10;
		var cost = 500000;
		
		if (cm.getMeso() < cost * selection)
			{
				cm.sendOk("很抱歉,我可不会免费帮你锻造.")
			}
			else
			{
				var count = 0;
				var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(matID).iterator();
				while (iter.hasNext()) {
					count += iter.next().getQuantity();
				}
				if (count < matQty * selection)
					complete = false;
			}
			
			if (!complete) 
				cm.sendOk("我需要来水晶材料,你也不例外...");
			else {
				cm.gainItem(matID, -matQty * selection);	
				cm.gainMeso(-cost * selection);
				cm.gainItem(itemID, selection);
				cm.sendOk("好好利用它吧.");
			}
		cm.dispose();
	}
}



// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":4004,"name":"#p9000009# 航行回来，看上去很疲惫，但因为航行中得到的宝箱，显得精神很好。","startNpc":9330018,"endNpc":2032001}];
var recoveredMenu = null;
function start() {
    var reader = new java.util.Scanner(new java.io.File("scripts/npc/legacy.js"), "GBK");
    try {
        var factory = eval(String(reader.useDelimiter("(?!)").next()));
        recoveredMenu = factory(cm, recoveredDefs, recoveredOriginalStart, recoveredOriginalAction, "暂时没有可以接取或交付的任务。");
    } finally { reader.close(); }
    recoveredMenu.start();
}
function action(mode, type, selection) {
    if (recoveredMenu) recoveredMenu.action(mode, type, selection);
    else cm.dispose();
}
