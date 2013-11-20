define(["B2D"], function (Box2D){
	
	return function createB2Object (args){ // x , y , w , h , r , density , friction , restitution , type , shape
		var fixDef = new Box2D.FixtureDef();
    	fixDef.density = 1.0;
    	fixDef.friction = 0.5;
    	fixDef.restitution = 0.2;

    	var bodyDef = new Box2D.BodyDef(); 
    	bodyDef.type = args.dynamism || Box2D.Body.b2_dynamicBody; //dynamic or static
	    bodyDef.position.x = args.x || 0;
	    bodyDef.position.y = args.y || 0;

	    var radius = args.radius || 0.5;
	    var h = args.height || 1;
	    var w = args.width || 1;

	    if(args.shape == "box"){
	        fixDef.shape = new Box2D.PolygonShape;
	        fixDef.shape.SetAsBox(w, h);
        }else{
        	fixDef.shape = new Box2D.CircleShape(radius);
        }
        var object = this.world.CreateBody(bodyDef).CreateFixture(fixDef);
        return object;
	}
})