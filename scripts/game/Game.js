define(["Canvas", "AddEvent", "B2D", "createB2Object", "emitContactEvent", "emitEndContactEvent"], 
	function ( Canvas, addEventcapablity, Box2D, createB2Object, emitContactEvent, emitEndContactEvent){

	var Game = function Game (){
		this.ids = 0;
		this.gameObjects = [];
		this.waterArray = [];
		new Box2D();
		// this.contactListener = new Box2D.ContactListener();

		this.world 	= new Box2D.World(new Box2D.Vec2(0, 150), true);
		this.listener = new Box2D.ContactListener;
		this.world.SetContactListener( this.listener );
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

	Game.instance.listener.BeginContact = function (contact){Game.instance.emitContactEvent(contact)};
	
	Game.instance.listener.EndContact = function (contact){Game.instance.emitEndContactEvent(contact)};
	return Game.instance ;
});