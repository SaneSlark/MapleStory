// Dialogue text: client String.wz/Npc.img; routing is a server compatibility repair.
var status = -1;
var finished = false;
var lines = ["探险必须要有强健的体魄!", "一路辛苦了!", "这里是蘑菇村的出口，可以到外面的世界。", "每次升级都有5点能力点（AP）可以分配，按S键点击橙色箭头就可进行分配", "增加力量主要提高攻击力，是战士的关键属性；增加敏捷可以提高命中率和手技，也会适当增加攻击力和回避率，是弓箭手的关键属性；", "增加智力可以提高魔法攻击力、魔法防御力和手技，是魔法师关键属性；增加运气可以提高命中率、回避率以及手技，对所有职业都有益处，特别是飞侠。", "按Alt键－跳跃，用方向键→ ←－移动角色，Ctrl－攻击。", "左上角小地图说明：蓝点－地图跳转点、黄点－自己的位置、红点－其他玩家、绿点－NCP位置、橙色点－与你组队的玩家", "这里是蘑菇村的出口，可以到外面的世界。", "按W出现大地图：大地图中有一个跳动手指，它所指的地方就是你所在的方位"];
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
