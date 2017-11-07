//menu icon
$(document).ready(function() {
    "use strict";
    $('#menu-toggle').click(function() {
        $(this).toggleClass('active');
        $('#header .container_right').toggleClass('open');
    });
});

//slider
$(document).ready(function() {
    "use strict";
    if ($('#candosoon_slider').length) {
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
    if ($('#campaign_slider').length) {
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
    if ($('#feature_slider').length) {
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

    if (($(window).width() <= 1024) && ($('#popular_search').length)) {
        $('#popular_search .box_tab #tab_court .box_items').slick({
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
        $('#popular_search .box_tab #tab_lession .box_items').slick({
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

    if ($('#lession').length) {
        $('#lession .content').slick({
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
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 851,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 769,
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

});

//fixed breadcrumbs
$(document).ready(function() {
    "use strict";
    if ($('.breadcrumbs').length) {
        var breadcrumb_pos = $('.breadcrumbs').offset().top;
        var breadcrumb_h = $('.breadcrumbs').outerHeight();
        $(window).bind('load scroll', function() {
            if ($(this).scrollTop() >= (breadcrumb_pos)) {
                $('.breadcrumbs').addClass('fixed');
                $('.breadcrumbs').css({
                    'position': 'fixed',
                });
                $('.breadcrumbs').next().css('margin-top', breadcrumb_h);
            } else {
                $('.breadcrumbs').removeClass('fixed');
                $('.breadcrumbs').css({
                    'position': 'static',
                });
                $('.breadcrumbs').next().css('margin-top', 0);
            }
        });
    }
});


//popup
$(document).ready(function() {
    "use strict";
    $('.popup .btn_close').click(function() {
        $(this).parents('.popup').fadeOut();
    });

    $('#lession .content .post').click(function() {
        $(this).parents('#lession').find('.popup').fadeIn();
    });

    $('#rental_coat .book_info .detail .content ul li').click(function() {
        $(this).parents('#rental_coat').find('.popup').fadeIn();
    });
});


//form request_setting
$(document).ready(function() {
    "use strict";
    $('#header .container_right .btn_letter').click(function() {
        $('#request_setting').fadeIn();
    });
    $('#request_setting .submit').click(function() {
        $(this).parents('#request_setting').fadeOut();
    });
    $('#request_setting .overlay').click(function() {
        $(this).parents('#request_setting').fadeOut();
    });
});

//tab index
$(document).ready(function() {
    "use strict";
    $('#popular_search li').click(function() {
        if ($(this).hasClass('active') === false) {
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');

            var get_tab = $(this).attr('data-tab');
            $('#popular_search .box_tab .tab_content').removeClass('show')
            $('#popular_search .box_tab .tab_content[data-tab-content="' + get_tab + '"]').addClass('show');
        }
    });

});

$(document).ready(function() {
	"use strict";
	setTimeout(function() {
		// $('#popular_search .box_tab #tab_lession');
	}, 500);
});