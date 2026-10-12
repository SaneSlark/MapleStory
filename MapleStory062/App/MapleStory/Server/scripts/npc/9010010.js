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

/* 	Cassandra
	Singapore and other places
	MADE BY Cody and AAron from FlowsionMS	
*/


function start() {
    qfresh = true;
    if (qQuestAction(1, 0, 0)) return;
	cm.sendOk ("你想让我告诉你，我的幸运水晶发现了什么吗?");
}

function action() {
    if (qQuestAction(arguments[0], arguments[1], arguments[2])) return;
	cm.dispose()
}
/* AUTO-QUEST-BEGIN */
var qstatus = -1;
var qact = -1;
var qid = -1;
var qactive = false;
var qfresh = false;
function qQuestAction(mode, type, selection) {
    if (!qactive) {
        if (!qfresh || mode != 1) return false;
        qfresh = false;
    var opts = '';
    var n = 0;
    if (cm.getQuestStatus(4454) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "邪灵灌１" + "#l"; n++; }
    if (cm.getQuestStatus(4455) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "邪灵灌2" + "#l"; n++; }
    if (cm.getQuestStatus(4456) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "邪灵灌3" + "#l"; n++; }
    if (cm.getQuestStatus(9682) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "日日活动　３月３号" + "#l"; n++; }
    if (cm.getQuestStatus(9683) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "日日活动　３月 １０号" + "#l"; n++; }
    if (cm.getQuestStatus(9684) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "日日活动　３月 １７号" + "#l"; n++; }
    if (cm.getQuestStatus(9685) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "日日活动　３月 24号" + "#l"; n++; }
    if (cm.getQuestStatus(9809) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "星缘的占卜" + "#l"; n++; }
    if (cm.getQuestStatus(9810) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "每天每天大活动 2月21日" + "#l"; n++; }
    if (cm.getQuestStatus(9811) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "每天每天大活动 2月22日" + "#l"; n++; }
    if (cm.getQuestStatus(9812) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "每天每天大活动 2月28日" + "#l"; n++; }
    if (cm.getQuestStatus(9813) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "每天每天大活动 3月1日" + "#l"; n++; }
    if (cm.getQuestStatus(9814) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "每天每天大活动 3月7日" + "#l"; n++; }
    if (cm.getQuestStatus(9815) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "每天每天大活动 3月8日" + "#l"; n++; }
    if (cm.getQuestStatus(9816) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "每天每天大活动 3月14日" + "#l"; n++; }
    if (cm.getQuestStatus(9817) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "每天每天大活动 3月15日" + "#l"; n++; }
    if (cm.getQuestStatus(9920) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "假面绅士的邀请" + "#l"; n++; }
    if (cm.getQuestStatus(9950) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "海盗升级活动" + "#l"; n++; }
    if (cm.getQuestStatus(9951) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "他们的名字叫海盗" + "#l"; n++; }
    if (cm.getQuestStatus(9680) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9690) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? 2? 13?" + "#l"; n++; }
    if (cm.getQuestStatus(9691) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? 2? 14?" + "#l"; n++; }
    if (cm.getQuestStatus(9692) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? 2? 15?" + "#l"; n++; }
    if (cm.getQuestStatus(9693) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? 2? 16?" + "#l"; n++; }
    if (cm.getQuestStatus(9694) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? 2? 17?" + "#l"; n++; }
    if (cm.getQuestStatus(9695) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? 2? 18?" + "#l"; n++; }
    if (cm.getQuestStatus(9696) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? 2? 19?" + "#l"; n++; }
    if (cm.getQuestStatus(9697) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? 2? 20?" + "#l"; n++; }
    if (cm.getQuestStatus(9698) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? 2? 21?" + "#l"; n++; }
    if (cm.getQuestStatus(9699) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? 2? 22?" + "#l"; n++; }
    if (cm.getQuestStatus(9700) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? 2? 23?" + "#l"; n++; }
    if (cm.getQuestStatus(9701) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? 2? 24?" + "#l"; n++; }
    if (cm.getQuestStatus(9702) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? 2? 25?" + "#l"; n++; }
    if (cm.getQuestStatus(9703) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? 2? 26?" + "#l"; n++; }
    if (cm.getQuestStatus(9820) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ???? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9845) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "呼啸的白狼" + "#l"; n++; }
    if (cm.getQuestStatus(9860) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9878) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ?? ????" + "#l"; n++; }
    if (cm.getQuestStatus(9880) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "悬赏通缉：蜗牛王" + "#l"; n++; }
    if (cm.getQuestStatus(9881) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "悬赏通缉：木妖王" + "#l"; n++; }
    if (cm.getQuestStatus(9882) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "悬赏通缉：深林的毒森林矮人" + "#l"; n++; }
    if (cm.getQuestStatus(9883) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "悬赏通缉：肯德熊" + "#l"; n++; }
    if (cm.getQuestStatus(9884) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "悬赏通缉：艾利杰" + "#l"; n++; }
    if (cm.getQuestStatus(9885) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "悬赏通缉：灰狼雪人" + "#l"; n++; }
    if (cm.getQuestStatus(9887) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "星缘的礼物" + "#l"; n++; }
    if (cm.getQuestStatus(9890) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9891) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9892) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9893) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9900) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(9901) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ????" + "#l"; n++; }
    if (cm.getQuestStatus(9902) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ????" + "#l"; n++; }
    if (cm.getQuestStatus(9903) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ????" + "#l"; n++; }
    if (cm.getQuestStatus(9904) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ????" + "#l"; n++; }
    if (cm.getQuestStatus(9905) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ????" + "#l"; n++; }
    if (cm.getQuestStatus(9906) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ????" + "#l"; n++; }
    if (cm.getQuestStatus(9907) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ????" + "#l"; n++; }
    if (cm.getQuestStatus(9908) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ????" + "#l"; n++; }
    if (cm.getQuestStatus(9909) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ????" + "#l"; n++; }
    if (cm.getQuestStatus(9961) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ????" + "#l"; n++; }
    if (cm.getQuestStatus(9970) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ????" + "#l"; n++; }
    if (cm.getQuestStatus(10037) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??" + "#l"; n++; }
    if (cm.getQuestStatus(10039) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(10219) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??? ????" + "#l"; n++; }
    if (cm.getQuestStatus(9733) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "帮助高登爷爷！" + "#l"; n++; }
    if (cm.getQuestStatus(9734) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "帮助高登爷爷！！" + "#l"; n++; }
    if (cm.getQuestStatus(9984) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "剩余枫叶" + "#l"; n++; }
    if (cm.getQuestStatus(9985) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "制作枫叶糖浆" + "#l"; n++; }
    if (cm.getQuestStatus(10104) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "希纳斯之书 第1集" + "#l"; n++; }
    if (cm.getQuestStatus(10105) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "希纳斯之书第2集" + "#l"; n++; }
    if (cm.getQuestStatus(10106) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "希纳斯之书 第2集" + "#l"; n++; }
    if (n == 0) return false;
    qact = -1;
    cm.sendSimple("有什么我能帮你的吗?\r\n" + opts);
    qactive = true;
    return true;
    }
    if (mode != 1) { cm.dispose(); return true; }
    qstatus++;
    if (qstatus == 0) {
        var qt = "";
        var qi = -1;
        qact = -1;
        qid = -1;
        if (cm.getQuestStatus(4454) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4454; } }
        if (cm.getQuestStatus(4455) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4455; } }
        if (cm.getQuestStatus(4456) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4456; } }
        if (cm.getQuestStatus(9682) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9682; } }
        if (cm.getQuestStatus(9683) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9683; } }
        if (cm.getQuestStatus(9684) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9684; } }
        if (cm.getQuestStatus(9685) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9685; } }
        if (cm.getQuestStatus(9809) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9809; } }
        if (cm.getQuestStatus(9810) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9810; } }
        if (cm.getQuestStatus(9811) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9811; } }
        if (cm.getQuestStatus(9812) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9812; } }
        if (cm.getQuestStatus(9813) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9813; } }
        if (cm.getQuestStatus(9814) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9814; } }
        if (cm.getQuestStatus(9815) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9815; } }
        if (cm.getQuestStatus(9816) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9816; } }
        if (cm.getQuestStatus(9817) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9817; } }
        if (cm.getQuestStatus(9920) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9920; } }
        if (cm.getQuestStatus(9950) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9950; } }
        if (cm.getQuestStatus(9951) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9951; } }
        if (cm.getQuestStatus(9680) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9680; } }
        if (cm.getQuestStatus(9690) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9690; } }
        if (cm.getQuestStatus(9691) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9691; } }
        if (cm.getQuestStatus(9692) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9692; } }
        if (cm.getQuestStatus(9693) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9693; } }
        if (cm.getQuestStatus(9694) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9694; } }
        if (cm.getQuestStatus(9695) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9695; } }
        if (cm.getQuestStatus(9696) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9696; } }
        if (cm.getQuestStatus(9697) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9697; } }
        if (cm.getQuestStatus(9698) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9698; } }
        if (cm.getQuestStatus(9699) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9699; } }
        if (cm.getQuestStatus(9700) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9700; } }
        if (cm.getQuestStatus(9701) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9701; } }
        if (cm.getQuestStatus(9702) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9702; } }
        if (cm.getQuestStatus(9703) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9703; } }
        if (cm.getQuestStatus(9820) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9820; } }
        if (cm.getQuestStatus(9845) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9845; } }
        if (cm.getQuestStatus(9860) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9860; } }
        if (cm.getQuestStatus(9878) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9878; } }
        if (cm.getQuestStatus(9880) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9880; } }
        if (cm.getQuestStatus(9881) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9881; } }
        if (cm.getQuestStatus(9882) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9882; } }
        if (cm.getQuestStatus(9883) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9883; } }
        if (cm.getQuestStatus(9884) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9884; } }
        if (cm.getQuestStatus(9885) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9885; } }
        if (cm.getQuestStatus(9887) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9887; } }
        if (cm.getQuestStatus(9890) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9890; } }
        if (cm.getQuestStatus(9891) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9891; } }
        if (cm.getQuestStatus(9892) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9892; } }
        if (cm.getQuestStatus(9893) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9893; } }
        if (cm.getQuestStatus(9900) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9900; } }
        if (cm.getQuestStatus(9901) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9901; } }
        if (cm.getQuestStatus(9902) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9902; } }
        if (cm.getQuestStatus(9903) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9903; } }
        if (cm.getQuestStatus(9904) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9904; } }
        if (cm.getQuestStatus(9905) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9905; } }
        if (cm.getQuestStatus(9906) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9906; } }
        if (cm.getQuestStatus(9907) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9907; } }
        if (cm.getQuestStatus(9908) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9908; } }
        if (cm.getQuestStatus(9909) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9909; } }
        if (cm.getQuestStatus(9961) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9961; } }
        if (cm.getQuestStatus(9970) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9970; } }
        if (cm.getQuestStatus(10037) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10037; } }
        if (cm.getQuestStatus(10039) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10039; } }
        if (cm.getQuestStatus(10219) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10219; } }
        if (cm.getQuestStatus(9733) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9733; } }
        if (cm.getQuestStatus(9734) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9734; } }
        if (cm.getQuestStatus(9984) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9984; } }
        if (cm.getQuestStatus(9985) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9985; } }
        if (cm.getQuestStatus(10104) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10104; } }
        if (cm.getQuestStatus(10105) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10105; } }
        if (cm.getQuestStatus(10106) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10106; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 4454) qt = "水晶球的画面使得琦仙灵的脸色发青~ 很明显的,枫险世界将会有大灾难! 快来看看琦仙灵有什么话说~!";
        if (qid == 4455) qt = "在卡桑德拉要求下您已经成功恢复了一罐子。但是，只有琦仙灵知道如何使用它。没有多少时间了！赶快听听她有什么话要说！";
        if (qid == 4456) qt = "正义罐子充满了邪恶的幽灵，但是我总感到不安。唯一谁知道如何密封这个罐子的人是琦仙灵。让我们去请她。";
        if (qid == 9682) qt = "我有预感，见了#b#p9010010##k过后将会有好事发生．．．";
        if (qid == 9683) qt = "我有预感，见了#b#p9010010##k过后将会有好事发生．．．";
        if (qid == 9684) qt = "我有预感，见了#b#p9010010##k过后将会有好事发生．．．";
        if (qid == 9685) qt = "我有预感，见了#b#p9010010##k过后将会有好事发生．．．";
        if (qid == 9809) qt = "#b#p9310060##k为了纪念枫之岛诞生4周年，为冒险家们算命看运势……";
        if (qid == 9810) qt = "为了庆祝开学，#b#p9310060##k要发挥魔法……";
        if (qid == 9811) qt = "为了庆祝开学，#b#p9310060##k要发挥魔法……";
        if (qid == 9812) qt = "为了庆祝开学，#b#p9310060##k要发挥魔法……";
        if (qid == 9813) qt = "为了庆祝开学，#b#p9310060##k要发挥魔法……";
        if (qid == 9814) qt = "为了庆祝开学，#b#p9310060##k要发挥魔法……";
        if (qid == 9815) qt = "为了庆祝开学，#b#p9310060##k要发挥魔法……";
        if (qid == 9816) qt = "为了庆祝开学，#b#p9310060##k要发挥魔法……";
        if (qid == 9817) qt = "为了庆祝开学，#b#p9310060##k要发挥魔法……";
        if (qid == 9920) qt = "在枫之岛世界名气很大的#b#p9310060##k突然向我传话。会是什么事情呢？";
        if (qid == 9950) qt = "#b星缘#k为海盗们准备了一些礼物。";
        if (qid == 9951) qt = "枫之岛各地都有奇怪的人们。充满自信的脸庞和神奇的武器…从他们的身上隐隐约约能感觉到大海的气息，他们到底是什么人呢？去问问#b#p9310060##k吧。";
        if (qid == 9680) qt = "#b#p9010010##k? ??? ??? ????? ???..";
        if (qid == 9690) qt = "?. ?? ??? ?????";
        if (qid == 9691) qt = "?. ?? ??? ?????";
        if (qid == 9692) qt = "?. ?? ??? ?????";
        if (qid == 9693) qt = "?. ?? ??? ?????";
        if (qid == 9694) qt = "?. ?? ??? ?????";
        if (qid == 9695) qt = "?. ?? ??? ?????";
        if (qid == 9696) qt = "?. ?? ??? ?????";
        if (qid == 9697) qt = "?. ?? ??? ?????";
        if (qid == 9698) qt = "?. ?? ??? ?????";
        if (qid == 9699) qt = "?. ?? ??? ?????";
        if (qid == 9700) qt = "?. ?? ??? ?????";
        if (qid == 9701) qt = "?. ?? ??? ?????";
        if (qid == 9702) qt = "?. ?? ??? ?????";
        if (qid == 9703) qt = "?. ?? ??? ?????";
        if (qid == 9820) qt = "??. ?? ???? ??? ??? ?? ??? ??? ?? ???.";
        if (qid == 9845) qt = "#b#p2030001##k好像有事儿要说…… 点击头上的灯泡吧。";
        if (qid == 9860) qt = "#b#p9010010##k? ??? ??? ????? ???..";
        if (qid == 9878) qt = "??? ??? ?? ???? ??. ???? ??? ?? ?? ???, ??? ??? ?? ?? ?? ??? ?????? ?? ?? ??.";
        if (qid == 9880) qt = "听说#b星缘#k好像有事情要转告我，那现在就快去见见她好了。";
        if (qid == 9881) qt = "听说#b星缘#k好像有事情要转告我，那现在就快去见见她好了。";
        if (qid == 9882) qt = "听说#b星缘#k好像有事情要转告我，那现在就快去见见她好了。";
        if (qid == 9883) qt = "听说#b星缘#k好像有事情要转告我，那现在就快去见见她好了。";
        if (qid == 9884) qt = "听说#b星缘#k好像有事情要转告我，那现在就快去见见她好了。";
        if (qid == 9885) qt = "听说#b星缘#k好像有事情要转告我，那现在就快去见见她好了。";
        if (qid == 9887) qt = "9月 26日为止#b星缘#k每天会送一次礼物哦。";
        if (qid == 9890) qt = "#b#p9010010##k? ??? ??? ????? ???..";
        if (qid == 9891) qt = "#b#p9010010##k? ??? ??? ????? ???..";
        if (qid == 9892) qt = "#b#p9010010##k? ??? ??? ????? ???..";
        if (qid == 9893) qt = "#b#p9010010##k? ??? ??? ????? ???..";
        if (qid == 9900) qt = "#b????#k? ?? ??? ??? ???? ?? ??? ?? ??? ??.";
        if (qid == 9901) qt = "#b????#k? ??? ?? ??? ????? ???...";
        if (qid == 9902) qt = "#b????#k? ?? ?? ????...";
        if (qid == 9903) qt = "#b????#k?? ????? ??? ???...";
        if (qid == 9904) qt = "#b????#k?? ????? ??? ???...";
        if (qid == 9905) qt = "#b????#k? ?? ?? ????...";
        if (qid == 9906) qt = "#b????#k? ?? ?? ????...";
        if (qid == 9907) qt = "#b????#k? ?? ?? ????...";
        if (qid == 9908) qt = "#b????#k? ?? ?? ????...";
        if (qid == 9909) qt = "#b????#k? ?? ?? ????...";
        if (qid == 9961) qt = "#b????#k??? ??? ?? ??? ???? ???...";
        if (qid == 9970) qt = "#b#p9010010##k? ??? ??? ??? ??. ???? ??? ??.";
        if (qid == 10037) qt = "#p9001102#? ? ?? ???? ??? ??? ???? ??? ??? ?? ?? ?? ?? #p9010010#?? ?? ?? ???? #b#p9010010##k? ??? ??.";
        if (qid == 10039) qt = "#b????#k? ?? ??? ??? ???? ?? ??? ?? ??? ??.";
        if (qid == 10219) qt = "??? ?? ???? ??? ?? ????? ??? ??? ???... ?? ?? ?????? ? ??.";
        if (qid == 9733) qt = "星缘一副担心的表情。一定是有什么烦心的事情……去问问星缘是什么事情吧。";
        if (qid == 9734) qt = "星缘一副担心的表情。一定是有什么烦心的事情……去问问星缘是什么事情吧。";
        if (qid == 9984) qt = "我得马上去见#b#p9010010##k。听说她有关于冒险岛秋之祭典的特别消息要告诉我……";
        if (qid == 9985) qt = "我最好去找#p9010010#谈谈，如何提升#b#t01012098##k的效果。";
        if (qid == 10104) qt = "到底谁是神秘的黑暗魔法师… 还有希纳斯?";
        if (qid == 10105) qt = "是时候寻找希纳斯之书 第2集. 不知下一集的内容会写些什么.";
        if (qid == 10106) qt = "是时候寻找希纳斯之书 第3集. 不知下一集的内容会写些什么.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 4454) cm.completeQuest(4454);
            if (qid == 4455) cm.completeQuest(4455);
            if (qid == 4456) cm.completeQuest(4456);
            if (qid == 9682) cm.completeQuest(9682);
            if (qid == 9683) cm.completeQuest(9683);
            if (qid == 9684) cm.completeQuest(9684);
            if (qid == 9685) cm.completeQuest(9685);
            if (qid == 9809) cm.completeQuest(9809);
            if (qid == 9810) cm.completeQuest(9810);
            if (qid == 9811) cm.completeQuest(9811);
            if (qid == 9812) cm.completeQuest(9812);
            if (qid == 9813) cm.completeQuest(9813);
            if (qid == 9814) cm.completeQuest(9814);
            if (qid == 9815) cm.completeQuest(9815);
            if (qid == 9816) cm.completeQuest(9816);
            if (qid == 9817) cm.completeQuest(9817);
            if (qid == 9920) cm.completeQuest(9920);
            if (qid == 9950) cm.completeQuest(9950);
            if (qid == 9951) cm.completeQuest(9951);
            if (qid == 9680) cm.completeQuest(9680);
            if (qid == 9690) cm.completeQuest(9690);
            if (qid == 9691) cm.completeQuest(9691);
            if (qid == 9692) cm.completeQuest(9692);
            if (qid == 9693) cm.completeQuest(9693);
            if (qid == 9694) cm.completeQuest(9694);
            if (qid == 9695) cm.completeQuest(9695);
            if (qid == 9696) cm.completeQuest(9696);
            if (qid == 9697) cm.completeQuest(9697);
            if (qid == 9698) cm.completeQuest(9698);
            if (qid == 9699) cm.completeQuest(9699);
            if (qid == 9700) cm.completeQuest(9700);
            if (qid == 9701) cm.completeQuest(9701);
            if (qid == 9702) cm.completeQuest(9702);
            if (qid == 9703) cm.completeQuest(9703);
            if (qid == 9820) cm.completeQuest(9820);
            if (qid == 9845) cm.completeQuest(9845);
            if (qid == 9860) cm.completeQuest(9860);
            if (qid == 9878) cm.completeQuest(9878);
            if (qid == 9880) cm.completeQuest(9880);
            if (qid == 9881) cm.completeQuest(9881);
            if (qid == 9882) cm.completeQuest(9882);
            if (qid == 9883) cm.completeQuest(9883);
            if (qid == 9884) cm.completeQuest(9884);
            if (qid == 9885) cm.completeQuest(9885);
            if (qid == 9887) cm.completeQuest(9887);
            if (qid == 9890) cm.completeQuest(9890);
            if (qid == 9891) cm.completeQuest(9891);
            if (qid == 9892) cm.completeQuest(9892);
            if (qid == 9893) cm.completeQuest(9893);
            if (qid == 9900) cm.completeQuest(9900);
            if (qid == 9901) cm.completeQuest(9901);
            if (qid == 9902) cm.completeQuest(9902);
            if (qid == 9903) cm.completeQuest(9903);
            if (qid == 9904) cm.completeQuest(9904);
            if (qid == 9905) cm.completeQuest(9905);
            if (qid == 9906) cm.completeQuest(9906);
            if (qid == 9907) cm.completeQuest(9907);
            if (qid == 9908) cm.completeQuest(9908);
            if (qid == 9909) cm.completeQuest(9909);
            if (qid == 9961) cm.completeQuest(9961);
            if (qid == 9970) cm.completeQuest(9970);
            if (qid == 10037) cm.completeQuest(10037);
            if (qid == 10039) cm.completeQuest(10039);
            if (qid == 10219) cm.completeQuest(10219);
            if (qid == 9733) cm.completeQuest(9733);
            if (qid == 9734) cm.completeQuest(9734);
            if (qid == 9984) cm.completeQuest(9984);
            if (qid == 9985) cm.completeQuest(9985);
            if (qid == 10104) cm.completeQuest(10104);
            if (qid == 10105) cm.completeQuest(10105);
            if (qid == 10106) cm.completeQuest(10106);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
