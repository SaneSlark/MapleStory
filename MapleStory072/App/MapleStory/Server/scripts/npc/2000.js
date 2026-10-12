// Dialogue text: client String.wz/Npc.img; routing is a server compatibility repair.
var status = -1;
var finished = false;
var lines = ["打开道具栏，里面会有装备、消耗、装饰、其它、宠物的字段。", "捡取的物品会在背包中自动整理。怎样？方便吧？", "双击背包里的道具，就可以使用该道具。", "在背包中单击道具后，拖曳到物品窗口外，可以扔掉道具。", "如果背包满了就无法捡取新道具。可以把不用的道具扔掉或卖到商店去。", "可以把消耗品，拖曳至游戏接口右下方，指定在快捷键上。", "HP为「0」时，角色将会死掉，所以应该实时补充生命值。", "想知道探险的快捷方式吗？那就和我聊聊吧！", "双击对方就可以开始对话。"];
function start() { status = -1; finished = false; action(1, 0, 0); }
function action(mode, type, selection) {
    if (finished) return;
    if (mode == -1 || (mode == 0 && status <= 0)) { finished = true; cm.dispose(); return; }
    status += mode == 1 ? 1 : -1;
    if (status < lines.length) {
        if (status == 0) cm.sendNext(lines[status]); else cm.sendNextPrev(lines[status]);
    } else {
        finished = true;
        cm.dispose();
    }
}
