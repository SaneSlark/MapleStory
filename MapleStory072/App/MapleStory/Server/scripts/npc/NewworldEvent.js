// CMS072 native operator alias; all restored events live in 9010000.
function start(){
 if(cm.getNpc()!=9010000){cm.dispose();return;}
 cm.dispose();cm.openNpc(9010000,"9010000");
}
function action(mode,type,selection){cm.dispose();}
