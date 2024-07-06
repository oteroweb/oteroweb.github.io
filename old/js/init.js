(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
      // $('#carouselser').carousel();

  }); // end of document ready
})(jQuery); // end of jQuery name space

 $(document).ready(function(){
  // $('.carousel.carousel-slider').slider();
      // $('.carouselx').carousel();
      // $('#carouselser').carousel();
$('.carousel.carousel-slider').carousel({full_width: true});

    });
        
 $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
        
// Smooth scroll for in page links
// Improved version from Satyajit Sahoo
// @see http://wibblystuff.blogspot.com.au/2014/04/in-page-smooth-scroll-using-css3.html
// Changes:
// - moved css transition detection outside of the event handler
// - detect vertical scrolling value in all cases, not only when css transitions are supported
// - optimise algorithm to determine the new vertical scrolling value
$(function() {
	var $window = $(window),
		$document = $(document),
		transitionSupported = typeof document.body.style.transitionProperty === 'string',
		scrollTime = 1; // scroll time in seconds

	$("a[href*=#]:not([href=#])").on("click", function(e) {
		var target,
			avail,
			scroll,
			deltaScroll;
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			target = $(this.hash);
			target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

			if (target.length) {
				avail = $document.height() - $window.height();

				if (avail > 0) {
					scroll = target.offset().top;
					if (scroll > avail) {
						scroll = avail;
					}
				} else {
					scroll = 0;
				}

				deltaScroll = $window.scrollTop() - scroll;

				// if we don't have to scroll because we're already at the right scrolling level, 
				if (!deltaScroll) { // do nothing
					return;
				}

				e.preventDefault();
				if (transitionSupported) {
					$("html").css({
						"margin-top": deltaScroll + "px",
						"transition": scrollTime + "s ease-in-out"
					}).data("transitioning", scroll);
				} else {
					$("html, body").stop(true, true) // stop potential other jQuery animation (assuming we're the only one doing it)
					.animate({
						scrollTop: scroll + 'px'
					}, scrollTime * 1000);
					return;
				}
			}
		}
	});

	if (transitionSupported) {
		$("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function(e) {
			var $this = $(this),
				scroll = $this.data("transitioning");
			if (e.target === e.currentTarget && scroll != null) {
				$this.removeAttr("style").data("transitioning", null);
				$("html, body").scrollTop(scroll);
			}
		});
	}
});
//   $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
//     }, 500);
//     return false;
// });
