$(document).ready( function () {
	let screenWidth = $(document).width();
	let transitionDuration = 220;
	let mobileBreakpoint = 950;

	if (screenWidth > mobileBreakpoint) {
		$.jInvertScroll(['.oloz-main', '.oloz-scroll-bg']);
	}

	$('.oloz-home-link').click( () => {
		$.scrollTo('0', transitionDuration);
	})
	$('.oloz-about-link').click( () => {
		if (screenWidth > mobileBreakpoint) {
			$.scrollTo('50%', transitionDuration);
		}
		else {
			// mobile
			let totalScrollHeight = $("#oloz-home").outerHeight();
			$.scrollTo(totalScrollHeight, transitionDuration);
		}
	})
	$('.oloz-work-link').click( () => {
		if (screenWidth > mobileBreakpoint) {
			$.scrollTo('max', transitionDuration);
		}
		else {
			// mobile
			let totalScrollHeight = $("#oloz-home").outerHeight() + $("#oloz-about").outerHeight();
			$.scrollTo(totalScrollHeight, transitionDuration);
		}
	})
})