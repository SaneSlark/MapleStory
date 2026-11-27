// CMS072 3114 score: Item/Etc/0416/04161036/book. No reward on a harp key.
var closed=false,melody="115566544332215544332554433211556654433221";
function start(){action(1,0,0);}
function action(mode,type,selection){
    if(closed)return;closed=true;
    if(mode!=1||cm.getMapId()!=920020000||cm.getNpc()!=2012031){cm.dispose();return;}
    cm.playSound(false,"orbis/sol");
    if(cm.getQuestStatus(3114)==1){
        var raw=String(cm.getInfoQuest(3114));if(raw==""||raw=="null")raw="0";
        if(!/^(?:[0-9]|[1-3][0-9]|4[0-2])$/.test(raw)){cm.dispose();return;}
        var progress=parseInt(raw,10);
        if(progress<42){
            // Keep the longest suffix that is a correct opening of the score.
            var played=melody.substring(0,progress)+"5",next=Math.min(42,played.length);
            while(next>0&&played.substring(played.length-next)!=melody.substring(0,next))next--;
            cm.updateInfoQuest(3114,String(next));
            if(next==42)cm.playerMessage(5,"演奏完成，请回去找艾利杰。");
        }
    }
    cm.dispose();
}
