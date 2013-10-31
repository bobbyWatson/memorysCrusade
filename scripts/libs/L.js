define([], function (){

	var L = function L (){

		L.Vector2 = {

			norme : function (params){
				var xA = params.objectA.x || params.xA || undefined;
				var yA = params.objectA.y || params.yA || undefined;
				var xB = params.objectB.x || params.xB || undefined;
				var yB = params.objectB.y || params.yB || undefined;

				if(xA === undefined || yA === undefined || xB === undefined || yB === undefined){
					console.log("L.Vector2.norme a récupéré un argument invalide");
					return false;
				}
				var result = Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));
				if(typeof params.decimal === "number" && params.decimal >0){
					return Math.round(result *(10*params.decimal))/(10*params.decimal);
				}
				return Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));
			}
		};

		L.Collide = {

			isInside : function (params){
				var objectA = params.objectA || undefined;
				var objectB = params.objectB || undefined;
				if ((objectA.x === undefined || objectA.y === undefined || objectA.width === undefined || objectA.height === undefined) ||
					(objectA.x === undefined || objectA.y === undefined || objectA.width === undefined || objectA.height === undefined)){
					console.log("L.Collide.isInside a récupéré un argument invalide");
					return false;
				}
				//objectA in objectB
				//x
				if ((objectA.x > objectB.x && objectA.x > objectB.x + objectB.width) ||
					 objectA.x + objectA.width > objectB.x){
					//y
					if (objectA.y > objectB.y && objectA.y < objectB.y.height){
						return true;
					}
					else if (objectA.y + objectA.height > objectB.y){
						return true;
					}
					return false;
				}
				//objectB in objectA
				//x
				if ((objectB.x > objectA.x && objectB.x > objectA.x + objectA.width) ||
					 objectB.x + objectB.width > objectA.x){
					//y
					if (objectA.y > objectB.y && objectA.y < objectB.y.height){
						return true;
					}
					else if (objectA.y + objectA.height > objectB.y){
						return true;
					}
					return false;
				}
			}
		}
	}
	new L();

	return L;

})