/* 
   ZREHY 打扮员
*/
var status = 0;
var beauty = 0;
var haircolor = Array();
var skin = Array(0, 1, 2, 3, 4);
var hair = Array(30000, 30020, 30030, 30040, 30050, 30060, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30570, 30580, 30590, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30700, 30710, 30720, 30780, 30790, 30800, 30810, 30730, 30760);
var hairnew = Array();
var face = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024);
var facenew = Array();
var colors = Array();

function start() {
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			//if(cm.getChar().isGM() == null) {
			//	cm.sendOk("你不是GMS!");
			//	cm.dispose();
			//} else {
				if(cm.getChar().getGender() == 0) {
					cm.sendSimple("嘿!我是为能到达这里的#r男性VIP会员#k服务的！你想有怎样的改变?\r\n#L0#肤色#l\r\n#L1#发型#l\r\n#L2#头发颜色#l\r\n#L3#眼睛#l\r\n#L4#眼睛颜色#l");
				}else {
					cm.sendOk("我能让#r男性VIP会员#k改头换面，如果你是女性的话就去找我的搭档!");
					cm.dispose();
				}
			//}
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 1;
				cm.sendStyle("选择你喜欢的?", skin);
			} else if (selection == 1) {
				beauty = 2;
				hairnew = Array();
				for(var i = 0; i < hair.length; i++) {
					hairnew.push(hair[i] + parseInt(cm.getChar().getHair()
 % 10));
				}
				cm.sendStyle("选择你喜欢的?", hairnew);
			} else if (selection == 2) {
				beauty = 3;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("选择你喜欢的?", haircolor);
			} else if (selection == 3) {
				beauty = 4;
				facenew = Array();
				for(var i = 0; i < face.length; i++) {
					facenew.push(face[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
				}
				cm.sendStyle("选择你喜欢的?", facenew);
			} else if (selection == 4) {
				beauty = 5;
				var current = cm.getChar().getFace()
 % 100 + 20000;
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
				cm.sendStyle("选择你喜欢的?", colors);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				cm.setSkin(skin[selection]);
			}
			if (beauty == 2){
				cm.setHair(hairnew[selection]);
			}
			if (beauty == 3){
				cm.setHair(haircolor[selection]);
			}
			if (beauty == 4){
				cm.setFace(facenew[selection]);
			}
			if (beauty == 5){
				cm.setFace(colors[selection]);
			}
		}
	}
}
function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    qOrigAction(mode, type, selection);
}

/* AUTO-QUEST-BEGIN */
/* CMS072 client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[28001, 0, "派对准备", "呼呼，看来你已经听说了派对消息了，难得举办这么有意思的派对当然很想参加是吧？ 但是要参加派对可是需要一些准备的，怎么样？能帮我做点事情不？"], [28001, 1, "派对准备", "呵呵，需要的材料都搜集过来啦，好，这些就够了。"], [9261, 1, "桉的信", "该给#m104000000#礼物都给了，#m101000000#和#m211000000#的好像也都送得差不多了，#m103000000#……的先放一放。然后是哪个村子了……咦？你是谁？这是什么信？"], [9262, 0, "克里夫给的礼物", "来，这个就是#b#p1012110##k想要的礼物了。我正在考虑要不要另外叫快递呢，正好你来了，就顺便带给他吧。要知道每年光是驯鹿的工资就够我受的了，再加上快递费用，我可就要破产了。"], [9263, 1, "克斌的冰水材料", "欢迎来到#m209000000#。希望你在这里过得愉快。啊？是受朋友之托来#m209000000#的？真是个不错的年轻人嘛。善良的孩子都应该得到礼物~"], [9264, 0, "克里夫给的冰水材料", "哈哈，这就是#m209000000#特制冰水材料！叫做#b#t04031428##k。在这上面洒满糖浆就是超级美味的特制冰水。不过我只能给你这么多了，要不然雪人们连站都站不住了……"], [9265, 1, "幸福村的过冬准备", "欢迎来到#m209000000#。就在这里度过一个愉快的圣诞节吧……啊？这是#t2120008#……？嗯？给圣诞鹿的礼物？"], [9266, 0, "寻找迷路的圣诞鹿", "呵呵……这家伙到底去哪里闲逛去了……肚子也该饿了吧……我说，年轻人，你有没有在附近看到一只#b圣诞鹿#k？鹿的鼻子是红色的，应该会很显眼的……你问我怎么回事？"], [9266, 1, "寻找迷路的圣诞鹿", ""], [9875, 1, "养圣诞树", ""]];
function qQuestAction(mode,type,selection) {
    if (!qactive) {
        if (!qfresh || mode!=1) return false;
        qfresh=false; qchoices=[];
        var menu="";
        for(var i=0;i<qdata.length;i++) {
            var d=qdata[i], state=cm.getQuestStatus(d[0]);
            var quest=Packages.server.quest.MapleQuest.getInstance(d[0]);
            if ((d[1]==0 && quest.canStart(cm.getPlayer(),cm.getNpc())) || (d[1]==1 && state==1)) {
                menu+="\r\n#L"+qchoices.length+"#"+(d[1]==0?"[接受] ":"[完成] ")+d[2]+"#l";
                qchoices.push(d);
            }
        }
        if(qchoices.length==0) return false;
        if(typeof qOrigAction=="function") menu+="\r\n#L"+qchoices.length+"#其他服务与对话#l";
        qactive=true; qstatus=0; cm.sendSimple(menu); return true;
    }
    if(mode!=1) { qactive=false; qfresh=false; cm.dispose(); return true; }
    if(qstatus==0) {
        if(selection==qchoices.length && typeof qOrigAction=="function") {qactive=false;return false;}
        if(selection<0 || selection>=qchoices.length) { cm.dispose(); return true; }
        qchosen=qchoices[selection]; qstatus=1;
        cm.sendYesNo(qchosen[3] || qchosen[2]); return true;
    }
    if(qstatus==1) {
        qstatus=2;
        var q=Packages.server.quest.MapleQuest.getInstance(qchosen[0]);
        if(qchosen[1]==0) {
            if(q.canStart(cm.getPlayer(),cm.getNpc())) { cm.startClientNpcQuest(qchosen[0]); return true; }
        } else {
            if(q.canComplete(cm.getPlayer(),null)) { cm.completeClientNpcQuest(qchosen[0]); return true; }
            else cm.sendOk("任务条件尚未完成，请查看任务栏中的物品和狩猎要求。");
        }
        cm.dispose(); return true;
    }
    cm.dispose(); return true;
}
/* AUTO-QUEST-END */
