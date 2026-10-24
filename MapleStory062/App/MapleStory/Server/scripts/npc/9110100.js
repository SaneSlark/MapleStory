/* 
*活动脚本 
*Final by 颩白勺傳讠兑 
*/ 
var status = 0; 
  
function start() { 
status = -1; 
action(1, 0, 0); 
} 
  
function action(mode, type, selection) { 
if (mode == -1) { 
cm.dispose(); 
} else { 
if (mode == 0 && status == 0) { 
cm.dispose(); 
return; 
} 
if (mode == 1) 
status++; 
else 
status--; 
if (status == 0) { 
  
cm.sendSimple("#e传说#n--散落在世界各地的宝石,而宝石大多落入怪物手中,这些宝石聚合在一起将生成极其珍贵的#b星石#k,或许你能帮我: \r\n#L1# #b接受挑战#k "); 
} else if (status == 1) { 
if (selection == 1) { 
if (cm.haveItem(4021009, 13)) { 
cm.gainItem(4021009, -13);  
cm.gainItem(5220000, 10); 
cm.gainItem(5220010, 5); 
cm.gainItem(4110010, 2); 
cm.gainItem(2340000, 1); 
cm.gainItem(1122000, 1); 
cm.gainItem(2041200, 3); 
cm.gainItem(1112902, 1); 
cm.gainItem(5000033, 1); 
cm.gainItem(1902025, 1); 
cm.gainItem(1022047, 1); 
cm.gainItem(3010043, 1); 
cm.gainItem(1702211, 1); 
cm.gainItem(1042163, 1); 
cm.gainItem(1062076, 1); 
cm.gainItem(1102163, 1); 
cm.gainItem(1072279, 1);
cm.gainItem(5010022, 1); 
cm.gainItem(4290000, 1); 
cm.gainItem(1032063, 1); 
cm.gainItem(1002984, 1); 
cm.gainItem(1102215, 1); 
cm.gainItem(1002921, 1); 
cm.sendOk("#r想不到你真的能找到!! "); 
cm.dispose(); 
} else { 
cm.sendOk("#b从世界各地收集13颗#v4021009##r星石#b,\r\n我将会把家传的所有宝贝跟你交换\r\n#v5220000# #v5220010# #v4110010# #v2340000# #v1122000# #v2041200# #v3010043# #v5000033# #v1902025# #v1022047#  #v1702211# #v1002921#   #v1042163#   #v1062076#  #v1102163# #v1072279# \r\n#v1112902#  #v5010022#  #v4290000# #v1032063# #v1002984# #v1102215# "); 
cm.dispose(); 
} 
} else if (selection == 2) { 
if (cm.itemQuantity(4031225) >= 10) { 
if ((cm.haveItem(4005000, 1)) && (cm.haveItem(4005001)) && (cm.haveItem(4005002)) && (cm.haveItem(4005003))) { 
cm.sendOk("#r啊 这么快就搜集好了这些东西了我真是太感谢你咯 奖励管理员的飞吻吧  开玩笑的这些东西给你！ "); 
cm.dispose(); 
} 
  
} else { 
cm.sendOk("你已经帮过我很多了 去休息一会儿吧"); 
mode = 1; 
status = -1; 
} 
} else{ 
cm.sendOk("你还没有完成任务"); 
mode = 1; 
status = -1; 
} 
} 
} 
} 
