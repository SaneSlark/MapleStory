function enter(pi) {
   var em = pi.getEventManager("HorntailBattle");

    if (em != null) {
	var prop = em.getProperty("preheadCheck");

	if (prop != null && prop.equals("2")) {
	    pi.mapMessage(6, "巨大的生物正在从洞穴深处逼近。")
	    em.setProperty("preheadCheck", "3");
	}
    }
}