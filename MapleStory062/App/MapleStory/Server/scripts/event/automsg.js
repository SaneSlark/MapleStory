/*
-- odinms JavaScript --
        NPC脚本 
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 3);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 200*1500; //10 min
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
	var Message = new Array("欢迎来到冒险岛！最初的梦想   梦的云端。",
"在聊天框输入“@xx 点数”可快速+能力值。其中xx有：ll--力量，mj--敏捷，zl--智力，yq--运气",
	"如果你想回自由市场，可以按右下角绿色按钮，或者在聊天框输入“@ziyou”即可。",
	"如果NPC出现假死（即点击无反应），请在聊天框输入“@jiasi”即可。",
	"在聊天框输入“@wnnpc”可以打开万能NPC，输入“@zijiu 账号”可以解救卡号账号。",
	"打一只怪可得10点点卷，7-12洞双人PK,自由市场有很多NPC哦！",
	"自由市场每分钟可获得一定的经验与金钱,请不要在自由市场进入商城，容易掉线。"
,"200级可以在自由娜娜那里转身，赠送10点属性，键盘设置的技能将全部保留",
"如果意志足够坚定的话，去挑战勇士之魂吧！","快乐百宝箱出稀有装备，到时候可别偷着乐！","如果你发现BUG或者有人使用外挂，请迅速报告给管理员，送精美礼品一份！");
	em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(6, "【冒险岛公告】" + Message[Math.floor(Math.random() * Message.length)]));
}
