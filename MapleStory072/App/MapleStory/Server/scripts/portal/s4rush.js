function enter(pi) {
    if (pi.getQuestStatus(6110) == 1) {
	 if (pi.getParty() != null) {
	     if (!pi.isLeader()) {
		 pi.playerMessage("请由两名战士组成队伍，再由队长决定是否进入。" );
	     } else {
		 if (pi.getParty().getMembers().size < 2) {
		    pi.playerMessage("请组成两人队伍后再来进行任务。" );
		 } else {
		      if (!pi.isAllPartyMembersAllowedJob(1)) {
			  pi.playerMessage("无法进入：队伍必须由两名战士组成。");
		      } else {
			  var em = pi.getEventManager("4jrush");
			  if (em == null) {
			      pi.playerMessage("暂时无法进入，请稍后再试。" );
			  } else {
			      em.startInstance(pi.getParty(), pi.getMap());
			      return true;
			  }
		      }
		 }
	     }
	 } else {
	     pi.playerMessage(5, "你还没有队伍，请组队后再来挑战。");
	 }
    } else {
	pi.playerMessage("无法进入封印之地。");
    }
    return false;
}