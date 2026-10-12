/*

處、男 最終腳本
QQ443617299
絕對原創

*/
         function enter(pi) {
	if (pi.getPlayer().getMapId()==270010100){
		
		pi.warp(270010110);
        return true;
	}else if (pi.getPlayer().getMapId()==270010200){
		
		pi.warp(270010210);
        return true;
    }else if (pi.getPlayer().getMapId()==270010300){
		
		pi.warp(270010310);
        return true;
	}else if (pi.getPlayer().getMapId()==270010400){
		
		pi.warp(270010410);
        return true;
    }else if (pi.getPlayer().getMapId()==270010500){
		
		pi.warp(270020000);
        return true;
    }else if (pi.getPlayer().getMapId()==270020100){
		
		pi.warp(270020110);
        return true;
	}else if (pi.getPlayer().getMapId()==270020200){
		
		pi.warp(270020210);
        return true;
    }else if (pi.getPlayer().getMapId()==270020300){
		
		pi.warp(270020310);
        return true;
	}else if (pi.getPlayer().getMapId()==270020400){
		
		pi.warp(270020410);
        return true;
    }else if (pi.getPlayer().getMapId()==270020500){
		
		pi.warp(270030000);
        return true;
    }else if (pi.getPlayer().getMapId()==270030100){
		
		pi.warp(270030110);
        return true;
    }else if (pi.getPlayer().getMapId()==270030200){
		
		pi.warp(270030210);
        return true;
    }else if (pi.getPlayer().getMapId()==270030300){
		
		pi.warp(270030310);
        return true;
    }else if (pi.getPlayer().getMapId()==270030400){
		
		pi.warp(270030410);
        return true;
    }else if (pi.getPlayer().getMapId()==270030500){
		
		pi.warp(270040000);
        return true;   
    }else if (pi.getPlayer().getMapId()==270040000){
		
		pi.warp(270040100);
        return true; 
    }else if (pi.getPlayer().getMapId()==270040100){//270050000进入BOSS挑战地图
		//pi.playerMessage(5, "[處、男提示]由于是私服，这里就不限制啦，直接进下一图");
		pi.warp(270050000);//270050200进入BOSS挑战地图退出的NPC地图
        return true;  
	}
}