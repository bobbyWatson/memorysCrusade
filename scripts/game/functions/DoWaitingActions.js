define([], function (){

	return function DoWaitingActions (){
		for(var i = 0; i < this.waitingActions.length; i++){
			this.waitingActions[i][0].apply(this, this.waitingActions[i][1]);
		}
		this.waitingActions = [];
	}
})