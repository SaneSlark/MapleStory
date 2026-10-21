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
function enter (pi) {
    pi.showInstruction("\u6309 #e#b[\u2191]#k#n \u952e\u4f7f\u7528\u4f20\u9001\u95e8\uff0c\u524d\u5f80\u4e0b\u4e00\u5f20\u5730\u56fe\u3002", 230, 5);
    return true;
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
