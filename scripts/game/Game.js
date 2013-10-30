define(["Canvas", "Run", "AddEvent", "InputsHandler", "B2D", "createB2Object", "StaticPlateform"], 
	function ( Canvas, Run, addEventcapablity, InputsHandler, Box2D, createB2Object, StaticPlateform){

	var Game = function Game (){
		this.canvas = Canvas;
		this.eventHandler = Event;
		this.InputHandler = InputsHandler;
		new Box2D();

		this.world 	= new Box2D.World(new Box2D.Vec2(0, 10), true);
		//setup debug draw
			this.debugDraw 	= new Box2D.DebugDraw();	
			this.debugDraw.SetSprite( this.canvas.ctx );
   			this.debugDraw.SetDrawScale(this.canvas.SCALE);
   			this.debugDraw.SetFillAlpha(0.3);
    		this.debugDraw.SetLineThickness(1.0);
    		this.debugDraw.SetFlags( Box2D.DebugDraw.e_shapeBit | Box2D.DebugDraw.e_jointBit );
			this.world.SetDebugDraw(this.debugDraw);

		Game.instance = this;
	}
	
	addEventcapablity(Game); 

	Game.prototype.run = Run;

	Game.prototype.createB2Object = createB2Object

	new Game();
	return Game.instance ;
});