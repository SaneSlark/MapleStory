// Dialogue text: client String.wz/Npc.img; routing is a server compatibility repair.
var status = -1;
var finished = false;
var lines = ["探险必须要有强健的体魄!", "一路辛苦了！", "这里是菇菇村的出口，可以到外面的世界。", "想继续～就和我聊聊吧！", "要小心喔！从这里出去，会遇到许多怪物。", "准备开始探险之旅了吗？", "现在开始只能靠自己了，要加油啊！", "我们兄弟都是教官，大哥罗杰，老三洛宾和我一起工作。", "哟呼~", "想知道罗杰和我是什么关系吗？哈哈！罗杰是我哥哥！"];
function start() { status = -1; finished = false; action(1, 0, 0); }
function action(mode, type, selection) {
    if (finished) return;
    if (mode == -1 || (mode == 0 && status <= 0)) { finished = true; cm.dispose(); return; }
    status += mode == 1 ? 1 : -1;
    if (status < lines.length) {
        if (status == 0) cm.sendNext(lines[status]); else cm.sendNextPrev(lines[status]);
    } else {
        finished = true;
        var map = cm.getPlayer().getMapId();
        if (map == 0 || map == 3) cm.warp(1, 0);
        cm.dispose();
    }
}
