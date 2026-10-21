/*
小伟制作的一个豪华NPC 希望你喜欢。
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
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple ("可爱的#r#e「 #h # 」#n#k 我能为你做什么？   ^_^   #b#e\b\r\n#L0#超级传送#l   #l#L1#世界排名#l#b   #L2#百货商店 #l\r\n\r\n\#l\n#L3#职业转职   #r#L4#会员专区   #L5##b随身仓库\r\n\r\n#L6#全满技能   #L7#重置属性   #L8#清理背包");
        } else if (status == 1) {
            switch(selection) {
                case 0: cm.openNpc(9040010); break;
                case 1: cm.openNpc(9040004); break;
                case 2: cm.openNpc(9100203); break;
                case 3: cm.openNpc(1052100); break;
                case 4: cm.openNpc(9310070); break;
                case 5: cm.openNpc(1032006); break;
                case 6: cm.openNpc(9201024); break;
                case 7: cm.openNpc(2003); break;
                case 8: cm.openNpc(9120003); break;
            }
        }
    }
}