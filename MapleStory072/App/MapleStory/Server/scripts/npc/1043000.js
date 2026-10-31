//1043000 a pile of flowers花簇

function start() {
	cm.sendNext("恭喜你完成第三关,\r\n这是本关的奖励#b#v5220010##k\r\n\r\n接下来让我送你去第四关吧！祝你好运！")
        cm.showEffect(true,"quest/party/clear");
        cm.playSound(true,"Party1/Clear");
        cm.gainItem(5220010,1);
        cm.serverNotice("「勇士公告」 勇士  "+ cm.getChar().getName() +" 凭着永不言弃的信念,终于征服了第三关！！！ "); 
}

function action() {
	cm.warp(103000903,0);
    cm.dispose()
}