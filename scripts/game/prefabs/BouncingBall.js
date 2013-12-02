define(["Game", "B2D", "doWaitingActions", "ImageSprite", "draw", "AssetsController"], function (Game, Box2D, doWaitingActions, ImageSprite, draw, AssetsController){

	var BouncingBall = function BouncingBall (args){

		this.id = Game.ids;
		Game.ids++;
		this.waitingActions = [];
		
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.radius = args.radius || 2;

		this.hitBox = Game.createB2Object({
			x 			: this.x,
			y	 		: this.y,
			radius 		: this.radius,
			dynamism	: Box2D.Body.b2_dynamicBody,
			shape 		: "circle",
			friction	: 0.2,
			density		: 0.2,
			restitution : 1
		});

		this.hitBox.GetBody().SetUserData(this);

		this.imageSprite = new ImageSprite({image : AssetsController.images.bouncingBall, width : this.radius, height : this.radius, followRotation : true});
	}

	BouncingBall.prototype.doWaitingActions = doWaitingActions;

	BouncingBall.prototype.actions = function (){
		this.doWaitingActions();
		this.draw();
	}

	BouncingBall.prototype.draw = draw;
	

	return BouncingBall;
})