
//This is equivalent to $(document).ready() which fires when page is fully loaded.
$(function(){
	$('#box1').click(function(){
        //JQuery Method To Access Attributes Of An Element. (This Referes to Target Of Selection.)
		var id = $(this).attr('id');
		
		//Javascript Command To Print To The Javascript Console
		console.log('Element [' + id + '] Click'); 
		
		//Write Click To The Block
		$(this).text('Click');		
	});	
	
	$('#box2').dblclick(function(){
		//Log
		var id = $(this).attr('id');
		console.log('Element [' + id + '] Double Click'); 
		
		//Write Click To The Block
		$(this).text('Double Click');		
	});
	
	$('#box3').mouseenter(function(){
		//Log
		var id = $(this).attr('id');
		console.log('Element [' + id + '] Mouse Enter'); 
		
		//Write Click To The Block
		$(this).text('Mouse Enter');		
	}).mouseleave(function(){
		//Log
		var id = $(this).attr('id');
		console.log('Element [' + id + '] Mouse Leave'); 
		
		//Write Click To The Block
		$(this).text('Mouse Leave');
	});
	
	$('#box4').hover(function(){
		//Log
		var id = $(this).attr('id');
		console.log('Element [' + id + '] Hover In'); 
		
		//Write Click To The Block
		$(this).text('Hover In');		
	},	function(){
			//Log
			var id = $(this).attr('id');
			console.log('Element [' + id + '] Hover Out'); 

			//Write Click To The Block
			$(this).text('Hover Out');
	});
})
