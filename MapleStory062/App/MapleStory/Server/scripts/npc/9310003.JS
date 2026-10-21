
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
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.
You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
*/
/* Straw Hat Snowman
Happyville Tree NPC by Mercury of Mercury MapleStory
*/
function start() {
cm.sendSimple ("#e#d您想进入#r“黑轮Boss王”#d的关卡吗?\r\n       请在地图中打死超级怪物,获得通关物品!\r\n#n#b \r\n#b#e请选择你要去的地方：\r\n          #r#L0# 我错了,我要离开!#l \r\n\r\n 进入：\r\n#L3##gTo #n#b#e 可乐黑海豹之地—#r需要#i4031075# 10个. #l\r\n#L4##gTo #n#b#e 可乐白雪人之地—#r需要#i4031075# 15个. #l\r\n#L5##gTo #n#b#e 可乐冰乌龟之地—#r需要#i4031077# 15个. #l\r\n#L6##gTo #n#b#e 可乐黑石头之地—#r需要#i4031079# 20个. #l\r\n#L7##gTo #n#b#e 可乐白石头之地—#r需要#i4031080# 20个. #l\r\n#L8##gTo #n#b#e 可乐白蘑菇之地—#r需要#i4031081# 20个. #l\r\n#L9##gTo #n#b#e 可乐火可乐之地—#r需要#i4031082# 20个. #l\r\n#L10##gTo #n#b#e 可乐冰可乐之地—#r需要#i4031083# 20个. #l\r\n#L11##gTo #n#b#e 路边野狗之地—#r需要#i4031084# 20个. #l\r\n#L12##gTo #n#b#e 路边恶狗之地—#r需要#i4031085# 25个. #l\r\n#L13##gTo #n#b#e 凶狠野狗之地—#r需要#i4031086# 25个. #l\r\n#L14##gTo #n#b#e 游戏猴子之地—#r需要#i4031087# 25个. #l\r\n#L15##gTo #n#b#e 百事饮料之地—#r需要#i4031088# 30个. #l\r\n#L16##gTo #n#b#e 抽奖机器之地—#r需要#i4031091# 30个. #l\r\n#L17##gTo #n#b#e #r黑轮王#n之地—#r需要#i4031098# 50个. #l");
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
    if (cm.getChar().getLevel() < 0) {
        cm.sendOk("....");
        cm.dispose(); 
        }else if (cm.getChar().getLevel() > 255) {
        cm.sendOk("...");
        cm.dispose(); 
        }else{
        cm.warp(910000000, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 退出了Boss挑战活动!~");	
        cm.dispose();}
} else if (selection == 1) {
    if (cm.getChar().getLevel() < 10) {
	cm.sendOk("很抱歉,你的等级不够70级无法为传送，里面太危险了。");
        cm.dispose(); 
        }else if (cm.getChar().getLevel() > 200) {
        cm.sendOk("很抱歉,你的等级超过200级无法为你传送了，这是新人的体验地体哦");
        cm.dispose(); 
        }else{
        cm.warp(910000005, 0);
        cm.dispose();}
   } else if (selection == 200) { 
        if (cm.getChar().getNX() <= 1000) {
        cm.sendOk("抱歉你没有1000点卷无法进入"); 
        }else{ 
	cm.warp(910000012, 0);
        cm.gainNX(-1000);
	cm.dispose(); } 
} else if (selection == 3) {
	if(cm.haveItem(4031075,10)) {
	cm.gainItem(4031075, -10);
	cm.warp(910000004, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的第2关!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   } 
} else if (selection == 4) {
	if(cm.haveItem(4031076,15)) {
	cm.gainItem(4031076, -15);

	cm.warp(910000005, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的第3关!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   } 
} else if (selection == 5) {
	if(cm.haveItem(4031077,15)) {
	cm.gainItem(4031077, -15);

	cm.warp(910000006, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的第4关!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   } 
} else if (selection == 6) {
	if(cm.haveItem(4031079,20)) {
	cm.gainItem(4031079, -20);
	cm.warp(910000007, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的第4关!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   } 
} else if (selection == 7) {
	if(cm.haveItem(4031080,20)) {
	cm.gainItem(4031080, -20);
	cm.warp(910000008, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的第5关!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   } 
} else if (selection == 8) {
	if(cm.haveItem(4031081,20)) {
	cm.gainItem(4031081, -20);
	cm.warp(910000009, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的第6关!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   } 
} else if (selection == 9) {
	if(cm.haveItem(4031082,20)) {
	cm.gainItem(4031082, -20);
	cm.warp(910000010, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的第7关!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   } 
} else if (selection == 10) {
	if(cm.haveItem(4031083,20)) {
	cm.gainItem(4031083, -20);
	cm.warp(910000011, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的第8关!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   } 
} else if (selection == 11) {
	if(cm.haveItem(4031084,20)) {
	cm.gainItem(4031084, -20);
	cm.warp(910000012, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的第9关!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   } 
} else if (selection == 12) {
	if(cm.haveItem(4031085,25)) {
	cm.gainItem(4031085, -25);
	cm.warp(910000013, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的第10关!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   } 
} else if (selection == 13) {
	if(cm.haveItem(4031086,25)) {
	cm.gainItem(4031086, -25);
	cm.warp(910000014, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的第11关!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   } 
} else if (selection == 14) {
	if(cm.haveItem(4031087,25)) {
	cm.gainItem(4031087, -25);
	cm.warp(910000015, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的第12关!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   } 
} else if (selection == 15) {
	if(cm.haveItem(4031088,25)) {
	cm.gainItem(4031088, -25);
	cm.warp(910000016, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的第13关!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   } 
} else if (selection == 16) {
	if(cm.haveItem(4031091,30)) {
	cm.gainItem(4031091, -30);
	cm.warp(910000017, 0);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的第14关!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   } 
} else if (selection == 17) {
	if(cm.haveItem(4031098,50)) {
	cm.gainItem(4031098, -50);
	cm.warp(910000018, 0);
        cm.gainItem(4140103,1);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 进入了黑轮Boss挑战的老家!~");
	cm.dispose();
	} else {
	cm.sendOk("#e没东西你来干什么!?");
	cm.dispose();   
}
}
}
