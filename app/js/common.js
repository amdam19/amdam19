$(document).ready(function($) {
	
	$('.fa-caret-down').bind('click', function() {
		$('.other-phones').toggleClass('d-none');
	});


	$(function() {
	    $("a[href^='#']").click(function() {
	        var _href = $(this).attr("href");
	        $("html, body").animate({ scrollTop: $(_href).offset().top - 200 });
	        return false;
	    });
	});

	jQuery(function($){
	   $("#phone").mask("+7 (999) 999-99-99");
	});
});