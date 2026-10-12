var done=false;
var mapNames={"920010000": "雅典娜禁地<岔路>", "922020300": "时间塔的起源", "209000000": "幸福村", "209000009": "圣诞小山"};
var maps=[209000000, 209000009, 920010000, 922020300];
var required=[0,2,3,4];
var meso=[1000000,1000000,1000000,1000000,1000000];
var points=[5000,10000,20000,50000,100000];
function start(){done=false;var text="会员专区：\r\n";for(var i=0;i<maps.length;i++)text+="#L"+i+"#前往 "+mapNames[maps[i]]+"#l\r\n";text+="#L100#100万金币 - 领取今日会员工资#l";cm.sendSimple(text);}
function action(mode,type,selection){
    if(done)return;done=true;
    if(mode!=1){cm.dispose();return;}
    var vip=cm.getPlayer().getVip();
    if(selection==100){
        if(vip<1){cm.sendOk("会员等级达到1后可以领取工资。");}
        else if(cm.getBossLog("vipgz")>=1){cm.sendOk("今天已经领取过工资。");}
        else {var tier=Math.min(5,vip)-1;if(cm.getPlayer().getMeso()+meso[tier]>2147483647){cm.sendOk("金币已接近上限，请先存入仓库再领取。");}else{cm.setBossLog("vipgz");cm.gainMeso(meso[tier]);cm.modifyNX(points[tier],1);cm.sendOk("已领取今日会员工资。");}}
    } else if(selection>=0&&selection<maps.length){
        if(vip>=required[selection]){cm.warp(maps[selection],0);}else cm.sendOk("会员等级不足。");
    }
    cm.dispose();
}
