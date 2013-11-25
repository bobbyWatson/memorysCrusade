define(["Game", "B2D", "InputsHandler", "death", "Spawn", "move", "control", "jump", "action", "doWaitingActions", "down", "up", "SnapShoot","Zoom"],
	function (Game, Box2D, InputsHandler, death, Spawn, move, control, jump, action, doWaitingActions, down, up, SnapShoot, Zoom){

	var Player = function Player (args){
		var x = args.x || 15;
		var y = args.y || 17;
		this.width = 1;
		this.height = 1.5;
		this.waitingActions = [];

		this.id = Game.ids;
		Game.ids++;
		this.zoom=1.5;
		this.speedX = 2;
		this.speedY = 1;
		this.jumpForce = 50;
		this.canJump = true;
		this.photoTaken = false;
		this.hasGravity = true;
		this.actionButton = InputsHandler.keyCode.ctrl;
		this.jumpButton = InputsHandler.keyCode.space;
		this.spawn={x:x,y:y};
		this.hitBox = Game.createB2Object({
			x 		 : x,
			y 		 : y,
			w		 : this.w,
			h		 : this.h,
			dynamism : Box2D.Body.b2_dynamicBody,
			friction : 0,
			density  : 0.2,
			shape	 : "box"
		});
		this.hitBox.GetBody().SetFixedRotation(true);
		this.hitBox.GetBody().SetLinearDamping(4.5);
		this.hitBox.GetBody().SetUserData(this);

		Game.on("pressKey"+this.jumpButton, jump, this);
		Game.on("pressKey"+this.actionButton, action, this);
		Game.on("pressKey"+ InputsHandler.keyCode.down, down, this);
		Game.on("pressKey"+ InputsHandler.keyCode.up, up, this);		
		Game.on("click", this.SnapShoot, this);
		Game.on("mousewheel",this.Zoom, this);
	}

	Player.prototype.actions = function (){
		this.doWaitingActions();
		this.control();
	}
	Player.prototype.death = death;
	
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