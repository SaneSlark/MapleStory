/*
    This file is part of the OdinMS Maple Story Server
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

/* Malady(9201028)
    Star Selling NPC, created by iFate, adapted/modified from Spinel's code.
     
*/

var status = 0;
var maps = Array(2070004, 2070005, 2070006);
var cost = Array(2000000, 15000000, 35000000);
var selectedMap = -1;

importPackage(net.sf.odinms.client);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("有色狼啊！！.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("看什么看，没见过美女么？！！");
        /*    
        } else if (status == 1) {
            cm.sendNextPrev("当然没见过啦。")
        } else if (status == 2) {
            var selStr = "Which stars would you like? By the way, if your eyes are retarded, Tobi = 2m, Steely = 15m, Ilbi = 35m.#b";
            for (var i = 0; i < maps.length; i++) {
                    selStr += "\r\n#L" + i + "##t" + maps[i] + "# (" + cost[i] + " meso)#l";
                }
            cm.sendSimple(selStr);
        } else if (status == 3) {
            if (cm.getMeso() < cost[selection]) {
                    cm.sendOk("你没带够钱.")
                    cm.dispose();
                } else {
                    cm.sendYesNo("像 #i" + maps[selection] + "#. 你真的要购买么?");
                    selectedMap = selection;
                        }
            }        
         else if (status == 4) {
            cm.gainMeso(-cost[selectedMap]);
            cm.gainItem(maps[selectedMap], 1);
            */
            cm.dispose();
        }
        }
    }  