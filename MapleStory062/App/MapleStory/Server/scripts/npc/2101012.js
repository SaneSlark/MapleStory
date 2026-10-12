var status = 0;
var maps = new Array(670010200, 670010300, 670010301, 670010302, 670010400, 670010500);
var mapNames = new Array("瓦伦戴尔 : 瓦伦戴尔", "瓦伦戴尔 : 郊外I", "瓦伦戴尔 : 郊外II", "瓦伦戴尔 : 郊外III", "瓦伦戴尔 : 郊外IV", "瓦伦戴尔 : 郊外V");
var charges = new Array(10, 10, 10, 10, 10, 10);

var status = 0;
var selectedMap = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0) {
        var where = "嘿，叫我#b怪人#k就行了。只要10个金币，我就能带你去瓦伦戴尔及周边几乎所有地方！告诉我你想去哪儿，我这就送你过去。";
        for (var i = 0; i < maps.length; i++) {
            where += "#b\r\n#L" + i + "# " + mapNames[i] + " (" + charges[i] + " 金币)#l#k";
        }
        cm.sendSimple(where);
        status++;
    } else {
        if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
            cm.dispose();
        } else {
            if (status == 1) {
                cm.sendNext("好的，回头见！");
                selectedMap = selection;
                status++
            } else if (status == 2) {
                cm.gainMeso(-10);
                cm.warp(maps[selectedMap], 0);
                cm.changeMusic("Bgm14/HotDesert");
                cm.dispose();
            }
        }
    }
}

