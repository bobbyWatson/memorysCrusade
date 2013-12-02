define([], function (){

    var animationsList = function(args){
        var parent = args.parent;
        var body = parent.hitBox.GetBody();
        this.idleRight = {
            time : 5,
            sprites : [
                {x :0, y : 0, width : 50, height : 100},
                {x :50, y : 0, width : 50, height : 100},
                {x :100, y : 0, width : 50, height : 100},
                {x :150, y : 0, width : 50, height : 100},
                {x :200, y : 0, width : 50, height : 100},
                {x :250, y : 0, width : 50, height : 100},
                {x :300, y : 0, width : 50, height : 100},
                {x :350, y : 0, width : 50, height : 100},
                {x :400, y : 0, width : 50, height : 100},
                {x :450, y : 0, width : 50, height : 100}
            ],
            transitionTo : [
                {
                    animName : "runLeft",
                    conditions : function(){if( body.GetLinearVelocity().x < -0.5 &&
                                                 parent.canJump){return true}else{return false}}
                },
                {
                    animName : "runRight",
                    conditions : function(){if( body.GetLinearVelocity().x > 0.5 &&
                                                 parent.canJump){return true}else{return false}}
                },
                {
                    animName : "idleRight",
                    conditions : function(){if( body.GetLinearVelocity().x < 0.5 &&
                                                 body.GetLinearVelocity().x > -0.5 &&
                                                 parent.canJump &&
                                                 parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1){return true}else{return false}}
                }
            ]
        },
        this.idleLeft = {
            time : 5,
            sprites : [
                {x :0, y : 100, width : 50, height : 100},
                {x :50, y : 100, width : 50, height : 100},
                {x :100, y : 100, width : 50, height : 100},
                {x :150, y : 100, width : 50, height : 100},
                {x :200, y : 100, width : 50, height : 100},
                {x :250, y : 100, width : 50, height : 100},
                {x :300, y : 100, width : 50, height : 100},
                {x :350, y : 100, width : 50, height : 100},
                {x :400, y : 100, width : 50, height : 100},
                {x :450, y : 100, width : 50, height : 100}
            ],
            transitionTo : [
                {
                    animName : "runLeft",
                    conditions : function(){if( body.GetLinearVelocity().x < -0.5 && 
                                                parent.canJump){return true}else{return false}}
                },
                {
                    animName : "runRight",
                    conditions : function(){if( body.GetLinearVelocity().x > 0.5 && 
                                                parent.canJump){return true}else{return false}}
                },
                {
                    animName : "idleLeft",
                    conditions : function(){if( body.GetLinearVelocity().x > -0.5 &&
                                                 parent.canJump &&
                                                  parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1){return true}else{return false}}
                }
            ]
        },
        this.runLeft = {
            time : 0.5,
            sprites : [
                {x :0, y : 300, width : 50, height : 100},
                {x :50, y : 300, width : 50, height : 100},
                {x :100, y : 300, width : 50, height : 100},
                {x :150, y : 300, width : 50, height : 100},
                {x :200, y : 300, width : 50, height : 100},
                {x :250, y : 300, width : 50, height : 100}
            ],
            transitionTo : [
                {
                    animName : "idleLeft",
                    conditions : function(){if(body.GetLinearVelocity().x >= -0.5 && 
                                                parent.canJump){return true}else{return false}}
                },
                {
                    animName : "runLeft",
                    conditions : function(){if( body.GetLinearVelocity().x < -0.5 &&
                                                 parent.canJump &&
                                                 parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1){return true}else{return false}}
                }
            ]
        },
        this.runRight = {
            time : 0.5,
            sprites : [
                {x :0, y : 200, width : 50, height : 100},
                {x :50, y : 200, width : 50, height : 100},
                {x :100, y : 200, width : 50, height : 100},
                {x :150, y : 200, width : 50, height : 100},
                {x :200, y : 200, width : 50, height : 100}
            ],
            transitionTo : [
                {
                    animName : "idleRight",
                    conditions : function(){if(body.GetLinearVelocity().x <= 0.5 &&
                                                parent.canJump){return true}else{return false}}
                },
                {
                    animName : "runRight",
                    conditions : function(){if( body.GetLinearVelocity().x > 0.5 &&
                                                 parent.canJump &&
                                                 parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1){return true}else{return false}}
                }
            ]
        }
    }
    return animationsList;
})