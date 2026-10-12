// Dialogue text: client String.wz/Npc.img; routing is a server compatibility repair.
var status = -1;
var finished = false;
var lines = ["这里常有怪物出现。你要小心！", "按下Ctrl键可以攻击怪物。", "按下Z键可以拣取地上的物品。", "如果遇到厉害的怪物，你最好和朋友们一起对它进行攻击。", "攻击怪物的关键是要掌握好时机。", "刚才你出来的地方是蘑菇村，在这个岛还有两个村落。就是彩虹村和南港。", "如果想去更广阔的地方，你就向东北方走吧。", "你上去吧。在那里你会见到罗宾。", "祝你旅途愉快！", "哟~", "你不知道该去哪里，我来告诉你吧", "哦~ 你见到罗宾了吗？"];
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
