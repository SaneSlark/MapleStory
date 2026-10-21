var status = 0; 
var maps = Array(103000105, 682000403, 251010402, 220060301, 240040600, 250020000, 230040400, 910500000, 910300000); 
var mapsname = Array("40-70(地铁，大幽灵)", "60-80(扯线娃娃)", "100-120(红鼻子海盗团老巢2 )", "120-140(亡灵海盗船)", "140-200(主巢穴山峰)", "50-70(初级修炼场)", "140-200(水下世界)", "异界弓箭手修炼场", "达克鲁的训练场"); 
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
            cm.sendYesNo("HI，我是会员专用练级场传送！"); 
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