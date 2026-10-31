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
var pages = ["你来听制造技术的实际应用课程了吗？那我们开始吧。", "先确定要制作的物品，再按配方收集材料，并运用科学和炼金术知识进行加工。", "不同的装备需要不同的制造原理。例如制作负重耳环，就要理解与重量有关的延展性理论。", "课程学费已经在接受任务时收取，这里不会再收费。听完三门课程后，再来参加制造技术的结业考核吧。"];
function end(mode, type, selection) {
    if (closed) return;
    if (mode == -1) { closed = true; qm.dispose(); return; }
    var q = Packages.server.quest.MapleQuest.getInstance(6032);
    if (!q.canComplete(qm.getPlayer(), qm.getNpc())) { closed = true; qm.dispose(); return; }
    page += mode == 1 ? 1 : -1;
    if (page < 0) { closed = true; qm.dispose(); return; }
    if (page < pages.length) {
        if (page == 0) qm.sendNext(pages[page]);
        else qm.sendNextPrev(pages[page]);
        return;
    }
    closed = true;
    qm.completeQuestInScript(6032);
    qm.dispose();
}
