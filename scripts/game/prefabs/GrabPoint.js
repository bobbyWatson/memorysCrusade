define(["Game", "B2D", "isPlayerInside", "isPlayerOut", "doWaitingActions", "MaskControler"], function (Game, Box2D, isPlayerInside, isPlayerOut, doWaitingActions, MaskControler){

	var GrabPoint = function GrabPoint (args){

		this.id = Game.ids;
		this.playerInside = false;
		Game.ids++;
		this.waitingActions = [];
		this.tag = "GrabPoint"

		var x = args.x || 0;
		var y = args.y || 0;
		this.width = 2;
		this.height = 2;
		this.layer = MaskControler.ActionPlateform;
		this.actionBox = Game.createB2Object({
			x 		 : x,
			y 		 : y,
			width	 : this.width,
			height	 : this.height,
			dynamism : Box2D.Body.b2_kinematicBody,
			shape	 : "box",
			layer	 : this.layer
		});

		this.actionBox.GetBody().SetUserData(this);

		this.actionBox.SetSensor(true);

		Game.on("gameObject"+this.id+"Collides", this.isPlayerInside, this);
		
		Game.on("gameObject"+this.id+"EndCollides", this.isPlayerOut, this);
	}

	GrabPoint.prototype.isPlayerInside = isPlayerInside;
	
	GrabPoint.prototype.isPlayerOut = isPlayerOut;

	GrabPoint.prototype.doWaitingActions = doWaitingActions;

	GrabPoint.prototype.actions = function (){
		this.doWaitingActions();
	}

	return GrabPoint;
})