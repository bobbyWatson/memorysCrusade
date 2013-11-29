define([], function (){
	var Layer= {
		"Player":{categoryBits:0x0002,maskBits:0x0004 | 0x0006 | 0x0008 },
		"Plateform":{categoryBits:0x0004,maskBits:0x0002},
		"ActionPlateform":{categoryBits:0x0006,maskBits:0x0002},
		"Ground":{categoryBits:0x0008,maskBits:0x0002}
	};
	return Layer;
});