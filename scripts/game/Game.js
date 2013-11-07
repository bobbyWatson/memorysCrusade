define(["Canvas", "AddEvent", "B2D", "createB2Object", "emitContactEvent", "emitEndContactEvent"], 
	function ( Canvas, addEventcapablity, Box2D, createB2Object, emitContactEvent, emitEndContactEvent){

	var Game = function Game (){
		this.ids = 0;
		this.gameObjects = [];
		new Box2D();
		// this.contactListener = new Box2D.ContactListener();

		this.world 	= new Box2D.World(new Box2D.Vec2(0, 100), true);
		this.listener = new Box2D.ContactListener;
		this.world.SetContactListener( this.listener );
		this.listener.BeginContact = this.emitContactEvent;
		this.listener.EndContact = this.emitEndContactEvent;
		//setup debug draw
		var debugDraw = new Box2D.DebugDraw();	
		debugDraw.SetSprite( Canvas.ctx );
		debugDraw.SetDrawScale(Canvas.SCALE);
		debugDraw.SetFillAlpha(0.3);
		debugDraw.SetLineThickness(1.0);
		debugDraw.SetFlags(Box2D.DebugDraw.e_shapeBit | Box2D.DebugDraw.e_jointBit);
		this.world.SetDebugDraw(debugDraw);
		Game.instance = this;
	}
	
	addEventcapablity(Game); 

	Game.prototype.createB2Object = createB2Object;

	Game.prototype.emitContactEvent = emitContactEvent;
	
	Game.prototype.emitEndContactEvent = emitEndContactEvent;

	new Game();
	return Game.instance ;
});