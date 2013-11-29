define(["Game", "B2D", "InputsHandler", "move", "control", "jump", "action", "doWaitingActions", "down", "up", "snapShoot", "draw", "death", "Spawn", "Zoom", "SpriteSheet", "Animation"],
	function (Game, Box2D, InputsHandler, move, control, jump, action, doWaitingActions, down, up, SnapShoot, draw, death, Spawn, Zoom, SpriteSheet, Animation){


	var Player = function Player (args){

		var x = args.x || 15;
		var y = args.y || 17;
		this.width = 1;
		this.height = 1.5;
		this.waitingActions = [];

		this.id = Game.ids;
		Game.ids++;
		this.zoom=1.5;
		this.tag = "Player";
		this.speedX = 2;
		this.speedY = 1;
		this.jumpForce = 75;
		this.canJump = true;
		this.photoTaken = false;
		this.hasGravity = true;
		this.actionButton = InputsHandler.keyCode.ctrl;
		this.jumpButton = InputsHandler.keyCode.space;
		this.spawn={x:x,y:y};
		//the hitbox
		this.hitBox = Game.createB2Object({
			x 		 : x,
			y 		 : y,
			radius	 : this.width,
			dynamism : Box2D.Body.b2_dynamicBody,
			friction : 0,
			density  : 0.2,
			shape	 : "circle"
		});
		//this.hitBox.GetBody().SetFixedRotation(true);
		this.hitBox.GetBody().SetLinearDamping(4.5);
		this.hitBox.GetBody().SetUserData(this);

		
		//inputs
		Game.on("pressKey"+this.jumpButton, jump, this);
		Game.on("pressKey"+this.actionButton, action, this);
		Game.on("pressKey"+ InputsHandler.keyCode.s, down, this);
		Game.on("pressKey"+ InputsHandler.keyCode.z, up, this);		
		Game.on("click", this.SnapShoot, this);
		Game.on("mousewheel",this.Zoom, this);
		
		//render
		var img = new Image();
		img.src= "./assets/img/player.png";
		Player.prototype.spriteSheet = new SpriteSheet({defaultAnimation : "idleRight", image : img, y : -2, height : 3, width: 1.5});
		Player.prototype.spriteSheet.addAnim({name : "idleRight", anim : { time : 1, 
																			sprites :[{x :0, y : 0, width : 50, height : 100},
																			 {x : 50, y : 0, width : 50, height : 100},
																			 {x : 100, y : 0, width : 50, height : 100},
																			 {x : 100, y : 0, width : 50, height : 100},
																			 {x : 150, y : 0, width : 50, height : 100},
																			 {x : 200, y : 0, width : 50, height : 100}]}})
		Player.prototype.animation = new Animation({parent: this});
	}

	Player.prototype.actions = function (){
		this.doWaitingActions();
		this.control();
		this.animation.animate();
		this.draw();
	}
	Player.prototype.death = death;

	Player.prototype.draw = draw;

	Player.prototype.draw = draw;

	Player.prototype.move = move;
	
	Player.prototype.Zoom = Zoom;
	
	Player.prototype.SnapShoot = SnapShoot;

	Player.prototype.control = control;
	
	Player.prototype.jump = jump;
	
	Player.prototype.action = action;
	
	Player.prototype.doWaitingActions = doWaitingActions;

	Player.prototype.doWaitingActions = doWaitingActions;



	return Player;
})