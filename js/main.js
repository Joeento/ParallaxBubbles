(function(){
	
	//Constants
	var NUMBER_OF_STARTING_BUBBLES=20;
	//main
	var body = document.getElementsByTagName("body")[0];
	var bubbles = new Array();
	for (var i=0;i<NUMBER_OF_STARTING_BUBBLES;i++) {
		var bubble = new Bubble("bubble"+i,(Math.random()*window.innerWidth),(Math.random()*window.innerHeight),(Math.random()*80)+20);
		var div = document.createElement("div");
		div.className = "bubble";
		div.id="bubble"+i;
		div.style.left = bubble.getXString();		
		div.style.top = bubble.getYString();
		div.style.width = bubble.getSizeString();		
		div.style.height = bubble.getSizeString();
		body.appendChild(div);
		bubbles.push(bubble);
	}

	window.addEventListener("scroll", function(evt) {
		
    	repaint();
	});

	//methods
	var lastScrollTop = 0;
	function repaint() {
		var currentScrollTop = document.body.scrollTop;
		for (var i=0;i<bubbles.length;i++) {
			
			if (lastScrollTop<currentScrollTop) {
				bubbles[i].float();
			} else {
				bubbles[i].sink();
			}
			console.log(lastScrollTop+" vs. "+currentScrollTop);
			


			var bubbleDiv = document.getElementById(bubbles[i].divName)
			bubbleDiv.style.left = bubbles[i].getXString();		
			bubbleDiv.style.top = bubbles[i].getYString();
			bubbleDiv.style.width = bubbles[i].getSizeString();		
			bubbleDiv.style.height = bubbles[i].getSizeString();
		}
		console.log(lastScrollTop+" vs. "+currentScrollTop);
		lastScrollTop = currentScrollTop;
	}
})();