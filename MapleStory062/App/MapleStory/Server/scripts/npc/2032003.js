//1052010 Treasure Chest宝箱

function start() {
	cm.sendNext("恭喜你完成第十关,\r\n这是本关的奖励#b#v5220010##k\r\n\r\n接下来让我送你去#r最后一关#k吧！祝你好运！")
        cm.showEffect("quest/party/clear");
        cm.playSound("Party1/Clear");
        cm.gainItem(5220010,4);
        cm.serverNotice("「勇士公告」 勇士  "+ cm.getChar().getName() +" 凭着永不言弃的信念,终于要挑战最后一关！！！ "); 
}

function action() {
	cm.warp(800040500,0);
    cm.dispose()
}