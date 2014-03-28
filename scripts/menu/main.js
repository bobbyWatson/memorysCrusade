
var imgMain=document.getElementById("imageMain");
var pressStart=document.getElementById("pressStart");
var pressStartContainer=document.getElementById("pressStartContainer");
var quitContainer=document.getElementById("quitContainer");
var quit=document.getElementById("quit");
var width=window.innerWidth;
var height=window.innerHeight
var displayMenu=TweenMax.from(imgMain, 2, {clip:"rect("+height+"px 50px 50px "+width+"px)",onComplete:showMenu})

function showMenu(){
	TweenMax.to(pressStart, 2, {width:"180px",height:"120px"})
	TweenMax.to(pressStartContainer, 2, {top:"700px",left:"700px"})
	TweenMax.to(quit, 2, {width:"180px",height:"120px"})
	TweenMax.to(quitContainer, 2, {top:"700px",left:"1290px"})
}
pressStart.addEventListener("mouseover",function(){
/*TweenMax.to(greenPulse, .3, {
    boxShadow: "0px 0px 10px 4px #f60",
    backgroundColor:"#f60",
    borderColor:"#f60"
});*/
	TweenMax.to(pressStart, 1, {width:"220px",height:"160px"})
	TweenMax.to(pressStartContainer, 1, {top:"680px",left:"680px"})
})


pressStart.addEventListener("mouseout",function(){
		TweenMax.to(pressStart, 1, {width:"180px",height:"120px"})
	TweenMax.to(pressStartContainer, 1, {top:"700px",left:"700px"})
/*	TweenMax.fromTo(greenPulse, 0.7, {
	    boxShadow: "0px 0px 0px 0px rgba(0,255,0,0.3)"
	}, {
	    boxShadow: "0px 0px 00px 0px rgba(0,255,0,0.7)",
	    repeat: -1,
	    yoyo: true,
	    ease: Linear.easeNone
	})*/
})
pressStart.addEventListener("click",function(){
	var contain=document.getElementById("wrapper");
	TweenMax.to(wrapper, 2, {opacity:"0",onComplete:function(){
	contain.style.display="none";
	//Game.level="level1";
	//Game.StartLevel();
	}});
/*	TweenMax.fromTo(greenPulse, 0.7, {
	    boxShadow: "0px 0px 0px 0px rgba(0,255,0,0.3)"
	}, {
	    boxShadow: "0px 0px 00px 0px rgba(0,255,0,0.7)",
	    repeat: -1,
	    yoyo: true,
	    ease: Linear.easeNone
	})*/
})
quit.addEventListener("mouseover",function(){
/*TweenMax.to(greenPulse, .3, {
    boxShadow: "0px 0px 10px 4px #f60",
    backgroundColor:"#f60",
    borderColor:"#f60"
});*/
	TweenMax.to(quit, 1, {width:"220px",height:"160px"});
	TweenMax.to(quitContainer, 1, {top:"680px",left:"1270px"});
})


quit.addEventListener("mouseout",function(){
	TweenMax.to(quit, 1, {width:"180px",height:"120px"});
	TweenMax.to(quitContainer, 2, {top:"700px",left:"1290px"});
/*	TweenMax.fromTo(greenPulse, 0.7, {
	    boxShadow: "0px 0px 0px 0px rgba(0,255,0,0.3)"
	}, {
	    boxShadow: "0px 0px 00px 0px rgba(0,255,0,0.7)",
	    repeat: -1,
	    yoyo: true,
	    ease: Linear.easeNone
	})*/
})
quit.addEventListener("click",function(){
	window.close();
/*	TweenMax.fromTo(greenPulse, 0.7, {
	    boxShadow: "0px 0px 0px 0px rgba(0,255,0,0.3)"
	}, {
	    boxShadow: "0px 0px 00px 0px rgba(0,255,0,0.7)",
	    repeat: -1,
	    yoyo: true,
	    ease: Linear.easeNone
	})*/
})