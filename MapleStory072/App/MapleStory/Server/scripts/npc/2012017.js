// Native CMS quest handoffs; Check/Act retain prerequisites and rewards.
function start() { qfresh=true; if (!qQuestAction(1,0,0)) { cm.sendOk("请先查看任务栏中的任务说明。准备好后，再来找我吧。"); cm.dispose(); } }
function action(mode,type,selection) { qQuestAction(mode,type,selection); }
/* AUTO-QUEST-BEGIN */
/* CMS client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[3065, 1, "秀兹的兴趣", "木偶都弄到了吗？让我看看…状态良好，数量也正确… 呃呃…看来你很努力哦，那这次的事情我就睁一只眼闭一只眼了。"], [3065, 0, "秀兹的兴趣", "啊！不要碰我的宝箱！你是谁？怎么进来的。这里所有的东西都是我的，不许碰！…这些都是我的宝物，你知道我为了收集这些费了多少力气吗？\\n啊啊，你脚下的是！！那是不久前好不容易才得到的小海豹木偶！！你要怎么赔我！！"], [3066, 1, "秀兹的奇怪发明", "让我看看…材料好像都弄来了哦。看你这么热心找材料，确实很想要我做的东西吧？呼呼呼… 还挺识货的，算你有眼光。等一下…"], [3066, 0, "秀兹的奇怪发明", "傻乎乎的站在那里干什么？哦，应该是来找我的吧。呼呼呼… 难道我这完美的发明已经传开了？干嘛一直站在那里？你不是来参观我的发明的吗？一直站在那能看到什么？#b\\n#L0#哦不…我只是… 并不是一定要看那个东西…#I"], [3068, 1, "秀兹的研究材料", "你来得正好! 之前剩下的一些研究材料都用光了，我正在烦恼呢。"], [3068, 0, "秀兹的研究材料", "呃，原来是你啊？好久不见，我做给你的东西用的怎么样了？不错吧。每次用它的时候都会对我这个天才发明的作品感到佩服吧？哈哈哈哈"], [3101, 1, "秀兹的新发明", "你!你把 #t4000158#和 #t4000159#带来做什么! 现在就卖掉! 还能值几个钱。。。 什么？是受了 #p2060006##委托而来? "], [4201, 1, "莉萨的报复", "呼~最近总是这样无精打采无法集中精力。。。发明没有进展，谁要是能给我一张传说中的设计图就好了。。。"], [4202, 0, "秀兹的假设计图研究材料", "你已经决定了？想得好！我们一起做一次漂亮的实验怎么样？"], [4202, 1, "秀兹的假设计图研究材料", "好的！都收集齐全了，我开始发挥我的能力了。。。"], [4203, 0, "秀兹的冒牌实验", "你来了？我完成了，期待着历史性的一刻吧。来~我们开始启动，一。。二。。三！！"], [6031, 1, "秀兹的科学课程", ""], [6210, 0, "乌云", "什么? 不要妨碍我研究，赶紧去一边! 快?给我什么书？说什么东西呢？你这个人，你以为我是连那么重要的研究资料都到处丢掉的傻瓜? 乌云制造方法? 谁做那么无聊的研究! …制造乌云的方法?让我看一下书。"], [6210, 1, "乌云", "好~ 所有材料都齐了？真有一套。 来，用这个应该可以马上就能做好制造乌云的机器的。只要组装好就可以了，来，接着。"], [6222, 1, "逆属性 召唤物 理论", "哦! 材料都收集全了! 好，那我们就开始做#b#t4031451##k吧! 不过要花点时间，过会再来找我说话好了。"], [6222, 0, "逆属性 召唤物 理论", "来这个研究室有什么事情吗？逆属性魔法? 哦，我这个天才科学家#b#p2012017##k虽然懂得科学知识和魔法，但第一次听说过逆反的属性魔法! 简单来说，这种理论就是天方夜谭!"], [6223, 0, "召唤物的骨架", "好好调整各种矿物的比率后混合在一起，让它们好好吸收各种属性后... 再开启这里的开关按钮! 好! 成功了，这就是#b#t4031451##k!"], [6312, 0, "逆属性召唤物理论", "来这个研究室有什么事情吗？逆属性魔法?哦，我这个天才科学家#b#p2012017##k虽然懂得科学知识和魔法，但第一次听说过逆反的属性魔法! 简单来说，这种理论就是天方夜谭!"], [6312, 1, "逆属性召唤物理论", "哦! 材料都收集全了! 好，那我们就开始做#b#t4031497##k吧! 不过要花点时间，过会再来找我说画好了。"], [6313, 0, "召唤物的骨架", "好好调整各种矿物的比率后混合在一起，让它们好好吸收各种属性后... 再开启这里的开关按钮后! 好! 成功了，这就是#b#t4031451##k!"], [9412, 1, "秀兹需要橡皮擦", "谢谢。我真的会用你给我的橡皮擦。现在我可以无忧无虑地再次专注于我的研究了。"], [9412, 0, "秀兹需要橡皮擦", "您是怎么知道这个地方的？如你所知，我现在正忙于研究……但最近我遇到了一个问题。我无法继续我的研究。"]];
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
