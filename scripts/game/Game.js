define(["Canvas", "Run", "AddEvent", "InputsHandler", "B2D", "createB2Object", "StaticPlateform", "Init"], 
	function ( Canvas, Run, addEventcapablity, InputsHandler, Box2D, createB2Object, StaticPlateform, Init){

	var Game = function Game (){
		this.ids = 0;
		this.gameObjects = [];
		this.canvas = Canvas;
		this.eventHandler = Event;
		this.InputsHandler = InputsHandler;
		new Box2D();

		this.world 	= new Box2D.World(new Box2D.Vec2(0, 10), true);
		//setup debug draw
			this.debugDraw 	= new Box2D.DebugDraw();	
			this.debugDraw.SetSprite( this.canvas.ctx );
   			this.debugDraw.SetDrawScale(this.canvas.SCALE);
   			this.debugDraw.SetFillAlpha(1);
    		this.debugDraw.SetLineThickness(1.0);
    		this.debugDraw.SetFlags( Box2D.DebugDraw.e_shapeBit | Box2D.DebugDraw.e_jointBit );
			this.world.SetDebugDraw(this.debugDraw);

		Game.instance = this;
	}
	
	addEventcapablity(Game); 

	Game.prototype.run = Run;

	Game.prototype.createB2Object = createB2Object;

	Game.prototype.init = Init;

	new Game();
	return Game.instance ;
});