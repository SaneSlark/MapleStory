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

/* Bowman Job Instructor
	Hunter Job Advancement
	Hidden Street : Ant Tunnel For Bowman (108000100)
*/

var status = 0;
var instructorDone=false,instructorOrigin=-1;

function start() {
    instructorDone=false;instructorOrigin=cm.getMapId();
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if(instructorDone)return;
    if(mode!=1 || cm.getMapId()!=instructorOrigin || cm.getJob()!=300 || cm.getLevel()<30 || cm.getQuestStatus(100001)<1 || Math.floor(cm.getMapId()/100)!=1080001){instructorDone=true;cm.dispose();return;}
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			legacyComplete(100001);
			if (cm.getQuestStatus(100001) ==
				net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
				legacyStart(100002);
				cm.sendOk("你是一位真正的英雄! 请带上这个东西,这样雅典娜将会认可你所做的一切.");
			} else {
				cm.sendOk("你将需要为我收集 #b30 #t4031013##k,完成后带来给我,祝你好运.")
				cm.dispose();
			}
		} else if (status == 1) {
			instructorDone=true;cm.warp(106010000, 1);
			cm.dispose();
		}
	}
}	
// 062 stored these as custom quest actions; both available 062 databases have empty action tables.
// Recovered item flow from 079 original instructor scripts and CMS item/map resources.
var legacyRoutes=[
 [100000,300,1012100,1072002,1072006,4031010,108000100],
 [100003,100,1022000,1072000,1072004,4031008,108000300],
 [100006,200,1032001,1072001,1072005,4031009,108000200],
 [100009,400,1052001,1072003,1072007,4031011,108000400]
];
function legacyState(id,n){cm.getQuestRecord(id).setStatus(n);}
function legacyStart(id){
 for(var i=0;i<legacyRoutes.length;i++){
  var r=legacyRoutes[i],phase=id-r[0];if(phase<0||phase>2)continue;
  if(cm.getJob()!=r[1]||cm.getLevel()<30)return;
  if(phase==0 && cm.getNpc()==r[2]){
   if(cm.getQuestStatus(id)==2)return;
   if(!cm.haveItem(r[5])){if(!cm.canHold(r[5],1))return;cm.gainItem(r[5],1);}
   legacyState(id,1);
  }else if(phase==1 && cm.getNpc()==r[3] && cm.getQuestStatus(r[0])==2){
   if(cm.getQuestStatus(id)==0)legacyState(id,1);
  }else if(phase==2 && cm.getNpc()==r[4] && cm.getQuestStatus(r[0]+1)==2){
   if(cm.getQuestStatus(id)==0){if(!cm.canHold(4031012,1))return;cm.gainItem(4031012,1);legacyState(id,1);}
  }
  return;
 }
 if(id==100101 && cm.getLevel()>=70)legacyState(id,1);
}
function legacyComplete(id){
 for(var i=0;i<legacyRoutes.length;i++){
  var r=legacyRoutes[i],phase=id-r[0];if(phase<0||phase>2)continue;
  if(cm.getJob()!=r[1]||cm.getLevel()<30||cm.getQuestStatus(id)!=1)return;
  if(phase==0 && cm.getNpc()==r[3] && cm.haveItem(r[5],1)){
   cm.gainItem(r[5],-1);legacyState(id,2);
  }else if(phase==1 && cm.getNpc()==r[4] && Math.floor(cm.getMapId()/100)==Math.floor(r[6]/100) && cm.haveItem(4031013,30) && cm.canHold(4031012,1)){
   cm.gainItem(4031013,-30);cm.gainItem(4031012,1);legacyState(id,2);legacyState(r[0]+2,1);
  }else if(phase==2 && cm.getNpc()==r[2] && cm.haveItem(4031012,1)){
   cm.gainItem(4031012,-1);legacyState(id,2);
  }
  return;
 }
 if(id==100101 && cm.getQuestStatus(id)!=2 && cm.getLevel()>=70 && cm.haveItem(4031059,1) && cm.canHold(4031057,1)){
  cm.gainItem(4031059,-1);cm.gainItem(4031057,1);legacyState(id,2);
 }
}
