/* 
 * This file is part of the odinms Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
 * @Author Stereo
 * 
 * Zakum Battle 
 */

var exitMap;
var minPlayers = 1;
var admissionLock=new java.util.concurrent.locks.ReentrantLock();
 
importPackage(net.sf.odinms.world);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server.maps);
importPackage(java.lang);

function init() {
        em.setProperty("shuffleReactors","false");
        em.setProperty("state","0");
}

function setup(existing) {
    if(!admissionLock.tryLock())throw "Zakum admission busy";
    var eim=null,created=false;
    try{
        exitMap=em.getMapFactory().getMap(211042300);
        if(existing!=null && typeof existing.getMapInstance=="function")eim=existing;
        else{
            if(em.getInstance("ZakumBattle")!=null || String(em.getProperty("state"))!="0")throw "Zakum occupied";
            if(em.getMapFactory().getMap(280030000).getCharactersSize()!=0)throw "Zakum map occupied";
            eim=em.newInstance("ZakumBattle");created=true;
        }
        var map=eim.setInstanceMap(280030000);if(map.getCharactersSize()==0)map.resetFully();
        eim.setProperty("canEnter","true");eim.setProperty("entryTimestamp",String(java.lang.System.currentTimeMillis()));
        em.setProperty("state","1");return eim;
    }catch(error){if(created&&eim!=null){eim.dispose();em.setProperty("state","0");}throw error;}
    finally{admissionLock.unlock();}
}

function playerEntry(eim,player) {
	var map = eim.getMapInstance(280030000); // Last Mission: Zakum's Altar
	player.changeMap(map,map.getPortal(0));
	if (exitMap == null)
		debug(eim,"出口地图未正确连接。");
}

function playerRevive(eim,player) {
	player.setHp(500);
	player.setStance(0);
	eim.unregisterPlayer(player);
	player.changeMap(exitMap, exitMap.getPortal(0));
	var party = eim.getPlayers();
	if (party.size() < minPlayers) {
		end(eim,"剩余玩家人数不足，战斗结束。");
	}
	return false;
}

function playerDead(eim,player) {
}

function playerDisconnected(eim,player) {
    // EventInstanceManager unregisters the disconnected player and disposes
    // the last-player instance after this numeric callback result.
    return 0;
}

function changedMap(eim,player,mapid) {
    if(mapid==280030000)return;
    eim.unregisterPlayer(player);
    if(eim.getPlayerCount()==0)eim.dispose();
}

function monsterValue(eim,mobId) { // potentially display time of death? does not seem to work
	if (mobId == 8800002) { // 3rd body
		var party = eim.getPlayers();
		var iter = party.iterator();
		while (iter.hasNext()) {
			var pl = iter.next();
			pl.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6,"恭喜击败扎昆！"));
		}
	}
	return -1;
}

function leftParty(eim,player) { // do nothing in Zakum
}
function disbandParty(eim) { // do nothing in Zakum
}

function playerExit(eim,player) {
	eim.unregisterPlayer(player);
	player.changeMap(exitMap,exitMap.getPortal(0));
        var party = eim.getPlayers();
        if (party.size() < minPlayers) { //not enough after someone left
                end(eim,"剩余玩家人数不足以继续，其余玩家将被传送出去。");
        }
}

function end(eim,msg) {
        var iter = eim.getPlayers().iterator();
        while (iter.hasNext()) {
                var player = iter.next();
                player.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6,msg));
		eim.unregisterPlayer(player);
		if (player != null)
                	player.changeMap(exitMap, exitMap.getPortal(0));
	}
	eim.dispose();
}

// for offline folk
function removePlayer(eim,player) {
	eim.unregisterPlayer(player);
	player.getMap().removePlayer(player);
	player.setMap(exitMap);
}

function clearPQ(eim) { // kinda a hack, this is used as the exit routine
	end(eim,"随着战斗的声音渐渐远去，你莫名地感到意犹未尽。");
}

function finish(eim) {
        var iter = eim.getPlayers().iterator();
        while (iter.hasNext()) {
		var player = iter.next();
		eim.unregisterPlayer(player);
                player.changeMap(exitMap, exitMap.getPortal(0));
	}
	eim.dispose();
}

function allMonstersDead(eim) { // nothing normally done with altar here
}

function cancelSchedule() { // no
}

function timeOut() { // possibly useful
}

function debug(eim,msg) {
        var iter = eim.getPlayers().iterator();
        while (iter.hasNext()) {
 		var player = iter.next();
 		player.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6,msg));
	}
}
