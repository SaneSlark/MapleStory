function enter(pi) {
    if (pi.getQuestStatus(6132) == 1) {
	var em = pi.getEventManager("s4resurrection");
	if (em == null) {
	    pi.playerMessage("暂时无法进入，请稍后再试。" );
	} else { // 923000100
	    var prop = em.getProperty("started");
	    if (prop == null || prop.equals("false")) {
		em.startInstance(pi.getPlayer());
		return true;
	    } else {
		pi.playerMessage("已有其他玩家正在进行这个任务。");
	    }
	}
    } else {
	pi.playerMessage("无法进入封印之地。");
    }
    return false;
}