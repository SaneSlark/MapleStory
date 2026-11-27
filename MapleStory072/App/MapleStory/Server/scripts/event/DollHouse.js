/*
	This file is part of the odinms Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
					   Matthias Butz <matze@odinms.de>
					   Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
	Hak, travel between Orbis, Mu Lung and Herb Town
**/

importPackage(net.sf.odinms.world);
importPackage(net.sf.odinms.tools);

var returnMap;
var map;
var eim;
var timeoutTask = null;

function init() {
	em.setProperty("noEntry","false");
}

function playerEntry(eim, player) {
	returnMap = em.getChannelServer().getMapFactory().getMap(221024400);

	eim = em.getInstance("DollHouse");
	map = eim.getMapFactory().getMap(922000010);
	player.changeMap(map, map.getPortal(0));
	map.shuffleReactors();
	em.setProperty("noEntry","true");
	timeoutTask = em.schedule("timeOut", 600000, eim);
	player.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.getClock(600));
}

function playerExit(eim, player) {
    if (eim == null || em.getInstance("DollHouse") != eim) return;
	em.setProperty("noEntry","false");
	player.changeMap(returnMap, returnMap.getPortal(4));
	eim.unregisterPlayer(player);
	em.cancel();
	em.disposeInstance("DollHouse");
	eim.dispose();
}

function timeOut(instance) {
    // Ignore a late callback belonging to an earlier round.
    if (instance == null || em.getInstance("DollHouse") != instance) return;
    clear(instance);
}

function playerDisconnected(eim, player) {
    if (eim == null || em.getInstance("DollHouse") != eim) return 0;
	em.setProperty("noEntry","false");
	player.getMap().removePlayer(player);
	player.setMap(returnMap);
	eim.unregisterPlayer(player);
	em.cancel();
	em.disposeInstance("DollHouse");
	eim.dispose();
    return 0;
}

function clear(eim) {
    if (eim == null || em.getInstance("DollHouse") != eim) return;
    var players = eim.getPlayers();
    if (players == null || players.size() == 0) {
        em.setProperty("noEntry", "false");
        cancelSchedule();
        eim.dispose();
        return;
    }
	em.setProperty("noEntry","false");
	var player = eim.getPlayers().get(0);
	player.changeMap(returnMap, returnMap.getPortal(4));
	eim.unregisterPlayer(player);
	em.cancel();
	em.disposeInstance("DollHouse");
	eim.dispose();
}

function cancelSchedule() {
    if (timeoutTask != null) {
        timeoutTask.cancel(false);
        timeoutTask = null;
    }
}
