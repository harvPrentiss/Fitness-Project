$(document).ready(function(){
	$('#soundtrackHeader').on('click', function(event){
		event.preventDefault();
		$(this).closest('div').find('.soundtrack').fadeToggle('fast', 'swing');
	});

	$('#excerciseHeader').on('click', function(event){
	event.preventDefault();
	$(this).closest('div').find('ul').fadeToggle('fast', 'swing');
	});
});