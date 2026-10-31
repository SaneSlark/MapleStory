var done=false,origin=-1,choices=null;
function close(){done=true;cm.dispose();}
function showMenu(text){choices=[];var match,pattern=/#L(-?\d+)#/g;while((match=pattern.exec(text))!=null)choices.push(Number(match[1]));cm.sendSimple(text);}
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

/* Shuri
	Warp NPC to Florina Beach (110000000)
	located in Orbis
*/

importPackage(net.sf.odinms.server.maps);

var status = 0;

function start() {
    done=false;origin=cm.getMapId();choices=null;
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if(done)return;
    if(mode!=1||cm.getMapId()!=origin){close();return;}
    if(choices!=null){var allowed=choices;choices=null;if(!isFinite(selection)||Math.floor(selection)!=selection||allowed.indexOf(selection)<0){close();return;}}

	if (mode == -1) {
		close();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("那么，再见.");
			close();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("我是这里的船长");
		} else if (status == 1) {
			cm.sendNextPrev("只需要1500金币,我就可以带你到黄金沙滩.")
		} else if (status == 2) {
			if (cm.getMeso() < 1500) {
				cm.sendOk("很抱歉，你没有足够的金币.")
				close();
			} else {
				cm.sendYesNo("我现在就带你去黄金沙滩? ");
			}
		} else if (status == 3) {
			done=true;
            if(cm.getMeso()<1500){cm.sendOk("金币不足，无法出发。");close();return;}
            cm.gainMeso(-1500);
			cm.getChar().saveLocation(SavedLocationType.FLORINA);
			cm.warp(110000000, 0);
			close();
		}
	}
}