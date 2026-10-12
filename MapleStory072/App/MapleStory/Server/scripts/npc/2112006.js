function action(mode, type, selection) {
    var em = cm.getEventManager("Romeo");
    if (em == null) {
        cm.sendOk("请稍后再试。");
        cm.dispose();
        return;
    }
    switch (cm.getPlayer().getMapId()) {
    case 261000011:
        cm.removeAll(4001130);
        cm.removeAll(4001131);
        cm.removeAll(4001132);
        cm.removeAll(4001133);
        cm.removeAll(4001134);
        cm.removeAll(4001135);
        if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
            cm.sendOk("队长必须在这里，请让他和我说话.");
        } else {
            var party = cm.getPlayer().getParty().getMembers();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var size = 0;
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if (ccPlayer == null || ccPlayer.getLevel() < 70 || ccPlayer.getLevel() > 200) {
                    next = false;
                    break;
                }
                size += (1);
            }
            if (next && (size >= 1)) {
                var prop = em.getProperty("state");
                if (prop.equals("0") || prop == null) {
                    em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                } else {
                    cm.sendOk("本频道已有其他队伍进入组队任务。");
                }
            } else {
                cm.sendOk("队员必须要70级以上.");
            }
        }
        break;
    case 926100000:
        cm.sendOk("请调查周围，在图书馆的资料中寻找通往实验室的入口。");
        break;
    case 926100001:
        cm.sendOk("请消灭所有怪物！我会跟在你后面。");
        break;
    case 926100100:
        cm.sendOk("这些烧杯有漏洞，必须把可疑的液体注满烧杯才能继续。");
        break;
    case 926100200:
        if (cm.haveItem(4001130, 1)) {
            cm.sendOk("再点我一次，才能过关！");
            cm.gainItem(4001130, -1);
            em.setProperty("stage", "1");
        } else if (cm.haveItem(4001134, 1)) {
            cm.gainItem(4001134, -1);
            cm.sendOk("太感谢你了，现在你们能进去了，中间的门。队长进入吧！");
            em.setProperty("stage4", "2");
			cm.getMap().getReactorByName("rnj3_out3").hitReactor(cm.getClient());
        } else if (cm.haveItem(4001135, 1) && cm.isLeader()) {
		cm.givePartyExp(400000);
	//	pi.warpParty(926100200);
	
            cm.gainItem(4001135, -1);
            cm.sendOk("太感谢你了，现在你们能进去了.");
            em.setProperty("stage4", "2");
            cm.getMap().getReactorByName("rnj3_out3").hitReactor(cm.getClient());
        } else {
            cm.sendOk("法师通过右边的门，获取通关材料交给队长，队长重新点我一次。");
        }
        break;
    case 926100300:
        cm.sendOk("每一位队员都必须到达实验室顶部。");
        break;
    case 926100400:
        cm.sendOk("准备好后，我们一起去救我的爱人吧。");
        break;
    case 926100401:
        cm.warpParty(926100500); //urete
        break;
    }
    cm.dispose();
}