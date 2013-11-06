define(["B2D", "isPlayerInside", "isPlayerOut", "doWaitingActions"], function (Box2D, isPlayerInside, isPlayerOut, doWaitingActions){

	var Ladder = function Ladder (args){

		this.id = Game.ids;
		this.playerInside = false;
		Game.ids++;
		this.waitingActions = [];

		var x = args.x || 0;
		var y = args.y || 0;
		this.width = 1;
		this.height = args.height || 4;

		this.actionBox = Game.createB2Object({
			x 		 : x,
			y 		 : y,
			w		 : this.width,
			h		 : this.height,
			dynamism : Box2D.Body.b2_kinematicBody,
			shape	 : "box"
		});

		this.actionBox.GetBody().SetUserData(this.id);

		this.actionBox.SetSensor(true);

		Game.on("gameObject"+this.id+"Collides", this.isPlayerInside, this);
		
		Game.on("gameObject"+this.id+"EndCollides", this.isPlayerOut, this);
	}

	Ladder.prototype.isPlayerInside = isPlayerInside;
	
	Ladder.prototype.isPlayerOut = isPlayerOut;

	Ladder.prototype.doWaitingActions = doWaitingActions;

	return Ladder;
})