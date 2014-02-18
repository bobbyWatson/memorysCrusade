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
                },
                {
                    animName : "jumpRight",
                    conditions : function(){if( body.GetLinearVelocity().x >= -0.5 &&
                                                 !parent.canJump){return true}else{return false}}
                },
                {
                    animName : "jumpLeft",
                    conditions : function(){if( body.GetLinearVelocity().x < -0.5 &&
                                                 !parent.canJump){return true}else{return false}}
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
                },
                {
                    animName : "jumpRight",
                    conditions : function(){if( body.GetLinearVelocity().x > 0.5 &&
                                                 !parent.canJump){return true}else{return false}}
                },
                {
                    animName : "jumpLeft",
                    conditions : function(){if( body.GetLinearVelocity().x <= 0.5 &&
                                                 !parent.canJump){return true}else{return false}}
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
                },
                {
                    animName : "jumpRight",
                    conditions : function(){if( body.GetLinearVelocity().x > 0.5 &&
                                                 !parent.canJump){return true}else{return false}}
                },
                {
                    animName : "jumpLeft",
                    conditions : function(){if( body.GetLinearVelocity().x <= 0.5 &&
                                                 !parent.canJump){return true}else{return false}}
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
                {x :200, y : 200, width : 50, height : 100},
                {x :250, y : 200, width : 50, height : 100}
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
                                                 true &&
                                                 parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1){return true}else{return false}}
                },
                {
                    animName : "jumpRight",
                    conditions : function(){if( body.GetLinearVelocity().x >= -0.5 &&
                                                 !parent.canJump){return true}else{return false}}
                },
                {
                    animName : "jumpLeft",
                    conditions : function(){if( body.GetLinearVelocity().x < -0.5 &&
                                                 !parent.canJump){return true}else{return false}}
                }
            ]
        },
        this.jumpRight = {
            time : 1,
            sprites : [
                {x :0, y : 400, width : 50, height : 100},
                {x :50, y : 400, width : 50, height : 100},
                {x :100, y : 400, width : 50, height : 100},
                {x :150, y : 400, width : 50, height : 100},
                {x :200, y : 400, width : 50, height : 100},
                {x :250, y : 400, width : 50, height : 100}
            ],
            transitionTo : [
                {
                    animName : "inAirRight",
                    conditions : function(){if( body.GetLinearVelocity().y > 0 &&
                                                !parent.canJump){return true;}else{return false;}}
                }
            ] 
        },
        this.jumpLeft = {
            time : 1,
            sprites : [
                {x :0, y : 500, width : 50, height : 100},
                {x :50, y : 500, width : 50, height : 100},
                {x :100, y : 500, width : 50, height : 100},
                {x :150, y : 500, width : 50, height : 100},
                {x :200, y : 500, width : 50, height : 100},
                {x :250, y : 500, width : 50, height : 100}
            ],
            transitionTo : [
                {
                    animName : "inAirLeft",
                    conditions : function(){if( body.GetLinearVelocity().y > 0 &&
                                                !parent.canJump){return true;}else{return false;}}
                }
            ] 
        },
        this.inAirLeft = {
            time : 0.5,
            sprites : [
                {x :0, y : 600, width : 50, height : 100},
                {x :50, y : 600, width : 50, height : 100},
                {x :100, y : 600, width : 50, height : 100},
                {x :150, y : 600, width : 50, height : 100},
                {x :200, y : 600, width : 50, height : 100},
                {x :250, y : 600, width : 50, height : 100}
            ],
            transitionTo : [
                {
                    animName : "landLeft",
                    conditions : function(){if( parent.canJump){return true;}else{return false;}}
                }, 
                {
                    animName : "inAirLeft",
                    conditions : function(){if( parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1 &&
                                                !parent.canJump){return true;}else{return false;}}
                },
                {
                    animName : "inAirRight",
                    conditions : function(){if( body.GetLinearVelocity().x > 0.5 &&
                                                !parent.canJump){return true;}else{return false;}}
                }
            ]
        },
        this.inAirRight = {
            time : 0.5,
            sprites : [
                {x :0, y : 700, width : 50, height : 100},
                {x :50, y : 700, width : 50, height : 100},
                {x :100, y : 700, width : 50, height : 100},
                {x :150, y : 700, width : 50, height : 100},
                {x :200, y : 700, width : 50, height : 100},
                {x :250, y : 700, width : 50, height : 100}
            ],
            transitionTo : [
                {
                    animName : "landRight",
                    conditions : function(){if( parent.canJump){return true;}else{return false;}}
                },
                {
                    animName : "inAirRight",
                    conditions : function(){if( parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1 &&
                                                !parent.canJump){return true;}else{return false;}}
                },
                {
                    animName : "inAirLeft",
                    conditions : function(){if( body.GetLinearVelocity().x < -0.5 &&
                                                !parent.canJump){return true;}else{return false;}}
                }
            ]
        },
        this.landLeft = {
            time : 0.2,
            sprites : [
                {x :0, y : 800, width : 50, height : 100},
                {x :50, y : 800, width : 50, height : 100},
                {x :100, y : 800, width : 50, height : 100},
                {x :150, y : 800, width : 50, height : 100}
            ],
            transitionTo : [
                {
                    animName : "idleRight",
                    conditions : function(){if( parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1 && 
                                                body.GetLinearVelocity().x < 0.5 && 
                                                body.GetLinearVelocity().x > -0.5){return true;}else{return false;}}
                },
                {
                    animName : "runRight",
                    conditions :  function(){if( parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1 && 
                                                body.GetLinearVelocity().x >= 0.5 ){return true;}else{return false;}}
                }
            ]
        },
        this.landRight = {
            time : 0.2,
            sprites : [
                {x :0, y : 900, width : 50, height : 100},
                {x :50, y : 900, width : 50, height : 100},
                {x :100, y : 900, width : 50, height : 100},
                {x :150, y : 900, width : 50, height : 100}
            ],
            transitionTo : [
                {
                    animName : "idleLeft",
                    conditions : function(){if( parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1 && 
                                                body.GetLinearVelocity().x < 0.5 && 
                                                body.GetLinearVelocity().x > -0.5){return true;}else{return false;}}
                },
                {
                    animName : "runLeft",
                    conditions :  function(){if( parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1 && 
                                                body.GetLinearVelocity().x <= -0.5 ){return true;}else{return false;}}
                }
            ]
        }
    }
    return animationsList;
})