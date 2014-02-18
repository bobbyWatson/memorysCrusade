define(["Game","B2D","doWaitingActions","MaskControler", "grabCrates","draw", "ShapeSprite", "isPlayerOut"], 
	function (Game, Box2D, doWaitingActions,MaskControler, grabCrates, draw, ShapeSprite,isPlayerOut){

	var Cube = function Cube (args){

		this.id = Game.ids;
		Game.ids++;
		this.waitingActions = [];
		this.tag = "Caisse";
		
		this.playerInside = false;
		this.layer1 = MaskControler.Object;
		this.layer2 = MaskControler.ObjectHitbox;
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.height = args.height || 0.5;
		this.width = args.width || 1;
		this.hitBox = Game.createB2Object({
			x 		: this.x,
			y 		: this.y,
			width 	: this.width,
			height 	: this.height,
			dynamism: Box2D.Body.b2_dynamicBody,
			shape 	: "box",
			density : 0,
			friction: 0,
			restitution:0,
			layer   : this.layer1
		});
		this.actionbox = Game.createB2Object({
			x 		: this.x,
			y 		: this.y,
			height	: this.height*1,
			width 	: this.width*2,
			dynamism: Box2D.Body.b2_dynamicBody,
			shape 	: "box",
			density : 0,
			layer   : this.layer2
		});
		this.actionbox.SetSensor(true);
		this.hitBox.GetBody().SetLinearDamping(0);
		// this.hitBox.GetBody().SetFixedRotation(true);
		var jointDef = new Box2D.RevoluteJointDef();
		jointDef.bodyA = this.hitBox.GetBody();
		jointDef.bodyB = this.actionbox.GetBody();
		jointDef.localAnchorA.Set(0, 0);
		Game.world.CreateJoint(jointDef);
		this.shapeSprite = new ShapeSprite({color : "rgb(255,255,255)", width : this.width, height : this.height, shape : "box"});
		this.hitBox.GetBody().SetUserData(this);
		this.actionbox.GetBody().SetUserData(this);
		Game.on("gameObject"+this.id+"Collides", this.grabCrates, this);
		
		Game.on("gameObject"+this.id+"EndCollides", this.isPlayerOut, this);
	}

	Cube.prototype.grabCrates = grabCrates;
	
	Cube.prototype.isPlayerOut = isPlayerOut;
	Cube.prototype.actions = function (){
		this.doWaitingActions();
		this.draw();
	}
	Cube.prototype.doWaitingActions = doWaitingActions;
	Cube.prototype.draw = draw;
	return Cube;
})