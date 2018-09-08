$(document).ready( function () {
	console.log($(document).width());
	if ($(document).width() > 950) {
		$.jInvertScroll(['.oloz-main', '.oloz-scroll-bg']);
	}

	$('.oloz-home-link').click( () => {
		$.scrollTo('0', 220);
	})
	$('.oloz-about-link').click( () => {
		$.scrollTo('50%', 220);
	})
	$('.oloz-work-link').click( () => {
		$.scrollTo('max', 220);
	})
})