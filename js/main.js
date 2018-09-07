$(document).ready( function () {
	console.log($(document).width());
	if ($(document).width() > 950) {
		$.jInvertScroll(['.oloz-main']);
	}
})