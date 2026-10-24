function start() {

    cm.sendSimple ("#bÄãºÃ,×ğ¹óµÄ#r   #k¹ó±ö4Íæ¼Ò, ÎÒÄÜÎªÄãÕÙ»½¸üÇ¿´óÊ×Áì.\r\nÇëÑ¡ÔñÄãÒªÕÙ»½µÄ¹ÖÎï.#l#k\r\n\r\n#r100W Ê×Áì¶Ô¿¹#l#b\r\n#L0#òùòğ¹Ö#l #L1#òùòğÄ§(Ê¼½â)#l #L2#òùòğÄ§(Íò½â)#l #L3#òùòğÄ§(±äÉí)#l\r\n\r\n#L4#ÄĞÀÏ°å#l #L5#Å®ÀÏ°å#l #L6#±£ïÚA#l #L7#±£ïÚB#l #L8#¶ñÉ®#l\r\n\r\n#L9#»ğÂí#l#l #L10#ÌìÓ¥#l #L11#Åç»ğÁú(±¬×ªÉúÓÃµÄ¶«Î÷)#l #L12#°¢ÀöÉ¯ÀÖ#l  \r\n\r\n#r500W ·è¿ñÉı¼¶#l#b\r\n\r\n#L41#½ğÖí#l #L42#Ô³¹«#l #L43#´óÓÄÁé#l #L44#½Ì¹Ù#l \r\n\r\n #L45#ÁÔÈ®#l #L46#»ğÑæÁÔÈ®#l #L47#ºìÀÇ#l #L48#°×ÀÇ#l\r\n\r\n#L49#º®±ù°ëÈËÂí#l #L50#°µºÚ°ëÈËÂí#l #L51#À¶·ÉÁú#l #L52#ºÚ·ÉÁú#l \r\n\r\n #L53#Ğ°¶ñË«µ¶òáòæ#l #L54#÷¼÷ÃÁú#l #L55#¼â±ÇöèÓã#l \r\n\r\n #L56#Ê±¼äÃÅÉñ#l #L57#ºÚ¼×Ğ×Áé#l #L58#´óº£ÔôÍõ#l\r\n\r\n#L59#¡ï´òÎÏÅ£¿Ç£ºÎÏÅ£#l #L60#À¶ÎÏÅ£#l #L61#ºìÎÏÅ£ ¡ï#l\r\n\r\n#L62##r±äÌ¬ÎÏÅ£(²âÊÔ¼¼ÄÜ)#l#k");
    
}
function action(mode, type, selection) {
        cm.dispose();
    
if (cm.getMeso() >= 1000000) {

cm.dispose();
        
    if (selection == 0) {
        cm.gainMeso(-1000000);
        //¹ÖÎïID, HP, MP, level, EXP, ÊıÁ¿
        cm.spawnMonster(8130100, 18000000, 500, 80, 2000000, 1);òùòğ¹Ö
    } else if (selection == 1) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(8150000, 18000000, 500, 50, 1267000, 1);òùòğÄ§(Ê¼½â)
    } else if (selection == 2) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(9400572, 20000000, 1000, 60, 8230000, 1);òùòğÄ§(Íò½â)
    } else if (selection == 3) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(9400536, 18000000, 1000, 60, 8230000, 1);òùòğÄ§(±äÉí)
    } else if (selection == 4) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(9400120, 18000000, 350, 95, 5500, 1);ÄĞÀÏ°å 
    } else if (selection == 5) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(9400121, 75000000, 10000, 130, 3900000, 1);Å®ÀÏ°å 
    } else if (selection == 6) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(9400112, 400000000, 5000, 152, 13800000, 1);±£ïÚA 
    } else if (selection == 7) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(9400113, 500000000, 50000, 155, 10500000, 1);±£ïÚB
    } else if (selection == 8) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(9400300, 150000000, 100000, 175, 17500000, 1);¶ñÉ®
    } else if (selection == 9) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(9400549, 3500000, 1000, 101, 300000, 1);»ğÂí
    } else if (selection == 10) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(8180001, 3700000, 1500, 105, 13500, 1);ÌìÓ¥
    } else if (selection == 11) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(8180000, 3700000, 1500, 105, 13500, 1);»ğÑæÁú
    } else if (selection == 12) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(9300012, 18000000, 2500, 56, 4800, 1);°¢ÀöÉ¯ÀÖ
        
    } 
}

if (cm.getMeso() >= 5000000) {

cm.dispose();
        
    if (selection == 41) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(9500167, 1800000, 1000, 103, 1050, 10);½ğÖí
    } else if (selection == 42) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(6130207, 1670000, 200, 105, 1200, 20);Ô³¹«
    } else if (selection == 43) {
        cm.gainMeso(-1000000);
        cm.spawnMonster(4230102, 1850000, 350, 95, 5500, 30);´óÓÄÁé 
    } else if (selection == 44) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(9001000, 1800000, 220, 30, 450, 5);½Ì¹Ù
        cm.spawnMonster(9001001, 1800000, 220, 30, 450, 5);
        cm.spawnMonster(9001002, 1800000, 220, 30, 450, 5);
        cm.spawnMonster(9001003, 1800000, 220, 30, 450, 5);
    } else if (selection == 45) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(7130001, 75000000, 10000, 130, 3900000, 20);ÁÔÈ®
    } else if (selection == 46) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(8140500, 150000000, 100000, 175, 17500000, 10);»ğÑæÁÔÈ®
    } else if (selection == 47) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(7130200, 1800000, 1000, 101, 300000, 10);ºìÀÇ
    } else if (selection == 48) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(8140000, 5000000, 750, 101, 1000, 8);°×ÀÇ
    } else if (selection == 49) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(8140103, 1800000, 1000, 103, 1050, 1);º®±ù°ëÈËÂí
    } else if (selection == 50) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(8140101, 2000000, 200, 105, 1200, 1);°µºÚ°ëÈËÂí
    } else if (selection == 51) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(8810020, 1800000, 750, 101, 1000, 8);À¶·ÉÁú 
    } else if (selection == 52) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(8810021, 1800000, 1000, 103, 1050, 8);ºÚ·ÉÁú
    } else if (selection == 53) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(8810023, 2200000, 200, 105, 1200, 10);Ğ°¶ñË«µ¶òáòæ
    } else if (selection == 54) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(9300077, 3000000, 30, 20, 65, 20);÷¼÷ÃÁú
    } else if (selection == 55) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(8150101, 1800000, 90, 1, 0, 20);¼â±ÇöèÓã
    } else if (selection == 56) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(8160000, 4000000, 30, 20, 182, 10);Ê±¼äÃÅÉñ 
    } else if (selection == 57) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(8170000, 5000000, 50000, 155, 10500000, 10);ºÚ¼×Ğ×Áé
    } else if (selection == 58) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(8141100, 6000000, 50000, 155, 10500000, 10);´óº£ÔôÍõ 
    } else if (selection == 59) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(100100, 1, 1, 1, 1, 40);ÎÏÅ£ 
    } else if (selection == 60) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(100101, 1, 1, 1, 2, 40);À¶ÎÏÅ£ 
    } else if (selection == 61) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(130101, 1, 1, 1, 3, 40);ºìÎÏÅ£
    } else if (selection == 62) {
        cm.gainMeso(-5000000);
        cm.spawnMonster(100100, 500000, 5, 1, 10500000, 8);ÎÏÅ£ 
        
    } 
    
} else {
        cm.sendSimple ("ÔÎ¶î,ÄãµÄÇ®²»¹»Ñ½.");
        cm.dispose();
        }
        cm.dispose();
    }