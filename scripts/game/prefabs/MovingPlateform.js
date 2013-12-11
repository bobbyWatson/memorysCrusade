define(["Game","B2D", "doWaitingActions", "move", "checkDirection", "MaskControler"], function (Game, Box2D, doWaitingActions, move, checkDirection, MaskControler){

	var MovingPlateform = function MovingPlateform (args){
		this.id = Game.ids;
		this.playerInside = false;
		Game.ids++;
		this.waitingActions = [];
		this.speed=args.speed || 4;
		this.vec2= args.Vertical ? new Box2D.Vec2(0,this.speed) : new Box2D.Vec2(this.speed,0);
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.stockY=this.y;
		this.distance = args.dist || 5;
		this.marge = this.y+this.distance;
		this.width = args.width || 5;
		this.height = args.height || 1;
		this.layer = MaskControler.Plateform;
		this.hitBox = Game.createB2Object({
			x 		 : this.x,
			y 		 : this.y,
			width 	 : this.width,
			height	 : this.height,
			dynamism : Box2D.Body.b2_kinematicBody,
			shape	 : "box",
			layer    : this.layer
		});

		this.hitBox.GetBody().SetUserData(this);

		// this.hitBox.SetSensor(true);

	}
	MovingPlateform.prototype.actions = function()
	{
		this.doWaitingActions();
		this.checkDirection();
		this.move(this.vec2);
	}
	MovingPlateform.prototype.move = move;
	
	MovingPlateform.prototype.checkDirection = checkDirection;
	
	MovingPlateform.prototype.doWaitingActions = doWaitingActions;

	return MovingPlateform;
})