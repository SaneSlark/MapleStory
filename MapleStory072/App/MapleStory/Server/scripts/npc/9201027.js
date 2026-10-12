/*
@    Author : Snow
@
@    NPC =勇士娜娜转生NPC
@    Map =  MAP
@    NPC MapId = MAPID
@    Function = Rebirth Player
@
@    想保存技能的话就找到把类似cm.teachSkill(4001002,0,0);这样的全部删掉或屏蔽
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
        cm.dispose();
    
    }else if (mode == 0){//No
        cm.sendOk("好的, 等你想要 #b投胎转世#k 的时侯再来找我.");
        cm.dispose();

    }else{            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("伟大的 #b#h ##k,你已经通过一个漫长而充满挑战的道路，终于成为了风起云涌的人物。如果您能给我#r1亿#k金币，我将用我的乾坤大挪移心法，助你投胎转世,键盘设定的技能将全部保存！ 但是我会清光你的装备放入背包里! 您将成为1级的 #b新手#k，且额外得到#r10点#k属性,你是否想#r转生#k呢?"); 
        }else if (status == 1) {
        if(cm.getChar().getLevel() < 200){
        cm.sendOk("很抱歉，您需要180级，才可以投胎转世.");
        cm.dispose();
        }else if (cm.getMeso() < 100000000) {
        cm.sendOk("你没有1亿金币,我不能帮你的忙哦."); 
        cm.dispose();
        }else{
        cm.sendOk("#b您做得非常好#k, 你现在确定要#e投胎转世#n.吗？");
        }
        }else if (status == 2) {
        wui = 1;
        var statup = new java.util.ArrayList();
        var p = cm.c.getPlayer();
        var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();
        cm.getPlayer().setMaxHp(50); 
        cm.getPlayer().setMaxMp(50);
        cm.resetStats();
        p.setRemainingAp (totAp - 1001);
        cm.resetStats();
        cm.getChar().setLevel(2);
        cm.unequipEverything()
        cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER.getId());
        cm.gainMeso(-100000000);
        cm.gainItem(1312004,+1);
        cm.gainItem(5220010,+1);
        cm.sendNext("#r转生成功#k!!我能感觉到你比以前#b更强大#k!!");
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(1)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
        //statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLESP, java.lang.Integer.valueOf(p.getRemainingSp())));
        p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
        cm.dispose();
        }            
    }
}