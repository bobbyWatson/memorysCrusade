define(["Game","B2D", "checkPoint", "isPlayerOut", "doWaitingActions", "MaskControler"], function (Game, Box2D, checkPoint, isPlayerOut, doWaitingActions, MaskControler){

	var Spawn = function Spawn (args){
		this.id = Game.ids;
		this.playerInside = false;
		Game.ids++;
		this.waitingActions = [];

		this.x = args.x || 0;
		this.y = args.y || 0;
		this.width = 1;
		this.height = args.height || 4;
		this.layer = MaskControler.ActionPlateform;
		this.actionBox = Game.createB2Object({
			x 		 : this.x,
			y 		 : this.y,
			width 	 : this.width,
			height	 : this.height,
			dynamism : Box2D.Body.b2_kinematicBody,
			shape	 : "box",
			layer    : this.layer
		});

		this.actionBox.GetBody().SetUserData(this);

		this.actionBox.SetSensor(true);

		Game.on("gameObject"+this.id+"Collides", this.checkPoint, this);
		
		Game.on("gameObject"+this.id+"EndCollides", this.isPlayerOut, this);
	}

	Spawn.prototype.checkPoint = checkPoint;
	
	Spawn.prototype.isPlayerOut = isPlayerOut;

	Spawn.prototype.doWaitingActions = doWaitingActions;

	Spawn.prototype.actions = function (){
		this.doWaitingActions();
	}

	return Spawn;
})