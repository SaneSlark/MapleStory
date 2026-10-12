var done=false;
var names=["等级","财富","人气","对战胜场","对战败场","转生次数","家族积分"];
function start(){
    done=false;
    cm.sendSimple("#e#d世界排名（前20名）#n#k\r\n"
      +"             #L0##r等级排行榜#l#k\r\n"
      +"#L1##b财富排行榜#l    #L2#人气排行榜#l#k\r\n"
      +"#L6##b家族积分榜#l    #L3#对战胜场榜#l#k\r\n"
      +"#L4##b对战败场榜#l    #L5#转生次数榜#l#k");
}
function action(mode,type,selection){if(done)return;done=true;if(mode==1&&selection>=0&&selection<names.length)cm.sendOk(names[selection]+"排行榜\r\n"+cm.getAuctionRanking(selection));cm.dispose();}
