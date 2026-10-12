function enter(pi) {
    if (pi.getQuestStatus(6153) == 1) {
	if (!pi.haveItem(4031471)) {
	    if (pi.haveItem(4031475)) {
		var em = pi.getEventManager("4jberserk");
		if (em == null) {
		    pi.playerMessage("暂时无法进入，请稍后再试。" );
		} else {
		    em.startInstance(pi.getPlayer());
		    return true;
		}
	    // start event here
	    // if ( ret != 0 ) target.message( "Other character is on the quest currently. Please try again later." );
	    } else {
		pi.playerMessage("进入前需要持有遗忘的圣殿钥匙。");
	    }
	} else {
	    pi.playerMessage("你已经取得世易兰的盾牌。");
	}
    } else {
	pi.playerMessage("无法进入封印之地。");
    }
    return false;
}