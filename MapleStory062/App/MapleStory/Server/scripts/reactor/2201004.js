/*
	This file is part of the MrCoffee Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
					   Matthias Butz <matze@MrCoffee.de>
					   Jan Christian Meyer <vimes@MrCoffee.de>

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

/* @Author Lerk
 * 
 * 2201004.js: Papulatus Reactor: Performs the Papulatus commands
*/

function act(){
	rm.closeDoor(220080000); //activate the reactor at map 220080000 Ludibrium: Deep Inside the Clocktower
	rm.closePortal(220080000,"sp");//close the portal
	rm.mapMessage(5, "次元洞已被<碎裂次元的碎片>填满。");
	rm.changeMusic("Bgm09/TimeAttack");
	rm.spawnMonster(8500000, -410, -400);
	rm.createMapMonitor(1,220080000,"sp");
}
