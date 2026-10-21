/* @Author Aexr
 * 
 * 2401000.js: Horntail's Cave - Summons Horntail.
 * 
*/

function act() {
	rm.changeMusic("Bgm14/HonTale");
	rm.spawnMonster(8810026,71,260);
	//rm.killMonster(8810026);
	rm.mapMessage(6, "暗黑龙王从洞穴深处现身了！");
}
