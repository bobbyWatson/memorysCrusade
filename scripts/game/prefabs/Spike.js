define(["B2D","doWaitingActions","Game","touchPlayer", "MaskControler"], function (Box2D, doWaitingActions,Game,touchPlayer,MaskControler){

	var Spike = function Spike (args){

		this.id = Game.ids;
		Game.ids++;
		this.waitingActions = [];
		
		this.timeToStay = 2.0;
		this.objects = [];
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.height = args.height || 0;
		this.width = args.width || 0;
		this.hasGravity=false;
		this.layer=MaskControler.Spike;
		this.hitBox = Game.createB2Object({
			x 		: this.x,
			y 		: this.y,
			height	: this.height,
			width 	: this.width,
			density : 0,
			dynamism: Box2D.Body.b2_dynamicBody,
			shape 	: "box",
			layer   : this.layer
		});
		this.hitBox.SetSensor(true)
		this.hitBox.GetBody().SetUserData(this);
		this.hitBox.GetBody().hasGravity=false;
		Game.on("gameObject"+this.id+"Collides", this.touchPlayer, this);	
		this.hitBox.GetBody().SetLinearVelocity(new Box2D.Vec2(0,0.1));
	}

	Spike.prototype.actions = function (){
		this.minusTime()
	}
	
	Spike.prototype.touchPlayer = touchPlayer;
	
	Spike.prototype.doWaitingActions = doWaitingActions;

	Spike.prototype.minusTime = function (){

		this.timeToStay -= 1/60;
		if(this.timeToStay <= 0){
			this.hitBox.GetBody().SetLinearVelocity(new Box2D.Vec2(0,5));
			// this.hitBox.GetBody().SetLinearVelocity(new Box2D.Vec2(0,1));
			this.hitBox.GetBody().hasGravity=true;
		}
	}
	return Spike;
})