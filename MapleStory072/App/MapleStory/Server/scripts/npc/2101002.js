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

/* 	Eleska
	Ariant
	Created by Cody(shotdownsoul) - www.flowsionms.net
	
*/


function start() {
    qfresh = true;
    if (qQuestAction(1, 0, 0)) return;
	cm.sendOk ("不想遇到危险的话，就离我远点。");
}

function action() {
    if (qQuestAction(arguments[0], arguments[1], arguments[2])) return;
	cm.dispose()
}
/* AUTO-QUEST-BEGIN */
/* CMS client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[2124, 1, "沙子图团的补给品", ""], [2126, 1, "沙子图团的补给品！", ""], [3934, 0, "拥有短剑的女子", "……为什么这么盯着我呢？如果不转移视线的话，他会认为我在找茬吧…… 什么？沙子图团？你怎么知道这个名称？你是王妃的奸细吗？\\r\\n#L0##b#p2101000#告诉我墙壁的事，我是看到上面的字找到了您。#l"], [3935, 1, "呃拉斯卡的考验", "……你……拿到了#t4031574#。真是没有想到啊…… 了不起。你这种实力…… 完全有资格成为沙子图团员……"], [3936, 0, "呃拉斯卡的沙子图团", "我以为是外来人靠着稚气想进入沙子图团…… 对不起。是我低估你了。想进入沙子图团吗？那再考验你一次吧。"], [3936, 1, "呃拉斯卡的沙子图团", "拿来了两个#t4011008#啊。只能在阿里安特找到的宝石是非常坚硬，不好加工的。一旦加工就能长期保持形状。外表看起来和玻璃一样脆弱，但事实上比钻石还要坚硬。"]];
function qQuestAction(mode,type,selection) {
    if (!qactive) {
        if (!qfresh || mode!=1) return false;
        qfresh=false; qchoices=[];
        var menu="";
        for(var i=0;i<qdata.length;i++) {
            var d=qdata[i], state=cm.getQuestStatus(d[0]);
            var quest=Packages.server.quest.MapleQuest.getInstance(d[0]);
            if ((d[1]==0 && quest.canStart(cm.getPlayer(),cm.getNpc())) || (d[1]==1 && state==1)) {
                menu+="\r\n#L"+qchoices.length+"#"+(d[1]==0?"[接受] ":"[完成] ")+d[2]+"#l";
                qchoices.push(d);
            }
        }
        if(qchoices.length==0) return false;
        if(typeof qOrigAction=="function") menu+="\r\n#L"+qchoices.length+"#其他服务与对话#l";
        qactive=true; qstatus=0; cm.sendSimple(menu); return true;
    }
    if(mode!=1) { qactive=false; qfresh=false; cm.dispose(); return true; }
    if(qstatus==0) {
        if(selection==qchoices.length && typeof qOrigAction=="function") {qactive=false;return false;}
        if(selection<0 || selection>=qchoices.length) { cm.dispose(); return true; }
        qchosen=qchoices[selection]; qstatus=1;
        cm.sendYesNo(qchosen[3] || qchosen[2]); return true;
    }
    if(qstatus==1) {
        qstatus=2;
        var q=Packages.server.quest.MapleQuest.getInstance(qchosen[0]);
        if(qchosen[1]==0) {
            if(q.canStart(cm.getPlayer(),cm.getNpc())) { cm.startClientNpcQuest(qchosen[0]); return true; }
        } else {
            if(q.canComplete(cm.getPlayer(),null)) { cm.completeClientNpcQuest(qchosen[0]); return true; }
            else cm.sendOk("任务条件尚未完成，请查看任务栏中的物品和狩猎要求。");
        }
        cm.dispose(); return true;
    }
    cm.dispose(); return true;
}
/* AUTO-QUEST-END */
