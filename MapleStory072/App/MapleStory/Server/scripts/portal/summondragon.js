function enter(pi) {
    if (pi.haveItem(4001094)) {
	pi.getMap().getReactorByName("dragonBaby").hitReactor(pi.getClient());
	pi.getMap().getReactorByName("dragonBaby2").hitReactor(pi.getClient());
	pi.playerMessage(5, "安放在巢中的九灵龙的蛋发出了神秘的光芒，回到了它的巢中。");
	pi.gainItem(4001094, -1);
    }
}