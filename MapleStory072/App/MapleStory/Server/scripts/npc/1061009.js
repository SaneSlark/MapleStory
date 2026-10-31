/* Existing CMS clone trial maps/mobs, explicit class/map/occupancy gates. */
var entered=false;
var trials=[
 [100040106,[210,220,230],108010200,108010201,9001001],
 [105070001,[110,120,130],108010300,108010301,9001000],
 [105040305,[310,320],108010100,108010101,9001002],
 [107000402,[410,420],108010400,108010401,9001003],
 [105070200,[510,520],108010500,108010501,9001004]
];
function start(){
 if(entered)return;entered=true;
 var route=null,job=cm.getJob();
 for(var i=0;i<trials.length;i++)if(cm.getMapId()==trials[i][0]&&trials[i][1].indexOf(job)>=0)route=trials[i];
 if(route==null||cm.getLevel()<70){cm.sendOk("请由达到70级的对应职业前来接受三转考验。");cm.dispose();return;}
 if(cm.haveItem(4031059,1)){cm.sendOk("你已经取得黑符，请交给自己的转职教官。");cm.dispose();return;}
 if(!cm.canHold(4031059,1)){cm.sendOk("请先为考验证明留出其他栏空间。");cm.dispose();return;}
 var entrance=cm.getMapFactory().getMap(route[2]),arena=cm.getMapFactory().getMap(route[3]);
 if(entrance.playerCount()>0||arena.playerCount()>0){cm.sendOk("已经有人在接受考验，请稍后再来。");cm.dispose();return;}
 if(arena.mobCount()>0)arena.killAllMonsters(true);
 cm.warp(route[2],0);cm.spawnMobOnMap(route[4],1,-276,-3,route[3]);cm.dispose();
}
function action(mode,type,selection){cm.dispose();}