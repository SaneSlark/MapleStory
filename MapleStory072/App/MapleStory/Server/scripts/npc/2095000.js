/* Existing custom daily level reward, adapted to CMS's pooled DB/count log API.
 * Same levels/rewards, daily key and atomic claim; not an official event restoration. */
var done=false,origin=-1;
function dailyKey(){var d=new Date();return "meirijiangli:"+d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();}
function start(){done=false;origin=cm.getMapId();cm.sendSimple("每日等级奖励：10~29级10万金币；30~69级20万金币；70~119级30万金币、200点券和2个箱子；120级以上50万金币、500点券和4个箱子。\r\n#L1#领取今天的奖励#l");}
function claimDaily(key){
 var con=null,ps=null;
 try {
  cm.getBossLog(key); // Use the existing API to ensure its standard table exists.
  con=Packages.database.DBConPool.getInstance().getDataSource().getConnection();
  ps=con.prepareStatement("INSERT IGNORE INTO bosslog (characterid,bossid,count) VALUES (?,?,1)");
  ps.setInt(1,cm.getPlayer().getId());ps.setString(2,key);
  return ps.executeUpdate()==1;
 }catch(e){return false;}finally{if(ps!=null)ps.close();if(con!=null)con.close();}
}
function action(mode,type,selection){
 if(done)return;done=true;
 if(mode!=1||selection!=1||cm.getMapId()!=origin){cm.dispose();return;}
 var level=cm.getLevel();if(level<10){cm.sendOk("达到10级后才能领取奖励。");cm.dispose();return;}
 for(var inv=1;inv<=5;inv++)if(cm.getInventory(inv).isFull()){cm.sendOk("请在背包各栏至少留出一个空位。");cm.dispose();return;}
 var meso=level<30?100000:level<70?200000:level<120?300000:500000;
 var nx=level<70?0:level<120?200:500,boxes=level<70?0:level<120?2:4;
 if(cm.getMeso()>2147483647-meso||(boxes>0&&!cm.canHold(2022336,boxes))){cm.sendOk("请检查金币上限和消耗栏空间。");cm.dispose();return;}
 if(!claimDaily(dailyKey())){cm.sendOk("今天已领取奖励，或暂时无法读取领取记录。请稍后再试。");cm.dispose();return;}
 if(boxes>0)cm.gainItem(2022336,boxes);if(nx>0)cm.gainNX(nx);cm.getPlayer().gainMeso(meso,true);
 cm.sendOk("今天的等级奖励已领取。");cm.dispose();
}
