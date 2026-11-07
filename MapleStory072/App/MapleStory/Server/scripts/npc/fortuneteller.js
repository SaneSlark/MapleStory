// CMS072 Vivian: 10,000 mesos per divination; equal probabilities are a compatibility rule.
var stage=0,closed=false,origin=-1,started=false;
var charms=[2022216,2022217,2022218,2022219,2022220,2022221,2022222,2022223];
var descriptions=["跳跃力+20、移动速度+10","物理攻击力+30、魔法攻击力+30","回避率+50","物理防御力+30、魔法防御力+30","命中率+50","最大HP+50%、最大MP+25%","最大HP+25%、最大MP+50%","移动速度+20、跳跃力+10"];
function finish(){closed=true;cm.dispose();}
function valid(){return cm.getNpc()==9330042 && cm.getMapId()==origin && cm.getMap().containsNPC(9330042);}
function start(){
 if(closed || started)return;started=true;origin=cm.getMapId();
 if(!valid()){finish();return;}
 if(cm.getPlayer().getLevel()<10){cm.sendOk("占卜服务需要角色达到10级。");finish();return;}
 cm.sendSimple("想要来试试看今天的手气如何吗？\r\n#L0#花费10000冒险币占卜#l\r\n#L1#了解御守效果#l");
}
function action(mode,type,selection){
 if(closed)return;if(mode!=1 || !valid()){finish();return;}
 if(stage==0){
  if(selection==1){var text="八种御守各有12.5%的机会，效果持续1小时。再次占卜会替换上次的御守，不累积多种御守。\r\n";for(var i=0;i<charms.length;i++)text+="\r\n#t"+charms[i]+"#："+descriptions[i];cm.sendOk(text);finish();return;}
  if(selection!=0){finish();return;}
  stage=1;cm.sendYesNo("支付#b10000冒险币#k，随机获得一种御守祝福，八种等概率，效果持续1小时。再次占卜会替换上次的御守。\r\n现在开始占卜吗？");return;
 }
 closed=true;var result=Packages.server.FortuneTeller072.divine(cm.getPlayer(),cm.getNpc(),origin);
 if(result==0)cm.sendOk("暂时无法占卜，请确认角色已达10级、存活、未在交易中，且有10000冒险币。");
 else cm.sendOk("这次守护你的是#b#t"+result+"##k！\r\n"+descriptions[result-2022216]+"，祝福持续1小时。");
 cm.dispose();
}
