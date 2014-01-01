(function(){
	//Constants
	var NUMBER_OF_STARTING_BUBBLES=20;
	//main
	var body = document.getElementsByTagName("body")[0];
	var bubbles = new Array();
	for (var i=0;i<NUMBER_OF_STARTING_BUBBLES;i++) {
		var bubble = new Bubble((Math.random()*window.innerWidth),(Math.random()*window.innerHeight),(Math.random()*80)+20);
		bubbles.push(bubble);
	}
	repaint();

	//methods
	function repaint() {
		for (var i=0;i<bubbles.length;i++) {
			var div = document.createElement("div");
			div.className = "bubble";
			div.style.left = bubbles[i].getXString();		
			div.style.top = bubbles[i].getYString();
			div.style.width = bubbles[i].getSizeString();		
			div.style.height = bubbles[i].getSizeString();
			body.appendChild(div);
		}
	}
})();