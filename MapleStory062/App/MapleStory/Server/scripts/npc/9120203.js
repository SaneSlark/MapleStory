
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
cm.sendSimple ("#e#d您想进入#r“黑轮首领王”#d挑战冒险的最高首领吗？我不知道如何形容里面的恐怖.您最好要有心里准备。\r\n#r#L0##e 点击进入黑轮首领王的娱乐之地#l \r\n\r\n#r#L18#查看任何进入黑轮王的挑战#l \r\n\r\n#r#L19#查看黑轮首领王的战利品#l\r\n#n#b \r\n#b#e关卡列表：\r\n     #gLV. 100 #n#b#e 首领训练地1-可乐冰海豹之地 \r\n     #gLV. 100 #n#b#e 首领训练地2-可乐黑海豹之地  \r\n     #gLV. 100 #n#b#e 首领训练地3-可乐白雪人之地 \r\n     #gLV. 110 #n#b#e 首领训练地4-可乐冰乌龟之地 \r\n     #gLV. 110 #n#b#e 首领训练地5-可乐黑石头之地 \r\n     #gLV. 110 #n#b#e 首领训练地6-可乐白石头之地 \r\n     #gLV. 120 #n#b#e 首领训练地7-可乐白蘑菇之地 \r\n     #gLV. 120 #n#b#e 首领训练地8-百事火可乐之地 \r\n\r\n     #gLV. 120 #n#b#e 首领训练地9-百事冰可乐之地 \r\n     #gLV. 120 #n#b#e 首领训练地10-路边野狗之地\r\n     #gLV. 120 #n#b#e 首领训练地11-路边恶狗之地 \r\n     #gLV. 120 #n#b#e 首领训练地12-凶狠野狗之地 \r\n     #gLV. 130 #n#b#e 首领训练地13-游戏猴子之地 \r\n     #gLV. 130 #n#b#e 首领训练地14-游戏猴子之地 \r\n     #gLV. 130 #n#b#e 首领训练地15-百事饮料之地 \r\n     #gLV. 130 #n#b#e 首领训练地16-抽奖机器之地 \r\n     #gLV. 首领 #n#b#e 终结首领#g>>>>黑轮王<<<<#n \r\n");
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
        if (!cm.haveItem(4220019, 1)) {
                   cm.sendOk("#b没有入场卷#i4220019#你不能进入请通过#r导游#b领取工资.\r\n#r普通玩家可以进入首领第1关5次/天.\r\n#r贵宾1玩家可以进入首领第1关10次/天.\r\n#r贵宾2玩家可以进入首领第1关15次/天.\r\n#r贵宾3玩家可以进入首领第1关20次/天.");
        cm.dispose(); 
        }else{
        cm.warp(910000003, 0);
        cm.gainItem(4220019, -1)
cm.sendOk("恭喜你进入了第一关.你要做的,就是打倒这些怪物,获取通关物品!");
        cm.serverNotice("『首领公告』：玩家: "+ cm.getChar().getName() +" 开始了黑轮首领王之旅..进入了黑轮首领王的第一关！~");	
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
        if (cm.getChar().getNX() <= 1500) {
        cm.sendOk("抱歉你没有1500点卷无法进入"); 
        }else{ 
	cm.warp(910000013, 0);
        cm.gainNX(-1500);
	cm.dispose(); } 
} else if (selection == 4) {
        if (cm.getChar().getNX() <= 2000) {
        cm.sendOk("抱歉你没有2000点卷无法进入"); 
        }else{ 
	cm.warp(910000014, 0);
        cm.gainNX(-2000);
	cm.dispose(); } 
} else if (selection == 5) {
        if (cm.getChar().getNX() <= 2500) {
        cm.sendOk("抱歉你没有2500点卷无法进入"); 
        }else{ 
	cm.warp(910000015, 0);
        cm.gainNX(-2500);
	cm.dispose(); } 
} else if (selection == 6) {
        if (cm.getChar().getNX() <= 3000) {
        cm.sendOk("抱歉你没有3000点卷无法进入"); 
        }else{ 
	cm.warp(910000016, 0);
        cm.gainNX(-3000);
	cm.dispose(); } 
} else if (selection == 7) {
        if (cm.getChar().getNX() <= 3500) {
        cm.sendOk("抱歉你没有3500点卷无法进入"); 
        }else{ 
	cm.warp(910000017, 0);
        cm.gainNX(-03500);
	cm.dispose(); } 
} else if (selection == 8) {
        if (cm.getChar().getNX() <= 4000) {
        cm.sendOk("抱歉你没有4000点卷无法进入"); 
        }else{ 
	cm.warp(910000018, 0);
        cm.gainNX(-4000);
	cm.dispose(); } 
} else if (selection == 9) {
        if (cm.getChar().getNX() <= 4000) {
        cm.sendOk("抱歉你没有4000点卷无法进入"); 
        }else{ 
	cm.warp(910000019, 0);
        cm.gainNX(-4000);
	cm.dispose(); } 
} else if (selection == 10) {
        if (cm.getChar().getNX() <= 8000) {
        cm.sendOk("抱歉你没有8000点卷无法进入"); 
        }else{ 
	cm.warp(910000020, 0);
        cm.gainNX(-8000);
	cm.dispose(); } 
} else if (selection == 11) {
	if(cm.haveItem(2022282,1)) {
	cm.gainItem(2022282, -1);

	cm.warp(910000015, 0);
	cm.dispose();
	} else {
	cm.sendOk("#e您想进入#r恶魔广场#k包厢吗，您要给我1个#v2022282#.爪子在海底打鲨鱼也可以获得哦，如果您实在不想去打。您也可以在我们的网站购买哦");
	cm.dispose();   } 
} else if (selection == 12) {
	if(cm.haveItem(2022282,1)) {
	cm.gainItem(2022282, -1);

	cm.warp(910000016, 0);
	cm.dispose();
	} else {
	cm.sendOk("#e您想进入#r恶魔广场#k包厢吗，您要给我1个#v2022282#.爪子在海底打鲨鱼也可以获得哦，如果您实在不想去打。您也可以在我们的网站购买哦");
	cm.dispose();   } 
} else if (selection == 13) {
	if(cm.haveItem(2022282,1)) {
	cm.gainItem(2022282, -1);

	cm.warp(910000017, 0);
	cm.dispose();
	} else {
	cm.sendOk("#e您想进入#r恶魔广场#k包厢吗，您要给我1个#v2022282#.爪子在海底打鲨鱼也可以获得哦，如果您实在不想去打。您也可以在我们的网站购买哦");
	cm.dispose();   } 
} else if (selection == 14) {
	if(cm.haveItem(2022282,1)) {
	cm.gainItem(2022282, -1);

	cm.warp(910000018, 0);
	cm.dispose();
	} else {
	cm.sendOk("#e您想进入#r恶魔广场#k包厢吗，您要给我2个#v2022282#.爪子在海底打鲨鱼也可以获得哦，如果您实在不想去打。您也可以在我们的网站购买哦");
	cm.dispose();   } 
} else if (selection == 15) {
	if(cm.haveItem(2022282,2)) {
	cm.gainItem(2022282, -2);

	cm.warp(910000019, 0);
	cm.dispose();
	} else {
	cm.sendOk("#e您想进入#r恶魔广场#k包厢吗，您要给我2个#v2022282#.爪子在海底打鲨鱼也可以获得哦，如果您实在不想去打。您也可以在我们的网站购买哦");
	cm.dispose();   } 
} else if (selection == 16) {
	if(cm.haveItem(2022282,2)) {
	cm.gainItem(2022282, -2);

	cm.warp(910000020, 0);
	cm.dispose();
	} else {
	cm.sendOk("#e您想进入#r恶魔广场#k包厢吗，您要给我2个#v2022282#.爪子在海底打鲨鱼也可以获得哦，如果您实在不想去打。您也可以在我们的网站购买哦");
	cm.dispose();   } 
} else if (selection == 17) {
	if(cm.haveItem(2022282,2)) {
	cm.gainItem(2022282, -2);

	cm.warp(910000021, 0);
	cm.dispose();
	} else {
	cm.sendOk("#e您想进入#r恶魔广场#k包厢吗，您要给我2个#v2022282#.爪子在海底打鲨鱼也可以获得哦，如果您实在不想去打。您也可以在我们的网站购买哦");
	cm.dispose();   } 

} else if (selection == 18) {
        cm.sendOk("#e先通过我进入首领王的第一关\r\n打倒图内的超级怪物,获取通关物品.\r\n  与居民交换.进入下一关.(打倒首领有丰厚奖励哦!).\r\n\r\n\r\n#r普通玩家可以进入首领第1关5次/天.\r\n#r贵宾1玩家可以进入首领第1关10次/天.\r\n#r贵宾2玩家可以进入首领第1关15次/天.\r\n#r贵宾3玩家可以进入首领第1关20次/天.");
} else if (selection == 19) {
        cm.sendOk("#e黑轮首领王战利品:\r\n    #i1302063#燃烧的火焰刀\r\n    #i1382016#香菇\r\n    #i1302049#光线鞭子\r\n    #i1322051#七夕\r\n    #i1332054#闪电飞刀\r\n    #i1000025#绅士帽\r\n    #i1012071#巧克力雪糕\r\n    #i1032034#可乐耳环1\r\n    #i1122001#绿色蝶形领结\r\n    #i1122000#黑龙项环\r\n    #i1112300#钻石戒指\r\n             快去行动吧！");
	
}
}
