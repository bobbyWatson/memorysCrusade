define([], function (){
	var Layer= {
		"Player":{categoryBits:0x0002,maskBits: 0x0008 | 0x0004 | 0x0005 | 0x0009 },
		"Photo":{categoryBits:0x0003,maskBits:0x0002 | 0x0004 | 0x0005},
		"Plateform":{categoryBits:0x0004,maskBits: 0x0003 | 0x0002},
		"Object":{categoryBits:0x0005,maskBits: 0x0002 | 0x0003 | 0x0004 | 0x0008 },
		"ActionPlateform":{categoryBits:0x0006,maskBits:0x0002},
		"Ground":{categoryBits:0x0008,maskBits:0x0002 | 0x0005},
		"ObjectHitbox":{categoryBits:0x0009,maskBits: 0x0002 }
	};
	return Layer;
});