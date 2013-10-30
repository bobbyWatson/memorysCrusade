define(["B2D"], function (Box2D){
	
	return function createB2Object (args){ // x , y , w , h , density , friction , restitution , type , shape
		var fixDef = new Box2D.FixtureDef();
    	fixDef.density = args.density || 1.0;
    	fixDef.friction = args.friction || 0.5;
    	fixDef.restitution = args.restitution || 0.2;

    	var bodyDef = new Box2D.BodyDef(); 
    	console.log(args.dynamism);
    	bodyDef.type = args.dynamism || Box2D.Body.b2_dynamicBody; //dynamic or static
	    bodyDef.position.x = args.x || 0;
	    bodyDef.position.y = args.y || 0;

	    var r = args.r || 0.5
	    var h = args.h || 1
	    var w = args.w || 1

	    if(args.shape == "box"){
	        fixDef.shape = new Box2D.PolygonShape;
	        fixDef.shape.SetAsBox(w, h);
        }else{
        	fixDef.shape = new Box2D.CircleShape(w);
        }
        var object = this.world.CreateBody(bodyDef).CreateFixture(fixDef);
        return object;
	}
})