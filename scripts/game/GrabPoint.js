define(["B2D", "isPlayerInside", "isPlayerOut", "doWaitingActions"], function (Box2D, isPlayerInside, isPlayerOut, doWaitingActions){

	var GrabPoint = function GrabPoint (args){

		this.id = Game.ids;
		this.playerInside = false;
		Game.ids++;
		this.waitingActions = [];

		var x = args.x || 0;
		var y = args.y || 0;
		this.width = 1;
		this.height = 1;

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

	GrabPoint.prototype.isPlayerInside = isPlayerInside;
	
	GrabPoint.prototype.isPlayerOut = isPlayerOut;

	GrabPoint.prototype.doWaitingActions = doWaitingActions;

	return GrabPoint;
})