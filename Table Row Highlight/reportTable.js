//Document Load Event Handler.
//NOTE: JQuery events perform call backs to methods. Hence we pass the funciton in line.	
$(function(){                          	
	var date = "";
	var site = "";
	var operation = "";
	
	$('#date').change(function(){ 
		date = $('#date').val();
        	filter();
	});
	
		
	$('#site').change(function(){ 
		site = $('#site').val();
        	filter();
	});
	
	$('#operation').change(function(){ 
		operation = $('#operation').val();
        	filter();
	}); 
	

	function filter(){
		var hasFilter = false;
		var select = $('td');
		select.removeClass('highlight');

		if(date != ""){
			select = select.filter("td:contains('" + date + "')").parent();
			hasFilter = true;
		}
		if(site != ""){
			select = select.filter(buildSelect('CLIENT', site));
			hasFilter = true;
		}
		if(operation != ""){
			select = select.filter(buildSelect('OPERATION', operation));
			hasFilter = true;
		}
		
		if(hasFilter){
			select.addClass('highlight');
		}		
	}

	
	function filter_(){
		var hasFilter = false;
		var select = $('tr');
		select.removeClass('highlight');

		if(date != ""){
			select = select.filter(buildSelect('DATE', date));
			hasFilter = true;
		}
		if(site != ""){
			select = select.filter(buildSelect('CLIENT', site));
			hasFilter = true;
		}
		if(operation != ""){
			select = select.filter(buildSelect('OPERATION', operation));
			hasFilter = true;
		}
		
		if(hasFilter){
			select.addClass('highlight');
		}		
	}
	
	function buildSelect(key, data){	
		var selector = 'tr[name*="{' + key + '}' + data + '"]';
		return selector;
	}
})