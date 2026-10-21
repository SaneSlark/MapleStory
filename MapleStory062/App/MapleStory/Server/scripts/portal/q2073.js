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
 * @author Twdtwd
 * @purpose Warps to Utah's Pig Farm for the quest Camila's Gem.
 */
function enter(pi) {
	if(recoveryQuestStarted(pi, 2073)) {
		recoveryPortalSound(pi);
		pi.warp(900000000, 0);
		return true;
	} else {
                pi.playerMessage(5, "\u8fd9\u91cc\u662f\u79c1\u4eba\u9886\u5730\u3002\u53ea\u6709\u6267\u884c\u5361\u7c73\u62c9\u4ea4\u4ed8\u7684\u4efb\u52a1\u65f6\u624d\u80fd\u8fdb\u5165\u3002");
                return false;
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
