define(["Game","B2D", "isPlayerInside", "isPlayerOut", "doWaitingActions",  "draw", "ShapeSprite", "AssetsController", "MaskControler", "isOnScreen"],
 function (Game, Box2D, isPlayerInside, isPlayerOut, doWaitingActions, draw, ShapeSprite, AssetsController, MaskControler, isOnScreen){
	var Ladder = function Ladder (args){
		this.id = Game.ids;
		this.tag = "Ladder";
		this.playerInside = false;
		Game.ids++;
		this.waitingActions = [];

		var x = args.x || 0;
		var y = args.y || 0;
		this.width = 1.5;
		this.height = args.height || 4;
		
		this.layer = MaskControler.ActionPlateform;
		this.actionBox = Game.createB2Object({
			x 		 : x,
			y 		 : y,
			width 	 : this.width,
			height	 : this.height,
			dynamism : Box2D.Body.b2_kinematicBody,
			shape	 : "box",
			layer	 : this.layer
		});

		this.actionBox.GetBody().SetUserData(this);

		this.actionBox.SetSensor(true);

		Game.on("gameObject"+this.id+"Collides", this.isPlayerInside, this);
		
		Game.on("gameObject"+this.id+"EndCollides", this.isPlayerOut, this);

		var img = AssetsController.images[Game.level + "Ladder"];
		this.shapeSprite = new ShapeSprite({pattern : true, image : img, repeat : "repeat-y" , shape : "box", height : this.height, width : this.width});
}

	Ladder.prototype.isPlayerInside = isPlayerInside;
	
	Ladder.prototype.isPlayerOut = isPlayerOut;

	Ladder.prototype.doWaitingActions = doWaitingActions;

	Ladder.prototype.draw = draw;
	
	Ladder.prototype.isOnScreen = isOnScreen;

	Ladder.prototype.actions = function (){
		if(this.isOnScreen()){
			this.doWaitingActions();
			this.draw();
		}
	}

	return Ladder;
})