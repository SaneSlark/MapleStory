/*
   任务脚本 1036(end) - 罗宾的能力值问答
   客户端「正在进行中的任务」入口: Check.img/1036/1 endscript -> 本脚本 end()
   三题全对后 completeQuest(1036)
*/
var status = 0;
var q = 0;
var restart = false;

var answers = [1, 1, 3];

var stopTexts = [
    "答错。AP可以用来提高体魄和魔法力。请从第一题重新开始。",
    "答错。大多数职业在等级10转职，只有魔法师可以在等级8转职。为了当魔法师而把AP分到智力上的新手，前期升级会比较吃力。请从第一题重新开始。",
    "答错，答错！战士力量35、魔法师智力20、弓箭手敏捷25都是对的。飞侠的敏捷必须达到25才行！请从第一题重新开始。"
];

function start(mode, type, selection) {
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
        return;
    }
    if (restart) {
        restart = false;
        q = 0;
        status = 0;
    }
    if (status == 0) {
        status = 1;
        ask();
        return;
    }
    if (mode == 0) {
        qm.dispose();
        return;
    }
    if (q >= 0 && q < 3) {
        if (selection == answers[q]) {
            q++;
            if (q < 3) {
                ask();
            } else {
                qm.completeQuest(1036);
                qm.sendOk("完全正确！新手必须把敏捷提高到25才能转职为飞侠！啪，啪，啪！三题您全答对了。恭喜！看来您对AP、能力值和转职相当了解。我想您不会再为转职而困扰了。\r\n\r\n您应该在创建角色之前就想好要转职成哪个职业。一旦分配了AP，除非通过特殊手段就无法收回。请明智地分配，让角色如您所愿地成长。");
                qm.dispose();
            }
        } else {
            restart = true;
            qm.sendNext(stopTexts[q]);
        }
    } else {
        qm.dispose();
    }
}

function ask() {
    if (q == 0) {
        qm.sendSimple("您准备好了吧？那我开始了。第一题！每升一级，您就可以用#bAP#k提高#b力量、敏捷、智力和运气#k。请问能用AP提高#b体魄和魔法力#k吗？\r\n#b#L0#能。#l\r\n#L1#不能。#l");
    } else if (q == 1) {
        qm.sendSimple("答对！除了能力值之外，AP还能用来提高体魄和魔法力。试试第二题吧！到了一定等级，您就能从新手转职。通常新手必须达到等级10才能转职，但有一个职业在等级8就能转职。是哪个职业？\r\n#b#L0#战士#l\r\n#L1#魔法师#l\r\n#b#L2#弓箭手#l\r\n#b#L3#飞侠#l");
    } else if (q == 2) {
        qm.sendSimple("答对！魔法师可以在等级8转职。第三题！即使达到了转职等级，不满足条件也无法转职。另一个条件就是能力值要求。下面哪个职业的能力值要求是错的？\r\n#b#L0#战士 - 力量35#l\r\n#L1#魔法师 - 智力20#l\r\n#b#L2#弓箭手 - 敏捷25#l\r\n#b#L3#飞侠 - 敏捷20#l");
    }
}
