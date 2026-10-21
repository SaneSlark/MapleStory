/*
	This file is part of the OdinMS Maple Story Server
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

/* Hotel Bitch
   SleepyWood Sauna
*/

var wui = 0;
var cost = 1000;

function start() {
	cm.sendYesNo ("你好，我是林中之城的桑拿房接待员! 里面能快速回复HP，你是不是要进去享受#b蒸汽浴#k?");
}

function action(mode, type, selection) {
	if (mode == 0 || wui == 1) {	
        cm.sendOk ("什么，你出门没带钱包，再见!");
        cm.dispose();
	} else {
	wui = 1;
        cm.warp(105040401, 0);
        cm.dispose();	
	}
}
