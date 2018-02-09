$(function() {
	$('.gnb>a.btn').click(function() {
		$(this).next().slideToggle();
	});
});