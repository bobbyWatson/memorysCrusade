define(["Game","B2D", "checkPoint", "isPlayerOut", "doWaitingActions"], function (Game, Box2D, checkPoint, isPlayerOut, doWaitingActions){

	var Spawn = function Spawn (args){
		this.id = Game.ids;
		this.playerInside = false;
		Game.ids++;
		this.waitingActions = [];

		this.x = args.x || 0;
		this.y = args.y || 0;
		this.width = 1;
		this.height = args.height || 4;

		this.actionBox = Game.createB2Object({
			x 		 : this.x,
			y 		 : this.y,
			width 	 : this.width,
			height	 : this.height,
			dynamism : Box2D.Body.b2_kinematicBody,
			shape	 : "box"
		});

		this.actionBox.GetBody().SetUserData(this.id);

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