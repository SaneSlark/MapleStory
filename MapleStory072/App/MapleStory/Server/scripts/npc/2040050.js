var done=false,origin=-1,choices=null;
function close(){done=true;cm.dispose();}
function showMenu(text){choices=[];var match,pattern=/#L(-?\d+)#/g;while((match=pattern.exec(text))!=null)choices.push(Number(match[1]));cm.sendSimple(text);}
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
	Eurek the Alchemist - Multiple Place
-- By ---------------------------------------------------------------------------------------------
	Information
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Information
---------------------------------------------------------------------------------------------------
**/

var status = 0;
var menu = "";
var set;
var makeitem;
var access = true;
var reqitem = new Array();
var cost = 4000;
var makeditem = new Array(4006000,4006001);
var reqset = new Array([[[4000046,20],[4000027,20],[4021001,1]],
						[[4000025,20],[4000049,20],[4021006,1]],
						[[4000129,15],[4000130,15],[4021002,1]],
						[[4000074,15],[4000057,15],[4021005,1]],
						[[4000054,7],[4000053,7],[4021003,1]]],
						
						[[[4000046,20],[4000027,20],[4011001,1]],
						[[4000014,20],[4000049,20],[4011003,1]],
						[[4000132,15],[4000128,15],[4011005,1]],
						[[4000074,15],[4000069,15],[4011002,1]],
						[[4000080,7],[4000079,7],[4011004,1]]]);

function start() {
    done=false;origin=cm.getMapId();choices=null;status=0;menu="";access=true;reqitem=[];
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if(done)return;
    if(mode!=1||cm.getMapId()!=origin){close();return;}
    if(choices!=null){var allowed=choices;choices=null;if(!isFinite(selection)||Math.floor(selection)!=selection||allowed.indexOf(selection)<0){close();return;}}

	if(mode == -1 || (mode == 0 && (status ==1 || status == 2))) {
		close();
		return;
	}
	if(mode == 0) {
		cm.sendNext("没有足够的材料? 不用担心,其实还有许多方法来获取.");
		close();
	}
	if(mode == 1) {
		status++;
	}
	if(status == 0) {
		cm.sendNext("好了,只要有白色粉末就行.");
	} else if(status == 1) {
		showMenu("正如你所看到的,我只是一个流浪炼金术士,即使如此?我还是可以帮你做一些事情.你要我帮你做什么?\r\n\r\n#L0##b制作魔法石#k#l\r\n#L1##b制作召唤石#k#l");
	} else if(status == 2) {
		if(!isFinite(selection)||Math.floor(selection)!=selection||selection<0||selection>=makeditem.length){close();return;}
        set = selection;
		makeitem = makeditem[set];
		for(i=0; i < reqset[set].length; i++) {
			menu += "\r\n#L"+i+"##b #t"+reqset[set][i][0][0]+"# + #t"+reqset[set][i][1][0]+"##k#l";
		}
		showMenu(" #b#t"+makeitem+"##k 只有我能制造,而且我有5种方法制作这些 #t"+makeitem+"#. 你要选取哪种呢?"+menu);
	} else if(status == 3) {
		if(!isFinite(selection)||Math.floor(selection)!=selection||selection<0||selection>=reqset[set].length){close();return;}
        set = reqset[set][selection];
		reqitem[0] = new Array(set[0][0],set[0][1]);
		reqitem[1] = new Array(set[1][0],set[1][1]);
		reqitem[2] = new Array(set[2][0],set[2][1]);
		menu = "";
		for(i=0; i < reqitem.length; i++) {
			menu += "\r\n#v"+reqitem[i][0]+"# #b"+reqitem[i][1]+" #t"+reqitem[i][0]+"##k";
		}
		menu += "\r\n#i4031138# #b"+cost+" 金币#k";
		cm.sendYesNo("制作 #b5个 #t"+makeitem+"##k需要如下材料.其中大多数都可以通过打猎获取,所以你只要努力下就可以获取,你现在就想要么?\r\n"+menu);
	} else if(status == 4) {
        done=true;access=true;
		for(i=0; i < reqitem.length; i++) {
			if(!cm.haveItem(reqitem[i][0],reqitem[i][1]))
				access = false;
		}
		if(access == false || !cm.canHold(makeitem,5) || cm.getMeso() < cost) {
			cm.sendNext("请确认你是否已集齐材料,或是你的包裹窗已满");
		} else {
			cm.sendOk("这里是 #b#t"+makeitem+"##k. 好了,如果你还需要我的帮助,你还可以来找我.");
			cm.gainItem(reqitem[0][0],-reqitem[0][1]);
			cm.gainItem(reqitem[1][0],-reqitem[1][1]);
			cm.gainItem(reqitem[2][0],-reqitem[2][1]);
			cm.gainMeso(-cost);
			cm.gainItem(makeitem,5);
		}
		close();
	}
}
