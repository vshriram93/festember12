$(document).ready(function() {
	var startX,startY;

	$(document).one('mouseover', function(e) {
		startX = e.pageX;
		startY = e.pageY;
	});
	$(document).bind('mousemove', function(e) {
		$("#logo-head-bg").css(
			{"background-position-x": ((5000 - e.pageX + startX)/3) - 30 }
			);
		$("#logo-under-head-bg").css(
			{"background-position-y": ((5000 - e.pageY + startY)/10) + 35 }
			);
	});
		
	
});
