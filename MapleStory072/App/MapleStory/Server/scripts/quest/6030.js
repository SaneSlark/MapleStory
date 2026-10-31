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
// CMS Act already charges 10000 mesos at acceptance; no end charge.
var page = -1, closed = false;
var pages = ["我来给你讲解炼金术的基础。", "科学可以帮助我们理解组成物品的各种材料，但仅有这些知识，还不足以制造物品。", "把材料组合成完整的物品，需要合适的方法。粗糙的加工可能损害材料原有的潜力。", "炼金术能够把各部分融合起来，尽量保留材料的性质，并减少浪费。熟练掌握后，就能更有效地制造物品。", "请记住炼金术的#b等价交换#k原则：物品不能凭空产生。听懂了吗？这节课到这里结束。"];
function end(mode, type, selection) {
    if (closed) return;
    if (mode == -1) { closed = true; qm.dispose(); return; }
    var q = Packages.server.quest.MapleQuest.getInstance(6030);
    if (!q.canComplete(qm.getPlayer(), qm.getNpc())) { closed = true; qm.dispose(); return; }
    page += mode == 1 ? 1 : -1;
    if (page < 0) { closed = true; qm.dispose(); return; }
    if (page < pages.length) {
        if (page == 0) qm.sendNext(pages[page]);
        else qm.sendNextPrev(pages[page]);
        return;
    }
    closed = true;
    qm.completeQuestInScript(6030);
    qm.dispose();
}
