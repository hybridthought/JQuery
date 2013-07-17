//Document Load Event Handler.
//NOTE: JQuery events perform call backs to methods. Hence we pass the funciton in line.	
$(function(){                          	
	//Click event for .hover .off
	$('.off').mouseover(function(){
		$('.off').addClass('on');
		$('.off').removeClass('off');
	});
	
	//Click event for .hover .on
	$('.off').mouseleave(function(){
		$('.off').addClass('off');
		$('.off').removeClass('off');
	});
	
	//Click event for .hover .off
	$('.on').mouseover(function(){
		$('.on').addClass('off');
		$('.on').removeClass('on');
	});
	
	//Click event for .hover .on
	$('.on').mouseleave(function(){
		$('.on').addClass('on');
		$('.on').removeClass('off');
	});	
})
	
