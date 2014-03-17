define(["Game","B2D", "doWaitingActions", "move", "checkDirection", "MaskControler", "draw","AssetsController", "ImageSprite", "GrabPoint"], 
	function (Game, Box2D, doWaitingActions, move, checkDirection, MaskControler, draw, AssetsController, ImageSprite, GrabPoint){

	var MovingPlateform = function MovingPlateform (args){
		this.ctx = args.ctx;
		this.id = Game.ids;
		this.playerInside = false;
		this.tag = "MovingPlateform";
		Game.ids++;
		this.waitingActions = [];
		this.speed=args.speed || 4;
		this.vec2= args.Vertical ? new Box2D.Vec2(0,this.speed) : new Box2D.Vec2(this.speed,0);
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.stockY=this.y;
		this.stockX=this.x;
		this.distance = args.dist || 5;
		this.margeY = this.y+this.distance;
		this.margeX = this.x+this.distance;
		this.width = args.width || 5;
		this.height = args.height || 3;
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
		this.imageSprite = new ImageSprite({image : AssetsController.images.Props2, width : this.width+2, height : this.height+10,x:0,y:7, followRotation : true});

		Game.gameObjects.push(new GrabPoint({x : this.x - this.width , y : this.y - this.height/1.5, follow : this}));
		Game.gameObjects.push(new GrabPoint({x : this.x + this.width , y : this.y - this.height/1.5, follow : this}));
	}
	MovingPlateform.prototype.actions = function()
	{
		this.doWaitingActions();
		this.checkDirection();
		this.move(this.vec2);
		this.draw(this.ctx);
	}
	MovingPlateform.prototype.move = move;
	
	MovingPlateform.prototype.draw = draw;

	MovingPlateform.prototype.checkDirection = checkDirection;
	
	MovingPlateform.prototype.doWaitingActions = doWaitingActions;

	return MovingPlateform;
})