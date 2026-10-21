var testpq = Array(Array(9020000,"废气组队"),Array(2030013,"扎昆远征队"),Array(2083004,"黑龙远征队"),Array(2083004,"PB远征队"),Array(2083004,"家族对抗"),Array(2083004,"领地决判"));

function start() {
	var selStr = "你#b";
	for (var i = 0; i < testpq.length; i++) {
		selStr += "\r\n#L" + i + "#" + testpq[i][1];
		}
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    cm.dispose();
    if(cm.getPlayer().isGM()){
	cm.openNpc(testpq[selection][0]);
    } else {
        cm.sendSimple("这可不行.");
        cm.dispose();
    }
}