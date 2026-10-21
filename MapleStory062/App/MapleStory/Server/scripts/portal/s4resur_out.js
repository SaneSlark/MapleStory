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
/**
 * @author Twdtwd (DiscoveryMS)
 * @purpose Warps to the Forgotten Passage and gives you the needed item for the resurrection.
 */
function enter(pi) {
    if(recoveryQuestStarted(pi, 6134)) {
        if(pi.canHold(4031448)) {
            pi.gainItem(4031448, 1);
            recoveryPortalSound(pi); pi.warp(220070400, 3);
        
            return true;
        } else {
            pi.playerMessage(5, "\u8bf7\u5728\u5176\u4ed6\u680f\u4e2d\u7559\u51fa\u7a7a\u4f4d\uff0c\u4ee5\u9886\u53d6\u4efb\u52a1\u9053\u5177\u3002");
            return false;
        }
    } else {
        recoveryPortalSound(pi); pi.warp(220070400, 3);
        return true;
    }
}

// Adapted for the bundled OdinMS runtime; retain the original quest/item gates.
function recoveryQuestStarted(pi, id) {
    return pi.getQuestStatus(id).equals(Packages.net.sf.odinms.client.MapleQuestStatus.Status.STARTED);
}
function recoveryQuestCompleted(pi, id) {
    return pi.getQuestStatus(id).equals(Packages.net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED);
}
function recoveryPortalSound(pi) {
    pi.getPlayer().getClient().getSession().write(Packages.net.sf.odinms.tools.MaplePacketCreator.playSound("Game/Portal"));
}
