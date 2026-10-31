var chat;
var finished = false;
var origin;

function start()
{
    chat = -1;
    finished = false;
    origin = cm.getMapId();
    action(1, 0, 0);
}

function action(action, type, selection)
{
    if (finished || cm.getMapId() != origin || action != 1) {
        finished = true;
        cm.dispose();
        return;
    }
    action == 1 ? chat++ : chat--;
    startChat(type, selection);
}

function startChat(type, selection)
{
    if (cm.getMapId() == 180000001) {
        if (chat == 0)
            cm.sendYesNo("你想离开这里吗？");
        else if (chat == 1) {
            finished = true;
            cm.warp(100000000);
            cm.dispose();
        }
    } else {
        if (chat == 0)
            cm.sendSimple("我可以送你到允许丢弃不可交易物品的地图。\r\n#L0#我要前往#l\r\n#L1#以后再来#l");
        else if (chat == 1) {
            switch (selection) {
                case 1:
                    cm.sendOk("好的，下次再见。");
                    finished = true;
                    cm.dispose();
                    break;
                case 0:
                    cm.sendGetText("请输入伙伴名称：\r\n");
                    break;
                default:
                    finished = true;
                    cm.dispose();
            }
        } else if (chat == 2) {
            finished = true;
            if (cm.getPlayerCount(180000001) < 1) {
                if (cm.getPlayer().getClient().getChannelServer().getPlayerStorage().getCharacterByName(cm.getText()) != null) {
                    if (String(cm.getText()) != String(cm.getPlayer().getName())) {
                        if (cm.getPlayer().getClient().getChannelServer().getPlayerStorage().getCharacterByName(cm.getText()).getMapId() == cm.getMapId()) {
                            cm.warp(180000001);
                            cm.warpByName(180000001, cm.getText());
                            cm.mapChangeTimer(180000001, 100000000, 120, false);
                        } else {
                            cm.sendOk("你们必须在同一张地图。");
                        }
                    } else {
                        cm.sendOk("不能输入自己的名称。");
                    }
                } else {
                    cm.sendOk("玩家不存在，或不在同一频道。");
                }
            } else {
                cm.sendOk("已有其他玩家使用这张地图。");
            }
            cm.dispose();
        }
    }
}