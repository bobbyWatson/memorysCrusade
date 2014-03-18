define(["Game", "Water"], function (Game, Water){

    var Generator = function Generator(args){

        this.id = Game.ids;
        Game.ids++;
        this.waitingActions = [];

        var x = args.x || 0;
        var y = args.y || 0;

        this.model = args.model;
        this.params = args.params;
        this.params.x = this.params.x === undefined ? x : this.params.x;
        this.params.y = this.params.y === undefined ? y : this.params.y;
        this.popTime = args.time;
        this.timePast = 0;
        this.objNumber = 0;
    }

    Generator.prototype.actions = function(){

        this.Generate();
    }

    Generator.prototype.Generate = function(){
        this.timePast++;
        if(this.timePast == this.popTime){
            this.timePast = 0;
            this.objNumber++;
            Game.gameObjects.push(new this.model(this.params));
        }
    }

    return Generator;
})