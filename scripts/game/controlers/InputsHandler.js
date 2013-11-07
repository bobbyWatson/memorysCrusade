define(["Game"], function (Game){

	var InputsHandler = function InputsHandler (){

		this.keyCode = {
			escape 		: 27,
			F1			: 112,
			F2			: 113,
			F3			: 114,
			F4			: 115,
			F5			: 116,
			F6			: 117,
			F7			: 118,
			F8			: 119,
			F9			: 120,
			F10			: 121,
			F11			: 122,
			F12			: 123,
			suppr		: 46,
			number1		: 49,
			number2		: 50,
			number3		: 51,
			number4		: 52,
			number5		: 53,
			number6		: 54,
			number7		: 55,
			number8		: 56,
			number9		: 57,
			number0		: 48,
			backspace	: 8,
			tab			: 9,
			caps_lock	: 20,
			shift		: 16,
			ctrl		: 17,
			alt			: 18,
			win			: 91,
			space		: 32,
			select		: 93,
			enter		: 13,
			a			: 65,
			b			: 66,
			c			: 67,
			d			: 68,
			e			: 69,
			f			: 70,
			g			: 71,
			h			: 72,
			i			: 73,
			j			: 74,
			k			: 75,
			l			: 76,
			m			: 77,
			n			: 78,
			o			: 79,
			p			: 80,
			q			: 81,
			r			: 82,
			s			: 83,
			t			: 84,
			u			: 85,
			v			: 86,
			w			: 87,
			x			: 88,
			y			: 89,
			z			: 90,
			left		: 37,
			up			: 38,
			down		: 40,
			right		: 39,
			numpad_0	: 96,
			numpad_1	: 97,
			numpad_2	: 98,
			numpad_3	: 99,
			numpad_4	: 100,
			numpad_5	: 101,
			numpad_6	: 102,
			numpad_7	: 103,
			numpad_8	: 104,
			numpad_9	: 105,
			point		: 110,
			add			: 107,
			substract	: 109,
			home		: 36,
			end			: 35,
			page_up		: 33,
			page_down	: 34,
			num_lock	: 144,
			divide		: 111,
			multiply	: 106
		}

		this.keys = [];
		for(var i = 0; i < 124; i++){
			this.keys[i] = false;
		}

		InputsHandler.instance = this;

	}

	InputsHandler.prototype.keyDown = function(e){
		this.keys[e.keyCode] = true;
		Game.emit("pressKey"+e.keyCode);
	}

	InputsHandler.prototype.keyUp = function(e){
		this.keys[e.keyCode] = false;
		Game.emit("releaseKey"+e.keyCode);
	}
	
	var inputsHandler = new InputsHandler();

	window.addEventListener("keydown",function(e){inputsHandler.keyDown(e)});

	window.addEventListener("keyup", function(e){inputsHandler.keyUp(e)});
	
	canvas.addEventListener("click", function(e){
		Game.emit("click",[e,{w:150,h:150}]);
	});

	return InputsHandler.instance;
})