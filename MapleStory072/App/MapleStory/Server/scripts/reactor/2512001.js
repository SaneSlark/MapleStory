function act() {
	var em = rm.getEventManager("Pirate");
	if (em != null) {
		rm.mapMessage(6, "一个箱子已被启动。");
		em.setProperty("stage5", parseInt(em.getProperty("stage5")) + 1);
	}
}