/*
	JQuery Selectors use a simliar notation to CSS to locate elements in the dom.

	EXAMPLE
		$(p)											//Type Selector
		$(#element)								//Id Selector
		$(.element)								//Class Selector
		$(input[type="button"])		//Attribute Selector.  Select all input elements with type button.
		$(p,img)									//Selecting Multiple Elements (Select all P and IMG tags).
		$(p img)									//Nested Select (Select those IMG tags nested within P tags).
		$(li:first)								//Pseudo Selector: Grab first li element in a group.
		$(li:last)								//Pseudo Selector: Grab lie li element in a group.						
*/



//NOTE:The following two lines are identical. $ is most common.
//	$('img')
//	jquery('img')

//Document Load Event Handler.
//NOTE: JQuery events perform call backs to methods. Hence we pass the funciton in line.	
$(function(){
	
	//Alert When The Document Is Loaded.
	alert('Hello JQuery');
	
	//Create a click event img tags.
	$('img').click(function(){
		$(this).hide('slow');
	});
	
	//Click event for #highlight button.
	$('#highlight').click(function(){
		var highlightClass = 'highlight';
		
		//Remove highlight class from all elements.
		$('.highlight').removeClass(highlightClass);
		
		//Apply highlight to user defined selected elements.
		var selector = $('#selector').val();
		$(selector).addClass(highlightClass);
	});
})
	
