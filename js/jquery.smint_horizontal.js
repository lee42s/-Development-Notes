/* http://www.outyear.co.uk/smint */

$(function(){
	$.fn.smint = function( options ) {
		var settings = $.extend({
			'scrollSpeed'  : 500,
			'mySelector'   : 'div'
		}, options);
		$(this).addClass('smint');
		var optionLocs = new Array(),
			lastScrollLeft = 0,
			menuWidth = $(".smint").width(),
			smint = $('.smint'),
        	smintA = $('.smint a'),
        	myOffset = smint.width();
		if ( settings.scrollSpeed ) {
			var scrollSpeed = settings.scrollSpeed
		}
		if ( settings.mySelector ) {
			var mySelector = settings.mySelector
		}
		return smintA.each( function(index) {
        	$(this).on('click', function(e){
				var myOffset = smint.width();
				e.preventDefault();					
				var hash = $(this).attr('href').split('#')[1];				
				var goTo =  $(mySelector+'.'+ hash).offset().left-menuWidth;				
				$("html, body").stop().animate({ scrollLeft: goTo }, scrollSpeed);
				smintA.removeClass('active')
				$(this).addClass("active");
			});
		});
	};
    $('.subMenu').smint({
	    'scrollSpeed' : 1000
    });
});