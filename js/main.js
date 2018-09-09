$(document).ready( function () {
	console.log($(document).width());
	if ($(document).width() > 950) {
		$.jInvertScroll(['.oloz-main', '.oloz-scroll-bg']);
	}

	$('.oloz-home-link').click( () => {
		$.scrollTo('0', 220);
	})
	$('.oloz-about-link').click( () => {
		if ($(document).width() > 950) {
			$.scrollTo('50%', 220);
		}
		else {
			// mobile
			let totalScrollHeight = $("#oloz-home").height();
			console.log(totalScrollHeight);
			$.scrollTo(totalScrollHeight + 50, 220);
		}
	})
	$('.oloz-work-link').click( () => {
		if ($(document).width() > 950) {
			$.scrollTo('max', 220);
		}
		else {
			// mobile
			let totalScrollHeight = $("#oloz-home").height() + $("#oloz-about").height();
			console.log(totalScrollHeight);
			$.scrollTo(totalScrollHeight + 50, 220);
		}
	})
})