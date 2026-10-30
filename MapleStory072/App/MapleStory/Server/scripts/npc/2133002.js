var done072=false,origin072=-1;
function start(){origin072=cm.getMapId();action(1,0,0);}
var status = -1;

function action(mode, type, selection) {
    if(done072)return;
    if(mode!=1||cm.getMapId()!=origin072||origin072<930000000||origin072>930000700){done072=true;cm.dispose();return;}

    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendYesNo("请问您想离开#r迷雾森林PQ#k？？");
    } else if (status == 1) {
	    cm.removeAll(4001163);
	    cm.removeAll(4001169);
	    cm.removeAll(2270004);
	done072=true;cm.warp(930000800,0);
	cm.dispose();
    }
}