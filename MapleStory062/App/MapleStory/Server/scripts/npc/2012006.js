/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
					   Matthias Butz <matze@odinms.de>
					   Jan Christian Meyer <vimes@odinms.de>

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

/**
Platform Usher (In Orbis) 2012006
**/
importPackage(net.sf.odinms.client);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("下次再见.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {        // first interaction with NPC
			cm.sendNext("#w欢迎欢迎 #h #, 我是 #p2012006#.\r\n你没有忘记买票吧?");
		} else if (status == 1) {
			cm.sendSimple("#w你现在想做什么呢?\r\n\r\n#L0#我想去通往魔法密林的码头#l\r\n#L1#我想去通往玩具城的码头#l\r\n#L2#我想去飞往武陵的码头#l\r\n#L3#我想去通往神木村的码头#l\r\n#L4#我想去通往阿里安特的码头#l");
			status=1;
		} else if (status == 2) {
				if (selection == 0){
				        if (cm.haveItem(4031047)){	
				        	cm.sendNext("好的 #h #, 我将带你到魔法密林的码头。");
					status = 9;
				         }else{
					cm.sendOk("你身上没有到魔法密林的船票!");
					cm.dispose();
					return;
				         }		
				} 
				if (selection == 1){
				         if (cm.haveItem(4031074)){
					cm.sendNext("好的 #h #, 我将带你到通往玩具城的码头");
					status = 19;
				          }else{
					cm.sendOk("你身上没有到玩具城的船票!");
					cm.dispose();	 
					return;
				          }	
				}
				if (selection == 2){
			        	 cm.sendNext("好的 #h #, 我将带你到武陵的码头。");
			       	 status = 29;
				}	
				if (selection == 3){
				          if (cm.haveItem(4031331)){	
				        	 cm.sendNext("好的 #h #, 我将带你到通往神木村的码头。");
				       	 status = 39;
				          }else{
					  cm.sendOk("你身上没有到神木村的船票!");
					  cm.dispose();
					  return;
				          }	
				}
				if (selection == 4){
				          if (cm.haveItem(4031576)){	
				        	 cm.sendNext("好的 #h #, 我将带你到通往阿里安特的码头。");
				       	 status = 49;
				          }else{
					  cm.sendOk("你身上没有到阿里安特的船票!");
					  cm.dispose();
					  return;
				          }	
				}
		} else if(status == 10){
			cm.warp(200000110, 0);// Ellinia walkway
			cm.dispose();
		} else if (status==20){
			cm.warp(200000120, 0);// Ludi Walkway
			cm.dispose();
		} else if (status==30){
			cm.warp(200000140, 0);// Mu Lung Walkway
			cm.dispose();
		} else if (status==40){
			cm.warp(200000130, 0);// Leafre Walkway
			cm.dispose();
		} else if (status==50){
			cm.warp(200000151, 0);// Ariant Walkway
			cm.dispose();
		}
	}
}