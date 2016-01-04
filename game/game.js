
var planeLeft = window.innerWidth/2;
var planesLeft = 0;
var bulletLeft = planeLeft;
var step = 2;
var bullets = 100;
var point = 0;
var move = {
	west: false,
	east: false
};
function handleMove(keyCode, state) {
	switch (keyCode) {
		
		case 37:
			move.west = state;
			break;
		case 39:
			move.east = state;
			break;
		default:
			break;
	}
}
window.addEventListener('DOMContentLoaded', function() {
	var plane = document.getElementById('plane');
	var bullet = document.getElementById("bullet");
	var planes = document.getElementById("planes");
	
	document.addEventListener('keydown', function(event){
		handleMove(event.keyCode, true)
	}, false);

	document.addEventListener('keyup', function(event){
		handleMove(event.keyCode, false)
	}, false);
	
	// move plane left and right
	function gameLoop() {

		if (move.west && planeLeft > 0) {
			planeLeft -= step;
		}
		
		if (move.east && planeLeft < (window.innerWidth - 170)) {
			planeLeft += step;
		}
		plane.style.left = planeLeft + 'px';
		bullet.style.left = planeLeft + 82+ 'px';
		requestAnimationFrame(gameLoop)
	}
	gameLoop();
	
	
	var id = setInterval(planesMove, 7);
	function planesMove(){
			if(planesLeft == window.innerWidth - 101){
				planesLeft = 0;
				
			} else{ 
				planesLeft++;
				planes.style.left = planesLeft + 'px';		
			}
		}
	window.addEventListener('click', function (){
			bullets-=1;
			var id2 = setInterval(bulletMove, 5);
			var pos1 = 100;
			function bulletMove(){
				if(pos1 == window.innerHeight){
					clearInterval(id2);
				}
				else{
					pos1++;
					bullet.style.bottom = pos1 + 'px';
				}
				
				if(pos1 >= window.innerHeight - 75 && bullet.style.left >= planesLeft - 50 +'px' && bullet.style.left <= planesLeft + 50 +'px'){
					planesLeft = 0;
				}
				
				var i = setInterval(count, 1000);
				function count(){				
					document.getElementById("bullets").innerHTML = "Bullets: " + bullets;
					if (bullets == 0){
						alert("your points are: " +point);
					}
				}
				
			}
		},false);
	
	
	
}, false)