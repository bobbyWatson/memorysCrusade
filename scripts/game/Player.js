define(["B2D", "move", "control", "jump", "action", "doWaitingActions", "down", "up"],
	function (Box2D, move, control, jump, action, doWaitingActions, down, up){

	var Player = function Player (args){
		var x = args.x || 15;
		var y = args.y || 17;
		this.w = 1;
		this.h = 1.5;
		this.waitingActions = [];

		this.id = Game.ids;
		Game.ids++;
		this.speed = 2;
		this.jumpForce = 50;
		this.canJump = true;
		this.onLadder = true;
		this.actionButton = Game.InputsHandler.keyCode.ctrl;
		this.jumpButton = Game.InputsHandler.keyCode.space;

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
		this.hitBox.GetBody().SetUserData(this.id);

		Game.on("pressKey"+this.jumpButton, jump, this);
		Game.on("pressKey"+this.actionButton, action, this);
		Game.on("pressKey"+ Game.InputsHandler.keyCode.down, down, this);
		Game.on("pressKey"+ Game.InputsHandler.keyCode.up, up, this);
	}

	Player.prototype.move = move;

	Player.prototype.control = control;
	
	Player.prototype.jump = jump;
	
	Player.prototype.action = action;
	
	Player.prototype.doWaitingActions = doWaitingActions;

	Player.prototype.doWaitingActions = doWaitingActions;

	return Player;
})