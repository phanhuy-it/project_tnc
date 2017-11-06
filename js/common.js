$(document).ready(function() {
	"use strict";
	$('#menu-toggle').click(function() {
		$(this).toggleClass('active');
		$('#header .container_right').toggleClass('open');
	});
});

$(window).bind('load resize', function() {
	"use strict";
	if( $('#page-top').length === 0 ) {
		var header_h = $('#header').outerHeight();
		$('#main').css('margin-top', header_h);
	} else {
		$('#main').css('margin-top', 0);
	}
});

$(document).ready(function() {
    "use strict";
    if($('#candosoon_slider').length) {
    	$('#candosoon_slider').slick({
	        dots: false,
	        infinite: true,
	        speed: 800,
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        autoplay: true,
	        autoplaySpeed: 3000,
	        arrows: true,
	        pauseOnHover: false,
	        responsive: [{
	                breakpoint: 900,
	                settings: {
	                    slidesToShow: 3,
	                }
	            },
	            {
	                breakpoint: 641,
	                settings: {
	                    slidesToShow: 2,
	                }
	            },
	            {
	                breakpoint: 461,
	                settings: {
	                    slidesToShow: 1,
	                }
	            }
	        ]
	    });
    }
    if($('#campaign_slider').length) {
    	$('#campaign_slider').slick({
	        dots: false,
	        infinite: true,
	        speed: 800,
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        autoplay: true,
	        autoplaySpeed: 3000,
	        arrows: true,
	        pauseOnHover: false,
	        responsive: [{
	                breakpoint: 900,
	                settings: {
	                    slidesToShow: 3,
	                }
	            },
	            {
	                breakpoint: 641,
	                settings: {
	                    slidesToShow: 2,
	                }
	            },
	            {
	                breakpoint: 461,
	                settings: {
	                    slidesToShow: 1,
	                }
	            }
	        ]
	    });
    }
    if($('#feature_slider').length) {
    	$('#feature_slider').slick({
	        dots: false,
	        infinite: true,
	        speed: 800,
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        autoplay: true,
	        autoplaySpeed: 3000,
	        arrows: true,
	        pauseOnHover: false,
	        responsive: [{
	                breakpoint: 900,
	                settings: {
	                    slidesToShow: 2,
	                }
	            },
	            {
	                breakpoint: 641,
	                settings: {
	                    slidesToShow: 1,
	                }
	            }
	        ]
	    });
    }

    if(($(window).width() <= 1024) && ($('#popular_search').length) ) {
        $('#popular_search .box_tab .box_items').slick({
	        dots: false,
	        infinite: true,
	        speed: 800,
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        autoplay: true,
	        autoplaySpeed: 3000,
	        arrows: true,
	        pauseOnHover: false,
	        responsive: [
	            {
	                breakpoint: 641,
	                settings: {
	                    slidesToShow: 3,
	                }
	            },
	            {
	                breakpoint: 421,
	                settings: {
	                    slidesToShow: 2,
	                }
	            },
	            {
	                breakpoint: 361,
	                settings: {
	                    slidesToShow: 1,
	                }
	            }
	        ]
	    });
    }
});


$(window).bind('load scroll', function() {
    "use strict";
    if($('#page-top').length) {
        var position = $('#top_info').outerHeight();
        if($(this).scrollTop() >= position) {
            $('#header').removeClass('menu_top');
        } else {
            $('#header').addClass('menu_top');
        }
    }
});