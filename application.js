$(document).ready(function(){
	$('#soundtrackHeader').on('click', function(event){
		event.preventDefault();
		$(this).closest('div').find('.soundtrack').fadeToggle('fast');
	});

	$('#excerciseHeader').on('click', function(event){
	event.preventDefault();
	$(this).closest('div').find('ul').fadeToggle('fast');
	});
});