//Document Load Event Handler.
//NOTE: JQuery events perform call backs to methods. Hence we pass the funciton in line.	
$(function(){                          	
	alert('Jukebox Turned On');
	play(songs['headlikeahole'])
	play(songs['goodfellow'])
	play(songs['happybirthday'])
	alert('Jukebox Turned Off');
})

       
//Defining a map of key to callback methods.
var songs = {
    'headlikeahole': 
		function (){
			alert('Head like a hole!!!');
			alert('Performed by NIN.');
		},

	'goodfellow': 
		function (){
			alert('For He is a Jolly Good Fellow!');
   			alert('Performed by Drunk People.');
		},
		
		
	'happybirthday': 
		function (){
			alert('Happy Birthday To You');
   			alert('Performed by folks at a B-Day party!!!');
		}
}
 
//Code used to invoke a song;
function play(song){
	alert('Song Started!');
	song.call();
	alert('Song Ended')
}	
