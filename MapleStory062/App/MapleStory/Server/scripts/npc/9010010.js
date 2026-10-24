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


function recoveredOriginalStart() {
    qfresh = true;
    if (qQuestAction(1, 0, 0)) return;
	cm.sendOk ("你想让我告诉你，我的幸运水晶发现了什么吗?");
}

function recoveredOriginalAction() {
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
    if (cm.getQuestStatus(9680) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5361\u6851\u5fb7\u62c9\u7684\u9b54\u6cd5" + "#l"; n++; }
    if (cm.getQuestStatus(9690) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u58f0\u6bcd\u6d4b\u9a8c 2 \u6708 13 \u65e5" + "#l"; n++; }
    if (cm.getQuestStatus(9691) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u58f0\u6bcd\u6d4b\u9a8c 2 \u6708 14 \u65e5" + "#l"; n++; }
    if (cm.getQuestStatus(9692) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u58f0\u6bcd\u6d4b\u9a8c 2 \u6708 15 \u65e5" + "#l"; n++; }
    if (cm.getQuestStatus(9693) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u58f0\u6bcd\u6d4b\u9a8c 2 \u6708 16 \u65e5" + "#l"; n++; }
    if (cm.getQuestStatus(9694) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u58f0\u6bcd\u6d4b\u9a8c 2 \u6708 17 \u65e5" + "#l"; n++; }
    if (cm.getQuestStatus(9695) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u58f0\u6bcd\u6d4b\u9a8c 2 \u6708 18 \u65e5" + "#l"; n++; }
    if (cm.getQuestStatus(9696) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u58f0\u6bcd\u6d4b\u9a8c 2 \u6708 19 \u65e5" + "#l"; n++; }
    if (cm.getQuestStatus(9697) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u58f0\u6bcd\u6d4b\u9a8c 2 \u6708 20 \u65e5" + "#l"; n++; }
    if (cm.getQuestStatus(9698) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u58f0\u6bcd\u6d4b\u9a8c 2 \u6708 21 \u65e5" + "#l"; n++; }
    if (cm.getQuestStatus(9699) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u58f0\u6bcd\u6d4b\u9a8c 2 \u6708 22 \u65e5" + "#l"; n++; }
    if (cm.getQuestStatus(9700) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u58f0\u6bcd\u6d4b\u9a8c 2 \u6708 23 \u65e5" + "#l"; n++; }
    if (cm.getQuestStatus(9701) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u58f0\u6bcd\u6d4b\u9a8c 2 \u6708 24 \u65e5" + "#l"; n++; }
    if (cm.getQuestStatus(9702) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u58f0\u6bcd\u6d4b\u9a8c 2 \u6708 25 \u65e5" + "#l"; n++; }
    if (cm.getQuestStatus(9703) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u58f0\u6bcd\u6d4b\u9a8c 2 \u6708 26 \u65e5" + "#l"; n++; }
    if (cm.getQuestStatus(9820) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5361\u6851\u5fb7\u62c9\u7684\u513f\u7ae5\u8282\u793c\u7269" + "#l"; n++; }
    if (cm.getQuestStatus(9845) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "呼啸的白狼" + "#l"; n++; }
    if (cm.getQuestStatus(9860) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5361\u6851\u5fb7\u62c9\u7684\u9b54\u6cd5" + "#l"; n++; }
    if (cm.getQuestStatus(9878) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u70bc\u91d1\u6751" + "#l"; n++; }
    if (cm.getQuestStatus(9880) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "悬赏通缉：蜗牛王" + "#l"; n++; }
    if (cm.getQuestStatus(9881) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "悬赏通缉：木妖王" + "#l"; n++; }
    if (cm.getQuestStatus(9882) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "悬赏通缉：深林的毒森林矮人" + "#l"; n++; }
    if (cm.getQuestStatus(9883) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "悬赏通缉：肯德熊" + "#l"; n++; }
    if (cm.getQuestStatus(9884) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "悬赏通缉：艾利杰" + "#l"; n++; }
    if (cm.getQuestStatus(9885) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "悬赏通缉：灰狼雪人" + "#l"; n++; }
    if (cm.getQuestStatus(9887) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "星缘的礼物" + "#l"; n++; }
    if (cm.getQuestStatus(9890) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5361\u6851\u5fb7\u62c9\u7684\u9b54\u6cd5" + "#l"; n++; }
    if (cm.getQuestStatus(9891) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5361\u6851\u5fb7\u62c9\u7684\u9b54\u6cd5" + "#l"; n++; }
    if (cm.getQuestStatus(9892) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5361\u6851\u5fb7\u62c9\u7684\u9b54\u6cd5" + "#l"; n++; }
    if (cm.getQuestStatus(9893) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5361\u6851\u5fb7\u62c9\u7684\u9b54\u6cd5" + "#l"; n++; }
    if (cm.getQuestStatus(9900) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4e2d\u79cb\u8282\u5feb\u4e50" + "#l"; n++; }
    if (cm.getQuestStatus(9901) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4e2d\u79cb\u58f0\u6bcd\u6d4b\u9a8c" + "#l"; n++; }
    if (cm.getQuestStatus(9902) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6218\u6597\u739b\u7459" + "#l"; n++; }
    if (cm.getQuestStatus(9903) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6446\u8131\u6811\u5996\u738b" + "#l"; n++; }
    if (cm.getQuestStatus(9904) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6d88\u706d\u514b\u6717\u56fd\u738b" + "#l"; n++; }
    if (cm.getQuestStatus(9905) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u9664\u6389\u4e5d\u5c3e\u72d0" + "#l"; n++; }
    if (cm.getQuestStatus(9906) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6d88\u706d\u6cf0\u4e91" + "#l"; n++; }
    if (cm.getQuestStatus(9907) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6d88\u706d\u5996\u602a\u7985\u5e08" + "#l"; n++; }
    if (cm.getQuestStatus(9908) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4ee5\u5229\u4e9a\u4ee5\u5229\u4e9a" + "#l"; n++; }
    if (cm.getQuestStatus(9909) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6d88\u9664\u96ea\u4eba" + "#l"; n++; }
    if (cm.getQuestStatus(9961) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u67e5\u770b\u65b0\u5e74\u8fd0\u52bf" + "#l"; n++; }
    if (cm.getQuestStatus(9970) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4f69\u8482\u7279\u7684\u7ef4\u4fee\u96f6\u4ef6" + "#l"; n++; }
    if (cm.getQuestStatus(10037) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5361\u6851\u5fb7\u62c9\u7684\u5e2e\u52a9" + "#l"; n++; }
    if (cm.getQuestStatus(10039) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4e2d\u79cb\u8282\u5feb\u4e50" + "#l"; n++; }
    if (cm.getQuestStatus(10219) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5361\u6851\u5fb7\u62c9\u7684\u7b2c\u4e8c\u4efd\u65b0\u5e74\u793c\u7269" + "#l"; n++; }
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
        if (qid == 9680) qt = (qact == 1 ? "用#b#p9010010##k魔法狩猎怪物时获得额外经验。" : "我终于做到了。听说你修炼了新魔法！我真的太棒了不是吗？");
        if (qid == 9690) qt = (qact == 1 ? "现在。那么，我们要解决这个问题吗？" : "哒哒～农历新年快到了吧？于是，卡桑德拉准备了一场特别的活动。你也想参加吗？");
        if (qid == 9691) qt = (qact == 1 ? "现在。那么，我们要解决这个问题吗？" : "哒哒～农历新年快到了吧？于是，卡桑德拉准备了一场特别的活动。你也想参加吗？");
        if (qid == 9692) qt = (qact == 1 ? "现在。那么，我们要解决这个问题吗？" : "哒哒～农历新年快到了吧？于是，卡桑德拉准备了一场特别的活动。你也想参加吗？");
        if (qid == 9693) qt = (qact == 1 ? "现在。那么，我们要解决这个问题吗？" : "哒哒～农历新年快到了吧？于是，卡桑德拉准备了一场特别的活动。你也想参加吗？");
        if (qid == 9694) qt = (qact == 1 ? "现在。那么，我们要解决这个问题吗？" : "你知道今天是什么日子吗？今天是喜鹊农历新年。明天是农历新年，所以今天是喜鹊农历新年。什么？幼稚？喜悦！  不管怎样，卡桑德拉已经为农历新年准备了一个活动。您想参加吗？");
        if (qid == 9695) qt = (qact == 1 ? "现在。那么，我们要解决这个问题吗？" : "喜鹊喜鹊过年是昨天~我们的过年是今天~~新年终于到了。我们为农历新年准备了一项活动。您想参加吗？");
        if (qid == 9696) qt = (qact == 1 ? "现在。那么，我们要解决这个问题吗？" : "春节假期你玩得开心吗？为了庆祝这个欢乐的农历新年，我们准备了一场有趣的活动。如何。您想参加吗？");
        if (qid == 9697) qt = (qact == 1 ? "现在。那么，我们要解决这个问题吗？" : "不幸的是，农历新年假期已经结束。新的一年你有没有做好计划呢？我希望你能坚持你的决心。真的吗！而为了庆祝农历新年，何不参加我准备的声母问答活动呢？");
        if (qid == 9698) qt = (qact == 1 ? "现在。那么，我们要解决这个问题吗？" : "您是否厌倦了新年决心？制定一个计划来参加我每天准备的声母测验怎么样？现在，我们开始声母问答活动吧？");
        if (qid == 9699) qt = (qact == 1 ? "现在。那么，我们要解决这个问题吗？" : "我们来了！ 卡珊德拉为庆祝农历新年准备的活动已经到来。如何？您想参加该活动吗？");
        if (qid == 9700) qt = (qact == 1 ? "现在。那么，我们要解决这个问题吗？" : "距离我为庆祝农历新年准备的首个声母问答活动只剩下几天了。请务必在剩余时间内参与并领取礼物。那么，你想参加声母问答活动吗？");
        if (qid == 9701) qt = (qact == 1 ? "现在。那么，我们要解决这个问题吗？" : "今天是一个快乐的星期六。农历新年已经过去一周了，你的新年愿望还没有实现吧？当然，我相信你会好好保护它的。那么，您准备好参加 卡珊德拉 的声母测验来庆祝农历新年了吗？");
        if (qid == 9702) qt = (qact == 1 ? "现在。那么，我们要解决这个问题吗？" : "哒哒~今天是快乐的周日！但遗憾的是，距离第一场声母问答活动只剩下一天了。今天和明天的活动你肯定会参加吧？");
        if (qid == 9703) qt = (qact == 1 ? "现在。那么，我们要解决这个问题吗？" : "准备庆祝农历新年的活动今天结束了吗？太悲伤了，不是吗？别太悲伤。未来还有更多好玩的活动等着你。现在，我们开始声母问答活动吧？");
        if (qid == 9820) qt = (qact == 1 ? "嘿。您已经收到邀请了吗？可能不太容易找到。" : "哦，我太疯狂了。为了庆祝今年再次到来的儿童节，健太邀请孩子们去水族馆动物园。");
        if (qid == 9845) qt = "#b#p2030001##k好像有事儿要说…… 点击头上的灯泡吧。";
        if (qid == 9860) qt = (qact == 1 ? "用#b#p9010010##k魔法狩猎怪物时获得额外经验。" : "你知道什么吗？只有我才能施展的特殊魔法。");
        if (qid == 9878) qt = (qact == 1 ? "到达炼金村。" : "好消息！市彦川的世界中发现了一个新村庄！那是一座隐藏已久的炼丹之村！你想了解炼金村吗？");
        if (qid == 9880) qt = "听说#b星缘#k好像有事情要转告我，那现在就快去见见她好了。";
        if (qid == 9881) qt = "听说#b星缘#k好像有事情要转告我，那现在就快去见见她好了。";
        if (qid == 9882) qt = "听说#b星缘#k好像有事情要转告我，那现在就快去见见她好了。";
        if (qid == 9883) qt = "听说#b星缘#k好像有事情要转告我，那现在就快去见见她好了。";
        if (qid == 9884) qt = "听说#b星缘#k好像有事情要转告我，那现在就快去见见她好了。";
        if (qid == 9885) qt = "听说#b星缘#k好像有事情要转告我，那现在就快去见见她好了。";
        if (qid == 9887) qt = "9月 26日为止#b星缘#k每天会送一次礼物哦。";
        if (qid == 9890) qt = (qact == 1 ? "用#b#p9010010##k魔法狩猎怪物时获得额外经验。" : "我终于做到了。听说你修炼了新魔法！我真的太棒了不是吗？");
        if (qid == 9891) qt = (qact == 1 ? "用#b#p9010010##k魔法狩猎怪物时获得额外经验。" : "我终于做到了。听说你修炼了新魔法！我真的太棒了不是吗？");
        if (qid == 9892) qt = (qact == 1 ? "用#b#p9010010##k魔法狩猎怪物时获得额外经验。" : "我终于做到了。听说你修炼了新魔法！我真的太棒了不是吗？");
        if (qid == 9893) qt = (qact == 1 ? "用#b#p9010010##k魔法狩猎怪物时获得额外经验。" : "我终于做到了。听说你修炼了新魔法！我真的太棒了不是吗？");
        if (qid == 9900) qt = (qact == 1 ? "#b 我收到了 卡珊德拉 #k 准备的礼物。他们说他们每天都会送礼物，直到 10 和 7..." : "你知道“不多不少，就像中秋节一样~”这句话吗？这位卡珊德拉也希望中秋的世界永远像中秋一样，她为#b#h0##k准备了一份美妙的礼物。现在，你愿意接受我的礼物吗？");
        if (qid == 9901) qt = (qact == 1 ? "据说，每天解决10越多，直到本月的3，你收到好礼物的机会就越高。" : "嗯...？你有什么事要做吗？啊，你是听说我要发布 #b 中秋声母测验 #k 才来这里的吗？呵呵。果然，关于卡珊德拉的故事的传闻很快就传开了~");
        if (qid == 9902) qt = (qact == 1 ? "#b 卡珊德拉 #k表示无法摆脱愤怒，并要求她每天删除#r 开口 #k，直到10 2月 21。" : "你知道可以实现愿望的彩虹色蜗牛壳吗？嘿嘿嘿……那不是实现愿望，这是把人变成蜗牛！如果你相信这些废话，你会受到严重伤害！  #b\\r#L0# 你曾经变成过蜗牛吗？ #k");
        if (qid == 9903) qt = (qact == 1 ? "#b 卡珊德拉 #k 说她无法平息愤怒，并要求她每天删除 #r 树妖王 #k，直到 10 二月 21。" : "啊~这可是大事啊……随着武者的能量逐渐减弱，整个红岛的力量正在失去平衡。都是树妖王的错...你了解树妖王吗？");
        if (qid == 9904) qt = (qact == 1 ? "#b 卡珊德拉 #k 每天都寻求帮助，直到 10/21。" : "啊！你是打败克朗王的正义英雄吗？！你是瑞尔、雷尔、罗尔梦想中的那个勇敢、美丽、正义、精彩、谦逊甚至贪婪的英雄吗？");
        if (qid == 9905) qt = (qact == 1 ? "#b 卡珊德拉 #k 每天都寻求帮助，直到 10/21。" : "嗯……你知道九尾狐的诅咒和怨恨一直跟着你吗？看来他们在监视你……你做了什么让九尾狐记恨的事吗？");
        if (qid == 9906) qt = (qact == 1 ? "#b 卡珊德拉 #k 每天都寻求帮助，直到 10/21。" : "泰润...天啊。诺宫的担忧似乎永无休止……我该怎么办……嗯？这是怎么回事？这是一个你知道了才会头疼的故事，但是你想听吗？啊？你是打败泰莲的人吗？");
        if (qid == 9907) qt = (qact == 1 ? "#b 卡珊德拉 #k 每天都寻求帮助，直到 10/21。" : "你听说过猫有九命吗？但看来妖猫的生命不止于此。你是什么意思？你知道……关于妖怪禅师的事。");
        if (qid == 9908) qt = (qact == 1 ? "#b 卡珊德拉 #k 每天都寻求帮助，直到 10/21。" : "嘿嘿！  #b#h0##k。你是不是忘记了什么？伊利亚睡着时说的话……我想她说过，因为有你这样的强大冒险者，所以她会安心睡觉……你真的忘记了吗？");
        if (qid == 9909) qt = (qact == 1 ? "#b 卡珊德拉 #k 每天都寻求帮助，直到 10/21。" : "什么样的人会让雪人生气？冰峰雪域山脉震动，发生山体滑坡怎么办？啊……这真是太真实了。我很尴尬。嗯？这是怎么回事？哦。现在想来，你才是平息雪人怒火的人。");
        if (qid == 9961) qt = (qact == 1 ? "#b 卡珊德拉 #k 解读你的新年运势。祝今年好运..." : "啊！  #b#h0#！ #k 你已经听到传闻了吗？是的，没错。迎接新的一年，让我来告诉你今年的运势吧。");
        if (qid == 9970) qt = (qact == 1 ? "我把获得的零件拿到了#b#p9010010##k。当收音机正常工作时，佩蒂特非常高兴。" : "谢谢你能来不久前，#p9010008#心爱的收音机坏了。其他的零件我都修好了，但最重要的是我修不了，因为我没有零件。  #p9010008#看起来很伤心……你能给他一些零件吗？");
        if (qid == 10037) qt = (qact == 1 ? "接过食物的#p9010010#笑容灿烂，从口袋里拿出了一张月亮照片。我捡到的照片片段不是别人，正是#p9010010#。我通过#p9010010#获得了三张照片片段之一。" : "嗯...您现在在找东西吗？但你甚至不知道该去哪里寻找？你怎么知道的？你当然知道，因为像你这样的人不止一个！这位对市川世界了如指掌的#p9010010#人的力量，就在这样的时候展现出来了？");
        if (qid == 10039) qt = (qact == 1 ? "我收到了 卡珊德拉 准备的礼物。  他们说从#b9月21日#k每天都会送礼物......" : "你知道“不多不少，就像中秋节一样~”这句话吗？这位卡珊德拉也希望中秋的世界永远像中秋一样，她为#b#h0##k准备了一份美妙的礼物。现在，你愿意接受我的礼物吗？");
        if (qid == 10219) qt = (qact == 1 ? "迎接新的一年，#b 卡珊德拉 #k 只需在当月 1 或 22 登录即可赠送礼物。" : "#b 卡珊德拉 #k准备的礼物是什么？");
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




// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":9350,"name":"新的心态，新的开始","startNpc":9010010,"endNpc":1032106},{"id":9351,"name":"新的开始，新的心！","startNpc":9010010,"endNpc":2071007},{"id":9352,"name":"新的开始，新的心！！","startNpc":9010010,"endNpc":2081004}];
var recoveredMenu = null;
function start() {
    var reader = new java.util.Scanner(new java.io.File("scripts/npc/legacy.js"), "GBK");
    try {
        var factory = eval(String(reader.useDelimiter("(?!)").next()));
        recoveredMenu = factory(cm, recoveredDefs, recoveredOriginalStart, recoveredOriginalAction, "暂时没有可以接取或交付的任务。");
    } finally { reader.close(); }
    recoveredMenu.start();
}
function action(mode, type, selection) {
    if (recoveredMenu) recoveredMenu.action(mode, type, selection);
    else cm.dispose();
}
