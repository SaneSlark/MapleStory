//1052008 Treasure Chest

function start() {
	cm.sendNext("恭喜你完成第一关,\r\n这是本关的奖励#b#v5220010##k\r\n\r\n接下来让我送你去第二关吧！祝你好运！")
        cm.showEffect("quest/party/clear");
        cm.playSound("Party1/Clear");
        cm.gainItem(5220010,1);
        cm.serverNotice("「勇士公告」 勇士  "+ cm.getChar().getName() +" 凭着永不言弃的信念,终于征服了第一关！！！ "); 
}

function action() {
	cm.warp(105040310);
    cm.dispose()
}