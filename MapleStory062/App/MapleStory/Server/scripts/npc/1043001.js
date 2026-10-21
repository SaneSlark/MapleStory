//1043001 a pile of herbs草药丛 

function start() {
	cm.sendNext("恭喜你完成第六关,\r\n这是本关的奖励#b#v5220010##k\r\n\r\n接下来让我送你去第七关吧！祝你好运！")
        cm.showEffect("quest/party/clear");
        cm.playSound("Party1/Clear");
        cm.gainItem(5220010,2);
        cm.serverNotice("「勇士公告」 勇士  "+ cm.getChar().getName() +" 凭着永不言弃的信念,终于征服了第六关！！！ "); 
}

function action() {
	cm.warp(103000906,0);
    cm.dispose()
}