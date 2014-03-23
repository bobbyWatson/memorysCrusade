define([], function (){

    var animationsList = function(args){
        var parent = args.parent;
        var body = parent.hitBox.GetBody();
        this.idleRight = {
            time : 1,
            sprites : [
                {x :0, y : 0, width : 211, height : 263},
                {x :211, y : 0, width : 211, height : 263},
                {x :422, y : 0, width : 211, height : 263}
            ],
            transitionTo : [
                {
                    animName : "runLeft",
                    conditions : function(){if(parent.moveMev.x < -0.5 &&
                                                 parent.canJump){return true}else{return false}}
                },
                {
                    animName : "runRight",
                    conditions : function(){if( parent.moveMev.x > 0.5 &&
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
                },
                {
                    animName : "pushRight",
                    conditions : function(){if(parent.joint !== undefined){return true;}else{return false;}}
                },
                {
                    animName : "climbFix",
                    conditions : function(){if(!body.hasGravity){return true;}else{return false;}}
                }
            ]
        },
        this.idleLeft = {
            time : 1,
            sprites : [
                {x :1055, y : 0, width : 211, height : 263},
                {x :844, y :0, width : 211, height : 263},
                {x :633, y : 0, width : 211, height : 263}
            ],
            transitionTo : [
                {
                    animName : "runLeft",
                    conditions : function(){if( parent.moveMev.x < -0.5 && 
                                                parent.canJump){return true}else{return false}}
                },
                {
                    animName : "runRight",
                    conditions : function(){if( parent.moveMev.x > 0.5 && 
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
                },
                {
                    animName : "pushLeft",
                    conditions : function(){if(parent.joint !== undefined){return true;}else{return false;}}
                },
                {
                    animName : "climbFix",
                    conditions : function(){if(!body.hasGravity){return true;}else{return false;}}
                }
            ]
        },
        this.runLeft = {
            time : 0.8,
            sprites : [
                {x :1470, y : 582, width : 210, height : 263},
                {x :1260, y : 582, width : 210, height : 263},
                {x :1050, y : 582, width : 210, height : 263},
                {x :840, y : 582, width : 210, height : 263},
                {x :630, y : 582, width : 210, height : 263},
                {x :420, y : 582, width : 210, height : 263},
                {x :210, y : 582, width : 210, height : 263},
                {x :0, y : 582, width : 210, height : 263}
            ],
            transitionTo : [
                {
                    animName : "idleLeft",
                    conditions : function(){if(parent.moveMev.x >= -0.5 && 
                                                parent.canJump){return true}else{return false}}
                },
                {
                    animName : "runLeft",
                    conditions : function(){if( parent.moveMev.x < -0.5 &&
                                                 parent.canJump &&
                                                 parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1){return true}else{return false}}
                },
                {
                    animName : "jumpLeft",
                    conditions : function(){if(!parent.canJump){return true}else{return false}}
                },
                {
                    animName : "pushLeft",
                    conditions : function(){if(parent.joint !== undefined){return true;}else{return false;}}
                },
                {
                    animName : "climbFix",
                    conditions : function(){if(!body.hasGravity){return true;}else{return false;}}
                }
            ]
        },
        this.runRight = {
            time : 0.8,
            sprites : [
                 {x :1470, y : 299, width : 210, height : 263},
                {x :1260, y : 299, width : 210, height : 263},
                {x :1050, y : 299, width : 210, height : 263},
                {x :840, y : 299, width : 210, height : 263},
                {x :630, y : 299, width : 210, height : 263},
                {x :420, y : 299, width : 210, height : 263},
                {x :210, y : 299, width : 210, height : 263},
                {x :0, y : 299, width : 210, height : 263}
            ],
            transitionTo : [
                {
                    animName : "idleRight",
                    conditions : function(){if(parent.moveMev.x <= 0.5 &&
                                                parent.canJump){return true}else{return false}}
                },
                {
                    animName : "runRight",
                    conditions : function(){if( parent.moveMev.x > 0.5 &&
                                                 parent.canJump &&
                                                 true &&
                                                 parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1){return true}else{return false}}
                },
                {
                    animName : "jumpRight",
                    conditions : function(){if(!parent.canJump){return true}else{return false}}
                },
                {
                    animName : "pushRight",
                    conditions : function(){if(parent.joint !== undefined){return true;}else{return false;}}
                },
                {
                    animName : "climbFix",
                    conditions : function(){if(!body.hasGravity){return true;}else{return false;}}
                }
            ]
        },
        this.jumpRight = {
            time : 0.2,
            sprites : [
                {x :0, y : 881, width : 190, height : 263},
                {x :190, y : 881, width : 190, height : 263},
                {x :380, y : 881, width : 190, height : 263},
                {x :570, y : 881, width : 190, height : 263},
                {x :760, y : 881, width : 190, height : 263},
                {x :950, y : 881, width : 190, height : 263}
            ],
            transitionTo : [
                {
                    animName : "runRight",
                    conditions : function(){if(parent.canJump){return true;}else{return false;}}
                },
                {
                    animName : "grabRight",
                    conditions : function(){if(parent.joint !== undefined){return true;}else{return false;}}
                },
                {
                    animName : "climbFix",
                    conditions : function(){if(!body.hasGravity){return true;}else{return false;}}
                }
            ] 
        },
        this.jumpLeft = {
            time : 0.2,
            sprites : [
                {x :940, y : 1192, width : 190, height : 263},
                {x :760, y : 1192, width : 190, height : 263},
                {x :570, y : 1192, width : 190, height : 263},
                {x :380, y : 1192, width : 190, height : 263},
                {x :190, y : 1192, width : 190, height : 263},
                {x :0, y : 1192, width : 190, height : 263}
            ],
            transitionTo : [
                {
                    animName : "runLeft",
                    conditions : function(){if(parent.canJump){return true;}else{return false;}}
                },
                {
                    animName : "grabLeft",
                    conditions : function(){if(parent.joint !== undefined){return true;}else{return false;}}
                },
                {
                    animName : "climbFix",
                    conditions : function(){if(!body.hasGravity){return true;}else{return false;}}
                }
            ] 
        },
        this.inAirLeft = {
            time : 0.5,
            sprites : [
                {x :0, y : 881, width : 190, height : 263},
                {x :190, y : 881, width : 190, height : 263},
                {x :380, y : 881, width : 190, height : 263},
                {x :570, y : 881, width : 190, height : 263},
                {x :760, y : 881, width : 190, height : 263},
                {x :950, y : 881, width : 190, height : 263}
            ],
            transitionTo : [
                {
                    animName : "inAirLeft",
                    conditions : function(){if( parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1 &&
                                                !parent.canJump){return true;}else{return false;}}
                },
                {
                    animName : "grabLeft",
                    conditions : function(){if(parent.joint !== undefined){return true;}else{return false;}}
                },
                {
                    animName : "runLeft",
                    conditions : function(){if(parent.canJump){return true;}else{return false;}}
                },
                {
                    animName : "climbFix",
                    conditions : function(){if(!body.hasGravity){return true;}else{return false;}}
                }
            ]
        },
        this.inAirRight = {
            time : 0.5,
            sprites : [
                {x :0, y : 881, width : 190, height : 263},
                {x :190, y : 881, width : 190, height : 263},
                {x :380, y : 881, width : 190, height : 263},
                {x :570, y : 881, width : 190, height : 263},
                {x :760, y : 881, width : 190, height : 263},
                {x :950, y : 881, width : 190, height : 263}
            ],
            transitionTo : [
                {
                    animName : "inAirRight",
                    conditions : function(){if( parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1 &&
                                                !parent.canJump){return true;}else{return false;}}
                },
                {
                    animName : "grabRight",
                    conditions : function(){if(parent.joint !== undefined){return true;}else{return false;}}
                },
                {
                    animName : "runRight",
                    conditions : function(){if(parent.canJump){return true;}else{return false;}}
                },
                {
                    animName : "climbFix",
                    conditions : function(){if(!body.hasGravity){return true;}else{return false;}}
                }
            ]
        },
        this.grabRight = {
            time : 0.2,
            sprites : [
                {x :380, y : 2154, width : 190, height : 263}
            ],
            transitionTo : [
                {
                    animName : "grabRight",
                    conditions: function(){if(parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1
                                            ){return true;}else{return false;}}    
                },
                 {
                    animName : "inAirRight",
                    conditions: function(){if(parent.joint == undefined){return true;}else{return false;}} 
                }
            ] 
        },
        this.grabLeft = {
            time : 0.2,
            sprites : [
                {x :950, y : 2412, width : 190, height : 263}
            ],
            transitionTo : [
                {
                    animName : "grabRight",
                    conditions: function(){if(parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1
                                            ){return true;}else{return false;}} 
                },
                {
                    animName : "inAirLeft",
                    conditions: function(){if(parent.joint == undefined){return true;}else{return false;}} 
                }
            ]
        },
        this.pushRight = {
            time : 1.75,
            sprites : [
                {x : 0, y : 1980, width : 136.5, height : 178},
                {x : 136.5, y : 1980, width : 136.5, height : 178},
                {x : 273, y : 1980, width : 136.5, height : 178},
                {x : 409.5, y : 1980, width : 136.5, height : 178},
                {x : 546, y : 1980, width : 136.5, height : 178},
                {x : 682.5, y : 1980, width : 136.5, height : 178},
                {x : 819, y : 1980, width : 136.5, height : 178},
                {x : 955.5, y : 1980, width : 136.5, height : 178},
                {x : 1092, y : 1980, width : 136.5, height : 178},
                {x : 1228.5, y : 1980, width : 136.5, height : 178},
                {x : 1365, y : 1980, width : 136.5, height : 178},
                {x : 1501.5, y : 1980, width : 136.5, height : 178},
                {x : 1774.5, y : 1980, width : 136.5, height : 178},
                {x : 1911, y : 1980, width : 136.5, height : 178},
            ],
            transitionTo : [
                {
                    animName : "pushRight",
                    conditions : function(){if((body.GetLinearVelocity().x > 0.5 ||
                                                body.GetLinearVelocity().x < -0.5) &&
                                                parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1){return true;}else{return false;}}
                },
                {
                    animName : "pushRightFix",
                    conditions : function(){if(body.GetLinearVelocity().x < 0.5 &&
                                                body.GetLinearVelocity().x > -0.5){return true;}else{return false;}}
                },
                {
                    animName : "idleRight",
                    conditions : function(){if(parent.joint === undefined){return true;}else{return false;}}
                }
            ]
        },
        this.pushRightFix = {
            time : 1,
            sprites : [
                {x : 0, y : 1980, width : 136.5, height : 178}
            ],
            transitionTo : [
                {
                    animName : "pushRightFix",
                    conditions : function(){if( parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1
                                            &&  body.GetLinearVelocity().x < 0.5 &&
                                                body.GetLinearVelocity().x > -0.5){return true;}else{return false;}}
                },
                {
                    animName : "pushRight",
                    conditions : function(){if(body.GetLinearVelocity().x > 0.5 ||
                                                body.GetLinearVelocity().x < -0.5){return true;}else{return false;}}
                },
                {
                    animName : "idleRight",
                    conditions : function(){if(parent.joint === undefined){return true;}else{return false;}}
                }
            ]
        },
        this.pushLeft = {
            time : 1.75,
            sprites : [
                {x : 1911, y : 2675, width : 136.5, height : 178},
                {x : 1774.5, y : 2675, width : 136.5, height : 178},
                {x : 1501.5, y : 2675, width : 136.5, height : 178},
                {x : 1365, y : 2675, width : 136.5, height : 178},
                {x : 1228.5, y : 2675, width : 136.5, height : 178},
                {x : 1092, y : 2675, width : 136.5, height : 178},
                {x : 955.5, y : 2675, width : 136.5, height : 178},
                {x : 819, y : 2675, width : 136.5, height : 178},
                {x : 682.5, y : 2675, width : 136.5, height : 178},
                {x : 546, y : 2675, width : 136.5, height : 178},
                {x : 409.5, y : 2675, width : 136.5, height : 178},
                {x : 273, y : 2675, width : 136.5, height : 178},
                {x : 136.5, y : 2675, width : 136.5, height : 178},
                {x : 0, y : 2675, width : 136.5, height : 178},
            ],
            transitionTo : [
                {
                    animName : "pushLeft",
                    conditions : function(){if((body.GetLinearVelocity().x > 0.5 ||
                                                body.GetLinearVelocity().x < -0.5) &&
                                                parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1){return true;}else{return false;}}
                },
                {
                    animName : "pushLeftFix",
                    conditions : function(){if(body.GetLinearVelocity().x < 0.5 &&
                                                body.GetLinearVelocity().x > -0.5){return true;}else{return false;}}
                },
                {
                    animName : "idleLeft",
                    conditions : function(){if(parent.joint === undefined){return true;}else{return false;}}
                }
            ]
        },
        this.pushLeftFix = {
            time : 1,
            sprites : [
                {x : 0, y : 2675, width : 136.5, height : 178}
            ],
            transitionTo : [
                {
                    animName : "pushLeftFix",
                    conditions : function(){if( parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1
                                            &&  body.GetLinearVelocity().x < 0.5 &&
                                                body.GetLinearVelocity().x > -0.5){return true;}else{return false;}}
                },
                {
                    animName : "pushLeft",
                    conditions : function(){if(body.GetLinearVelocity().x > 0.5 ||
                                                body.GetLinearVelocity().x < -0.5){return true;}else{return false;}}
                },
                {
                    animName : "idleRight",
                    conditions : function(){if(parent.joint === undefined){return true;}else{return false;}}
                }
            ]
        },
        this.climbFix = {
            time : 1,
            sprites : [
                {x : 0, y : 2837, width : 190, height : 263}
            ],
            transitionTo : [
                {
                    animName : "idleLeft",
                    conditions : function(){if(body.hasGravity){return true;}else{return false;}}
                },
                {
                    animName : "climb",
                    conditions : function(){;if(!body.hasGravity &&(
                                                parent.moveMev.y > 0.5 || parent.moveMev.y < -0.5)
                                                ){return true;}else{return false;}}
                },
                {
                    animName : "climbFix",
                    conditions : function(){if(!body.hasGravity &&
                                                parent.moveMev.y < 0.5 && parent.moveMev.y > -0.5
                                                ){return true;}else{return false;}}
                }
            ]
        },
        this.climb = {
            time : 0.8,
            sprites : [
                {x : 0, y : 2837, width : 210, height : 290},
                {x : 210, y : 2837, width : 210, height : 290},
                {x : 0, y : 2837, width : 210, height : 290}
            ],
            transitionTo : [
                {
                    animName : "idleLeft",
                    conditions : function(){if(body.hasGravity){return true;}else{return false;}}
                },
                {
                    animName : "climb",
                    conditions : function(){if(!body.hasGravity &&
                                                (parent.moveMev.y > 0.5 || parent.moveMev.y < -0.5) &&
                                                parent.animation.currentSprite === parent.animation.currentAnim.sprites.length-1
                                                ){return true;}else{return false;}}
                },
                {
                    animName : "climbFix",
                    conditions : function(){if(!body.hasGravity &&
                                                parent.moveMev.y < 0.5 && parent.moveMev.y > -0.5
                                                ){return true;}else{return false;}}
                }
            ]
        }
    }
    return animationsList;
})