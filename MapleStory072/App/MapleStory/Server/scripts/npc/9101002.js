// Dialogue text: client String.wz/Npc.img; routing is a server compatibility repair.
var status = -1;
var finished = false;
var lines = ["这里会有怪物出现，所以要格外小心！", "按下Ctrl键，就可以对怪物发动攻击。", "按Z键，就可检起怪物掉出的道具。", "如果遇到很强的怪物，需要大家同心协力来对抗!", "并且配合时间来发动攻击，才能比较容易打到敌人喔！", "刚刚离开的村庄是菇菇村，这岛里还有叫做枫叶村和枫之港的地方。", "若想要前往更宽广的地方，建议你往东北方向前进。", "你去那上面，应该可以见到罗宾。", "祝你好运喔！", "Yo~"];
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
