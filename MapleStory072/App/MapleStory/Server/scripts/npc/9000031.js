var a;
var destinyweapons;
var sel;

function start() {
    // destinyweapons = cm.getPlayer().getDestinyWeapons();
    // a = 0;
    // cm.sendSimple("Hello, what may I do for you?\r\n#L0#Tell me about the #bDestiny Weapons#k.#l\r\n#L1#What is the #bReward System#k?#l\r\n");
	cm.sendOk("此功能目前未开放，祝你游戏愉快！");
	cm.dispose();
	return;
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    a++;
    if (a == 1) {
        sel = selection;
    }
    if (sel == 0) {
        switch (a) {
            case 1:
                cm.sendSimple("#b命运武器#k会随着等级提升而增强属性，也可能获得原本没有的新属性。\r\n\r\n#b属性增强上限#k：\r\n#g体力和魔法力#k：150级以下500，否则1000。\r\n#g速度和跳跃#k：150级以下20，否则40。\r\n#g攻击和魔法攻击#k：150级以下150，否则200。\r\n#g其他属性#k：150级以下100，否则150。\r\n\r\n只能持有一把#b命运武器#k，暂未发现#r副手命运武器#k。\r\n#L0#怎样辨认命运武器？#l\r\n");
                break;
            case 2:
                cm.sendSimple("命运武器名单还在更新，外观与普通武器相同，但有工匠签名。唯一能制作它们的是传说中的#r暗影骑士#k。\r\n#L0#查看名单#l\r\n");
                break;
            case 3:
                var list = "当然可以。";
                for (var i = 0; i < destinyweapons.length; i++)
                    list += "\r\n#v" + destinyweapons[i] + "##t" + destinyweapons[i] + "#"
                list += "\r\n#L0#怎样获得命运武器？#l\r\n";
                cm.sendSimple(list);
                break;
            case 4:
                cm.sendSimple("命运武器很特殊，只能向#r暗影骑士#k购买。他位于#r自由市场#k。听说他曾用#i4251202#与黑色之翼交换制作材料。\r\n#L0#他接受什么作为报酬？#l\r\n");
                break;
            case 5:
                cm.sendSimple("他接受怪物携带的旧硬币，请去找他看看。\r\n#L0#好的，谢谢！#l\r\n");
                cm.dispose();
                break;
            default:
                cm.dispose();
                return;
        }
    } else {
        switch (sel) {
            case 1:
                switch (a) {
                    case 1:
                        cm.sendOk("奖励系统可以领取#d物品#k、#r抵用券#k、#b金币#k或#g经验#k。有奖励可领取时，会显示#fEffect/BasicEff.img/MainNotice/userReward/Default/0##b奖励界面#k，创建角色或升级可以获得奖励。");
                        cm.dispose();
                        break;
                    default:
                        cm.dispose();
                        return;
                }
                break;
            default:
                cm.dispose();
                return;
        }
    }
}