/* KIN 
annfine制作-银行系统测试版-Memory修正 
*/ 
var status = 0; 
var t=new Array("存钱","取钱","查看","开户"); 
var money=new Array("1亿","3亿","5亿","10亿");  
var money1=new Array("100000000","300000000","500000000","1000000000");  
var x=0; 
function start() { 
status = -1; 
action(1, 0, 0); 
} 
function action(mode, type, selection) { 
    if (mode == -1) { 
      cm.dispose(); 
    } else { 
          if (mode == 0 && status == 0) { 
          cm.dispose(); 
          return; 
      } 
      if (mode == 1) 
      status++; 
      else 
      status--; 
      if (status == 0)  
      { 
        cm.sendNext("你好, 我是工商银行老总. 需要#r存钱#k吗？孩子....");  
      }  
      else if (status == 1) {  
        var a = "如果是第一次使用银行系统,请先#r开户#k,\r\n选择你需要的功能.#b";  
                    for (var i=0; i < t.length; i++) {  
                    a += "\r\n#L" + i + "#" + t[ i ]+"";  
                    }  
                  cm.sendSimple(a);  
        } 
      else if(status == 2) 
      { 
            x=selection; 
          if(x==2) 
          { 
            cm.sendOk("您的存款有#r"+cm.getMoney()+" 金币 "); 
            cm.dispose(); 
          } 
          else if (x==3) 
            { 
                if(cm.addBank()>0) 
                { 
                    cm.sendOk("恭喜您,开户成功!");  
                    } 
                    else 
                    { 
                        cm.sendOk("孩子,你已经开户过了哦!"); 
                    } 
                    cm.dispose(); 
            } 
          else 
          { 
           
          var b = " 请选择数量.#b";  
                        for (var i=0; i < money.length; i++) {  
                        b += "\r\n#L" + i + "#" + money[ i ]+"";  
                        }  
                        cm.sendSimple(b);  
          } 
      } 
      else if (status == 3) {  
          var choose=money1[selection]; 
          if(x==0)//存  
            {  
            if(cm.getMeso()<choose) 
            { 
                cm.sendOk("对不起,您带的钱不够!");     
            } 
            else if(cm.addMoney(choose,0)>0) 
                { 
                cm.gainMeso(-choose); 
                cm.sendOk("好的,已经存入!"); 
                } 
                else 
                { 
                cm.sendOk("孩子..你钱太多了..银行都存不下..该想想如果把钱花的有价值!"); 
 
                } 
                cm.dispose(); 
            }  
            else if(x==1)//取  
            {  
            if(cm.getMoney()<choose) 
            { 
                cm.sendOk("很抱歉,您存款没有那么多呢!");     
            } 
                else if(cm.addMoney(-choose,1)>0) 
                { 
                cm.gainMeso(choose); 
                cm.sendOk("好的,请收好您的钱!"); 
                } 
                else 
                { 
                cm.sendOk("错误:请反馈给管理员!"); 
                } 
                cm.dispose(); 
              } 
             
       
      } 
      else 
      { 
      cm.dispose(); 
      } 
    } 
}
