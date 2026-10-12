/* [NPC]
    Weaver
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
if (status == 0) {
cm.sendYesNo("这是一个能够训练你宠物的方法. 你只需要走过去, 你就可以很好的训练你的宠物. 如果你和你宠物之间的亲密度不高, 导致的结果是宠物不会明白很多关于你发出的指令... 那么, 你怎么考虑的? 是否打算训练一下你的宠物?");
} else if (status == 1 && cm.haveItem(4031128)) {
cm.sendOk ("很抱歉,你没有把信件交给我哥哥,继续加油吧!");
cm.dispose();
} 
if (status == 1 && !cm.haveItem(4031128)) {
cm.sendOk ("好的,这里是那封信. 如果你经过我哥哥那里,请帮我给他, 这样也能很好的训练你的宠物, 到地图最上方, 和我哥哥对话,并把信件交给他. 如果你能和你宠物很小心的话,完成本次任务也不是一件很困难的事情. 祝你们好运!");
cm.gainItem ([4031128], [1]);
cm.dispose();
}
}
}  
