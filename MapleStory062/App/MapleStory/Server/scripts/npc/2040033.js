/* [NPC]
    Neru
    Made by Bavilo of Ragezone Forums.
    Please don't release this anywhere else.
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
if (mode == 1)
status++;
else
status--;
if (status == 0 && cm.haveItem(4031128)) {
cm.sendNext("啊,那是我弟弟的信件! 可能是责备我的,认为我没有在认真工作... 额? 哦...你采纳了我弟弟的建议,和你宠物一起来到这里见我的吧! 额? 做得非常好!! 因为经过你的努力才来到我这里, 我将增加你和你宠物之间的亲密度作为奖励.");

} else if (status == 1) {
cm.sendOk ("你怎么认为? 难道你没有发现你和你宠物之间的亲密度提高了吗? 如果你有时间, 可以再次训练你的宠物... 当然, 需要经过我弟弟的同意才行.");
cm.gainItem ([4031128], [-1]);
cm.gainCloseness (6);
cm.dispose();
} 
if (status == 0 && !cm.haveItem(4031128)) {
cm.sendOk ("你没有我弟弟的信件!我弟弟叫我训练宠物但是... 因为我离他太远了, 得不到他的帮助... 恩, 请你先和我弟弟对话吧.");
cm.dispose();
}
}
}  
