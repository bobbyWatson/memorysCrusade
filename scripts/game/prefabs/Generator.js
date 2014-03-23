define(["Game", "isOnScreen"], function (Game, isOnScreen){

    var Generator = function Generator(args){

        this.id = Game.ids;
        Game.ids++;
        this.waitingActions = [];

        this.x = args.x || 0;
        this.y = args.y || 0;

        this.model = args.model;
        this.params = args.params;
        this.params.x = this.params.x === undefined ? this.x : this.params.x;
        this.params.y = this.params.y === undefined ? this.y : this.params.y;
        this.popTime = args.time;
        this.timePast = 0;
        this.objNumber = 0;
    }

    Generator.prototype.actions = function(){
        if(this.isOnScreen())
        {
            this.Generate();
        }
    }

    Generator.prototype.Generate = function(){
        this.timePast++;
        if(this.timePast == this.popTime){
            this.timePast = 0;
            this.objNumber++;
            Game.gameObjects.push(new this.model(this.params));
        }
    }

    Generator.prototype.isOnScreen = isOnScreen

    return Generator;
})