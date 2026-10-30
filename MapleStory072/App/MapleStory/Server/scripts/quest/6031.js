/*
    This file is part of the HeavenMS MapleStory Server
    Copyleft (L) 2016 - 2019 RonanLana

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
// Chinese adaptation of HeavenMS course dialogue (AGPL-3.0).
// CMS072 Act already charges 10000 mesos at acceptance; no end charge.
var page = -1, closed = false;
var pages = ["我来给你讲解科学理论的基础。", "物品由物质构成，物质的组成和排列方式，决定了物品的各种性质。", "制造装备时，也要了解每种材料的性质，才能判断材料组合起来是否合适。", "科学最重要的是#b理解产生结果的过程#k，而不是盲目地反复尝试。", "记住这些原理，就能更好地理解制造的方法。这节课结束了。"];
function end(mode, type, selection) {
    if (closed) return;
    if (mode == -1) { closed = true; qm.dispose(); return; }
    var q = Packages.server.quest.MapleQuest.getInstance(6031);
    if (!q.canComplete(qm.getPlayer(), qm.getNpc())) { closed = true; qm.dispose(); return; }
    page += mode == 1 ? 1 : -1;
    if (page < 0) { closed = true; qm.dispose(); return; }
    if (page < pages.length) {
        if (page == 0) qm.sendNext(pages[page]);
        else qm.sendNextPrev(pages[page]);
        return;
    }
    closed = true;
    qm.completeQuestInScript(6031);
    qm.dispose();
}
