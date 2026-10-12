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

/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Chief Tatamo - Leafre(240000000)
-- By ---------------------------------------------------------------------------------------------
	Information
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Information
---------------------------------------------------------------------------------------------------
**/

var temp;
var cost;

function start() {
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
		return;
	}
	if(mode == 0 && (status == 0 || status == 1 || status == 2)) {
		cm.dispose();
		return;
	} else if(mode == 0) {
		cm.sendOk("请仔细考虑。做好决定之后，再来告诉我吧。");
		cm.dispose();
		return;
	}
	if(mode == 1) {
		status++;
	}
	if(status == 0) {
		cm.sendSimple("...有何吩咐?\r\n#L0##b购买魔法种子#k#l\r\n#L1##b别点#k#l");
	} else if(status == 1) {
		if(selection == 0) {
			cm.sendSimple("你看起来像是从外地来的吧,需要帮忙么#L0##b我有一些 #t4031346#.#k#l");
		} else {
			cm.sendNext("点了也白点...");
			cm.dispose();
		}
	} else if(status == 2) {
		cm.sendGetNumber("#b#t4031346##k 是很贵重物品,我不能就这样给你,当然我可以便宜点卖给你#b#t4031346##k 每个要 #b30,000 金币#k . 你准备买多少个?",0,0,99);
	} else if(status == 3) {
		if(selection == 0) {
			cm.sendOk("没有免费的午餐.");
			cm.dispose();
		} else {
			temp = selection;
			cost = temp * 30000;
			cm.sendYesNo("购买 #b"+temp+" 个#t4031346##k 需要 #b"+cost+" 金币#k. 你确定要购买吗?");
		}
	} else if(status == 4) {
		if(cm.getMeso() < cost || !cm.canHold(4031346)) {
			cm.sendOk("请检查包裹窗是否已满.");
		} else {
			cm.sendOk("欢迎下次光临~");
			cm.gainItem(4031346, temp);
			cm.gainMeso(-cost);
		}
		cm.dispose();
	}
}

function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    qOrigAction(mode, type, selection);
}

/* AUTO-QUEST-BEGIN */
/* CMS072 client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[2121, 1, "妖精森林的使命2", "呵呵呵~你是从哪里来的？为什么来找我？\\r\\n#L0##b是受汉斯的委托来找你的。他要我给你以前你向他拜托过的东西。"], [3243, 1, "玩具城的使命2", "呵呵呵。你是从哪里来了？为什么来找我?\\r\\n#L0##b我从玩具城来。玩具城为了与神木村建立友好关系送来了礼物。"], [3708, 1, "赤木", "你好像有话对我说，我有很多时间你慢慢讲。"], [3709, 0, "得到汉斯的助言1", "你有什么话要对我讲吗？ \\r\\n#L0# #b我从亚可那里得知龙林岔道口边的树木奇怪的都变成了赤色，您知道这件事情吗？#k"], [3710, 1, "得到汉斯的助言2", "汉斯怎么说？ \\r\\n#L0# #b他让我转交给您这封信。#k"], [3713, 0, "新势力", "我们刺猬族长期与龙族共存... 神木的守护者一直守护着我们，所以我们不需要费力气保护自己，并且一直很安逸地生活在这个草丛中。"], [6007, 0, "飞龙的香水瓶 ", "找我有什么事吗? \\r\\n#L0##b我是来买飞龙的香水瓶的.#k#l"], [6007, 1, "飞龙的香水瓶 ", "2000万金币准备好了么?"], [6150, 1, "伟大的战士世易兰", "在神木村有什么事情？"], [6151, 0, "世易兰的项链", "看到有人还记得世易兰，感到很高兴… 呵呵。你想知道什么？有什么想知道的，尽管问我。"], [6151, 1, "世易兰的项链", "嗯? 这就是世易兰的#o8180001#带的项链？让我瞧瞧。 …唔，记忆都模糊了咳，等等，让我仔细想想。"], [6152, 0, "唱歌的盾牌", "我想起来关于项链的事情,那个确实是世易兰给#o8180001#的项链。那个项链居然还在#o8180001#那，太神奇了… 呵呵，现在神木村没什么事情了是吧?"], [6300, 0, "卡勒塔的罪", "你看起来是人类中出类拔萃的人。如果没有#b坚强意志#k的话，也无法像现在一样强大的。但你知道吗？一般的妖精或侏儒从来不象人类一样，不管是强的还是弱的，都不会受到各种诱惑…?"], [6905, 0, "村长塔塔曼的提议", "从祭祀之林的使者那边听说了有关你的故事。你正在为四转而努力中,是真的么？"], [6905, 1, "村长塔塔曼的提议", "终于成功获得了#b#t4031348##k啊!"], [6915, 0, "村长塔塔曼的提议", "从祭祀之林的使者那边听说了有关你的故事。你正在为四转而努力中,是真的么？"], [6915, 1, "村长塔塔曼的提议", "终于成功获得了#b#t4031348##k啊!"], [6925, 0, "村长塔塔曼的提议", "从祭祀之林的使者那边听说了有关你的故事。你正在为四转而努力中,是真的么？"], [6925, 1, "村长塔塔曼的提议", "终于成功获得了#b#t4031348##k啊!"], [6935, 0, "村长塔塔曼的提议", "从祭祀之林的使者那边听说了有关你的故事。你正在为四转而努力中,是真的么？"], [6935, 1, "村长塔塔曼的提议", "终于成功获得了#b#t4031348##k啊!"], [6945, 0, "塔塔曼的提议", "生活在祭司之林里的祭祀大人听说了你的故事。听说你正在为四转转职而努力，是这样吗？"], [6945, 1, "塔塔曼的提议", "成功的找到了#b#t4031348##k啊！"], [7300, 0, "摩伊拉的行踪", "到底是怎么一回事呢？怎么都没办法与她联系…她是跑到哪里去了呢？真是令人纳闷啊…唉~\\r\\n#L0# #b你在等谁啊？#k"]];
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
