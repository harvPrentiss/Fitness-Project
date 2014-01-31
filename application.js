$(document).ready(function(){
	$('.flipperButtonFront').on('mouseover', function(){
		$('.front').addClass('frontFlipped');
		console.log('front flipped');
		$('.back').addClass('backFlipped');
		console.log('back flipped');
	})
});