//1063002 a pile of white flowers白花簇

function start() {
	cm.sendNext("#e你真的做到了，而我在你身上看到与其他人截然不同的精神，那是#r永不言弃#k的魂！至此献给你最高的荣誉\r\n\r\n#b#v5220010##k    #b#v2340000##k    #b#v1002140##k    #b#v1042003##k    #b#v1062007##k    #b#v1322013##k")
}

function action() {
        cm.showEffect("quest/party/clear");
        cm.playSound("Party1/Clear");
        cm.gainItem(5220010,5);
        cm.gainItem(2340000,1);
	cm.gainItem(1002140, 1);
        cm.gainItem(1042003, 1);
	cm.gainItem(1062007, 1);
	cm.gainItem(1322013, 1);
        cm.serverNotice("「勇士公告」 没有什么可以阻挡  "+ cm.getChar().getName() +" 的脚步, 经过11轮奋斗终于拿到传说中的GM装备  ！！ "); 
      cm.warp(910000000);
    cm.dispose()
}