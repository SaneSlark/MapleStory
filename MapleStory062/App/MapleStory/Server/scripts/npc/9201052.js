var status = 0; 
var maps = Array(221000000, 222000000, 230000000, 680000000, 

682000000, 251000000, 800000000, 801000000, 1010000); 
var mapsname = Array("地球防卫部", "童话村", "海底世界", "结婚教堂", 

"闹鬼宅门口", "百草堂", "日本神社", "昭和村", "彩虹村"); 
var selectedMap = -1; 
function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else { 
        if (status >= 3 && mode == 0) { 
            cm.sendOk("好的,如果你决定要去哪里,我会很乐意传送你的."); 
            cm.dispose(); 
            return; 
        } 
        if (mode == 1) 
            status++; 
        else { 
            cm.sendOk("好的,如果你决定要去哪里,我会很乐意传送你的."); 
            cm.dispose(); 
            return; 
        } if (status == 0) { 
            cm.sendYesNo("HI，我是全美国最快的超级跑车驾驶员?"); 
        } else if (status == 1) { 
            var selStr = "选择你的目的地.#b"; 
                for (var i = 0; i < maps.length; i++) { 
                selStr += "\r\n#L" + i + "#" + mapsname[ i ]+""; 
                } 
            cm.sendSimple(selStr); 
            
        } else if (status == 2) { 
            cm.sendYesNo("你真的要去 " + mapsname[selection] + "吗?"); 
            selectedMap = selection; 
        } 
        
        else if (status == 3) { 
            cm.warp(maps[selectedMap], 0); 
            cm.dispose(); 
        }
    }
}