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
// Exchange rules adapted from HeavenMS scripts/quest/3382.js (AGPL-3.0).
// Item IDs and NPC/prerequisites checked against CMS072 client exports.
var phase = 0, closed = false, reward = 0, count = 0;
function choice() {
    if (qm.haveItem(4001159, 25) && qm.haveItem(4001160, 25) && !qm.haveItem(1122010, 1, true, true)) return 1122010;
    if (qm.haveItem(4001159, 10) && qm.haveItem(4001160, 10)) return 2041212;
    return 0;
}
function end(mode, type, selection) {
    if (closed) return;
    if (mode != 1) { closed = true; qm.dispose(); return; }
    var q = Packages.server.quest.MapleQuest.getInstance(3382);
    if (!q.canComplete(qm.getPlayer(), qm.getNpc())) { closed = true; qm.dispose(); return; }
    if (phase == 0) {
        reward = choice(); count = reward == 1122010 ? 25 : 10;
        if (reward == 0) { closed = true; qm.sendOk("请至少带来10个#t4001159#和10个#t4001160#。如果各带来25个，而且还没有#t1122010#，就可以合成项链。"); qm.dispose(); return; }
        phase = 1;
        qm.sendYesNo("用#b" + count + "个#t4001159#和" + count + "个#t4001160##k合成#b#t" + reward + "##k，确定吗？");
        return;
    }
    closed = true;
    if (choice() != reward || !qm.canHold(reward, 1)) { qm.sendOk("材料发生了变化，或背包空间不足，请整理后再来。"); qm.dispose(); return; }
    qm.completeQuestInScript(3382);
    if (qm.getQuestStatus(3382) == 2) {
        qm.gainItem(4001159, -count); qm.gainItem(4001160, -count);
        qm.gainItem(reward, 1);
    }
    qm.dispose();
}
