define(["Game","B2D", "isPlayerInside", "isPlayerOut", "doWaitingActions",  "draw", "ShapeSprite", "AssetsController", "MaskControler"],
 function (Game, Box2D, isPlayerInside, isPlayerOut, doWaitingActions, draw, ShapeSprite, AssetsController, MaskControler){
	var Ladder = function Ladder (args){
		this.id = Game.ids;
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

		this.shapeSprite = new ShapeSprite({pattern : true, img : AssetsController.images.ladder, repeat : "repeat-y" , shape : "box", height : this.height, width : this.width});
	}

	Ladder.prototype.isPlayerInside = isPlayerInside;
	
	Ladder.prototype.isPlayerOut = isPlayerOut;

	Ladder.prototype.doWaitingActions = doWaitingActions;

	Ladder.prototype.draw = draw;

	Ladder.prototype.actions = function (){
		this.doWaitingActions();
		this.draw();
	}

	return Ladder;
})