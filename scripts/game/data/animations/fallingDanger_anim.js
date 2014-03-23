define([], function (){

    var animationsList = function(args){
        var parent = args.parent;
        var body = parent.hitBox.GetBody();
        this.fall = {
            time : 1.5,
            sprites : [
                {x :0, y : 0, width : 100, height : 150}
            ],
            transitionTo : [
                {
                    animName : "explode",
                    conditions : function(){if(parent.explode){body.hasGravity = false; body.SetLinearVelocity({x:0,y:0}); return true}else{return false}}
                },
                {
                    animName : "fall",
                    conditions : function(){if( !parent.explode && 
                                                parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1
                                                ){return true}else{return false}}
                }
            ]
        },
        this.explode = {
            time : 0.25,
            sprites : [
                {x :100, y : 0, width : 100, height : 150},
                {x :200, y : 0, width : 100, height : 150},
                {x :300, y : 0, width : 100, height : 150},
                {x :400, y : 0, width : 100, height : 150},
                {x :400, y : 0, width : 100, height : 150}
            ],
            transitionTo : [
                {
                    animName : "explode",
                    conditions : function(){if(parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1){parent.isDead = true; return false;}else{return false}}
                }
            ]
        }
    }
    return animationsList;
})