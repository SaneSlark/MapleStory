var done=false,origin=-1;
function start(){origin=cm.getMapId();cm.sendYesNo("是否由队长带领同地图的队员进入盖福克斯挑战？");}
function action(mode, type, selection) {
    if(done)return;done=true;
    if(mode!=1 || origin!=674030100 || cm.getMapId()!=origin){cm.dispose();return;}

	
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("请找队长来找我谈话。");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 8) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 2 : 1);
		}	
		if (next && size >= 2) {
			var em = cm.getEventManager("MV");
			if (em == null) {
				cm.sendOk("目前副本出了一点状况，请稍后再尝试。");
			} else {
				if(String(em.getProperty("state"))!="0"){cm.sendOk("已有队伍正在挑战，请稍后再试。");cm.dispose();return;}
                em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                if(cm.getMapId()==674030000 && cm.getPlayer().getEventInstance()!=null)cm.removeAll(4032248);
			}
		} else {
			cm.sendOk("我需要2个8等以上的。");
		}
	    }
	cm.dispose();
}