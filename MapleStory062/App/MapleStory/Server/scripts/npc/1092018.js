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
-- Odin JavaScript ---------------------------------------------------------------------------
	Trash Can - Aboard the Nautilus
-- By ---------------------------------------------------------------------------------------------
	xQuasar
**/

var status;

function start() {
	status = -1;
	action(1,0,0);
}

function action(mode,type,selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status == -1) {
			status = 0;
			cm.sendNext("一封写到一半的信……也许很重要!要不要看一看?");
		} else if (status == 0) {
			if (cm.haveItem(4031839)) {
				cm.sendOk("我已经捡了一封了,应该不需要再捡第二封了.");
				cm.dispose();
			} else {
				cm.gainItem(4031839,1);
				cm.sendOk("勉强能看清上面的字……写的是凯琳.");
				cm.dispose();
			}
		}
	}
}
