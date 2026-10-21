/*
	Made By Coffee
	(MaxAllSkill)
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
			cm.sendYesNo("我可以帮助你把技能全部升级为满级哦(可能要消耗一段时间,要耐心等待哦)!你确定要使用吗?");
		}else if(status == 1){
			cm.getPlayer().maxAllSkills();
			cm.sendOk("成功咯~爽去吧哈哈");
			cm.dispose();
		}
	}
}