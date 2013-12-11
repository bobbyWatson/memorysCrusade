define(["B2D","doWaitingActions","Game","killPlayer", "move", "MaskControler", "draw", "ImageSprite", "AssetsController"],
	function (Box2D, doWaitingActions,Game,killPlayer,move,MaskControler, draw, ImageSprite, AssetsController){

	var Fire = function Fire (args){

		this.id = Game.ids;
		Game.ids++;
		this.waitingActions = [];

		this.objects = [];
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.height = args.height || 0;
		this.width = args.width || 0;
		this.hasGravity=false;
		this.layer=MaskControler.Object;
		this.hitBox = Game.createB2Object({
			x 		: this.x,
			y 		: this.y,
			height	: this.height,
			width 	: this.width,
			density : 0,
			dynamism: Box2D.Body.b2_kinematicBody,
			shape 	: "box",
			layer   : this.layer
		});
		this.hitBox.SetSensor(true)
		this.hitBox.GetBody().SetUserData(this);
		this.hitBox.GetBody().hasGravity=false;
		Game.on("gameObject"+this.id+"Collides", this.killPlayer, this);
		
		// this.imageSprite = new ImageSprite({image : AssetsController.images.Fire, width : this.width, height : this.height});
	}

	Fire.prototype.actions = function (){

		// this.draw();
	}

	Fire.prototype.draw = draw;

	
	Fire.prototype.killPlayer = killPlayer;
	
	
	Fire.prototype.doWaitingActions = doWaitingActions;
	
	return Fire;
})