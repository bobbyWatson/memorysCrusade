define(["Game", "B2D", "isPlayerInside", "isPlayerOut", "doWaitingActions", "MaskControler"], function (Game, Box2D, isPlayerInside, isPlayerOut, doWaitingActions, MaskControler){

	var GrabPoint = function GrabPoint (args){

		this.id = Game.ids;
		this.playerInside = false;
		Game.ids++;
		this.waitingActions = [];
		this.tag = "GrabPoint";

		var x = args.x || 0;
		var y = args.y || 0;
		this.width = 2;
		this.height = 2;
		this.objectToFolow = args.follow;
		if(this.objectToFolow !== undefined){

			this.relativePosition = {x:0,y:0};
			this.relativePosition.x = x - this.objectToFolow.hitBox.GetBody().GetWorldCenter().x;
			this.relativePosition.y = y - this.objectToFolow.hitBox.GetBody().GetWorldCenter().y;
		}
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

	GrabPoint.prototype.follow = function follow (){

		if(this.objectToFolow == null)
			return
		var _pos = this.objectToFolow.hitBox.GetBody().GetWorldCenter();
		var _x = this.relativePosition.x + _pos.x;
		var _y = this.relativePosition.y + _pos.y;
		this.actionBox.GetBody().SetPosition({x : _x, y : _y});
	}

	GrabPoint.prototype.actions = function (){
		this.doWaitingActions();
		this.follow();
	}

	return GrabPoint;
})