define(["Game", "B2D", "InputsHandler", "move", "control", "jump", "action", "doWaitingActions", "down", "up", "snapShoot", "draw", "death", "Spawn", "Zoom", "SpriteSheet", "./game/data/animations/player_anim", "Animation", "AssetsController", "MaskControler"],
	function (Game, Box2D, InputsHandler, move, control, jump, action, doWaitingActions, down, up, SnapShoot, draw, death, Spawn, Zoom, SpriteSheet, player_anim, Animation, AssetsController, MaskControler){

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
		this.speedX = 4 ;
		this.speedY = 3;
		this.jumpForce = 250;
		this.canJump = true;
		this.photoTaken = false;
		this.hasGravity = true;
		this.actionButton = InputsHandler.keyCode.ctrl;
		this.jumpButton = InputsHandler.keyCode.space;

		this.spawn={x:x,y:y};
		this.layer = MaskControler.Player;
		//the hitbox
		this.hitBox = Game.createB2Object({
			x 		 : x,
			y 		 : y,
			radius	 : this.width,
			dynamism : Box2D.Body.b2_dynamicBody,
			friction : 0,
			density  : 0.2,
			shape	 : "circle",
			layer    : this.layer
		});
		this.hitBox.GetBody().SetLinearDamping(8);
		this.hitBox.GetBody().SetUserData(this);

		this.jointCenter = Game.createB2Object({
			x 		 : x,
			y 		 : y,
			radius	 : 0.5,
			dynamism : Box2D.Body.b2_dynamicBody,
			friction : 0,
			density  : 0.2,
			shape	 : "circle",
			layer    : this.layer
		});
		this.jointCenter.GetBody().SetUserData(this);
		this.jointCenter.SetSensor(true);
		this.jointCenter.GetBody().SetFixedRotation(true);

		this.jumpBox = Game.createB2Object({
			x 		 : x,
			y 		 : y,
			width	 : this.width-0.2,
			height	 : 0.2,
			dynamism : Box2D.Body.b2_dynamicBody,
			friction : 0,
			density  : 0.2,
			shape	 : "box",
			layer    : this.layer
		});
		this.jumpBox.GetBody().SetUserData(this);
		this.jumpBox.SetSensor(true);
		this.jumpBox.GetBody().SetFixedRotation(true);

		this.hitBox2 = Game.createB2Object({
			x 		 : x,
			y 		 : y,
			width	 : this.width-0.2,
			height	 : this.height,
			dynamism : Box2D.Body.b2_dynamicBody,
			friction : 0,
			density  : 0.5,
			shape	 : "box",
			layer    : this.layer
		});
		this.hitBox2.GetBody().SetUserData(this);
		this.hitBox2.SetSensor(true);
		this.hitBox2.GetBody().SetFixedRotation(true);

		var jointDef = new Box2D.RevoluteJointDef();
		jointDef.bodyA = this.hitBox.GetBody();
		jointDef.bodyB = this.jointCenter.GetBody();
		jointDef.localAnchorA.Set(0, 0);
		Game.world.CreateJoint(jointDef);

		var jointDef = new Box2D.RevoluteJointDef();
		jointDef.bodyB = this.jumpBox.GetBody();
		jointDef.bodyA = this.jointCenter.GetBody();
		jointDef.localAnchorA.Set(0, +1);
		Game.world.CreateJoint(jointDef);

		var jointDef = new Box2D.RevoluteJointDef();
		jointDef.bodyB = this.hitBox2.GetBody();
		jointDef.bodyA = this.jointCenter.GetBody();
		jointDef.localAnchorA.Set(0, -1.5);
		Game.world.CreateJoint(jointDef);

		//inputs
		Game.on("pressKey"+this.jumpButton, jump, this);
		Game.on("pressKey"+this.actionButton, action, this);
		Game.on("pressKey"+ InputsHandler.keyCode.s, down, this);
		Game.on("pressKey"+ InputsHandler.keyCode.z, up, this);		
		Game.on("click", this.SnapShoot, this);
		Game.on("mousewheel",this.Zoom, this);
		
		//render
		var myAnim = new player_anim({parent : this})
		
		Player.prototype.spriteSheet = new SpriteSheet({defaultAnimation : "idleRight", image : AssetsController.images.player, y : -2, height : 3, width: 1.5, animations : myAnim});
		
		Player.prototype.animation = new Animation({parent: this});
		
	}

	Player.prototype.actions = function (){
	//console.log(MaskControler.Player.categoryBits);
		this.doWaitingActions();
		this.control();
		this.animation.checkNext();
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

	return Player;
})