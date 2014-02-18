define(["Game", "Water"], function (Game, Water){

    var Generator = function Generator(args){

        this.id = Game.ids;
        Game.ids++;
        this.waitingActions = [];

        var x = args.x || 0;
        var y = args.y || 0;

        this.model = args.model;
        this.params = args.params;
        this.popTime = args.time;
        this.timePast = 0;
        this.objNumber = 0;
        //this.instanciationArray = Water === this.model? Game.gameObjects : Game.gameObjects;
    }

    Generator.prototype.actions = function(){

        this.Generate();
    }

    Generator.prototype.Generate = function(){
        this.timePast++;
        if(this.timePast == this.popTime){
            this.timePast = 0;
            this.objNumber++;
            console.log(this.objNumber);
            //this.instanciationArray.push(new this.model(this.params));
            Game.gameObjects.push(new this.model(this.params));
        }
    }

    return Generator;
})